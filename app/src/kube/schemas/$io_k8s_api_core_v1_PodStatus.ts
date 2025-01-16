export const $io_k8s_api_core_v1_PodStatus = {
	description: `PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.`,
	properties: {
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_PodCondition',
	},
},
		containerStatuses: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_ContainerStatus',
	},
},
		ephemeralContainerStatuses: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_ContainerStatus',
	},
},
		hostIP: {
	type: 'string',
	description: `hostIP holds the IP address of the host to which the pod is assigned. Empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns mean that HostIP will not be updated even if there is a node is assigned to pod`,
},
		hostIPs: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_HostIP',
	},
},
		initContainerStatuses: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_ContainerStatus',
	},
},
		message: {
	type: 'string',
	description: `A human readable message indicating details about why the pod is in this condition.`,
},
		nominatedNodeName: {
	type: 'string',
	description: `nominatedNodeName is set only when this pod preempts other pods on the node, but it cannot be scheduled right away as preemption victims receive their graceful termination periods. This field does not guarantee that the pod will be scheduled on this node. Scheduler may decide to place the pod elsewhere if other nodes become available sooner. Scheduler may also decide to give the resources on this node to a higher priority pod that is created after preemption. As a result, this field may be different than PodSpec.nodeName when the pod is scheduled.`,
},
		phase: {
	type: 'Enum',
},
		podIP: {
	type: 'string',
	description: `podIP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated.`,
},
		podIPs: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_PodIP',
	},
},
		qosClass: {
	type: 'Enum',
},
		reason: {
	type: 'string',
	description: `A brief CamelCase message indicating details about why the pod is in this state. e.g. 'Evicted'`,
},
		resize: {
	type: 'string',
	description: `Status of resources resize desired for pod's containers. It is empty if no resources resize is pending. Any changes to container resources will automatically set this to "Proposed"`,
},
		resourceClaimStatuses: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_PodResourceClaimStatus',
	},
},
		startTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `RFC 3339 date and time at which the object was acknowledged by the Kubelet. This is before the Kubelet pulled the container image(s) for the pod.`,
},
	},
} as const;