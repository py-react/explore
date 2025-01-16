export const $io_k8s_api_core_v1_HostAlias = {
	description: `HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.`,
	properties: {
		hostnames: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		ip: {
	type: 'string',
	description: `IP address of the host file entry.`,
	isRequired: true,
},
	},
} as const;