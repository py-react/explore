import type { io_k8s_api_core_v1_LoadBalancerIngress } from './io_k8s_api_core_v1_LoadBalancerIngress';

/**
 * LoadBalancerStatus represents the status of a load-balancer.
 */
export type io_k8s_api_core_v1_LoadBalancerStatus = {
	/**
	 * Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
	 */
	ingress?: Array<io_k8s_api_core_v1_LoadBalancerIngress>;
};

