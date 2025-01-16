export const $io_cert_manager_acme_v1_Order = {
	description: `Order is a type to represent an Order with an ACME server`,
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
	isRequired: true,
},
		spec: {
	properties: {
		commonName: {
	type: 'string',
	description: `CommonName is the common name as specified on the DER encoded CSR.
If specified, this value must also be present in \`dnsNames\` or \`ipAddresses\`.
This field must match the corresponding field on the DER encoded CSR.`,
},
		dnsNames: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		duration: {
	type: 'string',
	description: `Duration is the duration for the not after date for the requested certificate.
this is set on order creation as pe the ACME spec.`,
},
		ipAddresses: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		issuerRef: {
	description: `IssuerRef references a properly configured ACME-type Issuer which should
be used to create this Order.
If the Issuer does not exist, processing will be retried.
If the Issuer is not an 'ACME' Issuer, an error will be returned and the
Order will be marked as failed.`,
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
	description: `Certificate signing request bytes in DER encoding.
This will be used when finalizing the order.
This field must be set on the order.`,
	isRequired: true,
	format: 'byte',
},
	},
	isRequired: true,
},
		status: {
	properties: {
		authorizations: {
	type: 'array',
	contains: {
	description: `ACMEAuthorization contains data returned from the ACME server on an
authorization that must be completed in order validate a DNS name on an ACME
Order resource.`,
	properties: {
		challenges: {
	type: 'array',
	contains: {
	description: `Challenge specifies a challenge offered by the ACME server for an Order.
An appropriate Challenge resource can be created to perform the ACME
challenge process.`,
	properties: {
		token: {
	type: 'string',
	description: `Token is the token that must be presented for this challenge.
This is used to compute the 'key' that must also be presented.`,
	isRequired: true,
},
		type: {
	type: 'string',
	description: `Type is the type of challenge being offered, e.g. 'http-01', 'dns-01',
'tls-sni-01', etc.
This is the raw value retrieved from the ACME server.
Only 'http-01' and 'dns-01' are supported by cert-manager, other values
will be ignored.`,
	isRequired: true,
},
		url: {
	type: 'string',
	description: `URL is the URL of this challenge. It can be used to retrieve additional
metadata about the Challenge from the ACME server.`,
	isRequired: true,
},
	},
},
},
		identifier: {
	type: 'string',
	description: `Identifier is the DNS name to be validated as part of this authorization`,
},
		initialState: {
	type: 'Enum',
},
		url: {
	type: 'string',
	description: `URL is the URL of the Authorization that must be completed`,
	isRequired: true,
},
		wildcard: {
	type: 'boolean',
	description: `Wildcard will be true if this authorization is for a wildcard DNS name.
If this is true, the identifier will be the *non-wildcard* version of
the DNS name.
For example, if '*.example.com' is the DNS name being validated, this
field will be 'true' and the 'identifier' field will be 'example.com'.`,
},
	},
},
},
		certificate: {
	type: 'string',
	description: `Certificate is a copy of the PEM encoded certificate for this Order.
This field will be populated after the order has been successfully
finalized with the ACME server, and the order has transitioned to the
'valid' state.`,
	format: 'byte',
},
		failureTime: {
	type: 'string',
	description: `FailureTime stores the time that this order failed.
This is used to influence garbage collection and back-off.`,
	format: 'date-time',
},
		finalizeURL: {
	type: 'string',
	description: `FinalizeURL of the Order.
This is used to obtain certificates for this order once it has been completed.`,
},
		reason: {
	type: 'string',
	description: `Reason optionally provides more information about a why the order is in
the current state.`,
},
		state: {
	type: 'Enum',
},
		url: {
	type: 'string',
	description: `URL of the Order.
This will initially be empty when the resource is first created.
The Order controller will populate this field when the Order is first processed.
This field will be immutable after it is initially set.`,
},
	},
},
	},
} as const;