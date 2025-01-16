export const $io_k8s_api_storage_v1_StorageClass = {
	description: `StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.`,
	properties: {
		allowVolumeExpansion: {
	type: 'boolean',
	description: `allowVolumeExpansion shows whether the storage class allow volume expand.`,
},
		allowedTopologies: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_TopologySelectorTerm',
	},
},
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
		mountOptions: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		parameters: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		provisioner: {
	type: 'string',
	description: `provisioner indicates the type of the provisioner.`,
	isRequired: true,
},
		reclaimPolicy: {
	type: 'Enum',
},
		volumeBindingMode: {
	type: 'Enum',
},
	},
} as const;