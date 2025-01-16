import type { io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime } from './io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime';

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. How often to update the EventSeries is up to the event reporters. The default event reporter in "k8s.io/client-go/tools/events/event_broadcaster.go" shows how this struct is updated on heartbeats and can guide customized reporter implementations.
 */
export type io_k8s_api_events_v1_EventSeries = {
	/**
	 * count is the number of occurrences in this series up to the last heartbeat time.
	 */
	count: number;
	/**
	 * lastObservedTime is the time when last Event from the series was seen before last heartbeat.
	 */
	lastObservedTime: io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime;
};

