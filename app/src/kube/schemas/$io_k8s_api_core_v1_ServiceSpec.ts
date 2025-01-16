export const $io_k8s_api_core_v1_ServiceSpec = {
	description: `ServiceSpec describes the attributes that a user creates on a service.`,
	properties: {
		allocateLoadBalancerNodePorts: {
	type: 'boolean',
	description: `allocateLoadBalancerNodePorts defines if NodePorts will be automatically allocated for services with type LoadBalancer.  Default is "true". It may be set to "false" if the cluster load-balancer does not rely on NodePorts.  If the caller requests specific NodePorts (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type LoadBalancer and will be cleared if the type is changed to any other type.`,
},
		clusterIP: {
	type: 'string',
	description: `clusterIP is the IP address of the service and is usually assigned randomly. If an address is specified manually, is in-range (as per system configuration), and is not in use, it will be allocated to the service; otherwise creation of the service will fail. This field may not be changed through updates unless the type field is also being changed to ExternalName (which requires this field to be blank) or the type field is being changed from ExternalName (in which case this field may optionally be specified, as describe above).  Valid values are "None", empty string (""), or a valid IP address. Setting this to "None" makes a "headless service" (no virtual IP), which is useful when direct endpoint connections are preferred and proxying is not required.  Only applies to types ClusterIP, NodePort, and LoadBalancer. If this field is specified when creating a Service of type ExternalName, creation will fail. This field will be wiped when updating a Service to type ExternalName. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies`,
},
		clusterIPs: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		externalIPs: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		externalName: {
	type: 'string',
	description: `externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record). No proxying will be involved.  Must be a lowercase RFC-1123 hostname (https://tools.ietf.org/html/rfc1123) and requires \`type\` to be "ExternalName".`,
},
		externalTrafficPolicy: {
	type: 'Enum',
},
		healthCheckNodePort: {
	type: 'number',
	description: `healthCheckNodePort specifies the healthcheck nodePort for the service. This only applies when type is set to LoadBalancer and externalTrafficPolicy is set to Local. If a value is specified, is in-range, and is not in use, it will be used.  If not specified, a value will be automatically allocated.  External systems (e.g. load-balancers) can use this port to determine if a given node holds endpoints for this service or not.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type). This field cannot be updated once set.`,
	format: 'int32',
},
		internalTrafficPolicy: {
	type: 'Enum',
},
		ipFamilies: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
		ipFamilyPolicy: {
	type: 'Enum',
},
		loadBalancerClass: {
	type: 'string',
	description: `loadBalancerClass is the class of the load balancer implementation this Service belongs to. If specified, the value of this field must be a label-style identifier, with an optional prefix, e.g. "internal-vip" or "example.com/internal-vip". Unprefixed names are reserved for end-users. This field can only be set when the Service type is 'LoadBalancer'. If not set, the default load balancer implementation is used, today this is typically done through the cloud provider integration, but should apply for any default implementation. If set, it is assumed that a load balancer implementation is watching for Services with a matching class. Any default load balancer implementation (e.g. cloud providers) should ignore Services that set this field. This field can only be set when creating or updating a Service to type 'LoadBalancer'. Once set, it can not be changed. This field will be wiped when a service is updated to a non 'LoadBalancer' type.`,
},
		loadBalancerIP: {
	type: 'string',
	description: `Only applies to Service Type: LoadBalancer. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature. Deprecated: This field was under-specified and its meaning varies across implementations. Using it is non-portable and it may not support dual-stack. Users are encouraged to use implementation-specific annotations when available.`,
},
		loadBalancerSourceRanges: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		ports: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_ServicePort',
	},
},
		publishNotReadyAddresses: {
	type: 'boolean',
	description: `publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready. The primary use case for setting this field is for a StatefulSet's Headless Service to propagate SRV DNS records for its Pods for the purpose of peer discovery. The Kubernetes controllers that generate Endpoints and EndpointSlice resources for Services interpret this to mean that all endpoints are considered "ready" even if the Pods themselves are not. Agents which consume only Kubernetes generated endpoints through the Endpoints or EndpointSlice resources can safely assume this behavior.`,
},
		selector: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		sessionAffinity: {
	type: 'Enum',
},
		sessionAffinityConfig: {
	type: 'io_k8s_api_core_v1_SessionAffinityConfig',
	description: `sessionAffinityConfig contains the configurations of session affinity.`,
},
		trafficDistribution: {
	type: 'string',
	description: `TrafficDistribution offers a way to express preferences for how traffic is distributed to Service endpoints. Implementations can use this field as a hint, but are not required to guarantee strict adherence. If the field is not set, the implementation will apply its default routing strategy. If set to "PreferClose", implementations should prioritize endpoints that are topologically close (e.g., same zone). This is an alpha field and requires enabling ServiceTrafficDistribution feature.`,
},
		type: {
	type: 'Enum',
},
	},
} as const;