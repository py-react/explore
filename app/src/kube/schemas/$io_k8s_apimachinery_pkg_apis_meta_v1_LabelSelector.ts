export const $io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector = {
	description: `A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
		type: 'io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorRequirement',
	},
},
		matchLabels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
	},
} as const;