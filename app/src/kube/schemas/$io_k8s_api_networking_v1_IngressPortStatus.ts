export const $io_k8s_api_networking_v1_IngressPortStatus = {
	description: `IngressPortStatus represents the error condition of a service port`,
	properties: {
		error: {
	type: 'string',
	description: `error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use
  CamelCase names
- cloud provider specific error values must have names that comply with the
  format foo.example.com/CamelCase.`,
},
		port: {
	type: 'number',
	description: `port is the port number of the ingress port.`,
	isRequired: true,
	format: 'int32',
},
		protocol: {
	type: 'Enum',
	isRequired: true,
},
	},
} as const;