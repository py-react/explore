export const $io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent = {
	description: `Event represents a single event to a watched resource.`,
	properties: {
		object: {
	type: 'io_k8s_apimachinery_pkg_runtime_RawExtension',
	description: `Object is:
 * If Type is Added or Modified: the new state of the object.
 * If Type is Deleted: the state of the object immediately before deletion.
 * If Type is Error: *Status is recommended; other types may make sense
   depending on context.`,
	isRequired: true,
},
		type: {
	type: 'string',
	isRequired: true,
},
	},
} as const;