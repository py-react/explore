export const $io_k8s_api_flowcontrol_v1beta3_FlowSchemaSpec = {
	description: `FlowSchemaSpec describes how the FlowSchema's specification looks like.`,
	properties: {
		distinguisherMethod: {
	type: 'io_k8s_api_flowcontrol_v1beta3_FlowDistinguisherMethod',
	description: `\`distinguisherMethod\` defines how to compute the flow distinguisher for requests that match this schema. \`nil\` specifies that the distinguisher is disabled and thus will always be the empty string.`,
},
		matchingPrecedence: {
	type: 'number',
	description: `\`matchingPrecedence\` is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence.  Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default.`,
	format: 'int32',
},
		priorityLevelConfiguration: {
	type: 'io_k8s_api_flowcontrol_v1beta3_PriorityLevelConfigurationReference',
	description: `\`priorityLevelConfiguration\` should reference a PriorityLevelConfiguration in the cluster. If the reference cannot be resolved, the FlowSchema will be ignored and marked as invalid in its status. Required.`,
	isRequired: true,
},
		rules: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_flowcontrol_v1beta3_PolicyRulesWithSubjects',
	},
},
	},
} as const;