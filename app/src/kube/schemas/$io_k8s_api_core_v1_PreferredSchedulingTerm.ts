export const $io_k8s_api_core_v1_PreferredSchedulingTerm = {
	description: `An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).`,
	properties: {
		preference: {
	type: 'io_k8s_api_core_v1_NodeSelectorTerm',
	description: `A node selector term, associated with the corresponding weight.`,
	isRequired: true,
},
		weight: {
	type: 'number',
	description: `Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.`,
	isRequired: true,
	format: 'int32',
},
	},
} as const;