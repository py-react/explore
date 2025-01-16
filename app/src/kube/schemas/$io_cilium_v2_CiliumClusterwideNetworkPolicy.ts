export const $io_cilium_v2_CiliumClusterwideNetworkPolicy = {
	description: `CiliumClusterwideNetworkPolicy is a Kubernetes third-party resource with an modified version of CiliumNetworkPolicy which is cluster scoped rather than namespace scoped.`,
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
	description: `Spec is the desired Cilium specific rule specification.`,
	properties: {
		description: {
	type: 'string',
	description: `Description is a free form string, it can be used by the creator of the rule to store human readable explanation of the purpose of this rule. Rules cannot be identified by comment.`,
},
		egress: {
	type: 'array',
	contains: {
	description: `EgressRule contains all rule types which can be applied at egress, i.e. network traffic that originates inside the endpoint and exits the endpoint selected by the endpointSelector. 
   - All members of this structure are optional. If omitted or empty, the     member will have no effect on the rule. 
   - If multiple members of the structure are specified, then all members     must match in order for the rule to take effect. The exception to this     rule is the ToRequires member; the effects of any Requires field in any     rule will apply to all other rules as well. 
   - ToEndpoints, ToCIDR, ToCIDRSet, ToEntities, ToServices and ToGroups are     mutually exclusive. Only one of these members may be present within an     individual rule.`,
	properties: {
		authentication: {
	description: `Authentication is the required authentication type for the allowed traffic, if any.`,
	properties: {
		mode: {
	type: 'Enum',
	isRequired: true,
},
	},
},
		icmps: {
	type: 'array',
	contains: {
	description: `ICMPRule is a list of ICMP fields.`,
	properties: {
		fields: {
	type: 'array',
	contains: {
	description: `ICMPField is a ICMP field.`,
	properties: {
		family: {
	type: 'Enum',
},
		type: {
	type: 'number',
	description: `Type is a ICMP-type. It should be 0-255 (8bit).`,
	isRequired: true,
	maximum: 255,
},
	},
},
},
	},
},
},
		toCIDR: {
	type: 'array',
	contains: {
	type: 'string',
	description: `CIDR specifies a block of IP addresses. Example: 192.0.2.1/32`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
},
		toCIDRSet: {
	type: 'array',
	contains: {
	description: `CIDRRule is a rule that specifies a CIDR prefix to/from which outside communication  is allowed, along with an optional list of subnets within that CIDR prefix to/from which outside communication is not allowed.`,
	properties: {
		cidr: {
	type: 'string',
	description: `CIDR is a CIDR prefix / IP Block.`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
		cidrGroupRef: {
	type: 'string',
	description: `CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress) or cannot (IngressDeny) receive connections from.`,
	maxLength: 253,
	pattern: '^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$',
},
		except: {
	type: 'array',
	contains: {
	type: 'string',
	description: `CIDR specifies a block of IP addresses. Example: 192.0.2.1/32`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
},
	},
},
},
		toEndpoints: {
	type: 'array',
	contains: {
	description: `EndpointSelector is a wrapper for k8s LabelSelector.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
},
		toEntities: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
		toFQDNs: {
	type: 'array',
	contains: {
	properties: {
		matchName: {
	type: 'string',
	description: `MatchName matches literal DNS names. A trailing "." is automatically added when missing.`,
	pattern: '^([-a-zA-Z0-9_]+[.]?)+$',
},
		matchPattern: {
	type: 'string',
	description: `MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing. 
 Examples: \`*.cilium.io\` matches subomains of cilium at that level   www.cilium.io and blog.cilium.io match, cilium.io and google.com do not \`*cilium.io\` matches cilium.io and all subdomains ends with "cilium.io"   except those containing "." separator, subcilium.io and sub-cilium.io match,   www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub"   sub.cilium.io and subdomain.cilium.io match, www.cilium.io,   blog.cilium.io, cilium.io and google.com do not`,
	pattern: '^([-a-zA-Z0-9_*]+[.]?)+$',
},
	},
},
},
		toGroups: {
	type: 'array',
	contains: {
	description: `ToGroups structure to store all kinds of new integrations that needs a new derivative policy.`,
	properties: {
		aws: {
	description: `AWSGroup is an structure that can be used to whitelisting information from AWS integration`,
	properties: {
		labels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		region: {
	type: 'string',
},
		securityGroupsIds: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		securityGroupsNames: {
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
		toPorts: {
	type: 'array',
	contains: {
	description: `PortRule is a list of ports/protocol combinations with optional Layer 7 rules which must be met.`,
	properties: {
		listener: {
	description: `listener specifies the name of a custom Envoy listener to which this traffic should be redirected to.`,
	properties: {
		envoyConfig: {
	description: `EnvoyConfig is a reference to the CEC or CCNP resource in which the listener is defined.`,
	properties: {
		kind: {
	type: 'Enum',
},
		name: {
	type: 'string',
	description: `Name is the resource name of the CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig where the listener is defined in.`,
	isRequired: true,
	minLength: 1,
},
	},
	isRequired: true,
},
		name: {
	type: 'string',
	description: `Name is the name of the listener.`,
	isRequired: true,
	minLength: 1,
},
	},
},
		originatingTLS: {
	description: `OriginatingTLS is the TLS context for the connections originated by the L7 proxy.  For egress policy this specifies the client-side TLS parameters for the upstream connection originating from the L7 proxy to the remote destination. For ingress policy this specifies the client-side TLS parameters for the connection from the L7 proxy to the local endpoint.`,
	properties: {
		certificate: {
	type: 'string',
	description: `Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.`,
},
		privateKey: {
	type: 'string',
	description: `PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.`,
},
		secret: {
	description: `Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items:  - 'ca.crt'  - Which represents the trusted CA to verify remote source.  - 'tls.crt' - Which represents the public key certificate.  - 'tls.key' - Which represents the private key matching the public key                certificate.`,
	properties: {
		name: {
	type: 'string',
	description: `Name is the name of the secret.`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").`,
},
	},
	isRequired: true,
},
		trustedCA: {
	type: 'string',
	description: `TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.`,
},
	},
},
		ports: {
	type: 'array',
	contains: {
	description: `PortProtocol specifies an L4 port with an optional transport protocol`,
	properties: {
		port: {
	type: 'string',
	description: `Port is an L4 port number. For now the string will be strictly parsed as a single uint16. In the future, this field may support ranges in the form "1024-2048 Port can also be a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.`,
	isRequired: true,
	pattern: '^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})|([a-zA-Z0-9]-?)*[a-zA-Z](-?[a-zA-Z0-9])*$',
},
		protocol: {
	type: 'Enum',
},
	},
},
},
		rules: {
	description: `Rules is a list of additional port level rules which must be met in order for the PortRule to allow the traffic. If omitted or empty, no layer 7 rules are enforced.`,
	properties: {
		dns: {
	type: 'array',
	contains: {
	description: `PortRuleDNS is a list of allowed DNS lookups.`,
	properties: {
		matchName: {
	type: 'string',
	description: `MatchName matches literal DNS names. A trailing "." is automatically added when missing.`,
	pattern: '^([-a-zA-Z0-9_]+[.]?)+$',
},
		matchPattern: {
	type: 'string',
	description: `MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing. 
 Examples: \`*.cilium.io\` matches subomains of cilium at that level   www.cilium.io and blog.cilium.io match, cilium.io and google.com do not \`*cilium.io\` matches cilium.io and all subdomains ends with "cilium.io"   except those containing "." separator, subcilium.io and sub-cilium.io match,   www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub"   sub.cilium.io and subdomain.cilium.io match, www.cilium.io,   blog.cilium.io, cilium.io and google.com do not`,
	pattern: '^([-a-zA-Z0-9_*]+[.]?)+$',
},
	},
},
},
		http: {
	type: 'array',
	contains: {
	description: `PortRuleHTTP is a list of HTTP protocol constraints. All fields are optional, if all fields are empty or missing, the rule does not have any effect. 
 All fields of this type are extended POSIX regex as defined by IEEE Std 1003.1, (i.e this follows the egrep/unix syntax, not the perl syntax) matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986.`,
	properties: {
		headerMatches: {
	type: 'array',
	contains: {
	description: `HeaderMatch extends the HeaderValue for matching requirement of a named header field against an immediate string, a secret value, or a regex.  If none of the optional fields is present, then the header value is not matched, only presence of the header is enough.`,
	properties: {
		mismatch: {
	type: 'Enum',
},
		name: {
	type: 'string',
	description: `Name identifies the header.`,
	isRequired: true,
},
		secret: {
	description: `Secret refers to a secret that contains the value to be matched against. The secret must only contain one entry. If the referred secret does not exist, and there is no "Value" specified, the match will fail.`,
	properties: {
		name: {
	type: 'string',
	description: `Name is the name of the secret.`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").`,
},
	},
},
		value: {
	type: 'string',
	description: `Value matches the exact value of the header. Can be specified either alone or together with "Secret"; will be used as the header value if the secret can not be found in the latter case.`,
},
	},
},
},
		headers: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		host: {
	type: 'string',
	description: `Host is an extended POSIX regex matched against the host header of a request, e.g. "foo.com" 
 If omitted or empty, the value of the host header is ignored.`,
	format: 'idn-hostname',
},
		method: {
	type: 'string',
	description: `Method is an extended POSIX regex matched against the method of a request, e.g. "GET", "POST", "PUT", "PATCH", "DELETE", ... 
 If omitted or empty, all methods are allowed.`,
},
		path: {
	type: 'string',
	description: `Path is an extended POSIX regex matched against the path of a request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. 
 If omitted or empty, all paths are all allowed.`,
},
	},
},
},
		kafka: {
	type: 'array',
	contains: {
	description: `PortRule is a list of Kafka protocol constraints. All fields are optional, if all fields are empty or missing, the rule will match all Kafka messages.`,
	properties: {
		apiKey: {
	type: 'string',
	description: `APIKey is a case-insensitive string matched against the key of a request, e.g. "produce", "fetch", "createtopic", "deletetopic", et al Reference: https://kafka.apache.org/protocol#protocol_api_keys 
 If omitted or empty, and if Role is not specified, then all keys are allowed.`,
},
		apiVersion: {
	type: 'string',
	description: `APIVersion is the version matched against the api version of the Kafka message. If set, it has to be a string representing a positive integer. 
 If omitted or empty, all versions are allowed.`,
},
		clientID: {
	type: 'string',
	description: `ClientID is the client identifier as provided in the request. 
 From Kafka protocol documentation: This is a user supplied identifier for the client application. The user can use any identifier they like and it will be used when logging errors, monitoring aggregates, etc. For example, one might want to monitor not just the requests per second overall, but the number coming from each client application (each of which could reside on multiple servers). This id acts as a logical grouping across all requests from a particular client. 
 If omitted or empty, all client identifiers are allowed.`,
},
		role: {
	type: 'Enum',
},
		topic: {
	type: 'string',
	description: `Topic is the topic name contained in the message. If a Kafka request contains multiple topics, then all topics must be allowed or the message will be rejected. 
 This constraint is ignored if the matched request message type doesn't contain any topic. Maximum size of Topic can be 249 characters as per recent Kafka spec and allowed characters are a-z, A-Z, 0-9, -, . and _. 
 Older Kafka versions had longer topic lengths of 255, but in Kafka 0.10 version the length was changed from 255 to 249. For compatibility reasons we are using 255. 
 If omitted or empty, all topics are allowed.`,
	maxLength: 255,
},
	},
},
},
		l7: {
	type: 'array',
	contains: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
},
		l7proto: {
	type: 'string',
	description: `Name of the L7 protocol for which the Key-value pair rules apply.`,
},
	},
},
		serverNames: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		terminatingTLS: {
	description: `TerminatingTLS is the TLS context for the connection terminated by the L7 proxy.  For egress policy this specifies the server-side TLS parameters to be applied on the connections originated from the local endpoint and terminated by the L7 proxy. For ingress policy this specifies the server-side TLS parameters to be applied on the connections originated from a remote source and terminated by the L7 proxy.`,
	properties: {
		certificate: {
	type: 'string',
	description: `Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.`,
},
		privateKey: {
	type: 'string',
	description: `PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.`,
},
		secret: {
	description: `Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items:  - 'ca.crt'  - Which represents the trusted CA to verify remote source.  - 'tls.crt' - Which represents the public key certificate.  - 'tls.key' - Which represents the private key matching the public key                certificate.`,
	properties: {
		name: {
	type: 'string',
	description: `Name is the name of the secret.`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").`,
},
	},
	isRequired: true,
},
		trustedCA: {
	type: 'string',
	description: `TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.`,
},
	},
},
	},
},
},
		toRequires: {
	type: 'array',
	contains: {
	description: `EndpointSelector is a wrapper for k8s LabelSelector.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
},
		toServices: {
	type: 'array',
	contains: {
	description: `Service wraps around selectors for services`,
	properties: {
		k8sService: {
	description: `K8sService selects service by name and namespace pair`,
	properties: {
		namespace: {
	type: 'string',
},
		serviceName: {
	type: 'string',
},
	},
},
		k8sServiceSelector: {
	description: `K8sServiceSelector selects services by k8s labels and namespace`,
	properties: {
		namespace: {
	type: 'string',
},
		selector: {
	description: `ServiceSelector is a label selector for k8s services`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
	isRequired: true,
},
	},
},
	},
},
},
	},
},
},
		egressDeny: {
	type: 'array',
	contains: {
	description: `EgressDenyRule contains all rule types which can be applied at egress, i.e. network traffic that originates inside the endpoint and exits the endpoint selected by the endpointSelector. 
   - All members of this structure are optional. If omitted or empty, the     member will have no effect on the rule. 
   - If multiple members of the structure are specified, then all members     must match in order for the rule to take effect. The exception to this     rule is the ToRequires member; the effects of any Requires field in any     rule will apply to all other rules as well. 
   - ToEndpoints, ToCIDR, ToCIDRSet, ToEntities, ToServices and ToGroups are     mutually exclusive. Only one of these members may be present within an     individual rule.`,
	properties: {
		icmps: {
	type: 'array',
	contains: {
	description: `ICMPRule is a list of ICMP fields.`,
	properties: {
		fields: {
	type: 'array',
	contains: {
	description: `ICMPField is a ICMP field.`,
	properties: {
		family: {
	type: 'Enum',
},
		type: {
	type: 'number',
	description: `Type is a ICMP-type. It should be 0-255 (8bit).`,
	isRequired: true,
	maximum: 255,
},
	},
},
},
	},
},
},
		toCIDR: {
	type: 'array',
	contains: {
	type: 'string',
	description: `CIDR specifies a block of IP addresses. Example: 192.0.2.1/32`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
},
		toCIDRSet: {
	type: 'array',
	contains: {
	description: `CIDRRule is a rule that specifies a CIDR prefix to/from which outside communication  is allowed, along with an optional list of subnets within that CIDR prefix to/from which outside communication is not allowed.`,
	properties: {
		cidr: {
	type: 'string',
	description: `CIDR is a CIDR prefix / IP Block.`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
		cidrGroupRef: {
	type: 'string',
	description: `CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress) or cannot (IngressDeny) receive connections from.`,
	maxLength: 253,
	pattern: '^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$',
},
		except: {
	type: 'array',
	contains: {
	type: 'string',
	description: `CIDR specifies a block of IP addresses. Example: 192.0.2.1/32`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
},
	},
},
},
		toEndpoints: {
	type: 'array',
	contains: {
	description: `EndpointSelector is a wrapper for k8s LabelSelector.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
},
		toEntities: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
		toGroups: {
	type: 'array',
	contains: {
	description: `ToGroups structure to store all kinds of new integrations that needs a new derivative policy.`,
	properties: {
		aws: {
	description: `AWSGroup is an structure that can be used to whitelisting information from AWS integration`,
	properties: {
		labels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		region: {
	type: 'string',
},
		securityGroupsIds: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		securityGroupsNames: {
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
		toPorts: {
	type: 'array',
	contains: {
	description: `PortDenyRule is a list of ports/protocol that should be used for deny policies. This structure lacks the L7Rules since it's not supported in deny policies.`,
	properties: {
		ports: {
	type: 'array',
	contains: {
	description: `PortProtocol specifies an L4 port with an optional transport protocol`,
	properties: {
		port: {
	type: 'string',
	description: `Port is an L4 port number. For now the string will be strictly parsed as a single uint16. In the future, this field may support ranges in the form "1024-2048 Port can also be a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.`,
	isRequired: true,
	pattern: '^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})|([a-zA-Z0-9]-?)*[a-zA-Z](-?[a-zA-Z0-9])*$',
},
		protocol: {
	type: 'Enum',
},
	},
},
},
	},
},
},
		toRequires: {
	type: 'array',
	contains: {
	description: `EndpointSelector is a wrapper for k8s LabelSelector.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
},
		toServices: {
	type: 'array',
	contains: {
	description: `Service wraps around selectors for services`,
	properties: {
		k8sService: {
	description: `K8sService selects service by name and namespace pair`,
	properties: {
		namespace: {
	type: 'string',
},
		serviceName: {
	type: 'string',
},
	},
},
		k8sServiceSelector: {
	description: `K8sServiceSelector selects services by k8s labels and namespace`,
	properties: {
		namespace: {
	type: 'string',
},
		selector: {
	description: `ServiceSelector is a label selector for k8s services`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
	isRequired: true,
},
	},
},
	},
},
},
	},
},
},
		endpointSelector: {
	description: `EndpointSelector selects all endpoints which should be subject to this rule. EndpointSelector and NodeSelector cannot be both empty and are mutually exclusive.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
		ingress: {
	type: 'array',
	contains: {
	description: `IngressRule contains all rule types which can be applied at ingress, i.e. network traffic that originates outside of the endpoint and is entering the endpoint selected by the endpointSelector. 
   - All members of this structure are optional. If omitted or empty, the     member will have no effect on the rule. 
   - If multiple members are set, all of them need to match in order for     the rule to take effect. The exception to this rule is FromRequires field;     the effects of any Requires field in any rule will apply to all other     rules as well. 
   - FromEndpoints, FromCIDR, FromCIDRSet and FromEntities are mutually     exclusive. Only one of these members may be present within an individual     rule.`,
	properties: {
		authentication: {
	description: `Authentication is the required authentication type for the allowed traffic, if any.`,
	properties: {
		mode: {
	type: 'Enum',
	isRequired: true,
},
	},
},
		fromCIDR: {
	type: 'array',
	contains: {
	type: 'string',
	description: `CIDR specifies a block of IP addresses. Example: 192.0.2.1/32`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
},
		fromCIDRSet: {
	type: 'array',
	contains: {
	description: `CIDRRule is a rule that specifies a CIDR prefix to/from which outside communication  is allowed, along with an optional list of subnets within that CIDR prefix to/from which outside communication is not allowed.`,
	properties: {
		cidr: {
	type: 'string',
	description: `CIDR is a CIDR prefix / IP Block.`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
		cidrGroupRef: {
	type: 'string',
	description: `CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress) or cannot (IngressDeny) receive connections from.`,
	maxLength: 253,
	pattern: '^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$',
},
		except: {
	type: 'array',
	contains: {
	type: 'string',
	description: `CIDR specifies a block of IP addresses. Example: 192.0.2.1/32`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
},
	},
},
},
		fromEndpoints: {
	type: 'array',
	contains: {
	description: `EndpointSelector is a wrapper for k8s LabelSelector.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
},
		fromEntities: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
		fromRequires: {
	type: 'array',
	contains: {
	description: `EndpointSelector is a wrapper for k8s LabelSelector.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
},
		icmps: {
	type: 'array',
	contains: {
	description: `ICMPRule is a list of ICMP fields.`,
	properties: {
		fields: {
	type: 'array',
	contains: {
	description: `ICMPField is a ICMP field.`,
	properties: {
		family: {
	type: 'Enum',
},
		type: {
	type: 'number',
	description: `Type is a ICMP-type. It should be 0-255 (8bit).`,
	isRequired: true,
	maximum: 255,
},
	},
},
},
	},
},
},
		toPorts: {
	type: 'array',
	contains: {
	description: `PortRule is a list of ports/protocol combinations with optional Layer 7 rules which must be met.`,
	properties: {
		listener: {
	description: `listener specifies the name of a custom Envoy listener to which this traffic should be redirected to.`,
	properties: {
		envoyConfig: {
	description: `EnvoyConfig is a reference to the CEC or CCNP resource in which the listener is defined.`,
	properties: {
		kind: {
	type: 'Enum',
},
		name: {
	type: 'string',
	description: `Name is the resource name of the CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig where the listener is defined in.`,
	isRequired: true,
	minLength: 1,
},
	},
	isRequired: true,
},
		name: {
	type: 'string',
	description: `Name is the name of the listener.`,
	isRequired: true,
	minLength: 1,
},
	},
},
		originatingTLS: {
	description: `OriginatingTLS is the TLS context for the connections originated by the L7 proxy.  For egress policy this specifies the client-side TLS parameters for the upstream connection originating from the L7 proxy to the remote destination. For ingress policy this specifies the client-side TLS parameters for the connection from the L7 proxy to the local endpoint.`,
	properties: {
		certificate: {
	type: 'string',
	description: `Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.`,
},
		privateKey: {
	type: 'string',
	description: `PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.`,
},
		secret: {
	description: `Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items:  - 'ca.crt'  - Which represents the trusted CA to verify remote source.  - 'tls.crt' - Which represents the public key certificate.  - 'tls.key' - Which represents the private key matching the public key                certificate.`,
	properties: {
		name: {
	type: 'string',
	description: `Name is the name of the secret.`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").`,
},
	},
	isRequired: true,
},
		trustedCA: {
	type: 'string',
	description: `TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.`,
},
	},
},
		ports: {
	type: 'array',
	contains: {
	description: `PortProtocol specifies an L4 port with an optional transport protocol`,
	properties: {
		port: {
	type: 'string',
	description: `Port is an L4 port number. For now the string will be strictly parsed as a single uint16. In the future, this field may support ranges in the form "1024-2048 Port can also be a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.`,
	isRequired: true,
	pattern: '^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})|([a-zA-Z0-9]-?)*[a-zA-Z](-?[a-zA-Z0-9])*$',
},
		protocol: {
	type: 'Enum',
},
	},
},
},
		rules: {
	description: `Rules is a list of additional port level rules which must be met in order for the PortRule to allow the traffic. If omitted or empty, no layer 7 rules are enforced.`,
	properties: {
		dns: {
	type: 'array',
	contains: {
	description: `PortRuleDNS is a list of allowed DNS lookups.`,
	properties: {
		matchName: {
	type: 'string',
	description: `MatchName matches literal DNS names. A trailing "." is automatically added when missing.`,
	pattern: '^([-a-zA-Z0-9_]+[.]?)+$',
},
		matchPattern: {
	type: 'string',
	description: `MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing. 
 Examples: \`*.cilium.io\` matches subomains of cilium at that level   www.cilium.io and blog.cilium.io match, cilium.io and google.com do not \`*cilium.io\` matches cilium.io and all subdomains ends with "cilium.io"   except those containing "." separator, subcilium.io and sub-cilium.io match,   www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub"   sub.cilium.io and subdomain.cilium.io match, www.cilium.io,   blog.cilium.io, cilium.io and google.com do not`,
	pattern: '^([-a-zA-Z0-9_*]+[.]?)+$',
},
	},
},
},
		http: {
	type: 'array',
	contains: {
	description: `PortRuleHTTP is a list of HTTP protocol constraints. All fields are optional, if all fields are empty or missing, the rule does not have any effect. 
 All fields of this type are extended POSIX regex as defined by IEEE Std 1003.1, (i.e this follows the egrep/unix syntax, not the perl syntax) matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986.`,
	properties: {
		headerMatches: {
	type: 'array',
	contains: {
	description: `HeaderMatch extends the HeaderValue for matching requirement of a named header field against an immediate string, a secret value, or a regex.  If none of the optional fields is present, then the header value is not matched, only presence of the header is enough.`,
	properties: {
		mismatch: {
	type: 'Enum',
},
		name: {
	type: 'string',
	description: `Name identifies the header.`,
	isRequired: true,
},
		secret: {
	description: `Secret refers to a secret that contains the value to be matched against. The secret must only contain one entry. If the referred secret does not exist, and there is no "Value" specified, the match will fail.`,
	properties: {
		name: {
	type: 'string',
	description: `Name is the name of the secret.`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").`,
},
	},
},
		value: {
	type: 'string',
	description: `Value matches the exact value of the header. Can be specified either alone or together with "Secret"; will be used as the header value if the secret can not be found in the latter case.`,
},
	},
},
},
		headers: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		host: {
	type: 'string',
	description: `Host is an extended POSIX regex matched against the host header of a request, e.g. "foo.com" 
 If omitted or empty, the value of the host header is ignored.`,
	format: 'idn-hostname',
},
		method: {
	type: 'string',
	description: `Method is an extended POSIX regex matched against the method of a request, e.g. "GET", "POST", "PUT", "PATCH", "DELETE", ... 
 If omitted or empty, all methods are allowed.`,
},
		path: {
	type: 'string',
	description: `Path is an extended POSIX regex matched against the path of a request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. 
 If omitted or empty, all paths are all allowed.`,
},
	},
},
},
		kafka: {
	type: 'array',
	contains: {
	description: `PortRule is a list of Kafka protocol constraints. All fields are optional, if all fields are empty or missing, the rule will match all Kafka messages.`,
	properties: {
		apiKey: {
	type: 'string',
	description: `APIKey is a case-insensitive string matched against the key of a request, e.g. "produce", "fetch", "createtopic", "deletetopic", et al Reference: https://kafka.apache.org/protocol#protocol_api_keys 
 If omitted or empty, and if Role is not specified, then all keys are allowed.`,
},
		apiVersion: {
	type: 'string',
	description: `APIVersion is the version matched against the api version of the Kafka message. If set, it has to be a string representing a positive integer. 
 If omitted or empty, all versions are allowed.`,
},
		clientID: {
	type: 'string',
	description: `ClientID is the client identifier as provided in the request. 
 From Kafka protocol documentation: This is a user supplied identifier for the client application. The user can use any identifier they like and it will be used when logging errors, monitoring aggregates, etc. For example, one might want to monitor not just the requests per second overall, but the number coming from each client application (each of which could reside on multiple servers). This id acts as a logical grouping across all requests from a particular client. 
 If omitted or empty, all client identifiers are allowed.`,
},
		role: {
	type: 'Enum',
},
		topic: {
	type: 'string',
	description: `Topic is the topic name contained in the message. If a Kafka request contains multiple topics, then all topics must be allowed or the message will be rejected. 
 This constraint is ignored if the matched request message type doesn't contain any topic. Maximum size of Topic can be 249 characters as per recent Kafka spec and allowed characters are a-z, A-Z, 0-9, -, . and _. 
 Older Kafka versions had longer topic lengths of 255, but in Kafka 0.10 version the length was changed from 255 to 249. For compatibility reasons we are using 255. 
 If omitted or empty, all topics are allowed.`,
	maxLength: 255,
},
	},
},
},
		l7: {
	type: 'array',
	contains: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
},
		l7proto: {
	type: 'string',
	description: `Name of the L7 protocol for which the Key-value pair rules apply.`,
},
	},
},
		serverNames: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		terminatingTLS: {
	description: `TerminatingTLS is the TLS context for the connection terminated by the L7 proxy.  For egress policy this specifies the server-side TLS parameters to be applied on the connections originated from the local endpoint and terminated by the L7 proxy. For ingress policy this specifies the server-side TLS parameters to be applied on the connections originated from a remote source and terminated by the L7 proxy.`,
	properties: {
		certificate: {
	type: 'string',
	description: `Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.`,
},
		privateKey: {
	type: 'string',
	description: `PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.`,
},
		secret: {
	description: `Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items:  - 'ca.crt'  - Which represents the trusted CA to verify remote source.  - 'tls.crt' - Which represents the public key certificate.  - 'tls.key' - Which represents the private key matching the public key                certificate.`,
	properties: {
		name: {
	type: 'string',
	description: `Name is the name of the secret.`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").`,
},
	},
	isRequired: true,
},
		trustedCA: {
	type: 'string',
	description: `TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.`,
},
	},
},
	},
},
},
	},
},
},
		ingressDeny: {
	type: 'array',
	contains: {
	description: `IngressDenyRule contains all rule types which can be applied at ingress, i.e. network traffic that originates outside of the endpoint and is entering the endpoint selected by the endpointSelector. 
   - All members of this structure are optional. If omitted or empty, the     member will have no effect on the rule. 
   - If multiple members are set, all of them need to match in order for     the rule to take effect. The exception to this rule is FromRequires field;     the effects of any Requires field in any rule will apply to all other     rules as well. 
   - FromEndpoints, FromCIDR, FromCIDRSet and FromEntities are mutually     exclusive. Only one of these members may be present within an individual     rule.`,
	properties: {
		fromCIDR: {
	type: 'array',
	contains: {
	type: 'string',
	description: `CIDR specifies a block of IP addresses. Example: 192.0.2.1/32`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
},
		fromCIDRSet: {
	type: 'array',
	contains: {
	description: `CIDRRule is a rule that specifies a CIDR prefix to/from which outside communication  is allowed, along with an optional list of subnets within that CIDR prefix to/from which outside communication is not allowed.`,
	properties: {
		cidr: {
	type: 'string',
	description: `CIDR is a CIDR prefix / IP Block.`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
		cidrGroupRef: {
	type: 'string',
	description: `CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress) or cannot (IngressDeny) receive connections from.`,
	maxLength: 253,
	pattern: '^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$',
},
		except: {
	type: 'array',
	contains: {
	type: 'string',
	description: `CIDR specifies a block of IP addresses. Example: 192.0.2.1/32`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
},
	},
},
},
		fromEndpoints: {
	type: 'array',
	contains: {
	description: `EndpointSelector is a wrapper for k8s LabelSelector.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
},
		fromEntities: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
		fromRequires: {
	type: 'array',
	contains: {
	description: `EndpointSelector is a wrapper for k8s LabelSelector.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
},
		icmps: {
	type: 'array',
	contains: {
	description: `ICMPRule is a list of ICMP fields.`,
	properties: {
		fields: {
	type: 'array',
	contains: {
	description: `ICMPField is a ICMP field.`,
	properties: {
		family: {
	type: 'Enum',
},
		type: {
	type: 'number',
	description: `Type is a ICMP-type. It should be 0-255 (8bit).`,
	isRequired: true,
	maximum: 255,
},
	},
},
},
	},
},
},
		toPorts: {
	type: 'array',
	contains: {
	description: `PortDenyRule is a list of ports/protocol that should be used for deny policies. This structure lacks the L7Rules since it's not supported in deny policies.`,
	properties: {
		ports: {
	type: 'array',
	contains: {
	description: `PortProtocol specifies an L4 port with an optional transport protocol`,
	properties: {
		port: {
	type: 'string',
	description: `Port is an L4 port number. For now the string will be strictly parsed as a single uint16. In the future, this field may support ranges in the form "1024-2048 Port can also be a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.`,
	isRequired: true,
	pattern: '^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})|([a-zA-Z0-9]-?)*[a-zA-Z](-?[a-zA-Z0-9])*$',
},
		protocol: {
	type: 'Enum',
},
	},
},
},
	},
},
},
	},
},
},
		labels: {
	type: 'array',
	contains: {
	description: `Label is the Cilium's representation of a container label.`,
	properties: {
		key: {
	type: 'string',
	isRequired: true,
},
		source: {
	type: 'string',
	description: `Source can be one of the above values (e.g.: LabelSourceContainer).`,
},
		value: {
	type: 'string',
},
	},
},
},
		nodeSelector: {
	description: `NodeSelector selects all nodes which should be subject to this rule. EndpointSelector and NodeSelector cannot be both empty and are mutually exclusive. Can only be used in CiliumClusterwideNetworkPolicies.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
	},
},
		specs: {
	type: 'array',
	contains: {
	description: `Rule is a policy rule which must be applied to all endpoints which match the labels contained in the endpointSelector 
 Each rule is split into an ingress section which contains all rules applicable at ingress, and an egress section applicable at egress. For rule types such as \`L4Rule\` and \`CIDR\` which can be applied at both ingress and egress, both ingress and egress side have to either specifically allow the connection or one side has to be omitted. 
 Either ingress, egress, or both can be provided. If both ingress and egress are omitted, the rule has no effect.`,
	properties: {
		description: {
	type: 'string',
	description: `Description is a free form string, it can be used by the creator of the rule to store human readable explanation of the purpose of this rule. Rules cannot be identified by comment.`,
},
		egress: {
	type: 'array',
	contains: {
	description: `EgressRule contains all rule types which can be applied at egress, i.e. network traffic that originates inside the endpoint and exits the endpoint selected by the endpointSelector. 
   - All members of this structure are optional. If omitted or empty, the     member will have no effect on the rule. 
   - If multiple members of the structure are specified, then all members     must match in order for the rule to take effect. The exception to this     rule is the ToRequires member; the effects of any Requires field in any     rule will apply to all other rules as well. 
   - ToEndpoints, ToCIDR, ToCIDRSet, ToEntities, ToServices and ToGroups are     mutually exclusive. Only one of these members may be present within an     individual rule.`,
	properties: {
		authentication: {
	description: `Authentication is the required authentication type for the allowed traffic, if any.`,
	properties: {
		mode: {
	type: 'Enum',
	isRequired: true,
},
	},
},
		icmps: {
	type: 'array',
	contains: {
	description: `ICMPRule is a list of ICMP fields.`,
	properties: {
		fields: {
	type: 'array',
	contains: {
	description: `ICMPField is a ICMP field.`,
	properties: {
		family: {
	type: 'Enum',
},
		type: {
	type: 'number',
	description: `Type is a ICMP-type. It should be 0-255 (8bit).`,
	isRequired: true,
	maximum: 255,
},
	},
},
},
	},
},
},
		toCIDR: {
	type: 'array',
	contains: {
	type: 'string',
	description: `CIDR specifies a block of IP addresses. Example: 192.0.2.1/32`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
},
		toCIDRSet: {
	type: 'array',
	contains: {
	description: `CIDRRule is a rule that specifies a CIDR prefix to/from which outside communication  is allowed, along with an optional list of subnets within that CIDR prefix to/from which outside communication is not allowed.`,
	properties: {
		cidr: {
	type: 'string',
	description: `CIDR is a CIDR prefix / IP Block.`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
		cidrGroupRef: {
	type: 'string',
	description: `CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress) or cannot (IngressDeny) receive connections from.`,
	maxLength: 253,
	pattern: '^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$',
},
		except: {
	type: 'array',
	contains: {
	type: 'string',
	description: `CIDR specifies a block of IP addresses. Example: 192.0.2.1/32`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
},
	},
},
},
		toEndpoints: {
	type: 'array',
	contains: {
	description: `EndpointSelector is a wrapper for k8s LabelSelector.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
},
		toEntities: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
		toFQDNs: {
	type: 'array',
	contains: {
	properties: {
		matchName: {
	type: 'string',
	description: `MatchName matches literal DNS names. A trailing "." is automatically added when missing.`,
	pattern: '^([-a-zA-Z0-9_]+[.]?)+$',
},
		matchPattern: {
	type: 'string',
	description: `MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing. 
 Examples: \`*.cilium.io\` matches subomains of cilium at that level   www.cilium.io and blog.cilium.io match, cilium.io and google.com do not \`*cilium.io\` matches cilium.io and all subdomains ends with "cilium.io"   except those containing "." separator, subcilium.io and sub-cilium.io match,   www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub"   sub.cilium.io and subdomain.cilium.io match, www.cilium.io,   blog.cilium.io, cilium.io and google.com do not`,
	pattern: '^([-a-zA-Z0-9_*]+[.]?)+$',
},
	},
},
},
		toGroups: {
	type: 'array',
	contains: {
	description: `ToGroups structure to store all kinds of new integrations that needs a new derivative policy.`,
	properties: {
		aws: {
	description: `AWSGroup is an structure that can be used to whitelisting information from AWS integration`,
	properties: {
		labels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		region: {
	type: 'string',
},
		securityGroupsIds: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		securityGroupsNames: {
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
		toPorts: {
	type: 'array',
	contains: {
	description: `PortRule is a list of ports/protocol combinations with optional Layer 7 rules which must be met.`,
	properties: {
		listener: {
	description: `listener specifies the name of a custom Envoy listener to which this traffic should be redirected to.`,
	properties: {
		envoyConfig: {
	description: `EnvoyConfig is a reference to the CEC or CCNP resource in which the listener is defined.`,
	properties: {
		kind: {
	type: 'Enum',
},
		name: {
	type: 'string',
	description: `Name is the resource name of the CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig where the listener is defined in.`,
	isRequired: true,
	minLength: 1,
},
	},
	isRequired: true,
},
		name: {
	type: 'string',
	description: `Name is the name of the listener.`,
	isRequired: true,
	minLength: 1,
},
	},
},
		originatingTLS: {
	description: `OriginatingTLS is the TLS context for the connections originated by the L7 proxy.  For egress policy this specifies the client-side TLS parameters for the upstream connection originating from the L7 proxy to the remote destination. For ingress policy this specifies the client-side TLS parameters for the connection from the L7 proxy to the local endpoint.`,
	properties: {
		certificate: {
	type: 'string',
	description: `Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.`,
},
		privateKey: {
	type: 'string',
	description: `PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.`,
},
		secret: {
	description: `Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items:  - 'ca.crt'  - Which represents the trusted CA to verify remote source.  - 'tls.crt' - Which represents the public key certificate.  - 'tls.key' - Which represents the private key matching the public key                certificate.`,
	properties: {
		name: {
	type: 'string',
	description: `Name is the name of the secret.`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").`,
},
	},
	isRequired: true,
},
		trustedCA: {
	type: 'string',
	description: `TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.`,
},
	},
},
		ports: {
	type: 'array',
	contains: {
	description: `PortProtocol specifies an L4 port with an optional transport protocol`,
	properties: {
		port: {
	type: 'string',
	description: `Port is an L4 port number. For now the string will be strictly parsed as a single uint16. In the future, this field may support ranges in the form "1024-2048 Port can also be a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.`,
	isRequired: true,
	pattern: '^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})|([a-zA-Z0-9]-?)*[a-zA-Z](-?[a-zA-Z0-9])*$',
},
		protocol: {
	type: 'Enum',
},
	},
},
},
		rules: {
	description: `Rules is a list of additional port level rules which must be met in order for the PortRule to allow the traffic. If omitted or empty, no layer 7 rules are enforced.`,
	properties: {
		dns: {
	type: 'array',
	contains: {
	description: `PortRuleDNS is a list of allowed DNS lookups.`,
	properties: {
		matchName: {
	type: 'string',
	description: `MatchName matches literal DNS names. A trailing "." is automatically added when missing.`,
	pattern: '^([-a-zA-Z0-9_]+[.]?)+$',
},
		matchPattern: {
	type: 'string',
	description: `MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing. 
 Examples: \`*.cilium.io\` matches subomains of cilium at that level   www.cilium.io and blog.cilium.io match, cilium.io and google.com do not \`*cilium.io\` matches cilium.io and all subdomains ends with "cilium.io"   except those containing "." separator, subcilium.io and sub-cilium.io match,   www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub"   sub.cilium.io and subdomain.cilium.io match, www.cilium.io,   blog.cilium.io, cilium.io and google.com do not`,
	pattern: '^([-a-zA-Z0-9_*]+[.]?)+$',
},
	},
},
},
		http: {
	type: 'array',
	contains: {
	description: `PortRuleHTTP is a list of HTTP protocol constraints. All fields are optional, if all fields are empty or missing, the rule does not have any effect. 
 All fields of this type are extended POSIX regex as defined by IEEE Std 1003.1, (i.e this follows the egrep/unix syntax, not the perl syntax) matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986.`,
	properties: {
		headerMatches: {
	type: 'array',
	contains: {
	description: `HeaderMatch extends the HeaderValue for matching requirement of a named header field against an immediate string, a secret value, or a regex.  If none of the optional fields is present, then the header value is not matched, only presence of the header is enough.`,
	properties: {
		mismatch: {
	type: 'Enum',
},
		name: {
	type: 'string',
	description: `Name identifies the header.`,
	isRequired: true,
},
		secret: {
	description: `Secret refers to a secret that contains the value to be matched against. The secret must only contain one entry. If the referred secret does not exist, and there is no "Value" specified, the match will fail.`,
	properties: {
		name: {
	type: 'string',
	description: `Name is the name of the secret.`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").`,
},
	},
},
		value: {
	type: 'string',
	description: `Value matches the exact value of the header. Can be specified either alone or together with "Secret"; will be used as the header value if the secret can not be found in the latter case.`,
},
	},
},
},
		headers: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		host: {
	type: 'string',
	description: `Host is an extended POSIX regex matched against the host header of a request, e.g. "foo.com" 
 If omitted or empty, the value of the host header is ignored.`,
	format: 'idn-hostname',
},
		method: {
	type: 'string',
	description: `Method is an extended POSIX regex matched against the method of a request, e.g. "GET", "POST", "PUT", "PATCH", "DELETE", ... 
 If omitted or empty, all methods are allowed.`,
},
		path: {
	type: 'string',
	description: `Path is an extended POSIX regex matched against the path of a request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. 
 If omitted or empty, all paths are all allowed.`,
},
	},
},
},
		kafka: {
	type: 'array',
	contains: {
	description: `PortRule is a list of Kafka protocol constraints. All fields are optional, if all fields are empty or missing, the rule will match all Kafka messages.`,
	properties: {
		apiKey: {
	type: 'string',
	description: `APIKey is a case-insensitive string matched against the key of a request, e.g. "produce", "fetch", "createtopic", "deletetopic", et al Reference: https://kafka.apache.org/protocol#protocol_api_keys 
 If omitted or empty, and if Role is not specified, then all keys are allowed.`,
},
		apiVersion: {
	type: 'string',
	description: `APIVersion is the version matched against the api version of the Kafka message. If set, it has to be a string representing a positive integer. 
 If omitted or empty, all versions are allowed.`,
},
		clientID: {
	type: 'string',
	description: `ClientID is the client identifier as provided in the request. 
 From Kafka protocol documentation: This is a user supplied identifier for the client application. The user can use any identifier they like and it will be used when logging errors, monitoring aggregates, etc. For example, one might want to monitor not just the requests per second overall, but the number coming from each client application (each of which could reside on multiple servers). This id acts as a logical grouping across all requests from a particular client. 
 If omitted or empty, all client identifiers are allowed.`,
},
		role: {
	type: 'Enum',
},
		topic: {
	type: 'string',
	description: `Topic is the topic name contained in the message. If a Kafka request contains multiple topics, then all topics must be allowed or the message will be rejected. 
 This constraint is ignored if the matched request message type doesn't contain any topic. Maximum size of Topic can be 249 characters as per recent Kafka spec and allowed characters are a-z, A-Z, 0-9, -, . and _. 
 Older Kafka versions had longer topic lengths of 255, but in Kafka 0.10 version the length was changed from 255 to 249. For compatibility reasons we are using 255. 
 If omitted or empty, all topics are allowed.`,
	maxLength: 255,
},
	},
},
},
		l7: {
	type: 'array',
	contains: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
},
		l7proto: {
	type: 'string',
	description: `Name of the L7 protocol for which the Key-value pair rules apply.`,
},
	},
},
		serverNames: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		terminatingTLS: {
	description: `TerminatingTLS is the TLS context for the connection terminated by the L7 proxy.  For egress policy this specifies the server-side TLS parameters to be applied on the connections originated from the local endpoint and terminated by the L7 proxy. For ingress policy this specifies the server-side TLS parameters to be applied on the connections originated from a remote source and terminated by the L7 proxy.`,
	properties: {
		certificate: {
	type: 'string',
	description: `Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.`,
},
		privateKey: {
	type: 'string',
	description: `PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.`,
},
		secret: {
	description: `Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items:  - 'ca.crt'  - Which represents the trusted CA to verify remote source.  - 'tls.crt' - Which represents the public key certificate.  - 'tls.key' - Which represents the private key matching the public key                certificate.`,
	properties: {
		name: {
	type: 'string',
	description: `Name is the name of the secret.`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").`,
},
	},
	isRequired: true,
},
		trustedCA: {
	type: 'string',
	description: `TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.`,
},
	},
},
	},
},
},
		toRequires: {
	type: 'array',
	contains: {
	description: `EndpointSelector is a wrapper for k8s LabelSelector.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
},
		toServices: {
	type: 'array',
	contains: {
	description: `Service wraps around selectors for services`,
	properties: {
		k8sService: {
	description: `K8sService selects service by name and namespace pair`,
	properties: {
		namespace: {
	type: 'string',
},
		serviceName: {
	type: 'string',
},
	},
},
		k8sServiceSelector: {
	description: `K8sServiceSelector selects services by k8s labels and namespace`,
	properties: {
		namespace: {
	type: 'string',
},
		selector: {
	description: `ServiceSelector is a label selector for k8s services`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
	isRequired: true,
},
	},
},
	},
},
},
	},
},
},
		egressDeny: {
	type: 'array',
	contains: {
	description: `EgressDenyRule contains all rule types which can be applied at egress, i.e. network traffic that originates inside the endpoint and exits the endpoint selected by the endpointSelector. 
   - All members of this structure are optional. If omitted or empty, the     member will have no effect on the rule. 
   - If multiple members of the structure are specified, then all members     must match in order for the rule to take effect. The exception to this     rule is the ToRequires member; the effects of any Requires field in any     rule will apply to all other rules as well. 
   - ToEndpoints, ToCIDR, ToCIDRSet, ToEntities, ToServices and ToGroups are     mutually exclusive. Only one of these members may be present within an     individual rule.`,
	properties: {
		icmps: {
	type: 'array',
	contains: {
	description: `ICMPRule is a list of ICMP fields.`,
	properties: {
		fields: {
	type: 'array',
	contains: {
	description: `ICMPField is a ICMP field.`,
	properties: {
		family: {
	type: 'Enum',
},
		type: {
	type: 'number',
	description: `Type is a ICMP-type. It should be 0-255 (8bit).`,
	isRequired: true,
	maximum: 255,
},
	},
},
},
	},
},
},
		toCIDR: {
	type: 'array',
	contains: {
	type: 'string',
	description: `CIDR specifies a block of IP addresses. Example: 192.0.2.1/32`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
},
		toCIDRSet: {
	type: 'array',
	contains: {
	description: `CIDRRule is a rule that specifies a CIDR prefix to/from which outside communication  is allowed, along with an optional list of subnets within that CIDR prefix to/from which outside communication is not allowed.`,
	properties: {
		cidr: {
	type: 'string',
	description: `CIDR is a CIDR prefix / IP Block.`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
		cidrGroupRef: {
	type: 'string',
	description: `CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress) or cannot (IngressDeny) receive connections from.`,
	maxLength: 253,
	pattern: '^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$',
},
		except: {
	type: 'array',
	contains: {
	type: 'string',
	description: `CIDR specifies a block of IP addresses. Example: 192.0.2.1/32`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
},
	},
},
},
		toEndpoints: {
	type: 'array',
	contains: {
	description: `EndpointSelector is a wrapper for k8s LabelSelector.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
},
		toEntities: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
		toGroups: {
	type: 'array',
	contains: {
	description: `ToGroups structure to store all kinds of new integrations that needs a new derivative policy.`,
	properties: {
		aws: {
	description: `AWSGroup is an structure that can be used to whitelisting information from AWS integration`,
	properties: {
		labels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		region: {
	type: 'string',
},
		securityGroupsIds: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		securityGroupsNames: {
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
		toPorts: {
	type: 'array',
	contains: {
	description: `PortDenyRule is a list of ports/protocol that should be used for deny policies. This structure lacks the L7Rules since it's not supported in deny policies.`,
	properties: {
		ports: {
	type: 'array',
	contains: {
	description: `PortProtocol specifies an L4 port with an optional transport protocol`,
	properties: {
		port: {
	type: 'string',
	description: `Port is an L4 port number. For now the string will be strictly parsed as a single uint16. In the future, this field may support ranges in the form "1024-2048 Port can also be a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.`,
	isRequired: true,
	pattern: '^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})|([a-zA-Z0-9]-?)*[a-zA-Z](-?[a-zA-Z0-9])*$',
},
		protocol: {
	type: 'Enum',
},
	},
},
},
	},
},
},
		toRequires: {
	type: 'array',
	contains: {
	description: `EndpointSelector is a wrapper for k8s LabelSelector.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
},
		toServices: {
	type: 'array',
	contains: {
	description: `Service wraps around selectors for services`,
	properties: {
		k8sService: {
	description: `K8sService selects service by name and namespace pair`,
	properties: {
		namespace: {
	type: 'string',
},
		serviceName: {
	type: 'string',
},
	},
},
		k8sServiceSelector: {
	description: `K8sServiceSelector selects services by k8s labels and namespace`,
	properties: {
		namespace: {
	type: 'string',
},
		selector: {
	description: `ServiceSelector is a label selector for k8s services`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
	isRequired: true,
},
	},
},
	},
},
},
	},
},
},
		endpointSelector: {
	description: `EndpointSelector selects all endpoints which should be subject to this rule. EndpointSelector and NodeSelector cannot be both empty and are mutually exclusive.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
		ingress: {
	type: 'array',
	contains: {
	description: `IngressRule contains all rule types which can be applied at ingress, i.e. network traffic that originates outside of the endpoint and is entering the endpoint selected by the endpointSelector. 
   - All members of this structure are optional. If omitted or empty, the     member will have no effect on the rule. 
   - If multiple members are set, all of them need to match in order for     the rule to take effect. The exception to this rule is FromRequires field;     the effects of any Requires field in any rule will apply to all other     rules as well. 
   - FromEndpoints, FromCIDR, FromCIDRSet and FromEntities are mutually     exclusive. Only one of these members may be present within an individual     rule.`,
	properties: {
		authentication: {
	description: `Authentication is the required authentication type for the allowed traffic, if any.`,
	properties: {
		mode: {
	type: 'Enum',
	isRequired: true,
},
	},
},
		fromCIDR: {
	type: 'array',
	contains: {
	type: 'string',
	description: `CIDR specifies a block of IP addresses. Example: 192.0.2.1/32`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
},
		fromCIDRSet: {
	type: 'array',
	contains: {
	description: `CIDRRule is a rule that specifies a CIDR prefix to/from which outside communication  is allowed, along with an optional list of subnets within that CIDR prefix to/from which outside communication is not allowed.`,
	properties: {
		cidr: {
	type: 'string',
	description: `CIDR is a CIDR prefix / IP Block.`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
		cidrGroupRef: {
	type: 'string',
	description: `CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress) or cannot (IngressDeny) receive connections from.`,
	maxLength: 253,
	pattern: '^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$',
},
		except: {
	type: 'array',
	contains: {
	type: 'string',
	description: `CIDR specifies a block of IP addresses. Example: 192.0.2.1/32`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
},
	},
},
},
		fromEndpoints: {
	type: 'array',
	contains: {
	description: `EndpointSelector is a wrapper for k8s LabelSelector.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
},
		fromEntities: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
		fromRequires: {
	type: 'array',
	contains: {
	description: `EndpointSelector is a wrapper for k8s LabelSelector.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
},
		icmps: {
	type: 'array',
	contains: {
	description: `ICMPRule is a list of ICMP fields.`,
	properties: {
		fields: {
	type: 'array',
	contains: {
	description: `ICMPField is a ICMP field.`,
	properties: {
		family: {
	type: 'Enum',
},
		type: {
	type: 'number',
	description: `Type is a ICMP-type. It should be 0-255 (8bit).`,
	isRequired: true,
	maximum: 255,
},
	},
},
},
	},
},
},
		toPorts: {
	type: 'array',
	contains: {
	description: `PortRule is a list of ports/protocol combinations with optional Layer 7 rules which must be met.`,
	properties: {
		listener: {
	description: `listener specifies the name of a custom Envoy listener to which this traffic should be redirected to.`,
	properties: {
		envoyConfig: {
	description: `EnvoyConfig is a reference to the CEC or CCNP resource in which the listener is defined.`,
	properties: {
		kind: {
	type: 'Enum',
},
		name: {
	type: 'string',
	description: `Name is the resource name of the CiliumEnvoyConfig or CiliumClusterwideEnvoyConfig where the listener is defined in.`,
	isRequired: true,
	minLength: 1,
},
	},
	isRequired: true,
},
		name: {
	type: 'string',
	description: `Name is the name of the listener.`,
	isRequired: true,
	minLength: 1,
},
	},
},
		originatingTLS: {
	description: `OriginatingTLS is the TLS context for the connections originated by the L7 proxy.  For egress policy this specifies the client-side TLS parameters for the upstream connection originating from the L7 proxy to the remote destination. For ingress policy this specifies the client-side TLS parameters for the connection from the L7 proxy to the local endpoint.`,
	properties: {
		certificate: {
	type: 'string',
	description: `Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.`,
},
		privateKey: {
	type: 'string',
	description: `PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.`,
},
		secret: {
	description: `Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items:  - 'ca.crt'  - Which represents the trusted CA to verify remote source.  - 'tls.crt' - Which represents the public key certificate.  - 'tls.key' - Which represents the private key matching the public key                certificate.`,
	properties: {
		name: {
	type: 'string',
	description: `Name is the name of the secret.`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").`,
},
	},
	isRequired: true,
},
		trustedCA: {
	type: 'string',
	description: `TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.`,
},
	},
},
		ports: {
	type: 'array',
	contains: {
	description: `PortProtocol specifies an L4 port with an optional transport protocol`,
	properties: {
		port: {
	type: 'string',
	description: `Port is an L4 port number. For now the string will be strictly parsed as a single uint16. In the future, this field may support ranges in the form "1024-2048 Port can also be a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.`,
	isRequired: true,
	pattern: '^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})|([a-zA-Z0-9]-?)*[a-zA-Z](-?[a-zA-Z0-9])*$',
},
		protocol: {
	type: 'Enum',
},
	},
},
},
		rules: {
	description: `Rules is a list of additional port level rules which must be met in order for the PortRule to allow the traffic. If omitted or empty, no layer 7 rules are enforced.`,
	properties: {
		dns: {
	type: 'array',
	contains: {
	description: `PortRuleDNS is a list of allowed DNS lookups.`,
	properties: {
		matchName: {
	type: 'string',
	description: `MatchName matches literal DNS names. A trailing "." is automatically added when missing.`,
	pattern: '^([-a-zA-Z0-9_]+[.]?)+$',
},
		matchPattern: {
	type: 'string',
	description: `MatchPattern allows using wildcards to match DNS names. All wildcards are case insensitive. The wildcards are: - "*" matches 0 or more DNS valid characters, and may occur anywhere in the pattern. As a special case a "*" as the leftmost character, without a following "." matches all subdomains as well as the name to the right. A trailing "." is automatically added when missing. 
 Examples: \`*.cilium.io\` matches subomains of cilium at that level   www.cilium.io and blog.cilium.io match, cilium.io and google.com do not \`*cilium.io\` matches cilium.io and all subdomains ends with "cilium.io"   except those containing "." separator, subcilium.io and sub-cilium.io match,   www.cilium.io and blog.cilium.io does not sub*.cilium.io matches subdomains of cilium where the subdomain component begins with "sub"   sub.cilium.io and subdomain.cilium.io match, www.cilium.io,   blog.cilium.io, cilium.io and google.com do not`,
	pattern: '^([-a-zA-Z0-9_*]+[.]?)+$',
},
	},
},
},
		http: {
	type: 'array',
	contains: {
	description: `PortRuleHTTP is a list of HTTP protocol constraints. All fields are optional, if all fields are empty or missing, the rule does not have any effect. 
 All fields of this type are extended POSIX regex as defined by IEEE Std 1003.1, (i.e this follows the egrep/unix syntax, not the perl syntax) matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986.`,
	properties: {
		headerMatches: {
	type: 'array',
	contains: {
	description: `HeaderMatch extends the HeaderValue for matching requirement of a named header field against an immediate string, a secret value, or a regex.  If none of the optional fields is present, then the header value is not matched, only presence of the header is enough.`,
	properties: {
		mismatch: {
	type: 'Enum',
},
		name: {
	type: 'string',
	description: `Name identifies the header.`,
	isRequired: true,
},
		secret: {
	description: `Secret refers to a secret that contains the value to be matched against. The secret must only contain one entry. If the referred secret does not exist, and there is no "Value" specified, the match will fail.`,
	properties: {
		name: {
	type: 'string',
	description: `Name is the name of the secret.`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").`,
},
	},
},
		value: {
	type: 'string',
	description: `Value matches the exact value of the header. Can be specified either alone or together with "Secret"; will be used as the header value if the secret can not be found in the latter case.`,
},
	},
},
},
		headers: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		host: {
	type: 'string',
	description: `Host is an extended POSIX regex matched against the host header of a request, e.g. "foo.com" 
 If omitted or empty, the value of the host header is ignored.`,
	format: 'idn-hostname',
},
		method: {
	type: 'string',
	description: `Method is an extended POSIX regex matched against the method of a request, e.g. "GET", "POST", "PUT", "PATCH", "DELETE", ... 
 If omitted or empty, all methods are allowed.`,
},
		path: {
	type: 'string',
	description: `Path is an extended POSIX regex matched against the path of a request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. 
 If omitted or empty, all paths are all allowed.`,
},
	},
},
},
		kafka: {
	type: 'array',
	contains: {
	description: `PortRule is a list of Kafka protocol constraints. All fields are optional, if all fields are empty or missing, the rule will match all Kafka messages.`,
	properties: {
		apiKey: {
	type: 'string',
	description: `APIKey is a case-insensitive string matched against the key of a request, e.g. "produce", "fetch", "createtopic", "deletetopic", et al Reference: https://kafka.apache.org/protocol#protocol_api_keys 
 If omitted or empty, and if Role is not specified, then all keys are allowed.`,
},
		apiVersion: {
	type: 'string',
	description: `APIVersion is the version matched against the api version of the Kafka message. If set, it has to be a string representing a positive integer. 
 If omitted or empty, all versions are allowed.`,
},
		clientID: {
	type: 'string',
	description: `ClientID is the client identifier as provided in the request. 
 From Kafka protocol documentation: This is a user supplied identifier for the client application. The user can use any identifier they like and it will be used when logging errors, monitoring aggregates, etc. For example, one might want to monitor not just the requests per second overall, but the number coming from each client application (each of which could reside on multiple servers). This id acts as a logical grouping across all requests from a particular client. 
 If omitted or empty, all client identifiers are allowed.`,
},
		role: {
	type: 'Enum',
},
		topic: {
	type: 'string',
	description: `Topic is the topic name contained in the message. If a Kafka request contains multiple topics, then all topics must be allowed or the message will be rejected. 
 This constraint is ignored if the matched request message type doesn't contain any topic. Maximum size of Topic can be 249 characters as per recent Kafka spec and allowed characters are a-z, A-Z, 0-9, -, . and _. 
 Older Kafka versions had longer topic lengths of 255, but in Kafka 0.10 version the length was changed from 255 to 249. For compatibility reasons we are using 255. 
 If omitted or empty, all topics are allowed.`,
	maxLength: 255,
},
	},
},
},
		l7: {
	type: 'array',
	contains: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
},
		l7proto: {
	type: 'string',
	description: `Name of the L7 protocol for which the Key-value pair rules apply.`,
},
	},
},
		serverNames: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		terminatingTLS: {
	description: `TerminatingTLS is the TLS context for the connection terminated by the L7 proxy.  For egress policy this specifies the server-side TLS parameters to be applied on the connections originated from the local endpoint and terminated by the L7 proxy. For ingress policy this specifies the server-side TLS parameters to be applied on the connections originated from a remote source and terminated by the L7 proxy.`,
	properties: {
		certificate: {
	type: 'string',
	description: `Certificate is the file name or k8s secret item name for the certificate chain. If omitted, 'tls.crt' is assumed, if it exists. If given, the item must exist.`,
},
		privateKey: {
	type: 'string',
	description: `PrivateKey is the file name or k8s secret item name for the private key matching the certificate chain. If omitted, 'tls.key' is assumed, if it exists. If given, the item must exist.`,
},
		secret: {
	description: `Secret is the secret that contains the certificates and private key for the TLS context. By default, Cilium will search in this secret for the following items:  - 'ca.crt'  - Which represents the trusted CA to verify remote source.  - 'tls.crt' - Which represents the public key certificate.  - 'tls.key' - Which represents the private key matching the public key                certificate.`,
	properties: {
		name: {
	type: 'string',
	description: `Name is the name of the secret.`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `Namespace is the namespace in which the secret exists. Context of use determines the default value if left out (e.g., "default").`,
},
	},
	isRequired: true,
},
		trustedCA: {
	type: 'string',
	description: `TrustedCA is the file name or k8s secret item name for the trusted CA. If omitted, 'ca.crt' is assumed, if it exists. If given, the item must exist.`,
},
	},
},
	},
},
},
	},
},
},
		ingressDeny: {
	type: 'array',
	contains: {
	description: `IngressDenyRule contains all rule types which can be applied at ingress, i.e. network traffic that originates outside of the endpoint and is entering the endpoint selected by the endpointSelector. 
   - All members of this structure are optional. If omitted or empty, the     member will have no effect on the rule. 
   - If multiple members are set, all of them need to match in order for     the rule to take effect. The exception to this rule is FromRequires field;     the effects of any Requires field in any rule will apply to all other     rules as well. 
   - FromEndpoints, FromCIDR, FromCIDRSet and FromEntities are mutually     exclusive. Only one of these members may be present within an individual     rule.`,
	properties: {
		fromCIDR: {
	type: 'array',
	contains: {
	type: 'string',
	description: `CIDR specifies a block of IP addresses. Example: 192.0.2.1/32`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
},
		fromCIDRSet: {
	type: 'array',
	contains: {
	description: `CIDRRule is a rule that specifies a CIDR prefix to/from which outside communication  is allowed, along with an optional list of subnets within that CIDR prefix to/from which outside communication is not allowed.`,
	properties: {
		cidr: {
	type: 'string',
	description: `CIDR is a CIDR prefix / IP Block.`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
		cidrGroupRef: {
	type: 'string',
	description: `CIDRGroupRef is a reference to a CiliumCIDRGroup object. A CiliumCIDRGroup contains a list of CIDRs that the endpoint, subject to the rule, can (Ingress) or cannot (IngressDeny) receive connections from.`,
	maxLength: 253,
	pattern: '^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$',
},
		except: {
	type: 'array',
	contains: {
	type: 'string',
	description: `CIDR specifies a block of IP addresses. Example: 192.0.2.1/32`,
	pattern: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$|^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$',
},
},
	},
},
},
		fromEndpoints: {
	type: 'array',
	contains: {
	description: `EndpointSelector is a wrapper for k8s LabelSelector.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
},
		fromEntities: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
		fromRequires: {
	type: 'array',
	contains: {
	description: `EndpointSelector is a wrapper for k8s LabelSelector.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
},
		icmps: {
	type: 'array',
	contains: {
	description: `ICMPRule is a list of ICMP fields.`,
	properties: {
		fields: {
	type: 'array',
	contains: {
	description: `ICMPField is a ICMP field.`,
	properties: {
		family: {
	type: 'Enum',
},
		type: {
	type: 'number',
	description: `Type is a ICMP-type. It should be 0-255 (8bit).`,
	isRequired: true,
	maximum: 255,
},
	},
},
},
	},
},
},
		toPorts: {
	type: 'array',
	contains: {
	description: `PortDenyRule is a list of ports/protocol that should be used for deny policies. This structure lacks the L7Rules since it's not supported in deny policies.`,
	properties: {
		ports: {
	type: 'array',
	contains: {
	description: `PortProtocol specifies an L4 port with an optional transport protocol`,
	properties: {
		port: {
	type: 'string',
	description: `Port is an L4 port number. For now the string will be strictly parsed as a single uint16. In the future, this field may support ranges in the form "1024-2048 Port can also be a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.`,
	isRequired: true,
	pattern: '^(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})|([a-zA-Z0-9]-?)*[a-zA-Z](-?[a-zA-Z0-9])*$',
},
		protocol: {
	type: 'Enum',
},
	},
},
},
	},
},
},
	},
},
},
		labels: {
	type: 'array',
	contains: {
	description: `Label is the Cilium's representation of a container label.`,
	properties: {
		key: {
	type: 'string',
	isRequired: true,
},
		source: {
	type: 'string',
	description: `Source can be one of the above values (e.g.: LabelSourceContainer).`,
},
		value: {
	type: 'string',
},
	},
},
},
		nodeSelector: {
	description: `NodeSelector selects all nodes which should be subject to this rule. EndpointSelector and NodeSelector cannot be both empty and are mutually exclusive. Can only be used in CiliumClusterwideNetworkPolicies.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'Enum',
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
	description: `MatchLabelsValue represents the value from the MatchLabels {key,value} pair.`,
	maxLength: 63,
	pattern: '^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$',
},
},
	},
},
	},
},
},
		status: {
	description: `Status is the status of the Cilium policy rule. 
 The reason this field exists in this structure is due a bug in the k8s code-generator that doesn't create a \`UpdateStatus\` method because the field does not exist in the structure.`,
	properties: {
		derivativePolicies: {
	type: 'dictionary',
	contains: {
	description: `CiliumNetworkPolicyNodeStatus is the status of a Cilium policy rule for a specific node.`,
	properties: {
		annotations: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		enforcing: {
	type: 'boolean',
	description: `Enforcing is set to true once all endpoints present at the time the policy has been imported are enforcing this policy.`,
},
		error: {
	type: 'string',
	description: `Error describes any error that occurred when parsing or importing the policy, or realizing the policy for the endpoints to which it applies on the node.`,
},
		lastUpdated: {
	type: 'string',
	description: `LastUpdated contains the last time this status was updated`,
	format: 'date-time',
},
		localPolicyRevision: {
	type: 'number',
	description: `Revision is the policy revision of the repository which first implemented this policy.`,
	format: 'int64',
},
		ok: {
	type: 'boolean',
	description: `OK is true when the policy has been parsed and imported successfully into the in-memory policy repository on the node.`,
},
	},
},
},
		nodes: {
	type: 'dictionary',
	contains: {
	description: `CiliumNetworkPolicyNodeStatus is the status of a Cilium policy rule for a specific node.`,
	properties: {
		annotations: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		enforcing: {
	type: 'boolean',
	description: `Enforcing is set to true once all endpoints present at the time the policy has been imported are enforcing this policy.`,
},
		error: {
	type: 'string',
	description: `Error describes any error that occurred when parsing or importing the policy, or realizing the policy for the endpoints to which it applies on the node.`,
},
		lastUpdated: {
	type: 'string',
	description: `LastUpdated contains the last time this status was updated`,
	format: 'date-time',
},
		localPolicyRevision: {
	type: 'number',
	description: `Revision is the policy revision of the repository which first implemented this policy.`,
	format: 'int64',
},
		ok: {
	type: 'boolean',
	description: `OK is true when the policy has been parsed and imported successfully into the in-memory policy repository on the node.`,
},
	},
},
},
	},
},
	},
} as const;