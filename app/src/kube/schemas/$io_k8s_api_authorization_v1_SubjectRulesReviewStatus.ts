export const $io_k8s_api_authorization_v1_SubjectRulesReviewStatus = {
	description: `SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.`,
	properties: {
		evaluationError: {
	type: 'string',
	description: `EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete.`,
},
		incomplete: {
	type: 'boolean',
	description: `Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation.`,
	isRequired: true,
},
		nonResourceRules: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_authorization_v1_NonResourceRule',
	},
	isRequired: true,
},
		resourceRules: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_authorization_v1_ResourceRule',
	},
	isRequired: true,
},
	},
} as const;