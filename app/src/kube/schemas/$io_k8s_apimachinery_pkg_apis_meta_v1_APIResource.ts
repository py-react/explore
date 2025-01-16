export const $io_k8s_apimachinery_pkg_apis_meta_v1_APIResource = {
	description: `APIResource specifies the name of a resource and whether it is namespaced.`,
	properties: {
		categories: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		group: {
	type: 'string',
	description: `group is the preferred group of the resource.  Empty implies the group of the containing resource list. For subresources, this may have a different value, for example: Scale".`,
},
		kind: {
	type: 'string',
	description: `kind is the kind for the resource (e.g. 'Foo' is the kind for a resource 'foo')`,
	isRequired: true,
},
		name: {
	type: 'string',
	description: `name is the plural name of the resource.`,
	isRequired: true,
},
		namespaced: {
	type: 'boolean',
	description: `namespaced indicates if a resource is namespaced or not.`,
	isRequired: true,
},
		shortNames: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		singularName: {
	type: 'string',
	description: `singularName is the singular name of the resource.  This allows clients to handle plural and singular opaquely. The singularName is more correct for reporting status on a single item and both singular and plural are allowed from the kubectl CLI interface.`,
	isRequired: true,
},
		storageVersionHash: {
	type: 'string',
	description: `The hash value of the storage version, the version this resource is converted to when written to the data store. Value must be treated as opaque by clients. Only equality comparison on the value is valid. This is an alpha feature and may change or be removed in the future. The field is populated by the apiserver only if the StorageVersionHash feature gate is enabled. This field will remain optional even if it graduates.`,
},
		verbs: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
		version: {
	type: 'string',
	description: `version is the preferred version of the resource.  Empty implies the version of the containing resource list For subresources, this may have a different value, for example: v1 (while inside a v1beta1 version of the core resource's group)".`,
},
	},
} as const;