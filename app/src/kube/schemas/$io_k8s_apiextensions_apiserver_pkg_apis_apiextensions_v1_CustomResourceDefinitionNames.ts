export const $io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames = {
	description: `CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition`,
	properties: {
		categories: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		kind: {
	type: 'string',
	description: `kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the \`kind\` attribute in API calls.`,
	isRequired: true,
},
		listKind: {
	type: 'string',
	description: `listKind is the serialized kind of the list for this resource. Defaults to "\`kind\`List".`,
},
		plural: {
	type: 'string',
	description: `plural is the plural name of the resource to serve. The custom resources are served under \`/apis/<group>/<version>/.../<plural>\`. Must match the name of the CustomResourceDefinition (in the form \`<names.plural>.<group>\`). Must be all lowercase.`,
	isRequired: true,
},
		shortNames: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		singular: {
	type: 'string',
	description: `singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased \`kind\`.`,
},
	},
} as const;