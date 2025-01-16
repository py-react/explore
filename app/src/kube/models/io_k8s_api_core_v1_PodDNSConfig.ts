import type { io_k8s_api_core_v1_PodDNSConfigOption } from './io_k8s_api_core_v1_PodDNSConfigOption';

/**
 * PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
 */
export type io_k8s_api_core_v1_PodDNSConfig = {
	/**
	 * A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
	 */
	nameservers?: Array<string>;
	/**
	 * A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.
	 */
	options?: Array<io_k8s_api_core_v1_PodDNSConfigOption>;
	/**
	 * A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
	 */
	searches?: Array<string>;
};

