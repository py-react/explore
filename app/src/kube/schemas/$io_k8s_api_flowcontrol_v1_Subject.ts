export const $io_k8s_api_flowcontrol_v1_Subject = {
	description: `Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.`,
	properties: {
		group: {
	type: 'io_k8s_api_flowcontrol_v1_GroupSubject',
	description: `\`group\` matches based on user group name.`,
},
		kind: {
	type: 'string',
	description: `\`kind\` indicates which one of the other fields is non-empty. Required`,
	isRequired: true,
},
		serviceAccount: {
	type: 'io_k8s_api_flowcontrol_v1_ServiceAccountSubject',
	description: `\`serviceAccount\` matches ServiceAccounts.`,
},
		user: {
	type: 'io_k8s_api_flowcontrol_v1_UserSubject',
	description: `\`user\` matches based on username.`,
},
	},
} as const;