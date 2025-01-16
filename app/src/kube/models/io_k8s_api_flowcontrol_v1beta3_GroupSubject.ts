

/**
 * GroupSubject holds detailed information for group-kind subject.
 */
export type io_k8s_api_flowcontrol_v1beta3_GroupSubject = {
	/**
	 * name is the user group that matches, or "*" to match all user groups. See https://github.com/kubernetes/apiserver/blob/master/pkg/authentication/user/user.go for some well-known group names. Required.
	 */
	name: string;
};

