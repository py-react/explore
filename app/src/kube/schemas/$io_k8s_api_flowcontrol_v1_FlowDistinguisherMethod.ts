export const $io_k8s_api_flowcontrol_v1_FlowDistinguisherMethod = {
	description: `FlowDistinguisherMethod specifies the method of a flow distinguisher.`,
	properties: {
		type: {
	type: 'string',
	description: `\`type\` is the type of flow distinguisher method The supported types are "ByUser" and "ByNamespace". Required.`,
	isRequired: true,
},
	},
} as const;