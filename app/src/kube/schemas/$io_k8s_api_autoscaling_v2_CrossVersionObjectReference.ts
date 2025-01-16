export const $io_k8s_api_autoscaling_v2_CrossVersionObjectReference = {
	description: `CrossVersionObjectReference contains enough information to let you identify the referred resource.`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `apiVersion is the API version of the referent`,
},
		kind: {
	type: 'string',
	description: `kind is the kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
	isRequired: true,
},
		name: {
	type: 'string',
	description: `name is the name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names`,
	isRequired: true,
},
	},
} as const;