export const $io_k8s_apimachinery_pkg_apis_meta_v1_Status = {
	description: `Status is a return value for calls that don't return other objects.`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources`,
},
		code: {
	type: 'number',
	description: `Suggested HTTP return code for this status, 0 if not set.`,
	format: 'int32',
},
		details: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetails',
	description: `Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type.`,
},
		kind: {
	type: 'string',
	description: `Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		message: {
	type: 'string',
	description: `A human-readable description of the status of this operation.`,
},
		metadata: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta',
	description: `Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		reason: {
	type: 'string',
	description: `A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.`,
},
		status: {
	type: 'string',
	description: `Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status`,
},
	},
} as const;