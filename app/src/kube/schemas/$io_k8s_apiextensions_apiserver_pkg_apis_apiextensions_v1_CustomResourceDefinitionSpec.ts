export const $io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpec = {
	description: `CustomResourceDefinitionSpec describes how a user wants their resource to appear`,
	properties: {
		conversion: {
	type: 'io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversion',
	description: `conversion defines conversion settings for the CRD.`,
},
		group: {
	type: 'string',
	description: `group is the API group of the defined custom resource. The custom resources are served under \`/apis/<group>/...\`. Must match the name of the CustomResourceDefinition (in the form \`<names.plural>.<group>\`).`,
	isRequired: true,
},
		names: {
	type: 'io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames',
	description: `names specify the resource and kind names for the custom resource.`,
	isRequired: true,
},
		preserveUnknownFields: {
	type: 'boolean',
	description: `preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. This field is deprecated in favor of setting \`x-preserve-unknown-fields\` to true in \`spec.versions[*].schema.openAPIV3Schema\`. See https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#field-pruning for details.`,
},
		scope: {
	type: 'string',
	description: `scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are \`Cluster\` and \`Namespaced\`.`,
	isRequired: true,
},
		versions: {
	type: 'array',
	contains: {
		type: 'io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionVersion',
	},
	isRequired: true,
},
	},
} as const;