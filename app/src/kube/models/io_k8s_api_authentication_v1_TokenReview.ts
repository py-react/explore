import type { io_k8s_api_authentication_v1_TokenReviewSpec } from './io_k8s_api_authentication_v1_TokenReviewSpec';
import type { io_k8s_api_authentication_v1_TokenReviewStatus } from './io_k8s_api_authentication_v1_TokenReviewStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export type io_k8s_api_authentication_v1_TokenReview = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
	/**
	 * Spec holds information about the request being evaluated
	 */
	spec: io_k8s_api_authentication_v1_TokenReviewSpec;
	/**
	 * Status is filled in by the server and indicates whether the request can be authenticated.
	 */
	status?: io_k8s_api_authentication_v1_TokenReviewStatus;
};

