export const $io_k8s_api_core_v1_VolumeMount = {
	description: `VolumeMount describes a mounting of a Volume within a container.`,
	properties: {
		mountPath: {
	type: 'string',
	description: `Path within the container at which the volume should be mounted.  Must not contain ':'.`,
	isRequired: true,
},
		mountPropagation: {
	type: 'Enum',
},
		name: {
	type: 'string',
	description: `This must match the Name of a Volume.`,
	isRequired: true,
},
		readOnly: {
	type: 'boolean',
	description: `Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.`,
},
		recursiveReadOnly: {
	type: 'string',
	description: `RecursiveReadOnly specifies whether read-only mounts should be handled recursively.

If ReadOnly is false, this field has no meaning and must be unspecified.

If ReadOnly is true, and this field is set to Disabled, the mount is not made recursively read-only.  If this field is set to IfPossible, the mount is made recursively read-only, if it is supported by the container runtime.  If this field is set to Enabled, the mount is made recursively read-only if it is supported by the container runtime, otherwise the pod will not be started and an error will be generated to indicate the reason.

If this field is set to IfPossible or Enabled, MountPropagation must be set to None (or be unspecified, which defaults to None).

If this field is not specified, it is treated as an equivalent of Disabled.`,
},
		subPath: {
	type: 'string',
	description: `Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).`,
},
		subPathExpr: {
	type: 'string',
	description: `Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive.`,
},
	},
} as const;