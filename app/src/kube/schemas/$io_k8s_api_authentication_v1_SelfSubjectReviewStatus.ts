export const $io_k8s_api_authentication_v1_SelfSubjectReviewStatus = {
	description: `SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user.`,
	properties: {
		userInfo: {
	type: 'io_k8s_api_authentication_v1_UserInfo',
	description: `User attributes of the user making this request.`,
},
	},
} as const;