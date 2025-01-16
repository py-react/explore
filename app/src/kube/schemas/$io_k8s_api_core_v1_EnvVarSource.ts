export const $io_k8s_api_core_v1_EnvVarSource = {
	description: `EnvVarSource represents a source for the value of an EnvVar.`,
	properties: {
		configMapKeyRef: {
	type: 'io_k8s_api_core_v1_ConfigMapKeySelector',
	description: `Selects a key of a ConfigMap.`,
},
		fieldRef: {
	type: 'io_k8s_api_core_v1_ObjectFieldSelector',
	description: `Selects a field of the pod: supports metadata.name, metadata.namespace, \`metadata.labels['<KEY>']\`, \`metadata.annotations['<KEY>']\`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.`,
},
		resourceFieldRef: {
	type: 'io_k8s_api_core_v1_ResourceFieldSelector',
	description: `Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.`,
},
		secretKeyRef: {
	type: 'io_k8s_api_core_v1_SecretKeySelector',
	description: `Selects a key of a secret in the pod's namespace`,
},
	},
} as const;