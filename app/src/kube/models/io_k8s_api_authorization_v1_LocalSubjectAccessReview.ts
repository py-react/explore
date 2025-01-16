import type { io_k8s_api_authorization_v1_SubjectAccessReviewSpec } from './io_k8s_api_authorization_v1_SubjectAccessReviewSpec';
import type { io_k8s_api_authorization_v1_SubjectAccessReviewStatus } from './io_k8s_api_authorization_v1_SubjectAccessReviewStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export type io_k8s_api_authorization_v1_LocalSubjectAccessReview = {
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
	 * Spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted.
	 */
	spec: io_k8s_api_authorization_v1_SubjectAccessReviewSpec;
	/**
	 * Status is filled in by the server and indicates whether the request is allowed or not
	 */
	status?: io_k8s_api_authorization_v1_SubjectAccessReviewStatus;
};

