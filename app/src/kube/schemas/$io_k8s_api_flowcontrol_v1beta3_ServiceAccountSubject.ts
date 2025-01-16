export const $io_k8s_api_flowcontrol_v1beta3_ServiceAccountSubject = {
	description: `ServiceAccountSubject holds detailed information for service-account-kind subject.`,
	properties: {
		name: {
	type: 'string',
	description: `\`name\` is the name of matching ServiceAccount objects, or "*" to match regardless of name. Required.`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `\`namespace\` is the namespace of matching ServiceAccount objects. Required.`,
	isRequired: true,
},
	},
} as const;