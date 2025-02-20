

/**
 * ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
 */
export type io_k8s_api_authorization_v1_ResourceAttributes = {
	/**
	 * Group is the API Group of the Resource.  "*" means all.
	 */
	group?: string;
	/**
	 * Name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all.
	 */
	name?: string;
	/**
	 * Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
	 */
	namespace?: string;
	/**
	 * Resource is one of the existing resource types.  "*" means all.
	 */
	resource?: string;
	/**
	 * Subresource is one of the existing resource types.  "" means none.
	 */
	subresource?: string;
	/**
	 * Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all.
	 */
	verb?: string;
	/**
	 * Version is the API Version of the Resource.  "*" means all.
	 */
	version?: string;
};

