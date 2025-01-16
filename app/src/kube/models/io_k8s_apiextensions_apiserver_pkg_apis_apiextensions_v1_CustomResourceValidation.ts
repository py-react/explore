import type { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaProps } from './io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaProps';

/**
 * CustomResourceValidation is a list of validation methods for CustomResources.
 */
export type io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceValidation = {
	/**
	 * openAPIV3Schema is the OpenAPI v3 schema to use for validation and pruning.
	 */
	openAPIV3Schema?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_JSONSchemaProps;
};

