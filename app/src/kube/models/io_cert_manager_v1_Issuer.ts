import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * An Issuer represents a certificate issuing authority which can be
 * referenced as part of `issuerRef` fields.
 * It is scoped to a single namespace and can therefore only be referenced by
 * resources within the same namespace.
 */
export type io_cert_manager_v1_Issuer = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
	/**
	 * Desired state of the Issuer resource.
	 */
	spec: {
/**
 * ACME configures this issuer to communicate with a RFC8555 (ACME) server
 * to obtain signed x509 certificates.
 */
acme?: {
/**
 * Base64-encoded bundle of PEM CAs which can be used to validate the certificate
 * chain presented by the ACME server.
 * Mutually exclusive with SkipTLSVerify; prefer using CABundle to prevent various
 * kinds of security vulnerabilities.
 * If CABundle and SkipTLSVerify are unset, the system certificate bundle inside
 * the container is used to validate the TLS connection.
 */
caBundle?: string;
/**
 * Enables or disables generating a new ACME account key.
 * If true, the Issuer resource will *not* request a new account but will expect
 * the account key to be supplied via an existing secret.
 * If false, the cert-manager system will generate a new ACME account key
 * for the Issuer.
 * Defaults to false.
 */
disableAccountKeyGeneration?: boolean;
/**
 * Email is the email address to be associated with the ACME account.
 * This field is optional, but it is strongly recommended to be set.
 * It will be used to contact you in case of issues with your account or
 * certificates, including expiry notification emails.
 * This field may be updated after the account is initially registered.
 */
email?: string;
/**
 * Enables requesting a Not After date on certificates that matches the
 * duration of the certificate. This is not supported by all ACME servers
 * like Let's Encrypt. If set to true when the ACME server does not support
 * it, it will create an error on the Order.
 * Defaults to false.
 */
enableDurationFeature?: boolean;
/**
 * ExternalAccountBinding is a reference to a CA external account of the ACME
 * server.
 * If set, upon registration cert-manager will attempt to associate the given
 * external account credentials with the registered ACME account.
 */
externalAccountBinding?: {
/**
 * Deprecated: keyAlgorithm field exists for historical compatibility
 * reasons and should not be used. The algorithm is now hardcoded to HS256
 * in golang/x/crypto/acme.
 */
keyAlgorithm?: 'HS256' | 'HS384' | 'HS512';
/**
 * keyID is the ID of the CA key that the External Account is bound to.
 */
keyID: string;
/**
 * keySecretRef is a Secret Key Selector referencing a data item in a Kubernetes
 * Secret which holds the symmetric MAC key of the External Account Binding.
 * The `key` is the index string that is paired with the key data in the
 * Secret and should not be confused with the key data itself, or indeed with
 * the External Account Binding keyID above.
 * The secret key stored in the Secret **must** be un-padded, base64 URL
 * encoded data.
 */
keySecretRef: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
};
/**
 * PreferredChain is the chain to use if the ACME server outputs multiple.
 * PreferredChain is no guarantee that this one gets delivered by the ACME
 * endpoint.
 * For example, for Let's Encrypt's DST crosssign you would use:
 * "DST Root CA X3" or "ISRG Root X1" for the newer Let's Encrypt root CA.
 * This value picks the first certificate bundle in the combined set of
 * ACME default and alternative chains that has a root-most certificate with
 * this value as its issuer's commonname.
 */
preferredChain?: string;
/**
 * PrivateKey is the name of a Kubernetes Secret resource that will be used to
 * store the automatically generated ACME account private key.
 * Optionally, a `key` may be specified to select a specific entry within
 * the named Secret resource.
 * If `key` is not specified, a default of `tls.key` will be used.
 */
privateKeySecretRef: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
/**
 * Server is the URL used to access the ACME server's 'directory' endpoint.
 * For example, for Let's Encrypt's staging endpoint, you would use:
 * "https://acme-staging-v02.api.letsencrypt.org/directory".
 * Only ACME v2 endpoints (i.e. RFC 8555) are supported.
 */
server: string;
/**
 * INSECURE: Enables or disables validation of the ACME server TLS certificate.
 * If true, requests to the ACME server will not have the TLS certificate chain
 * validated.
 * Mutually exclusive with CABundle; prefer using CABundle to prevent various
 * kinds of security vulnerabilities.
 * Only enable this option in development environments.
 * If CABundle and SkipTLSVerify are unset, the system certificate bundle inside
 * the container is used to validate the TLS connection.
 * Defaults to false.
 */
skipTLSVerify?: boolean;
/**
 * Solvers is a list of challenge solvers that will be used to solve
 * ACME challenges for the matching domains.
 * Solver configurations must be provided in order to obtain certificates
 * from an ACME server.
 * For more information, see: https://cert-manager.io/docs/configuration/acme/
 */
solvers?: Array<{
/**
 * Configures cert-manager to attempt to complete authorizations by
 * performing the DNS01 challenge flow.
 */
dns01?: {
/**
 * Use the 'ACME DNS' (https://github.com/joohoi/acme-dns) API to manage
 * DNS01 challenge records.
 */
acmeDNS?: {
/**
 * A reference to a specific 'key' within a Secret resource.
 * In some instances, `key` is a required field.
 */
accountSecretRef: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
host: string;
};
/**
 * Use the Akamai DNS zone management API to manage DNS01 challenge records.
 */
akamai?: {
/**
 * A reference to a specific 'key' within a Secret resource.
 * In some instances, `key` is a required field.
 */
accessTokenSecretRef: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
/**
 * A reference to a specific 'key' within a Secret resource.
 * In some instances, `key` is a required field.
 */
clientSecretSecretRef: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
/**
 * A reference to a specific 'key' within a Secret resource.
 * In some instances, `key` is a required field.
 */
clientTokenSecretRef: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
serviceConsumerDomain: string;
};
/**
 * Use the Microsoft Azure DNS API to manage DNS01 challenge records.
 */
azureDNS?: {
/**
 * Auth: Azure Service Principal:
 * The ClientID of the Azure Service Principal used to authenticate with Azure DNS.
 * If set, ClientSecret and TenantID must also be set.
 */
clientID?: string;
/**
 * Auth: Azure Service Principal:
 * A reference to a Secret containing the password associated with the Service Principal.
 * If set, ClientID and TenantID must also be set.
 */
clientSecretSecretRef?: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
/**
 * name of the Azure environment (default AzurePublicCloud)
 */
environment?: 'AzurePublicCloud' | 'AzureChinaCloud' | 'AzureGermanCloud' | 'AzureUSGovernmentCloud';
/**
 * name of the DNS zone that should be used
 */
hostedZoneName?: string;
/**
 * Auth: Azure Workload Identity or Azure Managed Service Identity:
 * Settings to enable Azure Workload Identity or Azure Managed Service Identity
 * If set, ClientID, ClientSecret and TenantID must not be set.
 */
managedIdentity?: {
/**
 * client ID of the managed identity, can not be used at the same time as resourceID
 */
clientID?: string;
/**
 * resource ID of the managed identity, can not be used at the same time as clientID
 * Cannot be used for Azure Managed Service Identity
 */
resourceID?: string;
};
/**
 * resource group the DNS zone is located in
 */
resourceGroupName: string;
/**
 * ID of the Azure subscription
 */
subscriptionID: string;
/**
 * Auth: Azure Service Principal:
 * The TenantID of the Azure Service Principal used to authenticate with Azure DNS.
 * If set, ClientID and ClientSecret must also be set.
 */
tenantID?: string;
};
/**
 * Use the Google Cloud DNS API to manage DNS01 challenge records.
 */
cloudDNS?: {
/**
 * HostedZoneName is an optional field that tells cert-manager in which
 * Cloud DNS zone the challenge record has to be created.
 * If left empty cert-manager will automatically choose a zone.
 */
hostedZoneName?: string;
project: string;
/**
 * A reference to a specific 'key' within a Secret resource.
 * In some instances, `key` is a required field.
 */
serviceAccountSecretRef?: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
};
/**
 * Use the Cloudflare API to manage DNS01 challenge records.
 */
cloudflare?: {
/**
 * API key to use to authenticate with Cloudflare.
 * Note: using an API token to authenticate is now the recommended method
 * as it allows greater control of permissions.
 */
apiKeySecretRef?: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
/**
 * API token used to authenticate with Cloudflare.
 */
apiTokenSecretRef?: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
/**
 * Email of the account, only required when using API key based authentication.
 */
email?: string;
};
/**
 * CNAMEStrategy configures how the DNS01 provider should handle CNAME
 * records when found in DNS zones.
 */
cnameStrategy?: 'None' | 'Follow';
/**
 * Use the DigitalOcean DNS API to manage DNS01 challenge records.
 */
digitalocean?: {
/**
 * A reference to a specific 'key' within a Secret resource.
 * In some instances, `key` is a required field.
 */
tokenSecretRef: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
};
/**
 * Use RFC2136 ("Dynamic Updates in the Domain Name System") (https://datatracker.ietf.org/doc/rfc2136/)
 * to manage DNS01 challenge records.
 */
rfc2136?: {
/**
 * The IP address or hostname of an authoritative DNS server supporting
 * RFC2136 in the form host:port. If the host is an IPv6 address it must be
 * enclosed in square brackets (e.g [2001:db8::1]) ; port is optional.
 * This field is required.
 */
nameserver: string;
/**
 * The TSIG Algorithm configured in the DNS supporting RFC2136. Used only
 * when ``tsigSecretSecretRef`` and ``tsigKeyName`` are defined.
 * Supported values are (case-insensitive): ``HMACMD5`` (default),
 * ``HMACSHA1``, ``HMACSHA256`` or ``HMACSHA512``.
 */
tsigAlgorithm?: string;
/**
 * The TSIG Key name configured in the DNS.
 * If ``tsigSecretSecretRef`` is defined, this field is required.
 */
tsigKeyName?: string;
/**
 * The name of the secret containing the TSIG value.
 * If ``tsigKeyName`` is defined, this field is required.
 */
tsigSecretSecretRef?: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
};
/**
 * Use the AWS Route53 API to manage DNS01 challenge records.
 */
route53?: {
/**
 * The AccessKeyID is used for authentication.
 * Cannot be set when SecretAccessKeyID is set.
 * If neither the Access Key nor Key ID are set, we fall-back to using env
 * vars, shared credentials file or AWS Instance metadata,
 * see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
 */
accessKeyID?: string;
/**
 * The SecretAccessKey is used for authentication. If set, pull the AWS
 * access key ID from a key within a Kubernetes Secret.
 * Cannot be set when AccessKeyID is set.
 * If neither the Access Key nor Key ID are set, we fall-back to using env
 * vars, shared credentials file or AWS Instance metadata,
 * see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
 */
accessKeyIDSecretRef?: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
/**
 * Auth configures how cert-manager authenticates.
 */
auth?: {
/**
 * Kubernetes authenticates with Route53 using AssumeRoleWithWebIdentity
 * by passing a bound ServiceAccount token.
 */
kubernetes: {
/**
 * A reference to a service account that will be used to request a bound
 * token (also known as "projected token"). To use this field, you must
 * configure an RBAC rule to let cert-manager request a token.
 */
serviceAccountRef: {
/**
 * TokenAudiences is an optional list of audiences to include in the
 * token passed to AWS. The default token consisting of the issuer's namespace
 * and name is always included.
 * If unset the audience defaults to `sts.amazonaws.com`.
 */
audiences?: Array<string>;
/**
 * Name of the ServiceAccount used to request a token.
 */
name: string;
};
};
};
/**
 * If set, the provider will manage only this zone in Route53 and will not do an lookup using the route53:ListHostedZonesByName api call.
 */
hostedZoneID?: string;
/**
 * Always set the region when using AccessKeyID and SecretAccessKey
 */
region: string;
/**
 * Role is a Role ARN which the Route53 provider will assume using either the explicit credentials AccessKeyID/SecretAccessKey
 * or the inferred credentials from environment variables, shared credentials file or AWS Instance metadata
 */
role?: string;
/**
 * The SecretAccessKey is used for authentication.
 * If neither the Access Key nor Key ID are set, we fall-back to using env
 * vars, shared credentials file or AWS Instance metadata,
 * see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
 */
secretAccessKeySecretRef?: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
};
/**
 * Configure an external webhook based DNS01 challenge solver to manage
 * DNS01 challenge records.
 */
webhook?: {
/**
 * Additional configuration that should be passed to the webhook apiserver
 * when challenges are processed.
 * This can contain arbitrary JSON data.
 * Secret values should not be specified in this stanza.
 * If secret values are needed (e.g. credentials for a DNS service), you
 * should use a SecretKeySelector to reference a Secret resource.
 * For details on the schema of this field, consult the webhook provider
 * implementation's documentation.
 */
config?: unknown;
/**
 * The API group name that should be used when POSTing ChallengePayload
 * resources to the webhook apiserver.
 * This should be the same as the GroupName specified in the webhook
 * provider implementation.
 */
groupName: string;
/**
 * The name of the solver to use, as defined in the webhook provider
 * implementation.
 * This will typically be the name of the provider, e.g. 'cloudflare'.
 */
solverName: string;
};
};
/**
 * Configures cert-manager to attempt to complete authorizations by
 * performing the HTTP01 challenge flow.
 * It is not possible to obtain certificates for wildcard domain names
 * (e.g. `*.example.com`) using the HTTP01 challenge mechanism.
 */
http01?: {
/**
 * The Gateway API is a sig-network community API that models service networking
 * in Kubernetes (https://gateway-api.sigs.k8s.io/). The Gateway solver will
 * create HTTPRoutes with the specified labels in the same namespace as the challenge.
 * This solver is experimental, and fields / behaviour may change in the future.
 */
gatewayHTTPRoute?: {
/**
 * Custom labels that will be applied to HTTPRoutes created by cert-manager
 * while solving HTTP-01 challenges.
 */
labels?: Record<string, string>;
/**
 * When solving an HTTP-01 challenge, cert-manager creates an HTTPRoute.
 * cert-manager needs to know which parentRefs should be used when creating
 * the HTTPRoute. Usually, the parentRef references a Gateway. See:
 * https://gateway-api.sigs.k8s.io/api-types/httproute/#attaching-to-gateways
 */
parentRefs?: Array<{
/**
 * Group is the group of the referent.
 * When unspecified, "gateway.networking.k8s.io" is inferred.
 * To set the core API group (such as for a "Service" kind referent),
 * Group must be explicitly set to "" (empty string).
 * 
 * 
 * Support: Core
 */
group?: string;
/**
 * Kind is kind of the referent.
 * 
 * 
 * There are two kinds of parent resources with "Core" support:
 * 
 * 
 * * Gateway (Gateway conformance profile)
 * * Service (Mesh conformance profile, ClusterIP Services only)
 * 
 * 
 * Support for other resources is Implementation-Specific.
 */
kind?: string;
/**
 * Name is the name of the referent.
 * 
 * 
 * Support: Core
 */
name: string;
/**
 * Namespace is the namespace of the referent. When unspecified, this refers
 * to the local namespace of the Route.
 * 
 * 
 * Note that there are specific rules for ParentRefs which cross namespace
 * boundaries. Cross-namespace references are only valid if they are explicitly
 * allowed by something in the namespace they are referring to. For example:
 * Gateway has the AllowedRoutes field, and ReferenceGrant provides a
 * generic way to enable any other kind of cross-namespace reference.
 * 
 * 
 * <gateway:experimental:description>
 * ParentRefs from a Route to a Service in the same namespace are "producer"
 * routes, which apply default routing rules to inbound connections from
 * any namespace to the Service.
 * 
 * 
 * ParentRefs from a Route to a Service in a different namespace are
 * "consumer" routes, and these routing rules are only applied to outbound
 * connections originating from the same namespace as the Route, for which
 * the intended destination of the connections are a Service targeted as a
 * ParentRef of the Route.
 * </gateway:experimental:description>
 * 
 * 
 * Support: Core
 */
namespace?: string;
/**
 * Port is the network port this Route targets. It can be interpreted
 * differently based on the type of parent resource.
 * 
 * 
 * When the parent resource is a Gateway, this targets all listeners
 * listening on the specified port that also support this kind of Route(and
 * select this Route). It's not recommended to set `Port` unless the
 * networking behaviors specified in a Route must apply to a specific port
 * as opposed to a listener(s) whose port(s) may be changed. When both Port
 * and SectionName are specified, the name and port of the selected listener
 * must match both specified values.
 * 
 * 
 * <gateway:experimental:description>
 * When the parent resource is a Service, this targets a specific port in the
 * Service spec. When both Port (experimental) and SectionName are specified,
 * the name and port of the selected port must match both specified values.
 * </gateway:experimental:description>
 * 
 * 
 * Implementations MAY choose to support other parent resources.
 * Implementations supporting other types of parent resources MUST clearly
 * document how/if Port is interpreted.
 * 
 * 
 * For the purpose of status, an attachment is considered successful as
 * long as the parent resource accepts it partially. For example, Gateway
 * listeners can restrict which Routes can attach to them by Route kind,
 * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment
 * from the referencing Route, the Route MUST be considered successfully
 * attached. If no Gateway listeners accept attachment from this Route,
 * the Route MUST be considered detached from the Gateway.
 * 
 * 
 * Support: Extended
 */
port?: number;
/**
 * SectionName is the name of a section within the target resource. In the
 * following resources, SectionName is interpreted as the following:
 * 
 * 
 * * Gateway: Listener name. When both Port (experimental) and SectionName
 * are specified, the name and port of the selected listener must match
 * both specified values.
 * * Service: Port name. When both Port (experimental) and SectionName
 * are specified, the name and port of the selected listener must match
 * both specified values.
 * 
 * 
 * Implementations MAY choose to support attaching Routes to other resources.
 * If that is the case, they MUST clearly document how SectionName is
 * interpreted.
 * 
 * 
 * When unspecified (empty string), this will reference the entire resource.
 * For the purpose of status, an attachment is considered successful if at
 * least one section in the parent resource accepts it. For example, Gateway
 * listeners can restrict which Routes can attach to them by Route kind,
 * namespace, or hostname. If 1 of 2 Gateway listeners accept attachment from
 * the referencing Route, the Route MUST be considered successfully
 * attached. If no Gateway listeners accept attachment from this Route, the
 * Route MUST be considered detached from the Gateway.
 * 
 * 
 * Support: Core
 */
sectionName?: string;
}>;
/**
 * Optional service type for Kubernetes solver service. Supported values
 * are NodePort or ClusterIP. If unset, defaults to NodePort.
 */
serviceType?: string;
};
/**
 * The ingress based HTTP01 challenge solver will solve challenges by
 * creating or modifying Ingress resources in order to route requests for
 * '/.well-known/acme-challenge/XYZ' to 'challenge solver' pods that are
 * provisioned by cert-manager for each Challenge to be completed.
 */
ingress?: {
/**
 * This field configures the annotation `kubernetes.io/ingress.class` when
 * creating Ingress resources to solve ACME challenges that use this
 * challenge solver. Only one of `class`, `name` or `ingressClassName` may
 * be specified.
 */
class?: string;
/**
 * This field configures the field `ingressClassName` on the created Ingress
 * resources used to solve ACME challenges that use this challenge solver.
 * This is the recommended way of configuring the ingress class. Only one of
 * `class`, `name` or `ingressClassName` may be specified.
 */
ingressClassName?: string;
/**
 * Optional ingress template used to configure the ACME challenge solver
 * ingress used for HTTP01 challenges.
 */
ingressTemplate?: {
/**
 * ObjectMeta overrides for the ingress used to solve HTTP01 challenges.
 * Only the 'labels' and 'annotations' fields may be set.
 * If labels or annotations overlap with in-built values, the values here
 * will override the in-built values.
 */
metadata?: {
/**
 * Annotations that should be added to the created ACME HTTP01 solver ingress.
 */
annotations?: Record<string, string>;
/**
 * Labels that should be added to the created ACME HTTP01 solver ingress.
 */
labels?: Record<string, string>;
};
};
/**
 * The name of the ingress resource that should have ACME challenge solving
 * routes inserted into it in order to solve HTTP01 challenges.
 * This is typically used in conjunction with ingress controllers like
 * ingress-gce, which maintains a 1:1 mapping between external IPs and
 * ingress resources. Only one of `class`, `name` or `ingressClassName` may
 * be specified.
 */
name?: string;
/**
 * Optional pod template used to configure the ACME challenge solver pods
 * used for HTTP01 challenges.
 */
podTemplate?: {
/**
 * ObjectMeta overrides for the pod used to solve HTTP01 challenges.
 * Only the 'labels' and 'annotations' fields may be set.
 * If labels or annotations overlap with in-built values, the values here
 * will override the in-built values.
 */
metadata?: {
/**
 * Annotations that should be added to the create ACME HTTP01 solver pods.
 */
annotations?: Record<string, string>;
/**
 * Labels that should be added to the created ACME HTTP01 solver pods.
 */
labels?: Record<string, string>;
};
/**
 * PodSpec defines overrides for the HTTP01 challenge solver pod.
 * Check ACMEChallengeSolverHTTP01IngressPodSpec to find out currently supported fields.
 * All other fields will be ignored.
 */
spec?: {
/**
 * If specified, the pod's scheduling constraints
 */
affinity?: {
/**
 * Describes node affinity scheduling rules for the pod.
 */
nodeAffinity?: {
/**
 * The scheduler will prefer to schedule pods to nodes that satisfy
 * the affinity expressions specified by this field, but it may choose
 * a node that violates one or more of the expressions. The node that is
 * most preferred is the one with the greatest sum of weights, i.e.
 * for each node that meets all of the scheduling requirements (resource
 * request, requiredDuringScheduling affinity expressions, etc.),
 * compute a sum by iterating through the elements of this field and adding
 * "weight" to the sum if the node matches the corresponding matchExpressions; the
 * node(s) with the highest sum are the most preferred.
 */
preferredDuringSchedulingIgnoredDuringExecution?: Array<{
/**
 * A node selector term, associated with the corresponding weight.
 */
preference: {
/**
 * A list of node selector requirements by node's labels.
 */
matchExpressions?: Array<{
/**
 * The label key that the selector applies to.
 */
key: string;
/**
 * Represents a key's relationship to a set of values.
 * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
 */
operator: string;
/**
 * An array of string values. If the operator is In or NotIn,
 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
 * the values array must be empty. If the operator is Gt or Lt, the values
 * array must have a single element, which will be interpreted as an integer.
 * This array is replaced during a strategic merge patch.
 */
values?: Array<string>;
}>;
/**
 * A list of node selector requirements by node's fields.
 */
matchFields?: Array<{
/**
 * The label key that the selector applies to.
 */
key: string;
/**
 * Represents a key's relationship to a set of values.
 * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
 */
operator: string;
/**
 * An array of string values. If the operator is In or NotIn,
 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
 * the values array must be empty. If the operator is Gt or Lt, the values
 * array must have a single element, which will be interpreted as an integer.
 * This array is replaced during a strategic merge patch.
 */
values?: Array<string>;
}>;
};
/**
 * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
 */
weight: number;
}>;
/**
 * If the affinity requirements specified by this field are not met at
 * scheduling time, the pod will not be scheduled onto the node.
 * If the affinity requirements specified by this field cease to be met
 * at some point during pod execution (e.g. due to an update), the system
 * may or may not try to eventually evict the pod from its node.
 */
requiredDuringSchedulingIgnoredDuringExecution?: {
/**
 * Required. A list of node selector terms. The terms are ORed.
 */
nodeSelectorTerms: Array<{
/**
 * A list of node selector requirements by node's labels.
 */
matchExpressions?: Array<{
/**
 * The label key that the selector applies to.
 */
key: string;
/**
 * Represents a key's relationship to a set of values.
 * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
 */
operator: string;
/**
 * An array of string values. If the operator is In or NotIn,
 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
 * the values array must be empty. If the operator is Gt or Lt, the values
 * array must have a single element, which will be interpreted as an integer.
 * This array is replaced during a strategic merge patch.
 */
values?: Array<string>;
}>;
/**
 * A list of node selector requirements by node's fields.
 */
matchFields?: Array<{
/**
 * The label key that the selector applies to.
 */
key: string;
/**
 * Represents a key's relationship to a set of values.
 * Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
 */
operator: string;
/**
 * An array of string values. If the operator is In or NotIn,
 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
 * the values array must be empty. If the operator is Gt or Lt, the values
 * array must have a single element, which will be interpreted as an integer.
 * This array is replaced during a strategic merge patch.
 */
values?: Array<string>;
}>;
}>;
};
};
/**
 * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
 */
podAffinity?: {
/**
 * The scheduler will prefer to schedule pods to nodes that satisfy
 * the affinity expressions specified by this field, but it may choose
 * a node that violates one or more of the expressions. The node that is
 * most preferred is the one with the greatest sum of weights, i.e.
 * for each node that meets all of the scheduling requirements (resource
 * request, requiredDuringScheduling affinity expressions, etc.),
 * compute a sum by iterating through the elements of this field and adding
 * "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
 * node(s) with the highest sum are the most preferred.
 */
preferredDuringSchedulingIgnoredDuringExecution?: Array<{
/**
 * Required. A pod affinity term, associated with the corresponding weight.
 */
podAffinityTerm: {
/**
 * A label query over a set of resources, in this case pods.
 * If it's null, this PodAffinityTerm matches with no Pods.
 */
labelSelector?: {
/**
 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
 */
matchExpressions?: Array<{
/**
 * key is the label key that the selector applies to.
 */
key: string;
/**
 * operator represents a key's relationship to a set of values.
 * Valid operators are In, NotIn, Exists and DoesNotExist.
 */
operator: string;
/**
 * values is an array of string values. If the operator is In or NotIn,
 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
 * the values array must be empty. This array is replaced during a strategic
 * merge patch.
 */
values?: Array<string>;
}>;
/**
 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
 * map is equivalent to an element of matchExpressions, whose key field is "key", the
 * operator is "In", and the values array contains only "value". The requirements are ANDed.
 */
matchLabels?: Record<string, string>;
};
/**
 * MatchLabelKeys is a set of pod label keys to select which pods will
 * be taken into consideration. The keys are used to lookup values from the
 * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
 * to select the group of existing pods which pods will be taken into consideration
 * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
 * pod labels will be ignored. The default value is empty.
 * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
 * Also, matchLabelKeys cannot be set when labelSelector isn't set.
 * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
 */
matchLabelKeys?: Array<string>;
/**
 * MismatchLabelKeys is a set of pod label keys to select which pods will
 * be taken into consideration. The keys are used to lookup values from the
 * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
 * to select the group of existing pods which pods will be taken into consideration
 * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
 * pod labels will be ignored. The default value is empty.
 * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
 * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
 * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
 */
mismatchLabelKeys?: Array<string>;
/**
 * A label query over the set of namespaces that the term applies to.
 * The term is applied to the union of the namespaces selected by this field
 * and the ones listed in the namespaces field.
 * null selector and null or empty namespaces list means "this pod's namespace".
 * An empty selector ({}) matches all namespaces.
 */
namespaceSelector?: {
/**
 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
 */
matchExpressions?: Array<{
/**
 * key is the label key that the selector applies to.
 */
key: string;
/**
 * operator represents a key's relationship to a set of values.
 * Valid operators are In, NotIn, Exists and DoesNotExist.
 */
operator: string;
/**
 * values is an array of string values. If the operator is In or NotIn,
 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
 * the values array must be empty. This array is replaced during a strategic
 * merge patch.
 */
values?: Array<string>;
}>;
/**
 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
 * map is equivalent to an element of matchExpressions, whose key field is "key", the
 * operator is "In", and the values array contains only "value". The requirements are ANDed.
 */
matchLabels?: Record<string, string>;
};
/**
 * namespaces specifies a static list of namespace names that the term applies to.
 * The term is applied to the union of the namespaces listed in this field
 * and the ones selected by namespaceSelector.
 * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
 */
namespaces?: Array<string>;
/**
 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
 * the labelSelector in the specified namespaces, where co-located is defined as running on a node
 * whose value of the label with key topologyKey matches that of any node on which any of the
 * selected pods is running.
 * Empty topologyKey is not allowed.
 */
topologyKey: string;
};
/**
 * weight associated with matching the corresponding podAffinityTerm,
 * in the range 1-100.
 */
weight: number;
}>;
/**
 * If the affinity requirements specified by this field are not met at
 * scheduling time, the pod will not be scheduled onto the node.
 * If the affinity requirements specified by this field cease to be met
 * at some point during pod execution (e.g. due to a pod label update), the
 * system may or may not try to eventually evict the pod from its node.
 * When there are multiple elements, the lists of nodes corresponding to each
 * podAffinityTerm are intersected, i.e. all terms must be satisfied.
 */
requiredDuringSchedulingIgnoredDuringExecution?: Array<{
/**
 * A label query over a set of resources, in this case pods.
 * If it's null, this PodAffinityTerm matches with no Pods.
 */
labelSelector?: {
/**
 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
 */
matchExpressions?: Array<{
/**
 * key is the label key that the selector applies to.
 */
key: string;
/**
 * operator represents a key's relationship to a set of values.
 * Valid operators are In, NotIn, Exists and DoesNotExist.
 */
operator: string;
/**
 * values is an array of string values. If the operator is In or NotIn,
 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
 * the values array must be empty. This array is replaced during a strategic
 * merge patch.
 */
values?: Array<string>;
}>;
/**
 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
 * map is equivalent to an element of matchExpressions, whose key field is "key", the
 * operator is "In", and the values array contains only "value". The requirements are ANDed.
 */
matchLabels?: Record<string, string>;
};
/**
 * MatchLabelKeys is a set of pod label keys to select which pods will
 * be taken into consideration. The keys are used to lookup values from the
 * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
 * to select the group of existing pods which pods will be taken into consideration
 * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
 * pod labels will be ignored. The default value is empty.
 * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
 * Also, matchLabelKeys cannot be set when labelSelector isn't set.
 * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
 */
matchLabelKeys?: Array<string>;
/**
 * MismatchLabelKeys is a set of pod label keys to select which pods will
 * be taken into consideration. The keys are used to lookup values from the
 * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
 * to select the group of existing pods which pods will be taken into consideration
 * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
 * pod labels will be ignored. The default value is empty.
 * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
 * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
 * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
 */
mismatchLabelKeys?: Array<string>;
/**
 * A label query over the set of namespaces that the term applies to.
 * The term is applied to the union of the namespaces selected by this field
 * and the ones listed in the namespaces field.
 * null selector and null or empty namespaces list means "this pod's namespace".
 * An empty selector ({}) matches all namespaces.
 */
namespaceSelector?: {
/**
 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
 */
matchExpressions?: Array<{
/**
 * key is the label key that the selector applies to.
 */
key: string;
/**
 * operator represents a key's relationship to a set of values.
 * Valid operators are In, NotIn, Exists and DoesNotExist.
 */
operator: string;
/**
 * values is an array of string values. If the operator is In or NotIn,
 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
 * the values array must be empty. This array is replaced during a strategic
 * merge patch.
 */
values?: Array<string>;
}>;
/**
 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
 * map is equivalent to an element of matchExpressions, whose key field is "key", the
 * operator is "In", and the values array contains only "value". The requirements are ANDed.
 */
matchLabels?: Record<string, string>;
};
/**
 * namespaces specifies a static list of namespace names that the term applies to.
 * The term is applied to the union of the namespaces listed in this field
 * and the ones selected by namespaceSelector.
 * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
 */
namespaces?: Array<string>;
/**
 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
 * the labelSelector in the specified namespaces, where co-located is defined as running on a node
 * whose value of the label with key topologyKey matches that of any node on which any of the
 * selected pods is running.
 * Empty topologyKey is not allowed.
 */
topologyKey: string;
}>;
};
/**
 * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
 */
podAntiAffinity?: {
/**
 * The scheduler will prefer to schedule pods to nodes that satisfy
 * the anti-affinity expressions specified by this field, but it may choose
 * a node that violates one or more of the expressions. The node that is
 * most preferred is the one with the greatest sum of weights, i.e.
 * for each node that meets all of the scheduling requirements (resource
 * request, requiredDuringScheduling anti-affinity expressions, etc.),
 * compute a sum by iterating through the elements of this field and adding
 * "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the
 * node(s) with the highest sum are the most preferred.
 */
preferredDuringSchedulingIgnoredDuringExecution?: Array<{
/**
 * Required. A pod affinity term, associated with the corresponding weight.
 */
podAffinityTerm: {
/**
 * A label query over a set of resources, in this case pods.
 * If it's null, this PodAffinityTerm matches with no Pods.
 */
labelSelector?: {
/**
 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
 */
matchExpressions?: Array<{
/**
 * key is the label key that the selector applies to.
 */
key: string;
/**
 * operator represents a key's relationship to a set of values.
 * Valid operators are In, NotIn, Exists and DoesNotExist.
 */
operator: string;
/**
 * values is an array of string values. If the operator is In or NotIn,
 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
 * the values array must be empty. This array is replaced during a strategic
 * merge patch.
 */
values?: Array<string>;
}>;
/**
 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
 * map is equivalent to an element of matchExpressions, whose key field is "key", the
 * operator is "In", and the values array contains only "value". The requirements are ANDed.
 */
matchLabels?: Record<string, string>;
};
/**
 * MatchLabelKeys is a set of pod label keys to select which pods will
 * be taken into consideration. The keys are used to lookup values from the
 * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
 * to select the group of existing pods which pods will be taken into consideration
 * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
 * pod labels will be ignored. The default value is empty.
 * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
 * Also, matchLabelKeys cannot be set when labelSelector isn't set.
 * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
 */
matchLabelKeys?: Array<string>;
/**
 * MismatchLabelKeys is a set of pod label keys to select which pods will
 * be taken into consideration. The keys are used to lookup values from the
 * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
 * to select the group of existing pods which pods will be taken into consideration
 * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
 * pod labels will be ignored. The default value is empty.
 * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
 * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
 * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
 */
mismatchLabelKeys?: Array<string>;
/**
 * A label query over the set of namespaces that the term applies to.
 * The term is applied to the union of the namespaces selected by this field
 * and the ones listed in the namespaces field.
 * null selector and null or empty namespaces list means "this pod's namespace".
 * An empty selector ({}) matches all namespaces.
 */
namespaceSelector?: {
/**
 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
 */
matchExpressions?: Array<{
/**
 * key is the label key that the selector applies to.
 */
key: string;
/**
 * operator represents a key's relationship to a set of values.
 * Valid operators are In, NotIn, Exists and DoesNotExist.
 */
operator: string;
/**
 * values is an array of string values. If the operator is In or NotIn,
 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
 * the values array must be empty. This array is replaced during a strategic
 * merge patch.
 */
values?: Array<string>;
}>;
/**
 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
 * map is equivalent to an element of matchExpressions, whose key field is "key", the
 * operator is "In", and the values array contains only "value". The requirements are ANDed.
 */
matchLabels?: Record<string, string>;
};
/**
 * namespaces specifies a static list of namespace names that the term applies to.
 * The term is applied to the union of the namespaces listed in this field
 * and the ones selected by namespaceSelector.
 * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
 */
namespaces?: Array<string>;
/**
 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
 * the labelSelector in the specified namespaces, where co-located is defined as running on a node
 * whose value of the label with key topologyKey matches that of any node on which any of the
 * selected pods is running.
 * Empty topologyKey is not allowed.
 */
topologyKey: string;
};
/**
 * weight associated with matching the corresponding podAffinityTerm,
 * in the range 1-100.
 */
weight: number;
}>;
/**
 * If the anti-affinity requirements specified by this field are not met at
 * scheduling time, the pod will not be scheduled onto the node.
 * If the anti-affinity requirements specified by this field cease to be met
 * at some point during pod execution (e.g. due to a pod label update), the
 * system may or may not try to eventually evict the pod from its node.
 * When there are multiple elements, the lists of nodes corresponding to each
 * podAffinityTerm are intersected, i.e. all terms must be satisfied.
 */
requiredDuringSchedulingIgnoredDuringExecution?: Array<{
/**
 * A label query over a set of resources, in this case pods.
 * If it's null, this PodAffinityTerm matches with no Pods.
 */
labelSelector?: {
/**
 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
 */
matchExpressions?: Array<{
/**
 * key is the label key that the selector applies to.
 */
key: string;
/**
 * operator represents a key's relationship to a set of values.
 * Valid operators are In, NotIn, Exists and DoesNotExist.
 */
operator: string;
/**
 * values is an array of string values. If the operator is In or NotIn,
 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
 * the values array must be empty. This array is replaced during a strategic
 * merge patch.
 */
values?: Array<string>;
}>;
/**
 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
 * map is equivalent to an element of matchExpressions, whose key field is "key", the
 * operator is "In", and the values array contains only "value". The requirements are ANDed.
 */
matchLabels?: Record<string, string>;
};
/**
 * MatchLabelKeys is a set of pod label keys to select which pods will
 * be taken into consideration. The keys are used to lookup values from the
 * incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)`
 * to select the group of existing pods which pods will be taken into consideration
 * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
 * pod labels will be ignored. The default value is empty.
 * The same key is forbidden to exist in both matchLabelKeys and labelSelector.
 * Also, matchLabelKeys cannot be set when labelSelector isn't set.
 * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
 */
matchLabelKeys?: Array<string>;
/**
 * MismatchLabelKeys is a set of pod label keys to select which pods will
 * be taken into consideration. The keys are used to lookup values from the
 * incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)`
 * to select the group of existing pods which pods will be taken into consideration
 * for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming
 * pod labels will be ignored. The default value is empty.
 * The same key is forbidden to exist in both mismatchLabelKeys and labelSelector.
 * Also, mismatchLabelKeys cannot be set when labelSelector isn't set.
 * This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
 */
mismatchLabelKeys?: Array<string>;
/**
 * A label query over the set of namespaces that the term applies to.
 * The term is applied to the union of the namespaces selected by this field
 * and the ones listed in the namespaces field.
 * null selector and null or empty namespaces list means "this pod's namespace".
 * An empty selector ({}) matches all namespaces.
 */
namespaceSelector?: {
/**
 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
 */
matchExpressions?: Array<{
/**
 * key is the label key that the selector applies to.
 */
key: string;
/**
 * operator represents a key's relationship to a set of values.
 * Valid operators are In, NotIn, Exists and DoesNotExist.
 */
operator: string;
/**
 * values is an array of string values. If the operator is In or NotIn,
 * the values array must be non-empty. If the operator is Exists or DoesNotExist,
 * the values array must be empty. This array is replaced during a strategic
 * merge patch.
 */
values?: Array<string>;
}>;
/**
 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
 * map is equivalent to an element of matchExpressions, whose key field is "key", the
 * operator is "In", and the values array contains only "value". The requirements are ANDed.
 */
matchLabels?: Record<string, string>;
};
/**
 * namespaces specifies a static list of namespace names that the term applies to.
 * The term is applied to the union of the namespaces listed in this field
 * and the ones selected by namespaceSelector.
 * null or empty namespaces list and null namespaceSelector means "this pod's namespace".
 */
namespaces?: Array<string>;
/**
 * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching
 * the labelSelector in the specified namespaces, where co-located is defined as running on a node
 * whose value of the label with key topologyKey matches that of any node on which any of the
 * selected pods is running.
 * Empty topologyKey is not allowed.
 */
topologyKey: string;
}>;
};
};
/**
 * If specified, the pod's imagePullSecrets
 */
imagePullSecrets?: Array<{
/**
 * Name of the referent.
 * This field is effectively required, but due to backwards compatibility is
 * allowed to be empty. Instances of this type with an empty value here are
 * almost certainly wrong.
 * TODO: Add other useful fields. apiVersion, kind, uid?
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 * TODO: Drop `kubebuilder:default` when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
 */
name?: string;
}>;
/**
 * NodeSelector is a selector which must be true for the pod to fit on a node.
 * Selector which must match a node's labels for the pod to be scheduled on that node.
 * More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
 */
nodeSelector?: Record<string, string>;
/**
 * If specified, the pod's priorityClassName.
 */
priorityClassName?: string;
/**
 * If specified, the pod's service account
 */
serviceAccountName?: string;
/**
 * If specified, the pod's tolerations.
 */
tolerations?: Array<{
/**
 * Effect indicates the taint effect to match. Empty means match all taint effects.
 * When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
 */
effect?: string;
/**
 * Key is the taint key that the toleration applies to. Empty means match all taint keys.
 * If the key is empty, operator must be Exists; this combination means to match all values and all keys.
 */
key?: string;
/**
 * Operator represents a key's relationship to the value.
 * Valid operators are Exists and Equal. Defaults to Equal.
 * Exists is equivalent to wildcard for value, so that a pod can
 * tolerate all taints of a particular category.
 */
operator?: string;
/**
 * TolerationSeconds represents the period of time the toleration (which must be
 * of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
 * it is not set, which means tolerate the taint forever (do not evict). Zero and
 * negative values will be treated as 0 (evict immediately) by the system.
 */
tolerationSeconds?: number;
/**
 * Value is the taint value the toleration matches to.
 * If the operator is Exists, the value should be empty, otherwise just a regular string.
 */
value?: string;
}>;
};
};
/**
 * Optional service type for Kubernetes solver service. Supported values
 * are NodePort or ClusterIP. If unset, defaults to NodePort.
 */
serviceType?: string;
};
};
/**
 * Selector selects a set of DNSNames on the Certificate resource that
 * should be solved using this challenge solver.
 * If not specified, the solver will be treated as the 'default' solver
 * with the lowest priority, i.e. if any other solver has a more specific
 * match, it will be used instead.
 */
selector?: {
/**
 * List of DNSNames that this solver will be used to solve.
 * If specified and a match is found, a dnsNames selector will take
 * precedence over a dnsZones selector.
 * If multiple solvers match with the same dnsNames value, the solver
 * with the most matching labels in matchLabels will be selected.
 * If neither has more matches, the solver defined earlier in the list
 * will be selected.
 */
dnsNames?: Array<string>;
/**
 * List of DNSZones that this solver will be used to solve.
 * The most specific DNS zone match specified here will take precedence
 * over other DNS zone matches, so a solver specifying sys.example.com
 * will be selected over one specifying example.com for the domain
 * www.sys.example.com.
 * If multiple solvers match with the same dnsZones value, the solver
 * with the most matching labels in matchLabels will be selected.
 * If neither has more matches, the solver defined earlier in the list
 * will be selected.
 */
dnsZones?: Array<string>;
/**
 * A label selector that is used to refine the set of certificate's that
 * this challenge solver will apply to.
 */
matchLabels?: Record<string, string>;
};
}>;
};
/**
 * CA configures this issuer to sign certificates using a signing CA keypair
 * stored in a Secret resource.
 * This is used to build internal PKIs that are managed by cert-manager.
 */
ca?: {
/**
 * The CRL distribution points is an X.509 v3 certificate extension which identifies
 * the location of the CRL from which the revocation of this certificate can be checked.
 * If not set, certificates will be issued without distribution points set.
 */
crlDistributionPoints?: Array<string>;
/**
 * IssuingCertificateURLs is a list of URLs which this issuer should embed into certificates
 * it creates. See https://www.rfc-editor.org/rfc/rfc5280#section-4.2.2.1 for more details.
 * As an example, such a URL might be "http://ca.domain.com/ca.crt".
 */
issuingCertificateURLs?: Array<string>;
/**
 * The OCSP server list is an X.509 v3 extension that defines a list of
 * URLs of OCSP responders. The OCSP responders can be queried for the
 * revocation status of an issued certificate. If not set, the
 * certificate will be issued with no OCSP servers set. For example, an
 * OCSP server URL could be "http://ocsp.int-x3.letsencrypt.org".
 */
ocspServers?: Array<string>;
/**
 * SecretName is the name of the secret used to sign Certificates issued
 * by this Issuer.
 */
secretName: string;
};
/**
 * SelfSigned configures this issuer to 'self sign' certificates using the
 * private key used to create the CertificateRequest object.
 */
selfSigned?: {
/**
 * The CRL distribution points is an X.509 v3 certificate extension which identifies
 * the location of the CRL from which the revocation of this certificate can be checked.
 * If not set certificate will be issued without CDP. Values are strings.
 */
crlDistributionPoints?: Array<string>;
};
/**
 * Vault configures this issuer to sign certificates using a HashiCorp Vault
 * PKI backend.
 */
vault?: {
/**
 * Auth configures how cert-manager authenticates with the Vault server.
 */
auth: {
/**
 * AppRole authenticates with Vault using the App Role auth mechanism,
 * with the role and secret stored in a Kubernetes Secret resource.
 */
appRole?: {
/**
 * Path where the App Role authentication backend is mounted in Vault, e.g:
 * "approle"
 */
path: string;
/**
 * RoleID configured in the App Role authentication backend when setting
 * up the authentication backend in Vault.
 */
roleId: string;
/**
 * Reference to a key in a Secret that contains the App Role secret used
 * to authenticate with Vault.
 * The `key` field must be specified and denotes which entry within the Secret
 * resource is used as the app role secret.
 */
secretRef: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
};
/**
 * Kubernetes authenticates with Vault by passing the ServiceAccount
 * token stored in the named Secret resource to the Vault server.
 */
kubernetes?: {
/**
 * The Vault mountPath here is the mount path to use when authenticating with
 * Vault. For example, setting a value to `/v1/auth/foo`, will use the path
 * `/v1/auth/foo/login` to authenticate with Vault. If unspecified, the
 * default value "/v1/auth/kubernetes" will be used.
 */
mountPath?: string;
/**
 * A required field containing the Vault Role to assume. A Role binds a
 * Kubernetes ServiceAccount with a set of Vault policies.
 */
role: string;
/**
 * The required Secret field containing a Kubernetes ServiceAccount JWT used
 * for authenticating with Vault. Use of 'ambient credentials' is not
 * supported.
 */
secretRef?: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
/**
 * A reference to a service account that will be used to request a bound
 * token (also known as "projected token"). Compared to using "secretRef",
 * using this field means that you don't rely on statically bound tokens. To
 * use this field, you must configure an RBAC rule to let cert-manager
 * request a token.
 */
serviceAccountRef?: {
/**
 * TokenAudiences is an optional list of extra audiences to include in the token passed to Vault. The default token
 * consisting of the issuer's namespace and name is always included.
 */
audiences?: Array<string>;
/**
 * Name of the ServiceAccount used to request a token.
 */
name: string;
};
};
/**
 * TokenSecretRef authenticates with Vault by presenting a token.
 */
tokenSecretRef?: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
};
/**
 * Base64-encoded bundle of PEM CAs which will be used to validate the certificate
 * chain presented by Vault. Only used if using HTTPS to connect to Vault and
 * ignored for HTTP connections.
 * Mutually exclusive with CABundleSecretRef.
 * If neither CABundle nor CABundleSecretRef are defined, the certificate bundle in
 * the cert-manager controller container is used to validate the TLS connection.
 */
caBundle?: string;
/**
 * Reference to a Secret containing a bundle of PEM-encoded CAs to use when
 * verifying the certificate chain presented by Vault when using HTTPS.
 * Mutually exclusive with CABundle.
 * If neither CABundle nor CABundleSecretRef are defined, the certificate bundle in
 * the cert-manager controller container is used to validate the TLS connection.
 * If no key for the Secret is specified, cert-manager will default to 'ca.crt'.
 */
caBundleSecretRef?: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
/**
 * Reference to a Secret containing a PEM-encoded Client Certificate to use when the
 * Vault server requires mTLS.
 */
clientCertSecretRef?: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
/**
 * Reference to a Secret containing a PEM-encoded Client Private Key to use when the
 * Vault server requires mTLS.
 */
clientKeySecretRef?: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
/**
 * Name of the vault namespace. Namespaces is a set of features within Vault Enterprise that allows Vault environments to support Secure Multi-tenancy. e.g: "ns1"
 * More about namespaces can be found here https://www.vaultproject.io/docs/enterprise/namespaces
 */
namespace?: string;
/**
 * Path is the mount path of the Vault PKI backend's `sign` endpoint, e.g:
 * "my_pki_mount/sign/my-role-name".
 */
path: string;
/**
 * Server is the connection address for the Vault server, e.g: "https://vault.example.com:8200".
 */
server: string;
};
/**
 * Venafi configures this issuer to sign certificates using a Venafi TPP
 * or Venafi Cloud policy zone.
 */
venafi?: {
/**
 * Cloud specifies the Venafi cloud configuration settings.
 * Only one of TPP or Cloud may be specified.
 */
cloud?: {
/**
 * APITokenSecretRef is a secret key selector for the Venafi Cloud API token.
 */
apiTokenSecretRef: {
/**
 * The key of the entry in the Secret resource's `data` field to be used.
 * Some instances of this field may be defaulted, in others it may be
 * required.
 */
key?: string;
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
/**
 * URL is the base URL for Venafi Cloud.
 * Defaults to "https://api.venafi.cloud/v1".
 */
url?: string;
};
/**
 * TPP specifies Trust Protection Platform configuration settings.
 * Only one of TPP or Cloud may be specified.
 */
tpp?: {
/**
 * Base64-encoded bundle of PEM CAs which will be used to validate the certificate
 * chain presented by the TPP server. Only used if using HTTPS; ignored for HTTP.
 * If undefined, the certificate bundle in the cert-manager controller container
 * is used to validate the chain.
 */
caBundle?: string;
/**
 * CredentialsRef is a reference to a Secret containing the username and
 * password for the TPP server.
 * The secret must contain two keys, 'username' and 'password'.
 */
credentialsRef: {
/**
 * Name of the resource being referred to.
 * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
name: string;
};
/**
 * URL is the base URL for the vedsdk endpoint of the Venafi TPP instance,
 * for example: "https://tpp.example.com/vedsdk".
 */
url: string;
};
/**
 * Zone is the Venafi Policy Zone to use for this issuer.
 * All requests made to the Venafi platform will be restricted by the named
 * zone policy.
 * This field is required.
 */
zone: string;
};
};
	/**
	 * Status of the Issuer. This is set and managed automatically.
	 */
	status?: {
/**
 * ACME specific status options.
 * This field should only be set if the Issuer is configured to use an ACME
 * server to issue certificates.
 */
acme?: {
/**
 * LastPrivateKeyHash is a hash of the private key associated with the latest
 * registered ACME account, in order to track changes made to registered account
 * associated with the Issuer
 */
lastPrivateKeyHash?: string;
/**
 * LastRegisteredEmail is the email associated with the latest registered
 * ACME account, in order to track changes made to registered account
 * associated with the  Issuer
 */
lastRegisteredEmail?: string;
/**
 * URI is the unique account identifier, which can also be used to retrieve
 * account details from the CA
 */
uri?: string;
};
/**
 * List of status conditions to indicate the status of a CertificateRequest.
 * Known condition types are `Ready`.
 */
conditions?: Array<{
/**
 * LastTransitionTime is the timestamp corresponding to the last status
 * change of this condition.
 */
lastTransitionTime?: string;
/**
 * Message is a human readable description of the details of the last
 * transition, complementing reason.
 */
message?: string;
/**
 * If set, this represents the .metadata.generation that the condition was
 * set based upon.
 * For instance, if .metadata.generation is currently 12, but the
 * .status.condition[x].observedGeneration is 9, the condition is out of date
 * with respect to the current state of the Issuer.
 */
observedGeneration?: number;
/**
 * Reason is a brief machine readable explanation for the condition's last
 * transition.
 */
reason?: string;
/**
 * Status of the condition, one of (`True`, `False`, `Unknown`).
 */
status: 'True' | 'False' | 'Unknown';
/**
 * Type of the condition, known values are (`Ready`).
 */
type: string;
}>;
};
};


