export const $KubernetesContext = {
	properties: {
		name: {
	type: 'string',
	isRequired: true,
},
		namespace: {
	type: 'any-of',
	contains: [{
	type: 'string',
}, {
	type: 'null',
}],
},
	},
} as const;