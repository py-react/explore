export const $io_k8s_api_apps_v1_StatefulSetPersistentVolumeClaimRetentionPolicy = {
	description: `StatefulSetPersistentVolumeClaimRetentionPolicy describes the policy used for PVCs created from the StatefulSet VolumeClaimTemplates.`,
	properties: {
		whenDeleted: {
	type: 'string',
	description: `WhenDeleted specifies what happens to PVCs created from StatefulSet VolumeClaimTemplates when the StatefulSet is deleted. The default policy of \`Retain\` causes PVCs to not be affected by StatefulSet deletion. The \`Delete\` policy causes those PVCs to be deleted.`,
},
		whenScaled: {
	type: 'string',
	description: `WhenScaled specifies what happens to PVCs created from StatefulSet VolumeClaimTemplates when the StatefulSet is scaled down. The default policy of \`Retain\` causes PVCs to not be affected by a scaledown. The \`Delete\` policy causes the associated PVCs for any excess pods above the replica count to be deleted.`,
},
	},
} as const;