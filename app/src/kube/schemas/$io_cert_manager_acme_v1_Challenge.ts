export const $io_cert_manager_acme_v1_Challenge = {
	description: `Challenge is a type to represent a Challenge request with an ACME server`,
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
		authorizationURL: {
	type: 'string',
	description: `The URL to the ACME Authorization resource that this
challenge is a part of.`,
	isRequired: true,
},
		dnsName: {
	type: 'string',
	description: `dnsName is the identifier that this challenge is for, e.g. example.com.
If the requested DNSName is a 'wildcard', this field MUST be set to the
non-wildcard domain, e.g. for \`*.example.com\`, it must be \`example.com\`.`,
	isRequired: true,
},
		issuerRef: {
	description: `References a properly configured ACME-type Issuer which should
be used to create this Challenge.
If the Issuer does not exist, processing will be retried.
If the Issuer is not an 'ACME' Issuer, an error will be returned and the
Challenge will be marked as failed.`,
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
		key: {
	type: 'string',
	description: `The ACME challenge key for this challenge
For HTTP01 challenges, this is the value that must be responded with to
complete the HTTP01 challenge in the format:
\`<private key JWK thumbprint>.<key from acme server for challenge>\`.
For DNS01 challenges, this is the base64 encoded SHA256 sum of the
\`<private key JWK thumbprint>.<key from acme server for challenge>\`
text that must be set as the TXT record content.`,
	isRequired: true,
},
		solver: {
	description: `Contains the domain solving configuration that should be used to
solve this challenge resource.`,
	properties: {
		dns01: {
	description: `Configures cert-manager to attempt to complete authorizations by
performing the DNS01 challenge flow.`,
	properties: {
		acmeDNS: {
	description: `Use the 'ACME DNS' (https://github.com/joohoi/acme-dns) API to manage
DNS01 challenge records.`,
	properties: {
		accountSecretRef: {
	description: `A reference to a specific 'key' within a Secret resource.
In some instances, \`key\` is a required field.`,
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
		host: {
	type: 'string',
	isRequired: true,
},
	},
},
		akamai: {
	description: `Use the Akamai DNS zone management API to manage DNS01 challenge records.`,
	properties: {
		accessTokenSecretRef: {
	description: `A reference to a specific 'key' within a Secret resource.
In some instances, \`key\` is a required field.`,
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
		clientSecretSecretRef: {
	description: `A reference to a specific 'key' within a Secret resource.
In some instances, \`key\` is a required field.`,
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
		clientTokenSecretRef: {
	description: `A reference to a specific 'key' within a Secret resource.
In some instances, \`key\` is a required field.`,
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
		serviceConsumerDomain: {
	type: 'string',
	isRequired: true,
},
	},
},
		azureDNS: {
	description: `Use the Microsoft Azure DNS API to manage DNS01 challenge records.`,
	properties: {
		clientID: {
	type: 'string',
	description: `Auth: Azure Service Principal:
The ClientID of the Azure Service Principal used to authenticate with Azure DNS.
If set, ClientSecret and TenantID must also be set.`,
},
		clientSecretSecretRef: {
	description: `Auth: Azure Service Principal:
A reference to a Secret containing the password associated with the Service Principal.
If set, ClientID and TenantID must also be set.`,
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
},
		environment: {
	type: 'Enum',
},
		hostedZoneName: {
	type: 'string',
	description: `name of the DNS zone that should be used`,
},
		managedIdentity: {
	description: `Auth: Azure Workload Identity or Azure Managed Service Identity:
Settings to enable Azure Workload Identity or Azure Managed Service Identity
If set, ClientID, ClientSecret and TenantID must not be set.`,
	properties: {
		clientID: {
	type: 'string',
	description: `client ID of the managed identity, can not be used at the same time as resourceID`,
},
		resourceID: {
	type: 'string',
	description: `resource ID of the managed identity, can not be used at the same time as clientID
Cannot be used for Azure Managed Service Identity`,
},
	},
},
		resourceGroupName: {
	type: 'string',
	description: `resource group the DNS zone is located in`,
	isRequired: true,
},
		subscriptionID: {
	type: 'string',
	description: `ID of the Azure subscription`,
	isRequired: true,
},
		tenantID: {
	type: 'string',
	description: `Auth: Azure Service Principal:
The TenantID of the Azure Service Principal used to authenticate with Azure DNS.
If set, ClientID and ClientSecret must also be set.`,
},
	},
},
		cloudDNS: {
	description: `Use the Google Cloud DNS API to manage DNS01 challenge records.`,
	properties: {
		hostedZoneName: {
	type: 'string',
	description: `HostedZoneName is an optional field that tells cert-manager in which
Cloud DNS zone the challenge record has to be created.
If left empty cert-manager will automatically choose a zone.`,
},
		project: {
	type: 'string',
	isRequired: true,
},
		serviceAccountSecretRef: {
	description: `A reference to a specific 'key' within a Secret resource.
In some instances, \`key\` is a required field.`,
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
},
	},
},
		cloudflare: {
	description: `Use the Cloudflare API to manage DNS01 challenge records.`,
	properties: {
		apiKeySecretRef: {
	description: `API key to use to authenticate with Cloudflare.
Note: using an API token to authenticate is now the recommended method
as it allows greater control of permissions.`,
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
},
		apiTokenSecretRef: {
	description: `API token used to authenticate with Cloudflare.`,
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
},
		email: {
	type: 'string',
	description: `Email of the account, only required when using API key based authentication.`,
},
	},
},
		cnameStrategy: {
	type: 'Enum',
},
		digitalocean: {
	description: `Use the DigitalOcean DNS API to manage DNS01 challenge records.`,
	properties: {
		tokenSecretRef: {
	description: `A reference to a specific 'key' within a Secret resource.
In some instances, \`key\` is a required field.`,
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
		rfc2136: {
	description: `Use RFC2136 ("Dynamic Updates in the Domain Name System") (https://datatracker.ietf.org/doc/rfc2136/)
to manage DNS01 challenge records.`,
	properties: {
		nameserver: {
	type: 'string',
	description: `The IP address or hostname of an authoritative DNS server supporting
RFC2136 in the form host:port. If the host is an IPv6 address it must be
enclosed in square brackets (e.g [2001:db8::1]) ; port is optional.
This field is required.`,
	isRequired: true,
},
		tsigAlgorithm: {
	type: 'string',
	description: `The TSIG Algorithm configured in the DNS supporting RFC2136. Used only
when \`\`tsigSecretSecretRef\`\` and \`\`tsigKeyName\`\` are defined.
Supported values are (case-insensitive): \`\`HMACMD5\`\` (default),
\`\`HMACSHA1\`\`, \`\`HMACSHA256\`\` or \`\`HMACSHA512\`\`.`,
},
		tsigKeyName: {
	type: 'string',
	description: `The TSIG Key name configured in the DNS.
If \`\`tsigSecretSecretRef\`\` is defined, this field is required.`,
},
		tsigSecretSecretRef: {
	description: `The name of the secret containing the TSIG value.
If \`\`tsigKeyName\`\` is defined, this field is required.`,
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
},
	},
},
		route53: {
	description: `Use the AWS Route53 API to manage DNS01 challenge records.`,
	properties: {
		accessKeyID: {
	type: 'string',
	description: `The AccessKeyID is used for authentication.
Cannot be set when SecretAccessKeyID is set.
If neither the Access Key nor Key ID are set, we fall-back to using env
vars, shared credentials file or AWS Instance metadata,
see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials`,
},
		accessKeyIDSecretRef: {
	description: `The SecretAccessKey is used for authentication. If set, pull the AWS
access key ID from a key within a Kubernetes Secret.
Cannot be set when AccessKeyID is set.
If neither the Access Key nor Key ID are set, we fall-back to using env
vars, shared credentials file or AWS Instance metadata,
see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials`,
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
},
		auth: {
	description: `Auth configures how cert-manager authenticates.`,
	properties: {
		kubernetes: {
	description: `Kubernetes authenticates with Route53 using AssumeRoleWithWebIdentity
by passing a bound ServiceAccount token.`,
	properties: {
		serviceAccountRef: {
	description: `A reference to a service account that will be used to request a bound
token (also known as "projected token"). To use this field, you must
configure an RBAC rule to let cert-manager request a token.`,
	properties: {
		audiences: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		name: {
	type: 'string',
	description: `Name of the ServiceAccount used to request a token.`,
	isRequired: true,
},
	},
	isRequired: true,
},
	},
	isRequired: true,
},
	},
},
		hostedZoneID: {
	type: 'string',
	description: `If set, the provider will manage only this zone in Route53 and will not do an lookup using the route53:ListHostedZonesByName api call.`,
},
		region: {
	type: 'string',
	description: `Always set the region when using AccessKeyID and SecretAccessKey`,
	isRequired: true,
},
		role: {
	type: 'string',
	description: `Role is a Role ARN which the Route53 provider will assume using either the explicit credentials AccessKeyID/SecretAccessKey
or the inferred credentials from environment variables, shared credentials file or AWS Instance metadata`,
},
		secretAccessKeySecretRef: {
	description: `The SecretAccessKey is used for authentication.
If neither the Access Key nor Key ID are set, we fall-back to using env
vars, shared credentials file or AWS Instance metadata,
see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials`,
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
},
	},
},
		webhook: {
	description: `Configure an external webhook based DNS01 challenge solver to manage
DNS01 challenge records.`,
	properties: {
		config: {
	description: `Additional configuration that should be passed to the webhook apiserver
when challenges are processed.
This can contain arbitrary JSON data.
Secret values should not be specified in this stanza.
If secret values are needed (e.g. credentials for a DNS service), you
should use a SecretKeySelector to reference a Secret resource.
For details on the schema of this field, consult the webhook provider
implementation's documentation.`,
	properties: {
	},
},
		groupName: {
	type: 'string',
	description: `The API group name that should be used when POSTing ChallengePayload
resources to the webhook apiserver.
This should be the same as the GroupName specified in the webhook
provider implementation.`,
	isRequired: true,
},
		solverName: {
	type: 'string',
	description: `The name of the solver to use, as defined in the webhook provider
implementation.
This will typically be the name of the provider, e.g. 'cloudflare'.`,
	isRequired: true,
},
	},
},
	},
},
		http01: {
	description: `Configures cert-manager to attempt to complete authorizations by
performing the HTTP01 challenge flow.
It is not possible to obtain certificates for wildcard domain names
(e.g. \`*.example.com\`) using the HTTP01 challenge mechanism.`,
	properties: {
		gatewayHTTPRoute: {
	description: `The Gateway API is a sig-network community API that models service networking
in Kubernetes (https://gateway-api.sigs.k8s.io/). The Gateway solver will
create HTTPRoutes with the specified labels in the same namespace as the challenge.
This solver is experimental, and fields / behaviour may change in the future.`,
	properties: {
		labels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		parentRefs: {
	type: 'array',
	contains: {
	description: `ParentReference identifies an API object (usually a Gateway) that can be considered
a parent of this resource (usually a route). There are two kinds of parent resources
with "Core" support:


* Gateway (Gateway conformance profile)
* Service (Mesh conformance profile, ClusterIP Services only)


This API may be extended in the future to support additional kinds of parent
resources.


The API object must be valid in the cluster; the Group and Kind must
be registered in the cluster for this reference to be valid.`,
	properties: {
		group: {
	type: 'string',
	description: `Group is the group of the referent.
When unspecified, "gateway.networking.k8s.io" is inferred.
To set the core API group (such as for a "Service" kind referent),
Group must be explicitly set to "" (empty string).


Support: Core`,
	maxLength: 253,
	pattern: '^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$',
},
		kind: {
	type: 'string',
	description: `Kind is kind of the referent.


There are two kinds of parent resources with "Core" support:


* Gateway (Gateway conformance profile)
* Service (Mesh conformance profile, ClusterIP Services only)


Support for other resources is Implementation-Specific.`,
	maxLength: 63,
	minLength: 1,
	pattern: '^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$',
},
		name: {
	type: 'string',
	description: `Name is the name of the referent.


Support: Core`,
	isRequired: true,
	maxLength: 253,
	minLength: 1,
},
		namespace: {
	type: 'string',
	description: `Namespace is the namespace of the referent. When unspecified, this refers
to the local namespace of the Route.


Note that there are specific rules for ParentRefs which cross namespace
boundaries. Cross-namespace references are only valid if they are explicitly
allowed by something in the namespace they are referring to. For example:
Gateway has the AllowedRoutes field, and ReferenceGrant provides a
generic way to enable any other kind of cross-namespace reference.


<gateway:experimental:description>
ParentRefs from a Route to a Service in the same namespace are "producer"
routes, which apply default routing rules to inbound connections from
any namespace to the Service.


ParentRefs from a Route to a Service in a different namespace are
"consumer" routes, and these routing rules are only applied to outbound
connections originating from the same namespace as the Route, for which
the intended destination of the connections are a Service targeted as a
ParentRef of the Route.
</gateway:experimental:description>


Support: Core`,
	maxLength: 63,
	minLength: 1,
	pattern: '^[a-z0-9]([-a-z0-9]*[a-z0-9])?$',
},
		port: {
	type: 'number',
	description: `Port is the network port this Route targets. It can be interpreted
differently based on the type of parent resource.


When the parent resource is a Gateway, this targets all listeners
listening on the specified port that also support this kind of Route(and
select this Route). It's not recommended to set \`Port\` unless the
networking behaviors specified in a Route must apply to a specific port
as opposed to a listener(s) whose port(s) may be changed. When both Port
and SectionName are specified, the name and port of the selected listener
must match both specified values.


<gateway:experimental:description>
When the parent resource is a Service, this targets a specific port in the
Service spec. When both Port (experimental) and SectionName are specified,
the name and port of the selected port must match both specified values.
</gateway:experimental:description>


Implementations MAY choose to support other parent resources.
Implementations supporting other types of parent resources MUST clearly
document how/if Port is interpreted.


For the purpose of status, an attachment is considered successful as
long as the parent resource accepts it partially. For example, Gateway
listeners can restrict which Routes can attach to them by Route kind,
namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
from the referencing Route, the Route MUST be considered successfully
attached. If no Gateway listeners accept attachment from this Route,
the Route MUST be considered detached from the Gateway.


Support: Extended`,
	format: 'int32',
	maximum: 65535,
	minimum: 1,
},
		sectionName: {
	type: 'string',
	description: `SectionName is the name of a section within the target resource. In the
following resources, SectionName is interpreted as the following:


* Gateway: Listener name. When both Port (experimental) and SectionName
are specified, the name and port of the selected listener must match
both specified values.
* Service: Port name. When both Port (experimental) and SectionName
are specified, the name and port of the selected listener must match
both specified values.


Implementations MAY choose to support attaching Routes to other resources.
If that is the case, they MUST clearly document how SectionName is
interpreted.


When unspecified (empty string), this will reference the entire resource.
For the purpose of status, an attachment is considered successful if at
least one section in the parent resource accepts it. For example, Gateway
listeners can restrict which Routes can attach to them by Route kind,
namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
the referencing Route, the Route MUST be considered successfully
attached. If no Gateway listeners accept attachment from this Route, the
Route MUST be considered detached from the Gateway.


Support: Core`,
	maxLength: 253,
	minLength: 1,
	pattern: '^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$',
},
	},
},
},
		serviceType: {
	type: 'string',
	description: `Optional service type for Kubernetes solver service. Supported values
are NodePort or ClusterIP. If unset, defaults to NodePort.`,
},
	},
},
		ingress: {
	description: `The ingress based HTTP01 challenge solver will solve challenges by
creating or modifying Ingress resources in order to route requests for
'/.well-known/acme-challenge/XYZ' to 'challenge solver' pods that are
provisioned by cert-manager for each Challenge to be completed.`,
	properties: {
		class: {
	type: 'string',
	description: `This field configures the annotation \`kubernetes.io/ingress.class\` when
creating Ingress resources to solve ACME challenges that use this
challenge solver. Only one of \`class\`, \`name\` or \`ingressClassName\` may
be specified.`,
},
		ingressClassName: {
	type: 'string',
	description: `This field configures the field \`ingressClassName\` on the created Ingress
resources used to solve ACME challenges that use this challenge solver.
This is the recommended way of configuring the ingress class. Only one of
\`class\`, \`name\` or \`ingressClassName\` may be specified.`,
},
		ingressTemplate: {
	description: `Optional ingress template used to configure the ACME challenge solver
ingress used for HTTP01 challenges.`,
	properties: {
		metadata: {
	description: `ObjectMeta overrides for the ingress used to solve HTTP01 challenges.
Only the 'labels' and 'annotations' fields may be set.
If labels or annotations overlap with in-built values, the values here
will override the in-built values.`,
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
	},
},
		name: {
	type: 'string',
	description: `The name of the ingress resource that should have ACME challenge solving
routes inserted into it in order to solve HTTP01 challenges.
This is typically used in conjunction with ingress controllers like
ingress-gce, which maintains a 1:1 mapping between external IPs and
ingress resources. Only one of \`class\`, \`name\` or \`ingressClassName\` may
be specified.`,
},
		podTemplate: {
	description: `Optional pod template used to configure the ACME challenge solver pods
used for HTTP01 challenges.`,
	properties: {
		metadata: {
	description: `ObjectMeta overrides for the pod used to solve HTTP01 challenges.
Only the 'labels' and 'annotations' fields may be set.
If labels or annotations overlap with in-built values, the values here
will override the in-built values.`,
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
		spec: {
	description: `PodSpec defines overrides for the HTTP01 challenge solver pod.
Check ACMEChallengeSolverHTTP01IngressPodSpec to find out currently supported fields.
All other fields will be ignored.`,
	properties: {
		affinity: {
	description: `If specified, the pod's scheduling constraints`,
	properties: {
		nodeAffinity: {
	description: `Describes node affinity scheduling rules for the pod.`,
	properties: {
		preferredDuringSchedulingIgnoredDuringExecution: {
	type: 'array',
	contains: {
	description: `An empty preferred scheduling term matches all objects with implicit weight 0
(i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).`,
	properties: {
		preference: {
	description: `A node selector term, associated with the corresponding weight.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A node selector requirement is a selector that contains values, a key, and an operator
that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `The label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'string',
	description: `Represents a key's relationship to a set of values.
Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.`,
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
},
		matchFields: {
	type: 'array',
	contains: {
	description: `A node selector requirement is a selector that contains values, a key, and an operator
that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `The label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'string',
	description: `Represents a key's relationship to a set of values.
Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.`,
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
},
	},
	isRequired: true,
},
		weight: {
	type: 'number',
	description: `Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.`,
	isRequired: true,
	format: 'int32',
},
	},
},
},
		requiredDuringSchedulingIgnoredDuringExecution: {
	description: `If the affinity requirements specified by this field are not met at
scheduling time, the pod will not be scheduled onto the node.
If the affinity requirements specified by this field cease to be met
at some point during pod execution (e.g. due to an update), the system
may or may not try to eventually evict the pod from its node.`,
	properties: {
		nodeSelectorTerms: {
	type: 'array',
	contains: {
	description: `A null or empty node selector term matches no objects. The requirements of
them are ANDed.
The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A node selector requirement is a selector that contains values, a key, and an operator
that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `The label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'string',
	description: `Represents a key's relationship to a set of values.
Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.`,
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
},
		matchFields: {
	type: 'array',
	contains: {
	description: `A node selector requirement is a selector that contains values, a key, and an operator
that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `The label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'string',
	description: `Represents a key's relationship to a set of values.
Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.`,
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
},
	},
},
	isRequired: true,
},
	},
},
	},
},
		podAffinity: {
	description: `Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).`,
	properties: {
		preferredDuringSchedulingIgnoredDuringExecution: {
	type: 'array',
	contains: {
	description: `The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)`,
	properties: {
		podAffinityTerm: {
	description: `Required. A pod affinity term, associated with the corresponding weight.`,
	properties: {
		labelSelector: {
	description: `A label query over a set of resources, in this case pods.
If it's null, this PodAffinityTerm matches with no Pods.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that
relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'string',
	description: `operator represents a key's relationship to a set of values.
Valid operators are In, NotIn, Exists and DoesNotExist.`,
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
},
		matchLabels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
	},
},
		matchLabelKeys: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		mismatchLabelKeys: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		namespaceSelector: {
	description: `A label query over the set of namespaces that the term applies to.
The term is applied to the union of the namespaces selected by this field
and the ones listed in the namespaces field.
null selector and null or empty namespaces list means "this pod's namespace".
An empty selector ({}) matches all namespaces.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that
relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'string',
	description: `operator represents a key's relationship to a set of values.
Valid operators are In, NotIn, Exists and DoesNotExist.`,
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
},
		matchLabels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
	},
},
		namespaces: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		topologyKey: {
	type: 'string',
	description: `This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
the labelSelector in the specified namespaces, where co-located is defined as running on a node
whose value of the label with key topologyKey matches that of any node on which any of the
selected pods is running.
Empty topologyKey is not allowed.`,
	isRequired: true,
},
	},
	isRequired: true,
},
		weight: {
	type: 'number',
	description: `weight associated with matching the corresponding podAffinityTerm,
in the range 1-100.`,
	isRequired: true,
	format: 'int32',
},
	},
},
},
		requiredDuringSchedulingIgnoredDuringExecution: {
	type: 'array',
	contains: {
	description: `Defines a set of pods (namely those matching the labelSelector
relative to the given namespace(s)) that this pod should be
co-located (affinity) or not co-located (anti-affinity) with,
where co-located is defined as running on a node whose value of
the label with key <topologyKey> matches that of any node on which
a pod of the set of pods is running`,
	properties: {
		labelSelector: {
	description: `A label query over a set of resources, in this case pods.
If it's null, this PodAffinityTerm matches with no Pods.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that
relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'string',
	description: `operator represents a key's relationship to a set of values.
Valid operators are In, NotIn, Exists and DoesNotExist.`,
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
},
		matchLabels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
	},
},
		matchLabelKeys: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		mismatchLabelKeys: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		namespaceSelector: {
	description: `A label query over the set of namespaces that the term applies to.
The term is applied to the union of the namespaces selected by this field
and the ones listed in the namespaces field.
null selector and null or empty namespaces list means "this pod's namespace".
An empty selector ({}) matches all namespaces.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that
relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'string',
	description: `operator represents a key's relationship to a set of values.
Valid operators are In, NotIn, Exists and DoesNotExist.`,
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
},
		matchLabels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
	},
},
		namespaces: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		topologyKey: {
	type: 'string',
	description: `This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
the labelSelector in the specified namespaces, where co-located is defined as running on a node
whose value of the label with key topologyKey matches that of any node on which any of the
selected pods is running.
Empty topologyKey is not allowed.`,
	isRequired: true,
},
	},
},
},
	},
},
		podAntiAffinity: {
	description: `Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).`,
	properties: {
		preferredDuringSchedulingIgnoredDuringExecution: {
	type: 'array',
	contains: {
	description: `The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)`,
	properties: {
		podAffinityTerm: {
	description: `Required. A pod affinity term, associated with the corresponding weight.`,
	properties: {
		labelSelector: {
	description: `A label query over a set of resources, in this case pods.
If it's null, this PodAffinityTerm matches with no Pods.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that
relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'string',
	description: `operator represents a key's relationship to a set of values.
Valid operators are In, NotIn, Exists and DoesNotExist.`,
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
},
		matchLabels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
	},
},
		matchLabelKeys: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		mismatchLabelKeys: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		namespaceSelector: {
	description: `A label query over the set of namespaces that the term applies to.
The term is applied to the union of the namespaces selected by this field
and the ones listed in the namespaces field.
null selector and null or empty namespaces list means "this pod's namespace".
An empty selector ({}) matches all namespaces.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that
relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'string',
	description: `operator represents a key's relationship to a set of values.
Valid operators are In, NotIn, Exists and DoesNotExist.`,
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
},
		matchLabels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
	},
},
		namespaces: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		topologyKey: {
	type: 'string',
	description: `This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
the labelSelector in the specified namespaces, where co-located is defined as running on a node
whose value of the label with key topologyKey matches that of any node on which any of the
selected pods is running.
Empty topologyKey is not allowed.`,
	isRequired: true,
},
	},
	isRequired: true,
},
		weight: {
	type: 'number',
	description: `weight associated with matching the corresponding podAffinityTerm,
in the range 1-100.`,
	isRequired: true,
	format: 'int32',
},
	},
},
},
		requiredDuringSchedulingIgnoredDuringExecution: {
	type: 'array',
	contains: {
	description: `Defines a set of pods (namely those matching the labelSelector
relative to the given namespace(s)) that this pod should be
co-located (affinity) or not co-located (anti-affinity) with,
where co-located is defined as running on a node whose value of
the label with key <topologyKey> matches that of any node on which
a pod of the set of pods is running`,
	properties: {
		labelSelector: {
	description: `A label query over a set of resources, in this case pods.
If it's null, this PodAffinityTerm matches with no Pods.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that
relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'string',
	description: `operator represents a key's relationship to a set of values.
Valid operators are In, NotIn, Exists and DoesNotExist.`,
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
},
		matchLabels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
	},
},
		matchLabelKeys: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		mismatchLabelKeys: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		namespaceSelector: {
	description: `A label query over the set of namespaces that the term applies to.
The term is applied to the union of the namespaces selected by this field
and the ones listed in the namespaces field.
null selector and null or empty namespaces list means "this pod's namespace".
An empty selector ({}) matches all namespaces.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that
relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'string',
	description: `operator represents a key's relationship to a set of values.
Valid operators are In, NotIn, Exists and DoesNotExist.`,
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
},
		matchLabels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
	},
},
		namespaces: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		topologyKey: {
	type: 'string',
	description: `This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
the labelSelector in the specified namespaces, where co-located is defined as running on a node
whose value of the label with key topologyKey matches that of any node on which any of the
selected pods is running.
Empty topologyKey is not allowed.`,
	isRequired: true,
},
	},
},
},
	},
},
	},
},
		imagePullSecrets: {
	type: 'array',
	contains: {
	description: `LocalObjectReference contains enough information to let you locate the
referenced object inside the same namespace.`,
	properties: {
		name: {
	type: 'string',
	description: `Name of the referent.
This field is effectively required, but due to backwards compatibility is
allowed to be empty. Instances of this type with an empty value here are
almost certainly wrong.
TODO: Add other useful fields. apiVersion, kind, uid?
More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
TODO: Drop \`kubebuilder:default\` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.`,
},
	},
},
},
		nodeSelector: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		priorityClassName: {
	type: 'string',
	description: `If specified, the pod's priorityClassName.`,
},
		serviceAccountName: {
	type: 'string',
	description: `If specified, the pod's service account`,
},
		tolerations: {
	type: 'array',
	contains: {
	description: `The pod this Toleration is attached to tolerates any taint that matches
the triple <key,value,effect> using the matching operator <operator>.`,
	properties: {
		effect: {
	type: 'string',
	description: `Effect indicates the taint effect to match. Empty means match all taint effects.
When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.`,
},
		key: {
	type: 'string',
	description: `Key is the taint key that the toleration applies to. Empty means match all taint keys.
If the key is empty, operator must be Exists; this combination means to match all values and all keys.`,
},
		operator: {
	type: 'string',
	description: `Operator represents a key's relationship to the value.
Valid operators are Exists and Equal. Defaults to Equal.
Exists is equivalent to wildcard for value, so that a pod can
tolerate all taints of a particular category.`,
},
		tolerationSeconds: {
	type: 'number',
	description: `TolerationSeconds represents the period of time the toleration (which must be
of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
it is not set, which means tolerate the taint forever (do not evict). Zero and
negative values will be treated as 0 (evict immediately) by the system.`,
	format: 'int64',
},
		value: {
	type: 'string',
	description: `Value is the taint value the toleration matches to.
If the operator is Exists, the value should be empty, otherwise just a regular string.`,
},
	},
},
},
	},
},
	},
},
		serviceType: {
	type: 'string',
	description: `Optional service type for Kubernetes solver service. Supported values
are NodePort or ClusterIP. If unset, defaults to NodePort.`,
},
	},
},
	},
},
		selector: {
	description: `Selector selects a set of DNSNames on the Certificate resource that
should be solved using this challenge solver.
If not specified, the solver will be treated as the 'default' solver
with the lowest priority, i.e. if any other solver has a more specific
match, it will be used instead.`,
	properties: {
		dnsNames: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		dnsZones: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		matchLabels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
	},
},
	},
	isRequired: true,
},
		token: {
	type: 'string',
	description: `The ACME challenge token for this challenge.
This is the raw value returned from the ACME server.`,
	isRequired: true,
},
		type: {
	type: 'Enum',
	isRequired: true,
},
		url: {
	type: 'string',
	description: `The URL of the ACME Challenge resource for this challenge.
This can be used to lookup details about the status of this challenge.`,
	isRequired: true,
},
		wildcard: {
	type: 'boolean',
	description: `wildcard will be true if this challenge is for a wildcard identifier,
for example '*.example.com'.`,
},
	},
	isRequired: true,
},
		status: {
	properties: {
		presented: {
	type: 'boolean',
	description: `presented will be set to true if the challenge values for this challenge
are currently 'presented'.
This *does not* imply the self check is passing. Only that the values
have been 'submitted' for the appropriate challenge mechanism (i.e. the
DNS01 TXT record has been presented, or the HTTP01 configuration has been
configured).`,
},
		processing: {
	type: 'boolean',
	description: `Used to denote whether this challenge should be processed or not.
This field will only be set to true by the 'scheduling' component.
It will only be set to false by the 'challenges' controller, after the
challenge has reached a final state or timed out.
If this field is set to false, the challenge controller will not take
any more action.`,
},
		reason: {
	type: 'string',
	description: `Contains human readable information on why the Challenge is in the
current state.`,
},
		state: {
	type: 'Enum',
},
	},
},
	},
} as const;