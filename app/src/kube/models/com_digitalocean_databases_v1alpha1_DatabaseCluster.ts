import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * DatabaseCluster is the Schema for the databaseclusters API
 */
export type com_digitalocean_databases_v1alpha1_DatabaseCluster = {
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
	 * DatabaseClusterSpec defines the desired state of DatabaseCluster
	 */
	spec?: {
/**
 * Engine is the database engine to use.
 */
engine: string;
/**
 * Name is the name of the database cluster.
 */
name: string;
/**
 * NumNodes is the number of nodes in the database cluster.
 */
numNodes: number;
/**
 * Region is the slug of the DO region for the cluster.
 */
region: string;
/**
 * Size is the slug of the node size to use.
 */
size: string;
/**
 * Version is the DB version to use.
 */
version: string;
};
	/**
	 * DatabaseClusterStatus defines the observed state of DatabaseCluster
	 */
	status?: {
/**
 * CreatedAt is the time at which the database cluster was created.
 */
createdAt?: string;
/**
 * Status is the status of the database cluster.
 */
status?: string;
/**
 * UUID is the UUID of the database cluster.
 */
uuid?: string;
};
};

