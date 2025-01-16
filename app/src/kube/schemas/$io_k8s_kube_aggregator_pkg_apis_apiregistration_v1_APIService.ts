export const $io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService = {
	description: `APIService represents a server for a particular GroupVersion. Name must be "version.group".`,
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
		spec: {
	type: 'io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSpec',
	description: `Spec contains information for locating and communicating with a server`,
},
		status: {
	type: 'io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus',
	description: `Status contains derived information about an API server`,
},
	},
} as const;