export const $io_k8s_api_policy_v1_PodDisruptionBudget = {
	description: `PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods`,
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
	description: `Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata`,
},
		spec: {
	type: 'io_k8s_api_policy_v1_PodDisruptionBudgetSpec',
	description: `Specification of the desired behavior of the PodDisruptionBudget.`,
},
		status: {
	type: 'io_k8s_api_policy_v1_PodDisruptionBudgetStatus',
	description: `Most recently observed status of the PodDisruptionBudget.`,
},
	},
} as const;