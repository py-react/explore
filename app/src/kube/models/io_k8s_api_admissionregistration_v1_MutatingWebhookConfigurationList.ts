import type { io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration } from './io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';

/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 */
export type io_k8s_api_admissionregistration_v1_MutatingWebhookConfigurationList = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * List of MutatingWebhookConfiguration.
	 */
	items: Array<io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration>;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
};

