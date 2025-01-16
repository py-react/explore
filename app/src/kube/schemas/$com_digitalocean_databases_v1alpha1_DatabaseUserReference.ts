export const $com_digitalocean_databases_v1alpha1_DatabaseUserReference = {
	description: `DatabaseUserReference is the Schema for the databaseuserreferences API`,
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
	description: `DatabaseUserReferenceSpec defines the desired state of DatabaseUserReference`,
	properties: {
		databaseCluster: {
	description: `Cluster is a reference to the DatabaseCluster or DatabaseClusterReference that represents the database cluster in which the user exists.`,
	properties: {
		apiGroup: {
	type: 'string',
	description: `APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.`,
},
		kind: {
	type: 'string',
	description: `Kind is the type of resource being referenced`,
	isRequired: true,
},
		name: {
	type: 'string',
	description: `Name is the name of resource being referenced`,
	isRequired: true,
},
	},
	isRequired: true,
},
		username: {
	type: 'string',
	description: `Username is the username of the referenced user.`,
	isRequired: true,
},
	},
},
		status: {
	description: `DatabaseUserReferenceStatus defines the observed state of DatabaseUserReference`,
	properties: {
		clusterUUID: {
	type: 'string',
	description: `ClusterUUID is the UUID of the cluster this user is in. We keep this in the status so that we can reference the user even if the referenced Cluster CR is deleted.`,
},
		role: {
	type: 'string',
	description: `Role is the user's role.`,
},
	},
},
	},
} as const;