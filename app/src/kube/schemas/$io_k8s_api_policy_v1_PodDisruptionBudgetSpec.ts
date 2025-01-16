export const $io_k8s_api_policy_v1_PodDisruptionBudgetSpec = {
	description: `PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.`,
	properties: {
		maxUnavailable: {
	type: 'io_k8s_apimachinery_pkg_util_intstr_IntOrString',
	description: `An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".`,
},
		minAvailable: {
	type: 'io_k8s_apimachinery_pkg_util_intstr_IntOrString',
	description: `An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".`,
},
		selector: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector',
	description: `Label query over pods whose evictions are managed by the disruption budget. A null selector will match no pods, while an empty ({}) selector will select all pods within the namespace.`,
},
		unhealthyPodEvictionPolicy: {
	type: 'Enum',
},
	},
} as const;