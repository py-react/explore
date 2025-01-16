export const $io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetails = {
	description: `StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.`,
	properties: {
		causes: {
	type: 'array',
	contains: {
		type: 'io_k8s_apimachinery_pkg_apis_meta_v1_StatusCause',
	},
},
		group: {
	type: 'string',
	description: `The group attribute of the resource associated with the status StatusReason.`,
},
		kind: {
	type: 'string',
	description: `The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		name: {
	type: 'string',
	description: `The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).`,
},
		retryAfterSeconds: {
	type: 'number',
	description: `If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.`,
	format: 'int32',
},
		uid: {
	type: 'string',
	description: `UID of the resource. (when there is a single resource which can be described). More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids`,
},
	},
} as const;