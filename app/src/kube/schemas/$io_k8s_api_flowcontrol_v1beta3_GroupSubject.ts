export const $io_k8s_api_flowcontrol_v1beta3_GroupSubject = {
	description: `GroupSubject holds detailed information for group-kind subject.`,
	properties: {
		name: {
	type: 'string',
	description: `name is the user group that matches, or "*" to match all user groups. See https://github.com/kubernetes/apiserver/blob/master/pkg/authentication/user/user.go for some well-known group names. Required.`,
	isRequired: true,
},
	},
} as const;