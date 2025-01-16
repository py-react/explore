export const $io_k8s_api_core_v1_NodeDaemonEndpoints = {
	description: `NodeDaemonEndpoints lists ports opened by daemons running on the Node.`,
	properties: {
		kubeletEndpoint: {
	type: 'io_k8s_api_core_v1_DaemonEndpoint',
	description: `Endpoint on which Kubelet is listening.`,
},
	},
} as const;