export const $io_k8s_api_networking_v1_IPBlock = {
	description: `IPBlock describes a particular CIDR (Ex. "192.168.1.0/24","2001:db8::/64") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.`,
	properties: {
		cidr: {
	type: 'string',
	description: `cidr is a string representing the IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64"`,
	isRequired: true,
},
		except: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
} as const;