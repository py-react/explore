export const $io_cert_manager_v1_Certificate = {
	description: `A Certificate resource should be created to ensure an up to date and signed
X.509 certificate is stored in the Kubernetes Secret resource named in \`spec.secretName\`.


The stored certificate will be renewed before it expires (as configured by \`spec.renewBefore\`).`,
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
	description: `Specification of the desired state of the Certificate resource.
https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status`,
	properties: {
		additionalOutputFormats: {
	type: 'array',
	contains: {
	description: `CertificateAdditionalOutputFormat defines an additional output format of a
Certificate resource. These contain supplementary data formats of the signed
certificate chain and paired private key.`,
	properties: {
		type: {
	type: 'Enum',
	isRequired: true,
},
	},
},
},
		commonName: {
	type: 'string',
	description: `Requested common name X509 certificate subject attribute.
More info: https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.6
NOTE: TLS clients will ignore this value when any subject alternative name is
set (see https://tools.ietf.org/html/rfc6125#section-6.4.4).


Should have a length of 64 characters or fewer to avoid generating invalid CSRs.
Cannot be set if the \`literalSubject\` field is set.`,
},
		dnsNames: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		duration: {
	type: 'string',
	description: `Requested 'duration' (i.e. lifetime) of the Certificate. Note that the
issuer may choose to ignore the requested duration, just like any other
requested attribute.


If unset, this defaults to 90 days.
Minimum accepted duration is 1 hour.
Value must be in units accepted by Go time.ParseDuration https://golang.org/pkg/time/#ParseDuration.`,
},
		emailAddresses: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		encodeUsagesInRequest: {
	type: 'boolean',
	description: `Whether the KeyUsage and ExtKeyUsage extensions should be set in the encoded CSR.


This option defaults to true, and should only be disabled if the target
issuer does not support CSRs with these X509 KeyUsage/ ExtKeyUsage extensions.`,
},
		ipAddresses: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		isCA: {
	type: 'boolean',
	description: `Requested basic constraints isCA value.
The isCA value is used to set the \`isCA\` field on the created CertificateRequest
resources. Note that the issuer may choose to ignore the requested isCA value, just
like any other requested attribute.


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
		keystores: {
	description: `Additional keystore output formats to be stored in the Certificate's Secret.`,
	properties: {
		jks: {
	description: `JKS configures options for storing a JKS keystore in the
\`spec.secretName\` Secret resource.`,
	properties: {
		alias: {
	type: 'string',
	description: `Alias specifies the alias of the key in the keystore, required by the JKS format.
If not provided, the default alias \`certificate\` will be used.`,
},
		create: {
	type: 'boolean',
	description: `Create enables JKS keystore creation for the Certificate.
If true, a file named \`keystore.jks\` will be created in the target
Secret resource, encrypted using the password stored in
\`passwordSecretRef\`.
The keystore file will be updated immediately.
If the issuer provided a CA certificate, a file named \`truststore.jks\`
will also be created in the target Secret resource, encrypted using the
password stored in \`passwordSecretRef\`
containing the issuing Certificate Authority`,
	isRequired: true,
},
		passwordSecretRef: {
	description: `PasswordSecretRef is a reference to a key in a Secret resource
containing the password used to encrypt the JKS keystore.`,
	properties: {
		key: {
	type: 'string',
	description: `The key of the entry in the Secret resource's \`data\` field to be used.
Some instances of this field may be defaulted, in others it may be
required.`,
},
		name: {
	type: 'string',
	description: `Name of the resource being referred to.
More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names`,
	isRequired: true,
},
	},
	isRequired: true,
},
	},
},
		pkcs12: {
	description: `PKCS12 configures options for storing a PKCS12 keystore in the
\`spec.secretName\` Secret resource.`,
	properties: {
		create: {
	type: 'boolean',
	description: `Create enables PKCS12 keystore creation for the Certificate.
If true, a file named \`keystore.p12\` will be created in the target
Secret resource, encrypted using the password stored in
\`passwordSecretRef\`.
The keystore file will be updated immediately.
If the issuer provided a CA certificate, a file named \`truststore.p12\` will
also be created in the target Secret resource, encrypted using the
password stored in \`passwordSecretRef\` containing the issuing Certificate
Authority`,
	isRequired: true,
},
		passwordSecretRef: {
	description: `PasswordSecretRef is a reference to a key in a Secret resource
containing the password used to encrypt the PKCS12 keystore.`,
	properties: {
		key: {
	type: 'string',
	description: `The key of the entry in the Secret resource's \`data\` field to be used.
Some instances of this field may be defaulted, in others it may be
required.`,
},
		name: {
	type: 'string',
	description: `Name of the resource being referred to.
More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names`,
	isRequired: true,
},
	},
	isRequired: true,
},
		profile: {
	type: 'Enum',
},
	},
},
	},
},
		literalSubject: {
	type: 'string',
	description: `Requested X.509 certificate subject, represented using the LDAP "String
Representation of a Distinguished Name" [1].
Important: the LDAP string format also specifies the order of the attributes
in the subject, this is important when issuing certs for LDAP authentication.
Example: \`CN=foo,DC=corp,DC=example,DC=com\`
More info [1]: https://datatracker.ietf.org/doc/html/rfc4514
More info: https://github.com/cert-manager/cert-manager/issues/3203
More info: https://github.com/cert-manager/cert-manager/issues/4424


Cannot be set if the \`subject\` or \`commonName\` field is set.`,
},
		nameConstraints: {
	description: `x.509 certificate NameConstraint extension which MUST NOT be used in a non-CA certificate.
More Info: https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.10


This is an Alpha Feature and is only enabled with the
\`--feature-gates=NameConstraints=true\` option set on both
the controller and webhook components.`,
	properties: {
		critical: {
	type: 'boolean',
	description: `if true then the name constraints are marked critical.`,
},
		excluded: {
	description: `Excluded contains the constraints which must be disallowed. Any name matching a
restriction in the excluded field is invalid regardless
of information appearing in the permitted`,
	properties: {
		dnsDomains: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		emailAddresses: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		ipRanges: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		uriDomains: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
		permitted: {
	description: `Permitted contains the constraints in which the names must be located.`,
	properties: {
		dnsDomains: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		emailAddresses: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		ipRanges: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		uriDomains: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
	},
},
		otherNames: {
	type: 'array',
	contains: {
	properties: {
		oid: {
	type: 'string',
	description: `OID is the object identifier for the otherName SAN.
The object identifier must be expressed as a dotted string, for
example, "1.2.840.113556.1.4.221".`,
},
		utf8Value: {
	type: 'string',
	description: `utf8Value is the string value of the otherName SAN.
The utf8Value accepts any valid UTF8 string to set as value for the otherName SAN.`,
},
	},
},
},
		privateKey: {
	description: `Private key options. These include the key algorithm and size, the used
encoding and the rotation policy.`,
	properties: {
		algorithm: {
	type: 'Enum',
},
		encoding: {
	type: 'Enum',
},
		rotationPolicy: {
	type: 'Enum',
},
		size: {
	type: 'number',
	description: `Size is the key bit size of the corresponding private key for this certificate.


If \`algorithm\` is set to \`RSA\`, valid values are \`2048\`, \`4096\` or \`8192\`,
and will default to \`2048\` if not specified.
If \`algorithm\` is set to \`ECDSA\`, valid values are \`256\`, \`384\` or \`521\`,
and will default to \`256\` if not specified.
If \`algorithm\` is set to \`Ed25519\`, Size is ignored.
No other values are allowed.`,
},
	},
},
		renewBefore: {
	type: 'string',
	description: `How long before the currently issued certificate's expiry cert-manager should
renew the certificate. For example, if a certificate is valid for 60 minutes,
and \`renewBefore=10m\`, cert-manager will begin to attempt to renew the certificate
50 minutes after it was issued (i.e. when there are 10 minutes remaining until
the certificate is no longer valid).


NOTE: The actual lifetime of the issued certificate is used to determine the
renewal time. If an issuer returns a certificate with a different lifetime than
the one requested, cert-manager will use the lifetime of the issued certificate.


If unset, this defaults to 1/3 of the issued certificate's lifetime.
Minimum accepted value is 5 minutes.
Value must be in units accepted by Go time.ParseDuration https://golang.org/pkg/time/#ParseDuration.`,
},
		revisionHistoryLimit: {
	type: 'number',
	description: `The maximum number of CertificateRequest revisions that are maintained in
the Certificate's history. Each revision represents a single \`CertificateRequest\`
created by this Certificate, either when it was created, renewed, or Spec
was changed. Revisions will be removed by oldest first if the number of
revisions exceeds this number.


If set, revisionHistoryLimit must be a value of \`1\` or greater.
If unset (\`nil\`), revisions will not be garbage collected.
Default value is \`nil\`.`,
	format: 'int32',
},
		secretName: {
	type: 'string',
	description: `Name of the Secret resource that will be automatically created and
managed by this Certificate resource. It will be populated with a
private key and certificate, signed by the denoted issuer. The Secret
resource lives in the same namespace as the Certificate resource.`,
	isRequired: true,
},
		secretTemplate: {
	description: `Defines annotations and labels to be copied to the Certificate's Secret.
Labels and annotations on the Secret will be changed as they appear on the
SecretTemplate when added or removed. SecretTemplate annotations are added
in conjunction with, and cannot overwrite, the base set of annotations
cert-manager sets on the Certificate's Secret.`,
	properties: {
		annotations: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		labels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
	},
},
		subject: {
	description: `Requested set of X509 certificate subject attributes.
More info: https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.6


The common name attribute is specified separately in the \`commonName\` field.
Cannot be set if the \`literalSubject\` field is set.`,
	properties: {
		countries: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		localities: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		organizationalUnits: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		organizations: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		postalCodes: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		provinces: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		serialNumber: {
	type: 'string',
	description: `Serial number to be used on the Certificate.`,
},
		streetAddresses: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
		uris: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		usages: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
	},
},
		status: {
	description: `Status of the Certificate.
This is set and managed automatically.
Read-only.
More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status`,
	properties: {
		conditions: {
	type: 'array',
	contains: {
	description: `CertificateCondition contains condition information for an Certificate.`,
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
		observedGeneration: {
	type: 'number',
	description: `If set, this represents the .metadata.generation that the condition was
set based upon.
For instance, if .metadata.generation is currently 12, but the
.status.condition[x].observedGeneration is 9, the condition is out of date
with respect to the current state of the Certificate.`,
	format: 'int64',
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
	description: `Type of the condition, known values are (\`Ready\`, \`Issuing\`).`,
	isRequired: true,
},
	},
},
},
		failedIssuanceAttempts: {
	type: 'number',
	description: `The number of continuous failed issuance attempts up till now. This
field gets removed (if set) on a successful issuance and gets set to
1 if unset and an issuance has failed. If an issuance has failed, the
delay till the next issuance will be calculated using formula
time.Hour * 2 ^ (failedIssuanceAttempts - 1).`,
},
		lastFailureTime: {
	type: 'string',
	description: `LastFailureTime is set only if the lastest issuance for this
Certificate failed and contains the time of the failure. If an
issuance has failed, the delay till the next issuance will be
calculated using formula time.Hour * 2 ^ (failedIssuanceAttempts -
1). If the latest issuance has succeeded this field will be unset.`,
	format: 'date-time',
},
		nextPrivateKeySecretName: {
	type: 'string',
	description: `The name of the Secret resource containing the private key to be used
for the next certificate iteration.
The keymanager controller will automatically set this field if the
\`Issuing\` condition is set to \`True\`.
It will automatically unset this field when the Issuing condition is
not set or False.`,
},
		notAfter: {
	type: 'string',
	description: `The expiration time of the certificate stored in the secret named
by this resource in \`spec.secretName\`.`,
	format: 'date-time',
},
		notBefore: {
	type: 'string',
	description: `The time after which the certificate stored in the secret named
by this resource in \`spec.secretName\` is valid.`,
	format: 'date-time',
},
		renewalTime: {
	type: 'string',
	description: `RenewalTime is the time at which the certificate will be next
renewed.
If not set, no upcoming renewal is scheduled.`,
	format: 'date-time',
},
		revision: {
	type: 'number',
	description: `The current 'revision' of the certificate as issued.


When a CertificateRequest resource is created, it will have the
\`cert-manager.io/certificate-revision\` set to one greater than the
current value of this field.


Upon issuance, this field will be set to the value of the annotation
on the CertificateRequest resource used to issue the certificate.


Persisting the value on the CertificateRequest resource allows the
certificates controller to know whether a request is part of an old
issuance or if it is part of the ongoing revision's issuance by
checking if the revision value in the annotation is greater than this
field.`,
},
	},
},
	},
} as const;