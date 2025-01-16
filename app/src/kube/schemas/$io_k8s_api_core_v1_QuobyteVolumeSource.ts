export const $io_k8s_api_core_v1_QuobyteVolumeSource = {
	description: `Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.`,
	properties: {
		group: {
	type: 'string',
	description: `group to map volume access to Default is no group`,
},
		readOnly: {
	type: 'boolean',
	description: `readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.`,
},
		registry: {
	type: 'string',
	description: `registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes`,
	isRequired: true,
},
		tenant: {
	type: 'string',
	description: `tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin`,
},
		user: {
	type: 'string',
	description: `user to map volume access to Defaults to serivceaccount user`,
},
		volume: {
	type: 'string',
	description: `volume is a string that references an already created Quobyte volume by name.`,
	isRequired: true,
},
	},
} as const;