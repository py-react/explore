import type { io_k8s_api_admissionregistration_v1_ExpressionWarning } from './io_k8s_api_admissionregistration_v1_ExpressionWarning';

/**
 * TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
 */
export type io_k8s_api_admissionregistration_v1_TypeChecking = {
	/**
	 * The type checking warnings for each expression.
	 */
	expressionWarnings?: Array<io_k8s_api_admissionregistration_v1_ExpressionWarning>;
};

