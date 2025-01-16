export const $io_cilium_v2_CiliumEndpoint = {
	description: `CiliumEndpoint is the status of a Cilium policy rule.`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources`,
},
		kind: {
	type: 'string',
	description: `Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		metadata: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta',
	description: `Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata`,
	isRequired: true,
},
		status: {
	description: `EndpointStatus is the status of a Cilium endpoint.`,
	properties: {
		controllers: {
	type: 'array',
	contains: {
	description: `ControllerStatus is the status of a failing controller.`,
	properties: {
		configuration: {
	description: `Configuration is the controller configuration`,
	properties: {
		'error-retry': {
	type: 'boolean',
	description: `Retry on error`,
},
		'error-retry-base': {
	type: 'number',
	description: `Base error retry back-off time Format: duration`,
	format: 'int64',
},
		interval: {
	type: 'number',
	description: `Regular synchronization interval Format: duration`,
	format: 'int64',
},
	},
},
		name: {
	type: 'string',
	description: `Name is the name of the controller`,
},
		status: {
	description: `Status is the status of the controller`,
	properties: {
		'consecutive-failure-count': {
	type: 'number',
	format: 'int64',
},
		'failure-count': {
	type: 'number',
	format: 'int64',
},
		'last-failure-msg': {
	type: 'string',
},
		'last-failure-timestamp': {
	type: 'string',
},
		'last-success-timestamp': {
	type: 'string',
},
		'success-count': {
	type: 'number',
	format: 'int64',
},
	},
},
		uuid: {
	type: 'string',
	description: `UUID is the UUID of the controller`,
},
	},
},
},
		encryption: {
	description: `Encryption is the encryption configuration of the node`,
	properties: {
		key: {
	type: 'number',
	description: `Key is the index to the key to use for encryption or 0 if encryption is disabled.`,
},
	},
},
		'external-identifiers': {
	description: `ExternalIdentifiers is a set of identifiers to identify the endpoint apart from the pod name. This includes container runtime IDs.`,
	properties: {
		'container-id': {
	type: 'string',
	description: `ID assigned by container runtime`,
},
		'container-name': {
	type: 'string',
	description: `Name assigned to container`,
},
		'docker-endpoint-id': {
	type: 'string',
	description: `Docker endpoint ID`,
},
		'docker-network-id': {
	type: 'string',
	description: `Docker network ID`,
},
		'k8s-namespace': {
	type: 'string',
	description: `K8s namespace for this endpoint`,
},
		'k8s-pod-name': {
	type: 'string',
	description: `K8s pod name for this endpoint`,
},
		'pod-name': {
	type: 'string',
	description: `K8s pod for this endpoint(Deprecated, use K8sPodName and K8sNamespace instead)`,
},
	},
},
		health: {
	description: `Health is the overall endpoint & subcomponent health.`,
	properties: {
		bpf: {
	type: 'string',
	description: `bpf`,
},
		connected: {
	type: 'boolean',
	description: `Is this endpoint reachable`,
},
		overallHealth: {
	type: 'string',
	description: `overall health`,
},
		policy: {
	type: 'string',
	description: `policy`,
},
	},
},
		id: {
	type: 'number',
	description: `ID is the cilium-agent-local ID of the endpoint.`,
	format: 'int64',
},
		identity: {
	description: `Identity is the security identity associated with the endpoint`,
	properties: {
		id: {
	type: 'number',
	description: `ID is the numeric identity of the endpoint`,
	format: 'int64',
},
		labels: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
		log: {
	type: 'array',
	contains: {
	description: `EndpointStatusChange Indication of a change of status 
 swagger:model EndpointStatusChange`,
	properties: {
		code: {
	type: 'string',
	description: `Code indicate type of status change Enum: [ok failed]`,
},
		message: {
	type: 'string',
	description: `Status message`,
},
		state: {
	type: 'string',
	description: `state`,
},
		timestamp: {
	type: 'string',
	description: `Timestamp when status change occurred`,
},
	},
},
},
		'named-ports': {
	type: 'array',
	contains: {
	description: `Port Layer 4 port / protocol pair 
 swagger:model Port`,
	properties: {
		name: {
	type: 'string',
	description: `Optional layer 4 port name`,
},
		port: {
	type: 'number',
	description: `Layer 4 port number`,
},
		protocol: {
	type: 'string',
	description: `Layer 4 protocol Enum: [TCP UDP SCTP ICMP ICMPV6 ANY]`,
},
	},
},
},
		networking: {
	description: `Networking is the networking properties of the endpoint.`,
	properties: {
		addressing: {
	type: 'array',
	contains: {
	description: `AddressPair is a pair of IPv4 and/or IPv6 address.`,
	properties: {
		ipv4: {
	type: 'string',
},
		ipv6: {
	type: 'string',
},
	},
},
	isRequired: true,
},
		node: {
	type: 'string',
	description: `NodeIP is the IP of the node the endpoint is running on. The IP must be reachable between nodes.`,
},
	},
},
		policy: {
	description: `EndpointPolicy represents the endpoint's policy by listing all allowed ingress and egress identities in combination with L4 port and protocol.`,
	properties: {
		egress: {
	description: `EndpointPolicyDirection is the list of allowed identities per direction.`,
	properties: {
		adding: {
	type: 'array',
	contains: {
	description: `IdentityTuple specifies a peer by identity, destination port and protocol.`,
	properties: {
		'dest-port': {
	type: 'number',
},
		identity: {
	type: 'number',
	format: 'int64',
},
		'identity-labels': {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		protocol: {
	type: 'number',
},
	},
},
},
		allowed: {
	type: 'array',
	contains: {
	description: `IdentityTuple specifies a peer by identity, destination port and protocol.`,
	properties: {
		'dest-port': {
	type: 'number',
},
		identity: {
	type: 'number',
	format: 'int64',
},
		'identity-labels': {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		protocol: {
	type: 'number',
},
	},
},
},
		denied: {
	type: 'array',
	contains: {
	description: `IdentityTuple specifies a peer by identity, destination port and protocol.`,
	properties: {
		'dest-port': {
	type: 'number',
},
		identity: {
	type: 'number',
	format: 'int64',
},
		'identity-labels': {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		protocol: {
	type: 'number',
},
	},
},
},
		enforcing: {
	type: 'boolean',
	isRequired: true,
},
		removing: {
	type: 'array',
	contains: {
	description: `IdentityTuple specifies a peer by identity, destination port and protocol.`,
	properties: {
		'dest-port': {
	type: 'number',
},
		identity: {
	type: 'number',
	format: 'int64',
},
		'identity-labels': {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		protocol: {
	type: 'number',
},
	},
},
},
		state: {
	type: 'string',
	description: `EndpointPolicyState defines the state of the Policy mode: "enforcing", "non-enforcing", "disabled"`,
},
	},
},
		ingress: {
	description: `EndpointPolicyDirection is the list of allowed identities per direction.`,
	properties: {
		adding: {
	type: 'array',
	contains: {
	description: `IdentityTuple specifies a peer by identity, destination port and protocol.`,
	properties: {
		'dest-port': {
	type: 'number',
},
		identity: {
	type: 'number',
	format: 'int64',
},
		'identity-labels': {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		protocol: {
	type: 'number',
},
	},
},
},
		allowed: {
	type: 'array',
	contains: {
	description: `IdentityTuple specifies a peer by identity, destination port and protocol.`,
	properties: {
		'dest-port': {
	type: 'number',
},
		identity: {
	type: 'number',
	format: 'int64',
},
		'identity-labels': {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		protocol: {
	type: 'number',
},
	},
},
},
		denied: {
	type: 'array',
	contains: {
	description: `IdentityTuple specifies a peer by identity, destination port and protocol.`,
	properties: {
		'dest-port': {
	type: 'number',
},
		identity: {
	type: 'number',
	format: 'int64',
},
		'identity-labels': {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		protocol: {
	type: 'number',
},
	},
},
},
		enforcing: {
	type: 'boolean',
	isRequired: true,
},
		removing: {
	type: 'array',
	contains: {
	description: `IdentityTuple specifies a peer by identity, destination port and protocol.`,
	properties: {
		'dest-port': {
	type: 'number',
},
		identity: {
	type: 'number',
	format: 'int64',
},
		'identity-labels': {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		protocol: {
	type: 'number',
},
	},
},
},
		state: {
	type: 'string',
	description: `EndpointPolicyState defines the state of the Policy mode: "enforcing", "non-enforcing", "disabled"`,
},
	},
},
	},
},
		state: {
	type: 'Enum',
},
		'visibility-policy-status': {
	type: 'string',
},
	},
},
	},
} as const;