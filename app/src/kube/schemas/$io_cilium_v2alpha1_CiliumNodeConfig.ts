export const $io_cilium_v2alpha1_CiliumNodeConfig = {
	description: `CiliumNodeConfig is a list of configuration key-value pairs. It is applied to nodes indicated by a label selector. 
 If multiple overrides apply to the same node, they will be ordered by name with later Overrides overwriting any conflicting keys.`,
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
	description: `Spec is the desired Cilium configuration overrides for a given node`,
	properties: {
		defaults: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
	isRequired: true,
},
		nodeSelector: {
	description: `NodeSelector is a label selector that determines to which nodes this configuration applies. If not supplied, then this config applies to no nodes. If empty, then it applies to all nodes.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'string',
	description: `operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.`,
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
},
		matchLabels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
	},
	isRequired: true,
},
	},
	isRequired: true,
},
	},
} as const;