import type { io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime } from './io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime';

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export type io_k8s_api_core_v1_EventSeries = {
	/**
	 * Number of occurrences in this series up to the last heartbeat time
	 */
	count?: number;
	/**
	 * Time of the last occurrence observed
	 */
	lastObservedTime?: io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime;
};

