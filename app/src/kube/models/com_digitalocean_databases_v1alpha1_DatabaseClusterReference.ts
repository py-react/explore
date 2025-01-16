import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * DatabaseClusterReference is the Schema for the databaseclusterreferences API
 */
export type com_digitalocean_databases_v1alpha1_DatabaseClusterReference = {
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
	 * DatabaseClusterReferenceSpec defines the desired state of DatabaseClusterReference
	 */
	spec?: {
/**
 * UUID is the UUID of an existing database.
 */
uuid: string;
};
	/**
	 * DatabaseClusterReferenceStatus defines the observed state of DatabaseClusterReference
	 */
	status?: {
/**
 * CreatedAt is the time at which the database cluster was created.
 */
createdAt?: string;
/**
 * Engine is the database engine to use.
 */
engine?: string;
/**
 * Name is the name of the database cluster.
 */
name?: string;
/**
 * NumNodes is the number of nodes in the database cluster.
 */
numNodes?: number;
/**
 * Region is the slug of the DO region for the cluster.
 */
region?: string;
/**
 * Size is the slug of the node size to use.
 */
size?: string;
/**
 * Status is the status of the database cluster.
 */
status?: string;
/**
 * Version is the DB version to use.
 */
version?: string;
};
};

