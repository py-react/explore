export const $io_k8s_api_certificates_v1_CertificateSigningRequestCondition = {
	description: `CertificateSigningRequestCondition describes a condition of a CertificateSigningRequest object`,
	properties: {
		lastTransitionTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `lastTransitionTime is the time the condition last transitioned from one status to another. If unset, when a new condition type is added or an existing condition's status is changed, the server defaults this to the current time.`,
},
		lastUpdateTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `lastUpdateTime is the time of the last update to this condition`,
},
		message: {
	type: 'string',
	description: `message contains a human readable message with details about the request state`,
},
		reason: {
	type: 'string',
	description: `reason indicates a brief reason for the request state`,
},
		status: {
	type: 'string',
	description: `status of the condition, one of True, False, Unknown. Approved, Denied, and Failed conditions may not be "False" or "Unknown".`,
	isRequired: true,
},
		type: {
	type: 'string',
	description: `type of the condition. Known conditions are "Approved", "Denied", and "Failed".

An "Approved" condition is added via the /approval subresource, indicating the request was approved and should be issued by the signer.

A "Denied" condition is added via the /approval subresource, indicating the request was denied and should not be issued by the signer.

A "Failed" condition is added via the /status subresource, indicating the signer failed to issue the certificate.

Approved and Denied conditions are mutually exclusive. Approved, Denied, and Failed conditions cannot be removed once added.

Only one condition of a given type is allowed.`,
	isRequired: true,
},
	},
} as const;