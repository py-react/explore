export const $io_k8s_api_flowcontrol_v1beta3_NonResourcePolicyRule = {
	description: `NonResourcePolicyRule is a predicate that matches non-resource requests according to their verb and the target non-resource URL. A NonResourcePolicyRule matches a request if and only if both (a) at least one member of verbs matches the request and (b) at least one member of nonResourceURLs matches the request.`,
	properties: {
		nonResourceURLs: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
		verbs: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
	},
} as const;