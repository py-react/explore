import type { io_k8s_api_authentication_v1_TokenRequestSpec } from './io_k8s_api_authentication_v1_TokenRequestSpec';
import type { io_k8s_api_authentication_v1_TokenRequestStatus } from './io_k8s_api_authentication_v1_TokenRequestStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * TokenRequest requests a token for a given service account.
 */
export type io_k8s_api_authentication_v1_TokenRequest = {
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
	spec: io_k8s_api_authentication_v1_TokenRequestSpec;
	/**
	 * Status is filled in by the server and indicates whether the token can be authenticated.
	 */
	status?: io_k8s_api_authentication_v1_TokenRequestStatus;
};

