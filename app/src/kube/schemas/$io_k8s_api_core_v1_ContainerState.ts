export const $io_k8s_api_core_v1_ContainerState = {
	description: `ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.`,
	properties: {
		running: {
	type: 'io_k8s_api_core_v1_ContainerStateRunning',
	description: `Details about a running container`,
},
		terminated: {
	type: 'io_k8s_api_core_v1_ContainerStateTerminated',
	description: `Details about a terminated container`,
},
		waiting: {
	type: 'io_k8s_api_core_v1_ContainerStateWaiting',
	description: `Details about a waiting container`,
},
	},
} as const;