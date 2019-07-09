# commit a70894c8c4223424151cdff7441b1fb2e6bad309
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/app  -run TestAppDial >> ./logs/pkg/TestAppDial.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/app  -run TestAppAccept >> ./logs/pkg/TestAppAccept.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/app  -run TestAppWrite >> ./logs/pkg/TestAppWrite.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/app  -run TestAppRead >> ./logs/pkg/TestAppRead.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/app  -run TestAppSetup >> ./logs/pkg/TestAppSetup.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/app  -run TestAppCloseConn >> ./logs/pkg/TestAppCloseConn.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/app  -run TestAppClose >> ./logs/pkg/TestAppClose.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/app  -run TestAppCommand >> ./logs/pkg/TestAppCommand.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/app  -run TestPipeConn >> ./logs/pkg/TestPipeConn.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/app  -run TestProtocol >> ./logs/pkg/TestProtocol.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/app  -run TestProtocolParallel >> ./logs/pkg/TestProtocolParallel.log
 
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/hypervisor -run TestNewNode >> ./logs/pkg/TestNewNode.log

go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/node	 -run TestMessagingDiscovery >> ./logs/pkg/TestMessagingDiscovery.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/node	 -run TestTransportDiscovery >> ./logs/pkg/TestTransportDiscovery.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/node	 -run TestTransportLogStore >> ./logs/pkg/TestTransportLogStore.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/node	 -run TestRoutingTable >> ./logs/pkg/TestRoutingTable.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/node	 -run TestAppsConfig >> ./logs/pkg/TestAppsConfig.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/node	 -run TestAppsDir >> ./logs/pkg/TestAppsDir.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/node	 -run TestLocalDir >> ./logs/pkg/TestLocalDir.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/node	 -run TestNewNode >> ./logs/pkg/TestNewNode.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/node	 -run TestNodeStartClose >> ./logs/pkg/TestNodeStartClose.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/node	 -run TestNodeSpawnApp >> ./logs/pkg/TestNodeSpawnApp.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/node	 -run TestNodeSpawnAppValidations >> ./logs/pkg/TestNodeSpawnAppValidations.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/node	 -run TestListApps >> ./logs/pkg/TestListApps.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/node	 -run TestStartStopApp >> ./logs/pkg/TestStartStopApp.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/node	 -run TestRPC >> ./logs/pkg/TestRPC.log

go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestAppManagerInit >> ./logs/pkg/TestAppManagerInit.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestAppManagerSetupLoop >> ./logs/pkg/TestAppManagerSetupLoop.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestAppManagerCloseLoop >> ./logs/pkg/TestAppManagerCloseLoop.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestAppManagerForward >> ./logs/pkg/TestAppManagerForward.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestManagedRoutingTableCleanup >> ./logs/pkg/TestManagedRoutingTableCleanup.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestPortManager >> ./logs/pkg/TestPortManager.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouteManagerGetRule >> ./logs/pkg/TestRouteManagerGetRule.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouteManagerRemoveLoopRule >> ./logs/pkg/TestRouteManagerRemoveLoopRule.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouteManagerAddRemoveRule >> ./logs/pkg/TestRouteManagerAddRemoveRule.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouteManagerDeleteRules >> ./logs/pkg/TestRouteManagerDeleteRules.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouteManagerConfirmLoop >> ./logs/pkg/TestRouteManagerConfirmLoop.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouteManagerLoopClosed >> ./logs/pkg/TestRouteManagerLoopClosed.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouterForwarding >> ./logs/pkg/TestRouterForwarding.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouterAppInit >> ./logs/pkg/TestRouterAppInit.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouterApp >> ./logs/pkg/TestRouterApp.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouterLocalApp >> ./logs/pkg/TestRouterLocalApp.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouterSetup >> ./logs/pkg/TestRouterSetup.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouterSetupLoop >> ./logs/pkg/TestRouterSetupLoop.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouterSetupLoopLocal >> ./logs/pkg/TestRouterSetupLoopLocal.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouterCloseLoop >> ./logs/pkg/TestRouterCloseLoop.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouterCloseLoopOnAppClose >> ./logs/pkg/TestRouterCloseLoopOnAppClose.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouterCloseLoopOnRouterClose >> ./logs/pkg/TestRouterCloseLoopOnRouterClose.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/router -run  TestRouterRouteExpiration >> ./logs/pkg/TestRouterRouteExpiration.log

go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/routing -run TestBoltDBRoutingTable >> ./logs/pkg/TestBoltDBRoutingTable.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/routing -run TestMakePacket >> ./logs/pkg/TestMakePacket.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/routing -run TestRoutingTable >> ./logs/pkg/TestRoutingTable.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/routing -run TestAppRule >> ./logs/pkg/TestAppRule.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/routing -run TestForwardRule >> ./logs/pkg/TestForwardRule.log

go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/setup -run TestNewProtocol >> ./logs/pkg/TestNewProtocol.log

go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport -run TestSettlementHandshake >> ./logs/pkg/TestSettlementHandshake.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport -run TestSettlementHandshakeInvalidSig >> ./logs/pkg/TestSettlementHandshakeInvalidSig.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport -run TestSettlementHandshakePrivate >> ./logs/pkg/TestSettlementHandshakePrivate.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport -run TestSettlementHandshakeExistingTransport >> ./logs/pkg/TestSettlementHandshakeExistingTransport.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport -run TestValidateEntry >> ./logs/pkg/TestValidateEntry.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport -run TestInMemoryTransportLogStore >> ./logs/pkg/TestInMemoryTransportLogStore.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport -run TestFileTransportLogStore >> ./logs/pkg/TestFileTransportLogStore.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport -run TestTransportManager >> ./logs/pkg/TestTransportManager.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport -run TestTransportManagerReEstablishTransports >> ./logs/pkg/TestTransportManagerReEstablishTransports.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport -run TestTransportManagerLogs >> ./logs/pkg/TestTransportManagerLogs.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport -run TestTCPFactory >> ./logs/pkg/TestTCPFactory.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport -run TestFilePKTable >> ./logs/pkg/TestFilePKTable.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport-discovery/client -run TestClientAuth >> ./logs/pkg/TestClientAuth.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport-discovery/client -run TestRegisterTransportResponses >> ./logs/pkg/TestRegisterTransportResponses.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport-discovery/client -run TestRegisterTransports >> ./logs/pkg/TestRegisterTransports.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport-discovery/client -run TestGetTransportByID >> ./logs/pkg/TestGetTransportByID.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport-discovery/client -run TestGetTransportsByEdge >> ./logs/pkg/TestGetTransportsByEdge.log
go clean -testcache &> /dev/null || go test -race -tags no_ci -cover -timeout=5m github.com/skycoin/skywire/pkg/transport-discovery/client -run TestUpdateStatuses >> ./logs/pkg/TestUpdateStatuses.log
