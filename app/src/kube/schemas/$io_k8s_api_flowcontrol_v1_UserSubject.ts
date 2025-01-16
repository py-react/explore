export const $io_k8s_api_flowcontrol_v1_UserSubject = {
	description: `UserSubject holds detailed information for user-kind subject.`,
	properties: {
		name: {
	type: 'string',
	description: `\`name\` is the username that matches, or "*" to match all usernames. Required.`,
	isRequired: true,
},
	},
} as const;