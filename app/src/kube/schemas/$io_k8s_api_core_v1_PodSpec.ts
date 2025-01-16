export const $io_k8s_api_core_v1_PodSpec = {
	description: `PodSpec is a description of a pod.`,
	properties: {
		activeDeadlineSeconds: {
	type: 'number',
	description: `Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.`,
	format: 'int64',
},
		affinity: {
	type: 'io_k8s_api_core_v1_Affinity',
	description: `If specified, the pod's scheduling constraints`,
},
		automountServiceAccountToken: {
	type: 'boolean',
	description: `AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.`,
},
		containers: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_Container',
	},
	isRequired: true,
},
		dnsConfig: {
	type: 'io_k8s_api_core_v1_PodDNSConfig',
	description: `Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy.`,
},
		dnsPolicy: {
	type: 'Enum',
},
		enableServiceLinks: {
	type: 'boolean',
	description: `EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true.`,
},
		ephemeralContainers: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_EphemeralContainer',
	},
},
		hostAliases: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_HostAlias',
	},
},
		hostIPC: {
	type: 'boolean',
	description: `Use the host's ipc namespace. Optional: Default to false.`,
},
		hostNetwork: {
	type: 'boolean',
	description: `Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false.`,
},
		hostPID: {
	type: 'boolean',
	description: `Use the host's pid namespace. Optional: Default to false.`,
},
		hostUsers: {
	type: 'boolean',
	description: `Use the host's user namespace. Optional: Default to true. If set to true or not present, the pod will be run in the host user namespace, useful for when the pod needs a feature only available to the host user namespace, such as loading a kernel module with CAP_SYS_MODULE. When set to false, a new userns is created for the pod. Setting false is useful for mitigating container breakout vulnerabilities even allowing users to run their containers as root without actually having root privileges on the host. This field is alpha-level and is only honored by servers that enable the UserNamespacesSupport feature.`,
},
		hostname: {
	type: 'string',
	description: `Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.`,
},
		imagePullSecrets: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_LocalObjectReference',
	},
},
		initContainers: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_Container',
	},
},
		nodeName: {
	type: 'string',
	description: `NodeName is a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.`,
},
		nodeSelector: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		os: {
	type: 'io_k8s_api_core_v1_PodOS',
	description: `Specifies the OS of the containers in the pod. Some pod and container fields are restricted if this is set.

If the OS field is set to linux, the following fields must be unset: -securityContext.windowsOptions

If the OS field is set to windows, following fields must be unset: - spec.hostPID - spec.hostIPC - spec.hostUsers - spec.securityContext.appArmorProfile - spec.securityContext.seLinuxOptions - spec.securityContext.seccompProfile - spec.securityContext.fsGroup - spec.securityContext.fsGroupChangePolicy - spec.securityContext.sysctls - spec.shareProcessNamespace - spec.securityContext.runAsUser - spec.securityContext.runAsGroup - spec.securityContext.supplementalGroups - spec.containers[*].securityContext.appArmorProfile - spec.containers[*].securityContext.seLinuxOptions - spec.containers[*].securityContext.seccompProfile - spec.containers[*].securityContext.capabilities - spec.containers[*].securityContext.readOnlyRootFilesystem - spec.containers[*].securityContext.privileged - spec.containers[*].securityContext.allowPrivilegeEscalation - spec.containers[*].securityContext.procMount - spec.containers[*].securityContext.runAsUser - spec.containers[*].securityContext.runAsGroup`,
},
		overhead: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
		preemptionPolicy: {
	type: 'Enum',
},
		priority: {
	type: 'number',
	description: `The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.`,
	format: 'int32',
},
		priorityClassName: {
	type: 'string',
	description: `If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.`,
},
		readinessGates: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_PodReadinessGate',
	},
},
		resourceClaims: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_PodResourceClaim',
	},
},
		restartPolicy: {
	type: 'Enum',
},
		runtimeClassName: {
	type: 'string',
	description: `RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class`,
},
		schedulerName: {
	type: 'string',
	description: `If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.`,
},
		schedulingGates: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_PodSchedulingGate',
	},
},
		securityContext: {
	type: 'io_k8s_api_core_v1_PodSecurityContext',
	description: `SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field.`,
},
		serviceAccount: {
	type: 'string',
	description: `DeprecatedServiceAccount is a deprecated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.`,
},
		serviceAccountName: {
	type: 'string',
	description: `ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/`,
},
		setHostnameAsFQDN: {
	type: 'boolean',
	description: `If true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false.`,
},
		shareProcessNamespace: {
	type: 'boolean',
	description: `Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false.`,
},
		subdomain: {
	type: 'string',
	description: `If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all.`,
},
		terminationGracePeriodSeconds: {
	type: 'number',
	description: `Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.`,
	format: 'int64',
},
		tolerations: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_Toleration',
	},
},
		topologySpreadConstraints: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_TopologySpreadConstraint',
	},
},
		volumes: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_Volume',
	},
},
	},
} as const;