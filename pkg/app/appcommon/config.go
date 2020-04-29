package appcommon

import "github.com/SkycoinProject/skywire-mainnet/pkg/routing"

// DefaultServerAddr is a default address to run the app server at.
const DefaultServerAddr = "localhost:5505"

// Config defines configuration parameters for `Proc`.
type Config struct {
	Name        string       `json:"name"`
	ServerAddr  string       `json:"server_addr"` // TODO(evanlinjin): Maybe rename to AppSrvAddr or related.
	VisorPK     string       `json:"visor_pk"`
	RoutingPort routing.Port `json:"routing_port"`
	BinaryDir   string       `json:"binary_dir"`
	WorkDir     string       `json:"work_dir"`
}
