export const $io_k8s_api_networking_v1_NetworkPolicySpec = {
	description: `NetworkPolicySpec provides the specification of a NetworkPolicy`,
	properties: {
		egress: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_networking_v1_NetworkPolicyEgressRule',
	},
},
		ingress: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_networking_v1_NetworkPolicyIngressRule',
	},
},
		podSelector: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector',
	description: `podSelector selects the pods to which this NetworkPolicy object applies. The array of ingress rules is applied to any pods selected by this field. Multiple network policies can select the same set of pods. In this case, the ingress rules for each are combined additively. This field is NOT optional and follows standard label selector semantics. An empty podSelector matches all pods in this namespace.`,
	isRequired: true,
},
		policyTypes: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
	},
} as const;