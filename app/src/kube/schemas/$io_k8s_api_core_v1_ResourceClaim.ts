export const $io_k8s_api_core_v1_ResourceClaim = {
	description: `ResourceClaim references one entry in PodSpec.ResourceClaims.`,
	properties: {
		name: {
	type: 'string',
	description: `Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.`,
	isRequired: true,
},
	},
} as const;