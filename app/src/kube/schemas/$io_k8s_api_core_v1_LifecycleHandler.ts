export const $io_k8s_api_core_v1_LifecycleHandler = {
	description: `LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.`,
	properties: {
		exec: {
	type: 'io_k8s_api_core_v1_ExecAction',
	description: `Exec specifies the action to take.`,
},
		httpGet: {
	type: 'io_k8s_api_core_v1_HTTPGetAction',
	description: `HTTPGet specifies the http request to perform.`,
},
		sleep: {
	type: 'io_k8s_api_core_v1_SleepAction',
	description: `Sleep represents the duration that the container should sleep before being terminated.`,
},
		tcpSocket: {
	type: 'io_k8s_api_core_v1_TCPSocketAction',
	description: `Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified.`,
},
	},
} as const;