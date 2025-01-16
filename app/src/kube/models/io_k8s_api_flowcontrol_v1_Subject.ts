import type { io_k8s_api_flowcontrol_v1_GroupSubject } from './io_k8s_api_flowcontrol_v1_GroupSubject';
import type { io_k8s_api_flowcontrol_v1_ServiceAccountSubject } from './io_k8s_api_flowcontrol_v1_ServiceAccountSubject';
import type { io_k8s_api_flowcontrol_v1_UserSubject } from './io_k8s_api_flowcontrol_v1_UserSubject';

/**
 * Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
 */
export type io_k8s_api_flowcontrol_v1_Subject = {
	/**
	 * `group` matches based on user group name.
	 */
	group?: io_k8s_api_flowcontrol_v1_GroupSubject;
	/**
	 * `kind` indicates which one of the other fields is non-empty. Required
	 */
	kind: string;
	/**
	 * `serviceAccount` matches ServiceAccounts.
	 */
	serviceAccount?: io_k8s_api_flowcontrol_v1_ServiceAccountSubject;
	/**
	 * `user` matches based on username.
	 */
	user?: io_k8s_api_flowcontrol_v1_UserSubject;
};

