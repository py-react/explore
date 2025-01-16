export const $io_cilium_v2alpha1_CiliumLoadBalancerIPPool = {
	description: `CiliumLoadBalancerIPPool is a Kubernetes third-party resource which is used to defined pools of IPs which the operator can use to to allocate and advertise IPs for Services of type LoadBalancer.`,
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
		spec: {
	description: `Spec is a human readable description for a BGP load balancer ip pool.`,
	properties: {
		cidrs: {
	type: 'array',
	contains: {
	description: `CiliumLoadBalancerIPPoolCIDRBlock describes a single CIDR block.`,
	properties: {
		cidr: {
	type: 'string',
	isRequired: true,
	format: 'cidr',
},
	},
},
	isRequired: true,
},
		disabled: {
	type: 'boolean',
	description: `Disabled, if set to true means that no new IPs will be allocated from this pool. Existing allocations will not be removed from services.`,
},
		serviceSelector: {
	description: `ServiceSelector selects a set of services which are eligible to receive IPs from this`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
},
		matchLabels: {
	type: 'dictionary',
	contains: {
	type: 'string',
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
	},
},
		status: {
	description: `Status is the status of the IP Pool. 
 It might be possible for users to define overlapping IP Pools, we can't validate or enforce non-overlapping pools during object creation. The Cilium operator will do this validation and update the status to reflect the ability to allocate IPs from this pool.`,
	properties: {
		conditions: {
	type: 'array',
	contains: {
	description: `Condition contains details for one aspect of the current state of this API Resource. --- This struct is intended for direct use as an array at the field path .status.conditions.  For example, 
 	type FooStatus struct{ 	    // Represents the observations of a foo's current state. 	    // Known .status.conditions.type are: "Available", "Progressing", and "Degraded" 	    // +patchMergeKey=type 	    // +patchStrategy=merge 	    // +listType=map 	    // +listMapKey=type 	    Conditions []metav1.Condition \`json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,1,rep,name=conditions"\` 
 	    // other fields 	}`,
	properties: {
		lastTransitionTime: {
	type: 'string',
	description: `lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.`,
	isRequired: true,
	format: 'date-time',
},
		message: {
	type: 'string',
	description: `message is a human readable message indicating details about the transition. This may be an empty string.`,
	isRequired: true,
	maxLength: 32768,
},
		observedGeneration: {
	type: 'number',
	description: `observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.`,
	format: 'int64',
},
		reason: {
	type: 'string',
	description: `reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.`,
	isRequired: true,
	maxLength: 1024,
	minLength: 1,
	pattern: '^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$',
},
		status: {
	type: 'Enum',
	isRequired: true,
},
		type: {
	type: 'string',
	description: `type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)`,
	isRequired: true,
	maxLength: 316,
	pattern: '^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$',
},
	},
},
},
	},
},
	},
} as const;