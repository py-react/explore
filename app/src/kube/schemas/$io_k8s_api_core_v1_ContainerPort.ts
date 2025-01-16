export const $io_k8s_api_core_v1_ContainerPort = {
	description: `ContainerPort represents a network port in a single container.`,
	properties: {
		containerPort: {
	type: 'number',
	description: `Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.`,
	isRequired: true,
	format: 'int32',
},
		hostIP: {
	type: 'string',
	description: `What host IP to bind the external port to.`,
},
		hostPort: {
	type: 'number',
	description: `Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.`,
	format: 'int32',
},
		name: {
	type: 'string',
	description: `If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.`,
},
		protocol: {
	type: 'Enum',
},
	},
} as const;