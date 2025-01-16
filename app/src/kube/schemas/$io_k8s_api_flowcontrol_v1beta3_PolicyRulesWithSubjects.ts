export const $io_k8s_api_flowcontrol_v1beta3_PolicyRulesWithSubjects = {
	description: `PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.`,
	properties: {
		nonResourceRules: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_flowcontrol_v1beta3_NonResourcePolicyRule',
	},
},
		resourceRules: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_flowcontrol_v1beta3_ResourcePolicyRule',
	},
},
		subjects: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_flowcontrol_v1beta3_Subject',
	},
	isRequired: true,
},
	},
} as const;