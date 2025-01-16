export const $io_k8s_api_coordination_v1_LeaseSpec = {
	description: `LeaseSpec is a specification of a Lease.`,
	properties: {
		acquireTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime',
	description: `acquireTime is a time when the current lease was acquired.`,
},
		holderIdentity: {
	type: 'string',
	description: `holderIdentity contains the identity of the holder of a current lease.`,
},
		leaseDurationSeconds: {
	type: 'number',
	description: `leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed renewTime.`,
	format: 'int32',
},
		leaseTransitions: {
	type: 'number',
	description: `leaseTransitions is the number of transitions of a lease between holders.`,
	format: 'int32',
},
		renewTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime',
	description: `renewTime is a time when the current holder of a lease has last updated the lease.`,
},
	},
} as const;