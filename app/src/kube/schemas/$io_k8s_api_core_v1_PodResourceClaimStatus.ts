export const $io_k8s_api_core_v1_PodResourceClaimStatus = {
	description: `PodResourceClaimStatus is stored in the PodStatus for each PodResourceClaim which references a ResourceClaimTemplate. It stores the generated name for the corresponding ResourceClaim.`,
	properties: {
		name: {
	type: 'string',
	description: `Name uniquely identifies this resource claim inside the pod. This must match the name of an entry in pod.spec.resourceClaims, which implies that the string must be a DNS_LABEL.`,
	isRequired: true,
},
		resourceClaimName: {
	type: 'string',
	description: `ResourceClaimName is the name of the ResourceClaim that was generated for the Pod in the namespace of the Pod. It this is unset, then generating a ResourceClaim was not necessary. The pod.spec.resourceClaims entry can be ignored in this case.`,
},
	},
} as const;