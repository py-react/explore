export const $io_k8s_api_discovery_v1_EndpointConditions = {
	description: `EndpointConditions represents the current condition of an endpoint.`,
	properties: {
		ready: {
	type: 'boolean',
	description: `ready indicates that this endpoint is prepared to receive traffic, according to whatever system is managing the endpoint. A nil value indicates an unknown state. In most cases consumers should interpret this unknown state as ready. For compatibility reasons, ready should never be "true" for terminating endpoints, except when the normal readiness behavior is being explicitly overridden, for example when the associated Service has set the publishNotReadyAddresses flag.`,
},
		serving: {
	type: 'boolean',
	description: `serving is identical to ready except that it is set regardless of the terminating state of endpoints. This condition should be set to true for a ready endpoint that is terminating. If nil, consumers should defer to the ready condition.`,
},
		terminating: {
	type: 'boolean',
	description: `terminating indicates that this endpoint is terminating. A nil value indicates an unknown state. Consumers should interpret this unknown state to mean that the endpoint is not terminating.`,
},
	},
} as const;