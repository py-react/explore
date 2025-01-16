export const $io_k8s_api_core_v1_EphemeralContainer = {
	description: `An EphemeralContainer is a temporary container that you may add to an existing Pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a Pod is removed or restarted. The kubelet may evict a Pod if an ephemeral container causes the Pod to exceed its resource allocation.

To add an ephemeral container, use the ephemeralcontainers subresource of an existing Pod. Ephemeral containers may not be removed or restarted.`,
	properties: {
		args: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		command: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		env: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_EnvVar',
	},
},
		envFrom: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_EnvFromSource',
	},
},
		image: {
	type: 'string',
	description: `Container image name. More info: https://kubernetes.io/docs/concepts/containers/images`,
},
		imagePullPolicy: {
	type: 'Enum',
},
		lifecycle: {
	type: 'io_k8s_api_core_v1_Lifecycle',
	description: `Lifecycle is not allowed for ephemeral containers.`,
},
		livenessProbe: {
	type: 'io_k8s_api_core_v1_Probe',
	description: `Probes are not allowed for ephemeral containers.`,
},
		name: {
	type: 'string',
	description: `Name of the ephemeral container specified as a DNS_LABEL. This name must be unique among all containers, init containers and ephemeral containers.`,
	isRequired: true,
},
		ports: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_ContainerPort',
	},
},
		readinessProbe: {
	type: 'io_k8s_api_core_v1_Probe',
	description: `Probes are not allowed for ephemeral containers.`,
},
		resizePolicy: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_ContainerResizePolicy',
	},
},
		resources: {
	type: 'io_k8s_api_core_v1_ResourceRequirements',
	description: `Resources are not allowed for ephemeral containers. Ephemeral containers use spare resources already allocated to the pod.`,
},
		restartPolicy: {
	type: 'string',
	description: `Restart policy for the container to manage the restart behavior of each container within a pod. This may only be set for init containers. You cannot set this field on ephemeral containers.`,
},
		securityContext: {
	type: 'io_k8s_api_core_v1_SecurityContext',
	description: `Optional: SecurityContext defines the security options the ephemeral container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.`,
},
		startupProbe: {
	type: 'io_k8s_api_core_v1_Probe',
	description: `Probes are not allowed for ephemeral containers.`,
},
		stdin: {
	type: 'boolean',
	description: `Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.`,
},
		stdinOnce: {
	type: 'boolean',
	description: `Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false`,
},
		targetContainerName: {
	type: 'string',
	description: `If set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container uses the namespaces configured in the Pod spec.

The container runtime must implement support for this feature. If the runtime does not support namespace targeting then the result of setting this field is undefined.`,
},
		terminationMessagePath: {
	type: 'string',
	description: `Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.`,
},
		terminationMessagePolicy: {
	type: 'Enum',
},
		tty: {
	type: 'boolean',
	description: `Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.`,
},
		volumeDevices: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_VolumeDevice',
	},
},
		volumeMounts: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_VolumeMount',
	},
},
		workingDir: {
	type: 'string',
	description: `Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.`,
},
	},
} as const;