export const $io_k8s_api_core_v1_Toleration = {
	description: `The pod this Toleration is attached to tolerates any taint that matches the triple <key,value,effect> using the matching operator <operator>.`,
	properties: {
		effect: {
	type: 'Enum',
},
		key: {
	type: 'string',
	description: `Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.`,
},
		operator: {
	type: 'Enum',
},
		tolerationSeconds: {
	type: 'number',
	description: `TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.`,
	format: 'int64',
},
		value: {
	type: 'string',
	description: `Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.`,
},
	},
} as const;