export const $io_k8s_api_networking_v1_IngressTLS = {
	description: `IngressTLS describes the transport layer security associated with an ingress.`,
	properties: {
		hosts: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		secretName: {
	type: 'string',
	description: `secretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the "Host" header is used for routing.`,
},
	},
} as const;