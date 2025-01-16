export const $io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpec = {
	description: `ValidatingAdmissionPolicySpec is the specification of the desired behavior of the AdmissionPolicy.`,
	properties: {
		auditAnnotations: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_admissionregistration_v1_AuditAnnotation',
	},
},
		failurePolicy: {
	type: 'Enum',
},
		matchConditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_admissionregistration_v1_MatchCondition',
	},
},
		matchConstraints: {
	type: 'io_k8s_api_admissionregistration_v1_MatchResources',
	description: `MatchConstraints specifies what resources this policy is designed to validate. The AdmissionPolicy cares about a request if it matches _all_ Constraints. However, in order to prevent clusters from being put into an unstable state that cannot be recovered from via the API ValidatingAdmissionPolicy cannot match ValidatingAdmissionPolicy and ValidatingAdmissionPolicyBinding. Required.`,
},
		paramKind: {
	type: 'io_k8s_api_admissionregistration_v1_ParamKind',
	description: `ParamKind specifies the kind of resources used to parameterize this policy. If absent, there are no parameters for this policy and the param CEL variable will not be provided to validation expressions. If ParamKind refers to a non-existent kind, this policy definition is mis-configured and the FailurePolicy is applied. If paramKind is specified but paramRef is unset in ValidatingAdmissionPolicyBinding, the params variable will be null.`,
},
		validations: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_admissionregistration_v1_Validation',
	},
},
		variables: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_admissionregistration_v1_Variable',
	},
},
	},
} as const;