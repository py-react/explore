export const $io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources = {
	description: `CustomResourceSubresources defines the status and scale subresources for CustomResources.`,
	properties: {
		scale: {
	type: 'io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceScale',
	description: `scale indicates the custom resource should serve a \`/scale\` subresource that returns an \`autoscaling/v1\` Scale object.`,
},
		status: {
	type: 'io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceStatus',
	description: `status indicates the custom resource should serve a \`/status\` subresource. When enabled: 1. requests to the custom resource primary endpoint ignore changes to the \`status\` stanza of the object. 2. requests to the custom resource \`/status\` subresource ignore changes to anything other than the \`status\` stanza of the object.`,
},
	},
} as const;