(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{amrp:function(e){e.exports=JSON.parse('{"common":{"save":"Save","edit":"Edit","cancel":"Cancel","node-key":"Node Key","app-key":"App Key","discovery":"Discovery","downloaded":"Downloaded","uploaded":"Uploaded","delete":"Delete","none":"None","loading-error":"There was an error getting the data. Retrying...","operation-error":"There was an error trying to complete the operation.","no-connection-error":"There is no internet connection or connection to the Hypervisor.","refreshed":"Data refreshed.","options":"Options","logout":"Logout","logout-error":"Error logging out."},"tables":{"title":"Order by","sorting-title":"Ordered by:","ascending-order":"(ascending)","descending-order":"(descending)"},"inputs":{"errors":{"key-required":"Key is required.","key-length":"Key must be 66 characters long."}},"start":{"title":"Start"},"node":{"title":"Visor details","not-found":"Visor not found.","statuses":{"online":"Online","online-tooltip":"Visor is online","offline":"Offline","offline-tooltip":"Visor is offline"},"details":{"node-info":{"title":"Visor Info","label":"Label:","public-key":"Public key:","port":"Port:","node-version":"Node version:","app-protocol-version":"App protocol version:","time":{"title":"Time online:","seconds":"a few seconds","minute":"1 minute","minutes":"{{ time }} minutes","hour":"1 hour","hours":"{{ time }} hours","day":"1 day","days":"{{ time }} days","week":"1 week","weeks":"{{ time }} weeks"}},"node-health":{"title":"Health info","status":"Status:","transport-discovery":"Transport discovery:","route-finder":"Route finder:","setup-node":"Setup node:","element-offline":"offline"},"node-traffic-data":"Traffic data"},"tabs":{"info":"Info","apps":"Apps","routing":"Routing"},"error-load":"An error occurred while refreshing visor data."},"nodes":{"title":"Visor list","state":"State","label":"Label","key":"Key","view-node":"View visor","delete-node":"Remove visor","error-load":"An error occurred while refreshing visors.","empty":"There aren\'t any visors connected to this hypervisor.","delete-node-confirmation":"Are you sure you want to remove the visor from the list?","deleted":"Visor removed."},"edit-label":{"title":"Edit label","label":"Label","done":"Label saved.","default-label-warning":"The default label has been used."},"settings":{"title":"Settings","password":{"initial-config-help":"Use this option for setting the initial password. After a password has been set, it is not possible to use this option to modify it.","help":"Options for changing your password.","old-password":"Old password","new-password":"New password","repeat-password":"Repeat password","password-changed":"Password changed.","error-changing":"Error changing password.","initial-config":{"title":"Set initial password","password":"Password","repeat-password":"Repeat password","set-password":"Set password","done":"Password set. Please use it to access the system.","error":"Error. Please make sure you have not already set the password."},"errors":{"bad-old-password":"The provided old password is not correct.","old-password-required":"Old password is required.","new-password-error":"Password must be 6-64 characters long.","passwords-not-match":"Passwords do not match.","default-password":"Don\'t use the default password (1234)."}},"change-password":"Change password","refresh-rate":"Refresh rate","refresh-rate-help":"Time the system waits to update the data automatically.","refresh-rate-confirmation":"Refresh rate changed.","seconds":"seconds"},"login":{"password":"Password","incorrect-password":"Incorrect password.","initial-config":"Configure initial launch"},"actions":{"menu":{"terminal":"Terminal","config":"Configuration","update":"Update","reboot":"Reboot"},"reboot":{"confirmation":"Are you sure you want to reboot the visor?","done":"The visor is restarting."},"config":{"title":"Discovery configuration","header":"Discovery address","remove":"Remove address","add":"Add address","cant-store":"Unable to store node configuration.","success":"Applying discovery configuration by restarting node process."},"terminal-options":{"full":"Full terminal","simple":"Simple terminal"},"terminal":{"title":"Terminal","input-start":"Skywire terminal for {{address}}","error":"Unexpected error while trying to execute the command."},"update":{"title":"Update","processing":"Looking for updates...","processing-button":"Please wait","no-update":"Currently, there is no update for the visor. The currently installed version is {{ version }}.","update-available":"There is an update available for the visor. Click the \'Install update\' button to continue. The currently installed version is {{ currentVersion }} and the new version is {{ newVersion }}.","done":"The visor is being updated.","update-error":"Could not install the update. Please, try again later.","install":"Install update"}},"apps":{"socksc":{"title":"Connect to Node","connect-keypair":"Enter keypair","connect-search":"Search node","connect-history":"History","versions":"Versions","location":"Location","connect":"Connect","next-page":"Next page","prev-page":"Previous page","auto-startup":"Automatically connect to Node"},"sshc":{"title":"SSH Client","connect":"Connect to SSH Server","auto-startup":"Automatically start SSH client","connect-keypair":"Enter keypair","connect-history":"History"},"sshs":{"title":"SSH Server","whitelist":{"title":"SSH Server Whitelist","header":"Key","add":"Add to list","remove":"Remove key","enter-key":"Enter node key","errors":{"cant-save":"Could not save whitelist changes."},"saved-correctly":"Whitelist changes saved successfully."},"auto-startup":"Automatically start SSH server"},"log":{"title":"Log","empty":"There are no log messages for the selected time range.","filter-button":"Only showing logs generated since:","filter":{"title":"Filter","filter":"Only show logs generated since","7-days":"The last 7 days","1-month":"The last 30 days","3-months":"The last 3 months","6-months":"The last 6 months","1-year":"The last year","all":"Show all"}},"config":{"title":"Startup configuration"},"menu":{"startup-config":"Startup configuration","log":"Log messages","whitelist":"Whitelist"},"apps-list":{"title":"Applications","list-title":"Application list","app-name":"Name","port":"Port","status":"Status","auto-start":"Auto start","empty":"Visor doesn\'t have any applications.","disable-autostart":"Disable autostart","enable-autostart":"Enable autostart","autostart-disabled":"Autostart disabled","autostart-enabled":"Autostart enabled"},"stop-app":"Stop","start-app":"Start","view-logs":"View logs","error":"An error has occured and it was not possible to perform the operation.","stop-confirmation":"Are you sure you want to stop the app?","stop-selected-confirmation":"Are you sure you want to stop the selected apps?","disable-autostart-confirmation":"Are you sure you want to disable autostart for the app?","enable-autostart-confirmation":"Are you sure you want to enable autostart for the app?","disable-autostart-selected-confirmation":"Are you sure you want to disable autostart for the selected apps?","enable-autostart-selected-confirmation":"Are you sure you want to enable autostart for the selected apps?","operation-completed":"Operation completed.","status-running":"Running","status-stopped":"Stopped","status-failed":"Failed","status-running-tooltip":"App is currently running","status-stopped-tooltip":"App is currently stopped","status-failed-tooltip":"Something went wrong. Check the app\'s messages for more information"},"transports":{"title":"Transports","list-title":"Transport list","id":"ID","remote-node":"Remote","type":"Type","create":"Create transport","delete-confirmation":"Are you sure you want to delete the transport?","delete-selected-confirmation":"Are you sure you want to delete the selected transports?","delete":"Delete transport","deleted":"Delete operation completed.","error-deleting":"It was not possible to complete the delete operation.","empty":"Visor doesn\'t have any transports.","details":{"title":"Details","basic":{"title":"Basic info","id":"ID:","local-pk":"Local public key:","remote-pk":"Remote public key:","type":"Type:"},"data":{"title":"Data transmission","uploaded":"Uploaded data:","downloaded":"Downloaded data:"}},"dialog":{"remote-key":"Remote public key","transport-type":"Transport type","success":"Transport created.","errors":{"remote-key-length-error":"The remote public key must be 66 characters long.","remote-key-chars-error":"The remote public key must only contain hexadecimal characters.","transport-type-error":"The transport type is required."}}},"routes":{"title":"Routes","list-title":"Route list","key":"Key","rule":"Rule","delete-confirmation":"Are you sure you want to delete the route?","delete-selected-confirmation":"Are you sure you want to delete the selected routes?","delete":"Delete route","deleted":"Delete operation completed.","error-deleting":"It was not possible to complete the delete operation.","empty":"Visor doesn\'t have any routes.","details":{"title":"Details","basic":{"title":"Basic info","key":"Key:","rule":"Rule:"},"summary":{"title":"Rule summary","keep-alive":"Keep alive:","type":"Rule type:","key-route-id":"Key route ID:"},"specific-fields-titles":{"app":"App fields","forward":"Forward fields","intermediary-forward":"Intermediary forward fields"},"specific-fields":{"route-id":"Next route ID:","transport-id":"Next transport ID:","destination-pk":"Destination public key:","source-pk":"Source public key:","destination-port":"Destination port:","source-port":"Source port:"}}},"copy":{"tooltip":"Click to copy","tooltip-with-text":"{{ text }} (Click to copy)","copied":"Copied!"},"selection":{"select-all":"Select all","unselect-all":"Unselect all","delete-all":"Delete all selected elements","start-all":"Start all selected apps","stop-all":"Stop all selected apps","enable-autostart-all":"Enable autostart for all selected apps","disable-autostart-all":"Disable autostart for all selected apps"},"refresh-button":{"seconds":"Updated a few seconds ago","minute":"Updated 1 minute ago","minutes":"Updated {{ time }} minutes ago","hour":"Updated 1 hour ago","hours":"Updated {{ time }} hours ago","day":"Updated 1 day ago","days":"Updated {{ time }} days ago","week":"Updated 1 week ago","weeks":"Updated {{ time }} weeks ago","error-tooltip":"There was an error updating the data. Retrying automatically every {{ time }} seconds..."},"view-all-link":{"label":"View all {{ number }} elements"},"paginator":{"first":"First","last":"Last","total":"Total: {{ number }} pages","select-page-title":"Select page"},"confirmation":{"header-text":"Confirmation","confirm-button":"Yes","cancel-button":"No","close":"Close","error-header-text":"Error"},"language":{"title":"Select language"},"tabs-window":{"title":"Change tab"}}')}}]);