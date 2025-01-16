export const $io_k8s_apimachinery_pkg_apis_meta_v1_Preconditions = {
	description: `Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.`,
	properties: {
		resourceVersion: {
	type: 'string',
	description: `Specifies the target ResourceVersion`,
},
		uid: {
	type: 'string',
	description: `Specifies the target UID.`,
},
	},
} as const;