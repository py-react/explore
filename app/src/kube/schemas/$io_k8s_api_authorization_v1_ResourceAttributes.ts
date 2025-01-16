export const $io_k8s_api_authorization_v1_ResourceAttributes = {
	description: `ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface`,
	properties: {
		group: {
	type: 'string',
	description: `Group is the API Group of the Resource.  "*" means all.`,
},
		name: {
	type: 'string',
	description: `Name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all.`,
},
		namespace: {
	type: 'string',
	description: `Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview`,
},
		resource: {
	type: 'string',
	description: `Resource is one of the existing resource types.  "*" means all.`,
},
		subresource: {
	type: 'string',
	description: `Subresource is one of the existing resource types.  "" means none.`,
},
		verb: {
	type: 'string',
	description: `Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all.`,
},
		version: {
	type: 'string',
	description: `Version is the API Version of the Resource.  "*" means all.`,
},
	},
} as const;