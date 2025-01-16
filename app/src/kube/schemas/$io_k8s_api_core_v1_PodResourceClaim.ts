export const $io_k8s_api_core_v1_PodResourceClaim = {
	description: `PodResourceClaim references exactly one ResourceClaim through a ClaimSource. It adds a name to it that uniquely identifies the ResourceClaim inside the Pod. Containers that need access to the ResourceClaim reference it with this name.`,
	properties: {
		name: {
	type: 'string',
	description: `Name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL.`,
	isRequired: true,
},
		source: {
	type: 'io_k8s_api_core_v1_ClaimSource',
	description: `Source describes where to find the ResourceClaim.`,
},
	},
} as const;