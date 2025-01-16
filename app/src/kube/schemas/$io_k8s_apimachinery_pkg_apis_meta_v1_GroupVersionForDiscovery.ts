export const $io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscovery = {
	description: `GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.`,
	properties: {
		groupVersion: {
	type: 'string',
	description: `groupVersion specifies the API group and version in the form "group/version"`,
	isRequired: true,
},
		version: {
	type: 'string',
	description: `version specifies the version in the form of "version". This is to save the clients the trouble of splitting the GroupVersion.`,
	isRequired: true,
},
	},
} as const;