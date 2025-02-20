import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * Order is a type to represent an Order with an ACME server
 */
export type io_cert_manager_acme_v1_Order = {
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
	metadata: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
	spec: {
/**
 * CommonName is the common name as specified on the DER encoded CSR.
 * If specified, this value must also be present in `dnsNames` or `ipAddresses`.
 * This field must match the corresponding field on the DER encoded CSR.
 */
commonName?: string;
/**
 * DNSNames is a list of DNS names that should be included as part of the Order
 * validation process.
 * This field must match the corresponding field on the DER encoded CSR.
 */
dnsNames?: Array<string>;
/**
 * Duration is the duration for the not after date for the requested certificate.
 * this is set on order creation as pe the ACME spec.
 */
duration?: string;
/**
 * IPAddresses is a list of IP addresses that should be included as part of the Order
 * validation process.
 * This field must match the corresponding field on the DER encoded CSR.
 */
ipAddresses?: Array<string>;
/**
 * IssuerRef references a properly configured ACME-type Issuer which should
 * be used to create this Order.
 * If the Issuer does not exist, processing will be retried.
 * If the Issuer is not an 'ACME' Issuer, an error will be returned and the
 * Order will be marked as failed.
 */
issuerRef: {
/**
 * Group of the resource being referred to.
 */
group?: string;
/**
 * Kind of the resource being referred to.
 */
kind?: string;
/**
 * Name of the resource being referred to.
 */
name: string;
};
/**
 * Certificate signing request bytes in DER encoding.
 * This will be used when finalizing the order.
 * This field must be set on the order.
 */
request: string;
};
	status?: {
/**
 * Authorizations contains data returned from the ACME server on what
 * authorizations must be completed in order to validate the DNS names
 * specified on the Order.
 */
authorizations?: Array<{
/**
 * Challenges specifies the challenge types offered by the ACME server.
 * One of these challenge types will be selected when validating the DNS
 * name and an appropriate Challenge resource will be created to perform
 * the ACME challenge process.
 */
challenges?: Array<{
/**
 * Token is the token that must be presented for this challenge.
 * This is used to compute the 'key' that must also be presented.
 */
token: string;
/**
 * Type is the type of challenge being offered, e.g. 'http-01', 'dns-01',
 * 'tls-sni-01', etc.
 * This is the raw value retrieved from the ACME server.
 * Only 'http-01' and 'dns-01' are supported by cert-manager, other values
 * will be ignored.
 */
type: string;
/**
 * URL is the URL of this challenge. It can be used to retrieve additional
 * metadata about the Challenge from the ACME server.
 */
url: string;
}>;
/**
 * Identifier is the DNS name to be validated as part of this authorization
 */
identifier?: string;
/**
 * InitialState is the initial state of the ACME authorization when first
 * fetched from the ACME server.
 * If an Authorization is already 'valid', the Order controller will not
 * create a Challenge resource for the authorization. This will occur when
 * working with an ACME server that enables 'authz reuse' (such as Let's
 * Encrypt's production endpoint).
 * If not set and 'identifier' is set, the state is assumed to be pending
 * and a Challenge will be created.
 */
initialState?: 'valid' | 'ready' | 'pending' | 'processing' | 'invalid' | 'expired' | 'errored';
/**
 * URL is the URL of the Authorization that must be completed
 */
url: string;
/**
 * Wildcard will be true if this authorization is for a wildcard DNS name.
 * If this is true, the identifier will be the *non-wildcard* version of
 * the DNS name.
 * For example, if '*.example.com' is the DNS name being validated, this
 * field will be 'true' and the 'identifier' field will be 'example.com'.
 */
wildcard?: boolean;
}>;
/**
 * Certificate is a copy of the PEM encoded certificate for this Order.
 * This field will be populated after the order has been successfully
 * finalized with the ACME server, and the order has transitioned to the
 * 'valid' state.
 */
certificate?: string;
/**
 * FailureTime stores the time that this order failed.
 * This is used to influence garbage collection and back-off.
 */
failureTime?: string;
/**
 * FinalizeURL of the Order.
 * This is used to obtain certificates for this order once it has been completed.
 */
finalizeURL?: string;
/**
 * Reason optionally provides more information about a why the order is in
 * the current state.
 */
reason?: string;
/**
 * State contains the current state of this Order resource.
 * States 'success' and 'expired' are 'final'
 */
state?: 'valid' | 'ready' | 'pending' | 'processing' | 'invalid' | 'expired' | 'errored';
/**
 * URL of the Order.
 * This will initially be empty when the resource is first created.
 * The Order controller will populate this field when the Order is first processed.
 * This field will be immutable after it is initially set.
 */
url?: string;
};
};


