export const $io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy = {
	description: `ValidatingAdmissionPolicy describes the definition of an admission validation policy that accepts or rejects an object without changing it.`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources`,
},
		kind: {
	type: 'string',
	description: `Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		metadata: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta',
	description: `Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.`,
},
		spec: {
	type: 'io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpec',
	description: `Specification of the desired behavior of the ValidatingAdmissionPolicy.`,
},
		status: {
	type: 'io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus',
	description: `The status of the ValidatingAdmissionPolicy, including warnings that are useful to determine if the policy behaves in the expected way. Populated by the system. Read-only.`,
},
	},
} as const;