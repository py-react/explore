import type { io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpec } from './io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpec';
import type { io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus } from './io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * ValidatingAdmissionPolicy describes the definition of an admission validation policy that accepts or rejects an object without changing it.
 */
export type io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
	/**
	 * Specification of the desired behavior of the ValidatingAdmissionPolicy.
	 */
	spec?: io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpec;
	/**
	 * The status of the ValidatingAdmissionPolicy, including warnings that are useful to determine if the policy behaves in the expected way. Populated by the system. Read-only.
	 */
	status?: io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus;
};

