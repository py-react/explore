export const $io_k8s_api_authorization_v1_SubjectAccessReview = {
	description: `SubjectAccessReview checks whether or not a user or group can perform an action.`,
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
	description: `Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata`,
},
		spec: {
	type: 'io_k8s_api_authorization_v1_SubjectAccessReviewSpec',
	description: `Spec holds information about the request being evaluated`,
	isRequired: true,
},
		status: {
	type: 'io_k8s_api_authorization_v1_SubjectAccessReviewStatus',
	description: `Status is filled in by the server and indicates whether the request is allowed or not`,
},
	},
} as const;