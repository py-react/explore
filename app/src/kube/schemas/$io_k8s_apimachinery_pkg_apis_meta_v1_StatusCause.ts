export const $io_k8s_apimachinery_pkg_apis_meta_v1_StatusCause = {
	description: `StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.`,
	properties: {
		field: {
	type: 'string',
	description: `The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.

Examples:
  "name" - the field "name" on the current resource
  "items[0].name" - the field "name" on the first array entry in "items"`,
},
		message: {
	type: 'string',
	description: `A human-readable description of the cause of the error.  This field may be presented as-is to a reader.`,
},
		reason: {
	type: 'string',
	description: `A machine-readable description of the cause of the error. If this value is empty there is no information available.`,
},
	},
} as const;