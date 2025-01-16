export const $io_k8s_api_core_v1_SecretVolumeSource = {
	description: `Adapts a Secret into a volume.

The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.`,
	properties: {
		defaultMode: {
	type: 'number',
	description: `defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.`,
	format: 'int32',
},
		items: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_KeyToPath',
	},
},
		optional: {
	type: 'boolean',
	description: `optional field specify whether the Secret or its keys must be defined`,
},
		secretName: {
	type: 'string',
	description: `secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret`,
},
	},
} as const;