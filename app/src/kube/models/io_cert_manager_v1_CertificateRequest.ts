import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * A CertificateRequest is used to request a signed certificate from one of the
 * configured issuers.
 * 
 * 
 * All fields within the CertificateRequest's `spec` are immutable after creation.
 * A CertificateRequest will either succeed or fail, as denoted by its `Ready` status
 * condition and its `status.failureTime` field.
 * 
 * 
 * A CertificateRequest is a one-shot resource, meaning it represents a single
 * point in time request for a certificate and cannot be re-used.
 */
export type io_cert_manager_v1_CertificateRequest = {
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
	 * Specification of the desired state of the CertificateRequest resource.
 * https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
	 */
	spec?: {
/**
 * Requested 'duration' (i.e. lifetime) of the Certificate. Note that the
 * issuer may choose to ignore the requested duration, just like any other
 * requested attribute.
 */
duration?: string;
/**
 * Extra contains extra attributes of the user that created the CertificateRequest.
 * Populated by the cert-manager webhook on creation and immutable.
 */
extra?: Record<string, Array<string>>;
/**
 * Groups contains group membership of the user that created the CertificateRequest.
 * Populated by the cert-manager webhook on creation and immutable.
 */
groups?: Array<string>;
/**
 * Requested basic constraints isCA value. Note that the issuer may choose
 * to ignore the requested isCA value, just like any other requested attribute.
 * 
 * 
 * NOTE: If the CSR in the `Request` field has a BasicConstraints extension,
 * it must have the same isCA value as specified here.
 * 
 * 
 * If true, this will automatically add the `cert sign` usage to the list
 * of requested `usages`.
 */
isCA?: boolean;
/**
 * Reference to the issuer responsible for issuing the certificate.
 * If the issuer is namespace-scoped, it must be in the same namespace
 * as the Certificate. If the issuer is cluster-scoped, it can be used
 * from any namespace.
 * 
 * 
 * The `name` field of the reference must always be specified.
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
 * The PEM-encoded X.509 certificate signing request to be submitted to the
 * issuer for signing.
 * 
 * 
 * If the CSR has a BasicConstraints extension, its isCA attribute must
 * match the `isCA` value of this CertificateRequest.
 * If the CSR has a KeyUsage extension, its key usages must match the
 * key usages in the `usages` field of this CertificateRequest.
 * If the CSR has a ExtKeyUsage extension, its extended key usages
 * must match the extended key usages in the `usages` field of this
 * CertificateRequest.
 */
request: string;
/**
 * UID contains the uid of the user that created the CertificateRequest.
 * Populated by the cert-manager webhook on creation and immutable.
 */
uid?: string;
/**
 * Requested key usages and extended key usages.
 * 
 * 
 * NOTE: If the CSR in the `Request` field has uses the KeyUsage or
 * ExtKeyUsage extension, these extensions must have the same values
 * as specified here without any additional values.
 * 
 * 
 * If unset, defaults to `digital signature` and `key encipherment`.
 */
usages?: Array<'signing' | 'digital signature' | 'content commitment' | 'key encipherment' | 'key agreement' | 'data encipherment' | 'cert sign' | 'crl sign' | 'encipher only' | 'decipher only' | 'any' | 'server auth' | 'client auth' | 'code signing' | 'email protection' | 's/mime' | 'ipsec end system' | 'ipsec tunnel' | 'ipsec user' | 'timestamping' | 'ocsp signing' | 'microsoft sgc' | 'netscape sgc'>;
/**
 * Username contains the name of the user that created the CertificateRequest.
 * Populated by the cert-manager webhook on creation and immutable.
 */
username?: string;
};
	/**
	 * Status of the CertificateRequest.
 * This is set and managed automatically.
 * Read-only.
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
	 */
	status?: {
/**
 * The PEM encoded X.509 certificate of the signer, also known as the CA
 * (Certificate Authority).
 * This is set on a best-effort basis by different issuers.
 * If not set, the CA is assumed to be unknown/not available.
 */
ca?: string;
/**
 * The PEM encoded X.509 certificate resulting from the certificate
 * signing request.
 * If not set, the CertificateRequest has either not been completed or has
 * failed. More information on failure can be found by checking the
 * `conditions` field.
 */
certificate?: string;
/**
 * List of status conditions to indicate the status of a CertificateRequest.
 * Known condition types are `Ready`, `InvalidRequest`, `Approved` and `Denied`.
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
 * Reason is a brief machine readable explanation for the condition's last
 * transition.
 */
reason?: string;
/**
 * Status of the condition, one of (`True`, `False`, `Unknown`).
 */
status: 'True' | 'False' | 'Unknown';
/**
 * Type of the condition, known values are (`Ready`, `InvalidRequest`,
 * `Approved`, `Denied`).
 */
type: string;
}>;
/**
 * FailureTime stores the time that this CertificateRequest failed. This is
 * used to influence garbage collection and back-off.
 */
failureTime?: string;
};
};

