export const $io_k8s_api_networking_v1_HTTPIngressRuleValue = {
	description: `HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.`,
	properties: {
		paths: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_networking_v1_HTTPIngressPath',
	},
	isRequired: true,
},
	},
} as const;