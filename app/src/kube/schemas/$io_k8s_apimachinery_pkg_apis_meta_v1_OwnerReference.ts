export const $io_k8s_apimachinery_pkg_apis_meta_v1_OwnerReference = {
	description: `OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `API version of the referent.`,
	isRequired: true,
},
		blockOwnerDeletion: {
	type: 'boolean',
	description: `If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.`,
},
		controller: {
	type: 'boolean',
	description: `If true, this reference points to the managing controller.`,
},
		kind: {
	type: 'string',
	description: `Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
	isRequired: true,
},
		name: {
	type: 'string',
	description: `Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names`,
	isRequired: true,
},
		uid: {
	type: 'string',
	description: `UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids`,
	isRequired: true,
},
	},
} as const;