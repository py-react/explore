

/**
 * NonResourceRule holds information that describes a rule for the non-resource
 */
export type io_k8s_api_authorization_v1_NonResourceRule = {
	/**
	 * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  "*" means all.
	 */
	nonResourceURLs?: Array<string>;
	/**
	 * Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "*" means all.
	 */
	verbs: Array<string>;
};

