export const $io_k8s_api_core_v1_PersistentVolumeStatus = {
	description: `PersistentVolumeStatus is the current status of a persistent volume.`,
	properties: {
		lastPhaseTransitionTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `lastPhaseTransitionTime is the time the phase transitioned from one to another and automatically resets to current time everytime a volume phase transitions. This is a beta field and requires the PersistentVolumeLastPhaseTransitionTime feature to be enabled (enabled by default).`,
},
		message: {
	type: 'string',
	description: `message is a human-readable message indicating details about why the volume is in this state.`,
},
		phase: {
	type: 'Enum',
},
		reason: {
	type: 'string',
	description: `reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI.`,
},
	},
} as const;