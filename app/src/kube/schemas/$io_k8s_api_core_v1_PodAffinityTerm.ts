export const $io_k8s_api_core_v1_PodAffinityTerm = {
	description: `Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running`,
	properties: {
		labelSelector: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector',
	description: `A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.`,
},
		matchLabelKeys: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		mismatchLabelKeys: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		namespaceSelector: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector',
	description: `A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.`,
},
		namespaces: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		topologyKey: {
	type: 'string',
	description: `This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.`,
	isRequired: true,
},
	},
} as const;