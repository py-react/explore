export const $io_k8s_api_core_v1_ContainerResizePolicy = {
	description: `ContainerResizePolicy represents resource resize policy for the container.`,
	properties: {
		resourceName: {
	type: 'string',
	description: `Name of the resource to which this resource resize policy applies. Supported values: cpu, memory.`,
	isRequired: true,
},
		restartPolicy: {
	type: 'string',
	description: `Restart policy to apply when specified resource is resized. If not specified, it defaults to NotRequired.`,
	isRequired: true,
},
	},
} as const;