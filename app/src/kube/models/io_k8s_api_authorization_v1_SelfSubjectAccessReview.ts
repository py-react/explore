import type { io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec } from './io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec';
import type { io_k8s_api_authorization_v1_SubjectAccessReviewStatus } from './io_k8s_api_authorization_v1_SubjectAccessReviewStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export type io_k8s_api_authorization_v1_SelfSubjectAccessReview = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
	/**
	 * Spec holds information about the request being evaluated.  user and groups must be empty
	 */
	spec: io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec;
	/**
	 * Status is filled in by the server and indicates whether the request is allowed or not
	 */
	status?: io_k8s_api_authorization_v1_SubjectAccessReviewStatus;
};

