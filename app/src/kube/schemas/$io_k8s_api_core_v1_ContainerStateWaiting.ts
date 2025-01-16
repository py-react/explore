export const $io_k8s_api_core_v1_ContainerStateWaiting = {
	description: `ContainerStateWaiting is a waiting state of a container.`,
	properties: {
		message: {
	type: 'string',
	description: `Message regarding why the container is not yet running.`,
},
		reason: {
	type: 'string',
	description: `(brief) reason the container is not yet running.`,
},
	},
} as const;