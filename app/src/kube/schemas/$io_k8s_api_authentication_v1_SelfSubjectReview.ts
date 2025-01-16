export const $io_k8s_api_authentication_v1_SelfSubjectReview = {
	description: `SelfSubjectReview contains the user information that the kube-apiserver has about the user making this request. When using impersonation, users will receive the user info of the user being impersonated.  If impersonation or request header authentication is used, any extra keys will have their case ignored and returned as lowercase.`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources`,
},
		kind: {
	type: 'string',
	description: `Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		metadata: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta',
	description: `Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata`,
},
		status: {
	type: 'io_k8s_api_authentication_v1_SelfSubjectReviewStatus',
	description: `Status is filled in by the server with the user attributes.`,
},
	},
} as const;