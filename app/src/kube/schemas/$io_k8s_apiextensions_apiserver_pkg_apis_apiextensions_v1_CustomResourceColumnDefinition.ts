export const $io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceColumnDefinition = {
	description: `CustomResourceColumnDefinition specifies a column for server side printing.`,
	properties: {
		description: {
	type: 'string',
	description: `description is a human readable description of this column.`,
},
		format: {
	type: 'string',
	description: `format is an optional OpenAPI type definition for this column. The 'name' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.`,
},
		jsonPath: {
	type: 'string',
	description: `jsonPath is a simple JSON path (i.e. with array notation) which is evaluated against each custom resource to produce the value for this column.`,
	isRequired: true,
},
		name: {
	type: 'string',
	description: `name is a human readable name for the column.`,
	isRequired: true,
},
		priority: {
	type: 'number',
	description: `priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a priority greater than 0.`,
	format: 'int32',
},
		type: {
	type: 'string',
	description: `type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.`,
	isRequired: true,
},
	},
} as const;