export const $io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingSpec = {
	description: `ValidatingAdmissionPolicyBindingSpec is the specification of the ValidatingAdmissionPolicyBinding.`,
	properties: {
		matchResources: {
	type: 'io_k8s_api_admissionregistration_v1_MatchResources',
	description: `MatchResources declares what resources match this binding and will be validated by it. Note that this is intersected with the policy's matchConstraints, so only requests that are matched by the policy can be selected by this. If this is unset, all resources matched by the policy are validated by this binding When resourceRules is unset, it does not constrain resource matching. If a resource is matched by the other fields of this object, it will be validated. Note that this is differs from ValidatingAdmissionPolicy matchConstraints, where resourceRules are required.`,
},
		paramRef: {
	type: 'io_k8s_api_admissionregistration_v1_ParamRef',
	description: `paramRef specifies the parameter resource used to configure the admission control policy. It should point to a resource of the type specified in ParamKind of the bound ValidatingAdmissionPolicy. If the policy specifies a ParamKind and the resource referred to by ParamRef does not exist, this binding is considered mis-configured and the FailurePolicy of the ValidatingAdmissionPolicy applied. If the policy does not specify a ParamKind then this field is ignored, and the rules are evaluated without a param.`,
},
		policyName: {
	type: 'string',
	description: `PolicyName references a ValidatingAdmissionPolicy name which the ValidatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.`,
},
		validationActions: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
	},
} as const;