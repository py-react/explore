export const $io_k8s_api_apps_v1_StatefulSetSpec = {
	description: `A StatefulSetSpec is the specification of a StatefulSet.`,
	properties: {
		minReadySeconds: {
	type: 'number',
	description: `Minimum number of seconds for which a newly created pod should be ready without any of its container crashing for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)`,
	format: 'int32',
},
		ordinals: {
	type: 'io_k8s_api_apps_v1_StatefulSetOrdinals',
	description: `ordinals controls the numbering of replica indices in a StatefulSet. The default ordinals behavior assigns a "0" index to the first replica and increments the index by one for each additional replica requested. Using the ordinals field requires the StatefulSetStartOrdinal feature gate to be enabled, which is beta.`,
},
		persistentVolumeClaimRetentionPolicy: {
	type: 'io_k8s_api_apps_v1_StatefulSetPersistentVolumeClaimRetentionPolicy',
	description: `persistentVolumeClaimRetentionPolicy describes the lifecycle of persistent volume claims created from volumeClaimTemplates. By default, all persistent volume claims are created as needed and retained until manually deleted. This policy allows the lifecycle to be altered, for example by deleting persistent volume claims when their stateful set is deleted, or when their pod is scaled down. This requires the StatefulSetAutoDeletePVC feature gate to be enabled, which is alpha.  +optional`,
},
		podManagementPolicy: {
	type: 'Enum',
},
		replicas: {
	type: 'number',
	description: `replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.`,
	format: 'int32',
},
		revisionHistoryLimit: {
	type: 'number',
	description: `revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10.`,
	format: 'int32',
},
		selector: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector',
	description: `selector is a label query over pods that should match the replica count. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors`,
	isRequired: true,
},
		serviceName: {
	type: 'string',
	description: `serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller.`,
	isRequired: true,
},
		template: {
	type: 'io_k8s_api_core_v1_PodTemplateSpec',
	description: `template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet. Each pod will be named with the format <statefulsetname>-<podindex>. For example, a pod in a StatefulSet named "web" with index number "3" would be named "web-3". The only allowed template.spec.restartPolicy value is "Always".`,
	isRequired: true,
},
		updateStrategy: {
	type: 'io_k8s_api_apps_v1_StatefulSetUpdateStrategy',
	description: `updateStrategy indicates the StatefulSetUpdateStrategy that will be employed to update Pods in the StatefulSet when a revision is made to Template.`,
},
		volumeClaimTemplates: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_PersistentVolumeClaim',
	},
},
	},
} as const;