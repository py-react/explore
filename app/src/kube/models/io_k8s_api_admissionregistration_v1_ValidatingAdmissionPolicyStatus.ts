import type { io_k8s_api_admissionregistration_v1_TypeChecking } from './io_k8s_api_admissionregistration_v1_TypeChecking';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_Condition } from './io_k8s_apimachinery_pkg_apis_meta_v1_Condition';

/**
 * ValidatingAdmissionPolicyStatus represents the status of an admission validation policy.
 */
export type io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus = {
	/**
	 * The conditions represent the latest available observations of a policy's current state.
	 */
	conditions?: Array<io_k8s_apimachinery_pkg_apis_meta_v1_Condition>;
	/**
	 * The generation observed by the controller.
	 */
	observedGeneration?: number;
	/**
	 * The results of type checking for each expression. Presence of this field indicates the completion of the type checking.
	 */
	typeChecking?: io_k8s_api_admissionregistration_v1_TypeChecking;
};

