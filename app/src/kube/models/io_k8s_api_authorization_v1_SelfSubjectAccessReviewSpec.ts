import type { io_k8s_api_authorization_v1_NonResourceAttributes } from './io_k8s_api_authorization_v1_NonResourceAttributes';
import type { io_k8s_api_authorization_v1_ResourceAttributes } from './io_k8s_api_authorization_v1_ResourceAttributes';

/**
 * SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
 */
export type io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec = {
	/**
	 * NonResourceAttributes describes information for a non-resource access request
	 */
	nonResourceAttributes?: io_k8s_api_authorization_v1_NonResourceAttributes;
	/**
	 * ResourceAuthorizationAttributes describes information for a resource access request
	 */
	resourceAttributes?: io_k8s_api_authorization_v1_ResourceAttributes;
};

