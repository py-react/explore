export const $io_k8s_api_core_v1_ContainerStateTerminated = {
	description: `ContainerStateTerminated is a terminated state of a container.`,
	properties: {
		containerID: {
	type: 'string',
	description: `Container's ID in the format '<type>://<container_id>'`,
},
		exitCode: {
	type: 'number',
	description: `Exit status from the last termination of the container`,
	isRequired: true,
	format: 'int32',
},
		finishedAt: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `Time at which the container last terminated`,
},
		message: {
	type: 'string',
	description: `Message regarding the last termination of the container`,
},
		reason: {
	type: 'string',
	description: `(brief) reason from the last termination of the container`,
},
		signal: {
	type: 'number',
	description: `Signal from the last termination of the container`,
	format: 'int32',
},
		startedAt: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `Time at which previous execution of the container started`,
},
	},
} as const;