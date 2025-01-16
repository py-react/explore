export const $io_k8s_api_admissionregistration_v1_ParamKind = {
	description: `ParamKind is a tuple of Group Kind and Version.`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `APIVersion is the API group version the resources belong to. In format of "group/version". Required.`,
},
		kind: {
	type: 'string',
	description: `Kind is the API kind the resources belong to. Required.`,
},
	},
} as const;