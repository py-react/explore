export const $io_k8s_api_core_v1_Affinity = {
	description: `Affinity is a group of affinity scheduling rules.`,
	properties: {
		nodeAffinity: {
	type: 'io_k8s_api_core_v1_NodeAffinity',
	description: `Describes node affinity scheduling rules for the pod.`,
},
		podAffinity: {
	type: 'io_k8s_api_core_v1_PodAffinity',
	description: `Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).`,
},
		podAntiAffinity: {
	type: 'io_k8s_api_core_v1_PodAntiAffinity',
	description: `Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).`,
},
	},
} as const;