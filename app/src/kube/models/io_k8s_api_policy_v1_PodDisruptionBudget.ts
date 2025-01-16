import type { io_k8s_api_policy_v1_PodDisruptionBudgetSpec } from './io_k8s_api_policy_v1_PodDisruptionBudgetSpec';
import type { io_k8s_api_policy_v1_PodDisruptionBudgetStatus } from './io_k8s_api_policy_v1_PodDisruptionBudgetStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 */
export type io_k8s_api_policy_v1_PodDisruptionBudget = {
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
	 * Specification of the desired behavior of the PodDisruptionBudget.
	 */
	spec?: io_k8s_api_policy_v1_PodDisruptionBudgetSpec;
	/**
	 * Most recently observed status of the PodDisruptionBudget.
	 */
	status?: io_k8s_api_policy_v1_PodDisruptionBudgetStatus;
};

