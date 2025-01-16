export const $io_k8s_api_apps_v1_ReplicaSetSpec = {
	description: `ReplicaSetSpec is the specification of a ReplicaSet.`,
	properties: {
		minReadySeconds: {
	type: 'number',
	description: `Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)`,
	format: 'int32',
},
		replicas: {
	type: 'number',
	description: `Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller`,
	format: 'int32',
},
		selector: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector',
	description: `Selector is a label query over pods that should match the replica count. Label keys and values that must match in order to be controlled by this replica set. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors`,
	isRequired: true,
},
		template: {
	type: 'io_k8s_api_core_v1_PodTemplateSpec',
	description: `Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template`,
},
	},
} as const;