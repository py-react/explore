export const $io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec = {
	description: `SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set`,
	properties: {
		nonResourceAttributes: {
	type: 'io_k8s_api_authorization_v1_NonResourceAttributes',
	description: `NonResourceAttributes describes information for a non-resource access request`,
},
		resourceAttributes: {
	type: 'io_k8s_api_authorization_v1_ResourceAttributes',
	description: `ResourceAuthorizationAttributes describes information for a resource access request`,
},
	},
} as const;