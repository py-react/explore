import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * DatabaseUser is the Schema for the databaseusers API
 */
export type com_digitalocean_databases_v1alpha1_DatabaseUser = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
	/**
	 * DatabaseUserSpec defines the desired state of DatabaseUser
	 */
	spec?: {
/**
 * Cluster is a reference to the DatabaseCluster or DatabaseClusterReference that represents the database cluster in which the user will be created.
 */
databaseCluster: {
/**
 * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
 */
apiGroup?: string;
/**
 * Kind is the type of resource being referenced
 */
kind: string;
/**
 * Name is the name of resource being referenced
 */
name: string;
};
/**
 * Username is the username for the user.
 */
username: string;
};
	/**
	 * DatabaseUserStatus defines the observed state of DatabaseUser
	 */
	status?: {
/**
 * ClusterUUID is the UUID of the cluster this user is in. We keep this in the status so that we can manage the user even if the referenced Cluster CR is deleted.
 */
clusterUUID?: string;
/**
 * Role is the user's role.
 */
role?: string;
};
};

