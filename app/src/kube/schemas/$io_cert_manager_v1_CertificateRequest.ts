export const $io_cert_manager_v1_CertificateRequest = {
	description: `A CertificateRequest is used to request a signed certificate from one of the
configured issuers.


All fields within the CertificateRequest's \`spec\` are immutable after creation.
A CertificateRequest will either succeed or fail, as denoted by its \`Ready\` status
condition and its \`status.failureTime\` field.


A CertificateRequest is a one-shot resource, meaning it represents a single
point in time request for a certificate and cannot be re-used.`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources`,
},
		kind: {
	type: 'string',
	description: `Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		metadata: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta',
	description: `Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata`,
},
		spec: {
	description: `Specification of the desired state of the CertificateRequest resource.
https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status`,
	properties: {
		duration: {
	type: 'string',
	description: `Requested 'duration' (i.e. lifetime) of the Certificate. Note that the
issuer may choose to ignore the requested duration, just like any other
requested attribute.`,
},
		extra: {
	type: 'dictionary',
	contains: {
	type: 'array',
	contains: {
	type: 'string',
},
},
},
		groups: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		isCA: {
	type: 'boolean',
	description: `Requested basic constraints isCA value. Note that the issuer may choose
to ignore the requested isCA value, just like any other requested attribute.


NOTE: If the CSR in the \`Request\` field has a BasicConstraints extension,
it must have the same isCA value as specified here.


If true, this will automatically add the \`cert sign\` usage to the list
of requested \`usages\`.`,
},
		issuerRef: {
	description: `Reference to the issuer responsible for issuing the certificate.
If the issuer is namespace-scoped, it must be in the same namespace
as the Certificate. If the issuer is cluster-scoped, it can be used
from any namespace.


The \`name\` field of the reference must always be specified.`,
	properties: {
		group: {
	type: 'string',
	description: `Group of the resource being referred to.`,
},
		kind: {
	type: 'string',
	description: `Kind of the resource being referred to.`,
},
		name: {
	type: 'string',
	description: `Name of the resource being referred to.`,
	isRequired: true,
},
	},
	isRequired: true,
},
		request: {
	type: 'string',
	description: `The PEM-encoded X.509 certificate signing request to be submitted to the
issuer for signing.


If the CSR has a BasicConstraints extension, its isCA attribute must
match the \`isCA\` value of this CertificateRequest.
If the CSR has a KeyUsage extension, its key usages must match the
key usages in the \`usages\` field of this CertificateRequest.
If the CSR has a ExtKeyUsage extension, its extended key usages
must match the extended key usages in the \`usages\` field of this
CertificateRequest.`,
	isRequired: true,
	format: 'byte',
},
		uid: {
	type: 'string',
	description: `UID contains the uid of the user that created the CertificateRequest.
Populated by the cert-manager webhook on creation and immutable.`,
},
		usages: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
		username: {
	type: 'string',
	description: `Username contains the name of the user that created the CertificateRequest.
Populated by the cert-manager webhook on creation and immutable.`,
},
	},
},
		status: {
	description: `Status of the CertificateRequest.
This is set and managed automatically.
Read-only.
More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status`,
	properties: {
		ca: {
	type: 'string',
	description: `The PEM encoded X.509 certificate of the signer, also known as the CA
(Certificate Authority).
This is set on a best-effort basis by different issuers.
If not set, the CA is assumed to be unknown/not available.`,
	format: 'byte',
},
		certificate: {
	type: 'string',
	description: `The PEM encoded X.509 certificate resulting from the certificate
signing request.
If not set, the CertificateRequest has either not been completed or has
failed. More information on failure can be found by checking the
\`conditions\` field.`,
	format: 'byte',
},
		conditions: {
	type: 'array',
	contains: {
	description: `CertificateRequestCondition contains condition information for a CertificateRequest.`,
	properties: {
		lastTransitionTime: {
	type: 'string',
	description: `LastTransitionTime is the timestamp corresponding to the last status
change of this condition.`,
	format: 'date-time',
},
		message: {
	type: 'string',
	description: `Message is a human readable description of the details of the last
transition, complementing reason.`,
},
		reason: {
	type: 'string',
	description: `Reason is a brief machine readable explanation for the condition's last
transition.`,
},
		status: {
	type: 'Enum',
	isRequired: true,
},
		type: {
	type: 'string',
	description: `Type of the condition, known values are (\`Ready\`, \`InvalidRequest\`,
\`Approved\`, \`Denied\`).`,
	isRequired: true,
},
	},
},
},
		failureTime: {
	type: 'string',
	description: `FailureTime stores the time that this CertificateRequest failed. This is
used to influence garbage collection and back-off.`,
	format: 'date-time',
},
	},
},
	},
} as const;