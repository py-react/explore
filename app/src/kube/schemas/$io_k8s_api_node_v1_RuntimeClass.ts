export const $io_k8s_api_node_v1_RuntimeClass = {
	description: `RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://kubernetes.io/docs/concepts/containers/runtime-class/`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources`,
},
		handler: {
	type: 'string',
	description: `handler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The Handler must be lowercase, conform to the DNS Label (RFC 1123) requirements, and is immutable.`,
	isRequired: true,
},
		kind: {
	type: 'string',
	description: `Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		metadata: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta',
	description: `More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata`,
},
		overhead: {
	type: 'io_k8s_api_node_v1_Overhead',
	description: `overhead represents the resource overhead associated with running a pod for a given RuntimeClass. For more details, see
 https://kubernetes.io/docs/concepts/scheduling-eviction/pod-overhead/`,
},
		scheduling: {
	type: 'io_k8s_api_node_v1_Scheduling',
	description: `scheduling holds the scheduling constraints to ensure that pods running with this RuntimeClass are scheduled to nodes that support it. If scheduling is nil, this RuntimeClass is assumed to be supported by all nodes.`,
},
	},
} as const;