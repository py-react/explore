

/**
 * Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
 */
export type io_k8s_apimachinery_pkg_apis_meta_v1_Preconditions = {
	/**
	 * Specifies the target ResourceVersion
	 */
	resourceVersion?: string;
	/**
	 * Specifies the target UID.
	 */
	uid?: string;
};

