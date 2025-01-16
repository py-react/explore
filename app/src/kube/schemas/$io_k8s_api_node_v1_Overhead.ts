export const $io_k8s_api_node_v1_Overhead = {
	description: `Overhead structure represents the resource overhead associated with running a pod.`,
	properties: {
		podFixed: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
	},
} as const;