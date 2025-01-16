export const $io_k8s_api_core_v1_PortStatus = {
	properties: {
		error: {
	type: 'string',
	description: `Error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use
  CamelCase names
- cloud provider specific error values must have names that comply with the
  format foo.example.com/CamelCase.`,
},
		port: {
	type: 'number',
	description: `Port is the port number of the service port of which status is recorded here`,
	isRequired: true,
	format: 'int32',
},
		protocol: {
	type: 'Enum',
	isRequired: true,
},
	},
} as const;