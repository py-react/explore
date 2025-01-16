import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
import type { io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSpec } from './io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSpec';
import type { io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus } from './io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus';

/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 */
export type io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService = {
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
	 * Spec contains information for locating and communicating with a server
	 */
	spec?: io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSpec;
	/**
	 * Status contains derived information about an API server
	 */
	status?: io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus;
};

