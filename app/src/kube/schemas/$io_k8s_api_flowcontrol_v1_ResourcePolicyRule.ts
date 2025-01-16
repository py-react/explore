export const $io_k8s_api_flowcontrol_v1_ResourcePolicyRule = {
	description: `ResourcePolicyRule is a predicate that matches some resource requests, testing the request's verb and the target resource. A ResourcePolicyRule matches a resource request if and only if: (a) at least one member of verbs matches the request, (b) at least one member of apiGroups matches the request, (c) at least one member of resources matches the request, and (d) either (d1) the request does not specify a namespace (i.e., \`Namespace==""\`) and clusterScope is true or (d2) the request specifies a namespace and least one member of namespaces matches the request's namespace.`,
	properties: {
		apiGroups: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
		clusterScope: {
	type: 'boolean',
	description: `\`clusterScope\` indicates whether to match requests that do not specify a namespace (which happens either because the resource is not namespaced or the request targets all namespaces). If this field is omitted or false then the \`namespaces\` field must contain a non-empty list.`,
},
		namespaces: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		resources: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
		verbs: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
	},
} as const;