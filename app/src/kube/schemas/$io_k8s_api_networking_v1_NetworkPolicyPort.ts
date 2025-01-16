export const $io_k8s_api_networking_v1_NetworkPolicyPort = {
	description: `NetworkPolicyPort describes a port to allow traffic on`,
	properties: {
		endPort: {
	type: 'number',
	description: `endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.`,
	format: 'int32',
},
		port: {
	type: 'io_k8s_apimachinery_pkg_util_intstr_IntOrString',
	description: `port represents the port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.`,
},
		protocol: {
	type: 'Enum',
},
	},
} as const;