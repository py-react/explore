export const $io_k8s_api_core_v1_EndpointSubset = {
	description: `EndpointSubset is a group of addresses with a common set of ports. The expanded set of endpoints is the Cartesian product of Addresses x Ports. For example, given:

	{
	  Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
	  Ports:     [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
	}

The resulting set of endpoints can be viewed as:

	a: [ 10.10.1.1:8675, 10.10.2.2:8675 ],
	b: [ 10.10.1.1:309, 10.10.2.2:309 ]`,
	properties: {
		addresses: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_EndpointAddress',
	},
},
		notReadyAddresses: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_EndpointAddress',
	},
},
		ports: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_EndpointPort',
	},
},
	},
} as const;