export const $io_k8s_api_authentication_v1_UserInfo = {
	description: `UserInfo holds the information about the user needed to implement the user.Info interface.`,
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
		uid: {
	type: 'string',
	description: `A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.`,
},
		username: {
	type: 'string',
	description: `The name that uniquely identifies this user among all active users.`,
},
	},
} as const;