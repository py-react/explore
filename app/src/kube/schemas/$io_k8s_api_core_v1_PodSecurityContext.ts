export const $io_k8s_api_core_v1_PodSecurityContext = {
	description: `PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.`,
	properties: {
		appArmorProfile: {
	type: 'io_k8s_api_core_v1_AppArmorProfile',
	description: `appArmorProfile is the AppArmor options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.`,
},
		fsGroup: {
	type: 'number',
	description: `A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:

1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw----

If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.`,
	format: 'int64',
},
		fsGroupChangePolicy: {
	type: 'Enum',
},
		runAsGroup: {
	type: 'number',
	description: `The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.`,
	format: 'int64',
},
		runAsNonRoot: {
	type: 'boolean',
	description: `Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.`,
},
		runAsUser: {
	type: 'number',
	description: `The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.`,
	format: 'int64',
},
		seLinuxOptions: {
	type: 'io_k8s_api_core_v1_SELinuxOptions',
	description: `The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.`,
},
		seccompProfile: {
	type: 'io_k8s_api_core_v1_SeccompProfile',
	description: `The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.`,
},
		supplementalGroups: {
	type: 'array',
	contains: {
	type: 'number',
	format: 'int64',
},
},
		sysctls: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_Sysctl',
	},
},
		windowsOptions: {
	type: 'io_k8s_api_core_v1_WindowsSecurityContextOptions',
	description: `The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.`,
},
	},
} as const;