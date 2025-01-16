export const $io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionVersion = {
	description: `CustomResourceDefinitionVersion describes a version for CRD.`,
	properties: {
		additionalPrinterColumns: {
	type: 'array',
	contains: {
		type: 'io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceColumnDefinition',
	},
},
		deprecated: {
	type: 'boolean',
	description: `deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false.`,
},
		deprecationWarning: {
	type: 'string',
	description: `deprecationWarning overrides the default warning returned to API clients. May only be set when \`deprecated\` is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists.`,
},
		name: {
	type: 'string',
	description: `name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at \`/apis/<group>/<version>/...\` if \`served\` is true.`,
	isRequired: true,
},
		schema: {
	type: 'io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceValidation',
	description: `schema describes the schema used for validation, pruning, and defaulting of this version of the custom resource.`,
},
		selectableFields: {
	type: 'array',
	contains: {
		type: 'io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_SelectableField',
	},
},
		served: {
	type: 'boolean',
	description: `served is a flag enabling/disabling this version from being served via REST APIs`,
	isRequired: true,
},
		storage: {
	type: 'boolean',
	description: `storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true.`,
	isRequired: true,
},
		subresources: {
	type: 'io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources',
	description: `subresources specify what subresources this version of the defined custom resource have.`,
},
	},
} as const;