export const $io_k8s_api_rbac_v1_AggregationRule = {
	description: `AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole`,
	properties: {
		clusterRoleSelectors: {
	type: 'array',
	contains: {
		type: 'io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector',
	},
},
	},
} as const;