export const $io_k8s_api_apps_v1_DeploymentSpec = {
	description: `DeploymentSpec is the specification of the desired behavior of the Deployment.`,
	properties: {
		minReadySeconds: {
	type: 'number',
	description: `Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)`,
	format: 'int32',
},
		paused: {
	type: 'boolean',
	description: `Indicates that the deployment is paused.`,
},
		progressDeadlineSeconds: {
	type: 'number',
	description: `The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.`,
	format: 'int32',
},
		replicas: {
	type: 'number',
	description: `Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.`,
	format: 'int32',
},
		revisionHistoryLimit: {
	type: 'number',
	description: `The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.`,
	format: 'int32',
},
		selector: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector',
	description: `Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. It must match the pod template's labels.`,
	isRequired: true,
},
		strategy: {
	type: 'io_k8s_api_apps_v1_DeploymentStrategy',
	description: `The deployment strategy to use to replace existing pods with new ones.`,
},
		template: {
	type: 'io_k8s_api_core_v1_PodTemplateSpec',
	description: `Template describes the pods that will be created. The only allowed template.spec.restartPolicy value is "Always".`,
	isRequired: true,
},
	},
} as const;