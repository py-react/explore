import type { io_k8s_api_networking_v1_IngressLoadBalancerIngress } from './io_k8s_api_networking_v1_IngressLoadBalancerIngress';

/**
 * IngressLoadBalancerStatus represents the status of a load-balancer.
 */
export type io_k8s_api_networking_v1_IngressLoadBalancerStatus = {
	/**
	 * ingress is a list containing ingress points for the load-balancer.
	 */
	ingress?: Array<io_k8s_api_networking_v1_IngressLoadBalancerIngress>;
};

