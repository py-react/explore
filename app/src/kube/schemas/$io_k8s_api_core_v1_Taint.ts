export const $io_k8s_api_core_v1_Taint = {
	description: `The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.`,
	properties: {
		effect: {
	type: 'Enum',
	isRequired: true,
},
		key: {
	type: 'string',
	description: `Required. The taint key to be applied to a node.`,
	isRequired: true,
},
		timeAdded: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.`,
},
		value: {
	type: 'string',
	description: `The taint value corresponding to the taint key.`,
},
	},
} as const;