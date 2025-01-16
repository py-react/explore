

/**
 * ServiceAccountSubject holds detailed information for service-account-kind subject.
 */
export type io_k8s_api_flowcontrol_v1beta3_ServiceAccountSubject = {
	/**
	 * `name` is the name of matching ServiceAccount objects, or "*" to match regardless of name. Required.
	 */
	name: string;
	/**
	 * `namespace` is the namespace of matching ServiceAccount objects. Required.
	 */
	namespace: string;
};

