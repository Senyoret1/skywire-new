package com.skywire.skycoin.vpn;

import android.os.ParcelFileDescriptor;

import com.skywire.skycoin.vpn.helpers.HelperFunctions;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.nio.ByteBuffer;
import java.nio.channels.DatagramChannel;

import io.reactivex.rxjava3.core.Observable;
import io.reactivex.rxjava3.core.ObservableOnSubscribe;

public class VPNDataManager {
    private FileOutputStream out;
    private DatagramChannel tunnel;

    static public Observable<Integer> createObservable(ParcelFileDescriptor vpnInterface, DatagramChannel tunnel, boolean forSending) {
        return Observable.create((ObservableOnSubscribe<Integer>) emitter -> {
            // Packets to be sent are queued in this input stream.
            FileInputStream inStream = null;
            // Packets received need to be written to this output stream.
            FileOutputStream outStream = null;
            if (forSending) {
                inStream = new FileInputStream(vpnInterface.getFileDescriptor());
            } else {
                outStream = new FileOutputStream(vpnInterface.getFileDescriptor());
            }
            final FileInputStream in = inStream;
            final FileOutputStream out = outStream;

            ByteBuffer packet = ByteBuffer.allocate(Short.MAX_VALUE);

            try {
                while (!emitter.isDisposed()) {
                    if (forSending) {
                        // Read the outgoing packet from the input stream.
                        int length = in.read(packet.array());
                        if (length > 0) {
                            // Write the outgoing packet to the tunnel.
                            packet.limit(length);
                            tunnel.write(packet);
                            packet.clear();
                        }
                    }

                    if (!forSending) {
                        int length = tunnel.read(packet);
                        if (length > 0) {
                            // Ignore control messages, which start with zero.
                            if (packet.get(0) != 0) {
                                // Write the incoming packet to the output stream.
                                out.write(packet.array(), 0, length);
                            }
                            packet.clear();
                        }
                    }
                }
            } catch (Exception e) {
                if (!emitter.isDisposed()) {
                    emitter.onError(e);
                    return;
                }
            }

            emitter.onComplete();
        });
    }
}
