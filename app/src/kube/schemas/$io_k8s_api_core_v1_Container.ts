export const $io_k8s_api_core_v1_Container = {
	description: `A single application container that you want to run within a pod.`,
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
	description: `Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.`,
},
		imagePullPolicy: {
	type: 'Enum',
},
		lifecycle: {
	type: 'io_k8s_api_core_v1_Lifecycle',
	description: `Actions that the management system should take in response to container lifecycle events. Cannot be updated.`,
},
		livenessProbe: {
	type: 'io_k8s_api_core_v1_Probe',
	description: `Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes`,
},
		name: {
	type: 'string',
	description: `Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.`,
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
	description: `Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes`,
},
		resizePolicy: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_ContainerResizePolicy',
	},
},
		resources: {
	type: 'io_k8s_api_core_v1_ResourceRequirements',
	description: `Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/`,
},
		restartPolicy: {
	type: 'string',
	description: `RestartPolicy defines the restart behavior of individual containers in a pod. This field may only be set for init containers, and the only allowed value is "Always". For non-init containers or when this field is not specified, the restart behavior is defined by the Pod's restart policy and the container type. Setting the RestartPolicy as "Always" for the init container will have the following effect: this init container will be continually restarted on exit until all regular containers have terminated. Once all regular containers have completed, all init containers with restartPolicy "Always" will be shut down. This lifecycle differs from normal init containers and is often referred to as a "sidecar" container. Although this init container still starts in the init container sequence, it does not wait for the container to complete before proceeding to the next init container. Instead, the next init container starts immediately after this init container is started, or after any startupProbe has successfully completed.`,
},
		securityContext: {
	type: 'io_k8s_api_core_v1_SecurityContext',
	description: `SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/`,
},
		startupProbe: {
	type: 'io_k8s_api_core_v1_Probe',
	description: `StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes`,
},
		stdin: {
	type: 'boolean',
	description: `Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.`,
},
		stdinOnce: {
	type: 'boolean',
	description: `Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false`,
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