import type { io_k8s_api_flowcontrol_v1beta3_PriorityLevelConfigurationSpec } from './io_k8s_api_flowcontrol_v1beta3_PriorityLevelConfigurationSpec';
import type { io_k8s_api_flowcontrol_v1beta3_PriorityLevelConfigurationStatus } from './io_k8s_api_flowcontrol_v1beta3_PriorityLevelConfigurationStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * PriorityLevelConfiguration represents the configuration of a priority level.
 */
export type io_k8s_api_flowcontrol_v1beta3_PriorityLevelConfiguration = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * `metadata` is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
	/**
	 * `spec` is the specification of the desired behavior of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
	 */
	spec?: io_k8s_api_flowcontrol_v1beta3_PriorityLevelConfigurationSpec;
	/**
	 * `status` is the current status of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
	 */
	status?: io_k8s_api_flowcontrol_v1beta3_PriorityLevelConfigurationStatus;
};

