import type { io_k8s_api_flowcontrol_v1beta3_PriorityLevelConfiguration } from './io_k8s_api_flowcontrol_v1beta3_PriorityLevelConfiguration';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';

/**
 * PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects.
 */
export type io_k8s_api_flowcontrol_v1beta3_PriorityLevelConfigurationList = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * `items` is a list of request-priorities.
	 */
	items: Array<io_k8s_api_flowcontrol_v1beta3_PriorityLevelConfiguration>;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * `metadata` is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
};

