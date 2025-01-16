export const $io_k8s_api_core_v1_Probe = {
	description: `Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.`,
	properties: {
		exec: {
	type: 'io_k8s_api_core_v1_ExecAction',
	description: `Exec specifies the action to take.`,
},
		failureThreshold: {
	type: 'number',
	description: `Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.`,
	format: 'int32',
},
		grpc: {
	type: 'io_k8s_api_core_v1_GRPCAction',
	description: `GRPC specifies an action involving a GRPC port.`,
},
		httpGet: {
	type: 'io_k8s_api_core_v1_HTTPGetAction',
	description: `HTTPGet specifies the http request to perform.`,
},
		initialDelaySeconds: {
	type: 'number',
	description: `Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes`,
	format: 'int32',
},
		periodSeconds: {
	type: 'number',
	description: `How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.`,
	format: 'int32',
},
		successThreshold: {
	type: 'number',
	description: `Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.`,
	format: 'int32',
},
		tcpSocket: {
	type: 'io_k8s_api_core_v1_TCPSocketAction',
	description: `TCPSocket specifies an action involving a TCP port.`,
},
		terminationGracePeriodSeconds: {
	type: 'number',
	description: `Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.`,
	format: 'int64',
},
		timeoutSeconds: {
	type: 'number',
	description: `Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes`,
	format: 'int32',
},
	},
} as const;