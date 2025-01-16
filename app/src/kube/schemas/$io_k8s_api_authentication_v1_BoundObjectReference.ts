export const $io_k8s_api_authentication_v1_BoundObjectReference = {
	description: `BoundObjectReference is a reference to an object that a token is bound to.`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `API version of the referent.`,
},
		kind: {
	type: 'string',
	description: `Kind of the referent. Valid kinds are 'Pod' and 'Secret'.`,
},
		name: {
	type: 'string',
	description: `Name of the referent.`,
},
		uid: {
	type: 'string',
	description: `UID of the referent.`,
},
	},
} as const;