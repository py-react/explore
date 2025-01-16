export const $io_k8s_api_core_v1_ContainerStatus = {
	description: `ContainerStatus contains details for the current status of this container.`,
	properties: {
		allocatedResources: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
		containerID: {
	type: 'string',
	description: `ContainerID is the ID of the container in the format '<type>://<container_id>'. Where type is a container runtime identifier, returned from Version call of CRI API (for example "containerd").`,
},
		image: {
	type: 'string',
	description: `Image is the name of container image that the container is running. The container image may not match the image used in the PodSpec, as it may have been resolved by the runtime. More info: https://kubernetes.io/docs/concepts/containers/images.`,
	isRequired: true,
},
		imageID: {
	type: 'string',
	description: `ImageID is the image ID of the container's image. The image ID may not match the image ID of the image used in the PodSpec, as it may have been resolved by the runtime.`,
	isRequired: true,
},
		lastState: {
	type: 'io_k8s_api_core_v1_ContainerState',
	description: `LastTerminationState holds the last termination state of the container to help debug container crashes and restarts. This field is not populated if the container is still running and RestartCount is 0.`,
},
		name: {
	type: 'string',
	description: `Name is a DNS_LABEL representing the unique name of the container. Each container in a pod must have a unique name across all container types. Cannot be updated.`,
	isRequired: true,
},
		ready: {
	type: 'boolean',
	description: `Ready specifies whether the container is currently passing its readiness check. The value will change as readiness probes keep executing. If no readiness probes are specified, this field defaults to true once the container is fully started (see Started field).

The value is typically used to determine whether a container is ready to accept traffic.`,
	isRequired: true,
},
		resources: {
	type: 'io_k8s_api_core_v1_ResourceRequirements',
	description: `Resources represents the compute resource requests and limits that have been successfully enacted on the running container after it has been started or has been successfully resized.`,
},
		restartCount: {
	type: 'number',
	description: `RestartCount holds the number of times the container has been restarted. Kubelet makes an effort to always increment the value, but there are cases when the state may be lost due to node restarts and then the value may be reset to 0. The value is never negative.`,
	isRequired: true,
	format: 'int32',
},
		started: {
	type: 'boolean',
	description: `Started indicates whether the container has finished its postStart lifecycle hook and passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. In both cases, startup probes will run again. Is always true when no startupProbe is defined and container is running and has passed the postStart lifecycle hook. The null value must be treated the same as false.`,
},
		state: {
	type: 'io_k8s_api_core_v1_ContainerState',
	description: `State holds details about the container's current condition.`,
},
		volumeMounts: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_VolumeMountStatus',
	},
},
	},
} as const;