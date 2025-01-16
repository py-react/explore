export const $io_k8s_api_authorization_v1_SubjectAccessReviewSpec = {
	description: `SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set`,
	properties: {
		extra: {
	type: 'dictionary',
	contains: {
	type: 'array',
	contains: {
	type: 'string',
},
},
},
		groups: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		nonResourceAttributes: {
	type: 'io_k8s_api_authorization_v1_NonResourceAttributes',
	description: `NonResourceAttributes describes information for a non-resource access request`,
},
		resourceAttributes: {
	type: 'io_k8s_api_authorization_v1_ResourceAttributes',
	description: `ResourceAuthorizationAttributes describes information for a resource access request`,
},
		uid: {
	type: 'string',
	description: `UID information about the requesting user.`,
},
		user: {
	type: 'string',
	description: `User is the user you're testing for. If you specify "User" but not "Groups", then is it interpreted as "What if User were not a member of any groups`,
},
	},
} as const;