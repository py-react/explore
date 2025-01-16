export const $io_k8s_api_core_v1_GitRepoVolumeSource = {
	description: `Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.

DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.`,
	properties: {
		directory: {
	type: 'string',
	description: `directory is the target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.`,
},
		repository: {
	type: 'string',
	description: `repository is the URL`,
	isRequired: true,
},
		revision: {
	type: 'string',
	description: `revision is the commit hash for the specified revision.`,
},
	},
} as const;