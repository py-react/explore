export const $com_digitalocean_databases_v1alpha1_DatabaseClusterReference = {
	description: `DatabaseClusterReference is the Schema for the databaseclusterreferences API`,
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
	description: `DatabaseClusterReferenceSpec defines the desired state of DatabaseClusterReference`,
	properties: {
		uuid: {
	type: 'string',
	description: `UUID is the UUID of an existing database.`,
	isRequired: true,
},
	},
},
		status: {
	description: `DatabaseClusterReferenceStatus defines the observed state of DatabaseClusterReference`,
	properties: {
		createdAt: {
	type: 'string',
	description: `CreatedAt is the time at which the database cluster was created.`,
	format: 'date-time',
},
		engine: {
	type: 'string',
	description: `Engine is the database engine to use.`,
},
		name: {
	type: 'string',
	description: `Name is the name of the database cluster.`,
},
		numNodes: {
	type: 'number',
	description: `NumNodes is the number of nodes in the database cluster.`,
	format: 'int64',
},
		region: {
	type: 'string',
	description: `Region is the slug of the DO region for the cluster.`,
},
		size: {
	type: 'string',
	description: `Size is the slug of the node size to use.`,
},
		status: {
	type: 'string',
	description: `Status is the status of the database cluster.`,
},
		version: {
	type: 'string',
	description: `Version is the DB version to use.`,
},
	},
},
	},
} as const;