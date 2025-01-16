import type { io_k8s_api_flowcontrol_v1beta3_NonResourcePolicyRule } from './io_k8s_api_flowcontrol_v1beta3_NonResourcePolicyRule';
import type { io_k8s_api_flowcontrol_v1beta3_ResourcePolicyRule } from './io_k8s_api_flowcontrol_v1beta3_ResourcePolicyRule';
import type { io_k8s_api_flowcontrol_v1beta3_Subject } from './io_k8s_api_flowcontrol_v1beta3_Subject';

/**
 * PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.
 */
export type io_k8s_api_flowcontrol_v1beta3_PolicyRulesWithSubjects = {
	/**
	 * `nonResourceRules` is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL.
	 */
	nonResourceRules?: Array<io_k8s_api_flowcontrol_v1beta3_NonResourcePolicyRule>;
	/**
	 * `resourceRules` is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty.
	 */
	resourceRules?: Array<io_k8s_api_flowcontrol_v1beta3_ResourcePolicyRule>;
	/**
	 * subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.
	 */
	subjects: Array<io_k8s_api_flowcontrol_v1beta3_Subject>;
};

