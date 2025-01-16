export const $io_k8s_api_core_v1_PersistentVolumeClaimTemplate = {
	description: `PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.`,
	properties: {
		metadata: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta',
	description: `May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.`,
},
		spec: {
	type: 'io_k8s_api_core_v1_PersistentVolumeClaimSpec',
	description: `The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.`,
	isRequired: true,
},
	},
} as const;