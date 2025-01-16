import type { io_k8s_api_authentication_v1_UserInfo } from './io_k8s_api_authentication_v1_UserInfo';

/**
 * SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user.
 */
export type io_k8s_api_authentication_v1_SelfSubjectReviewStatus = {
	/**
	 * User attributes of the user making this request.
	 */
	userInfo?: io_k8s_api_authentication_v1_UserInfo;
};

