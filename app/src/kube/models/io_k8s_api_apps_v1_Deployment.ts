import type { io_k8s_api_apps_v1_DeploymentSpec } from './io_k8s_api_apps_v1_DeploymentSpec';
import type { io_k8s_api_apps_v1_DeploymentStatus } from './io_k8s_api_apps_v1_DeploymentStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 */
export type io_k8s_api_apps_v1_Deployment = {
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
	 * Specification of the desired behavior of the Deployment.
	 */
	spec?: io_k8s_api_apps_v1_DeploymentSpec;
	/**
	 * Most recently observed status of the Deployment.
	 */
	status?: io_k8s_api_apps_v1_DeploymentStatus;
};

