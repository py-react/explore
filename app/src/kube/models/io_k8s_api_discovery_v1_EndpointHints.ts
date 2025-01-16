import type { io_k8s_api_discovery_v1_ForZone } from './io_k8s_api_discovery_v1_ForZone';

/**
 * EndpointHints provides hints describing how an endpoint should be consumed.
 */
export type io_k8s_api_discovery_v1_EndpointHints = {
	/**
	 * forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing.
	 */
	forZones?: Array<io_k8s_api_discovery_v1_ForZone>;
};

