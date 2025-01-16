

/**
 * ClientIPConfig represents the configurations of Client IP based session affinity.
 */
export type io_k8s_api_core_v1_ClientIPConfig = {
	/**
	 * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
	 */
	timeoutSeconds?: number;
};

