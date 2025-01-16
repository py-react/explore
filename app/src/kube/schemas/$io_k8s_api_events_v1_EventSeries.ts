export const $io_k8s_api_events_v1_EventSeries = {
	description: `EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. How often to update the EventSeries is up to the event reporters. The default event reporter in "k8s.io/client-go/tools/events/event_broadcaster.go" shows how this struct is updated on heartbeats and can guide customized reporter implementations.`,
	properties: {
		count: {
	type: 'number',
	description: `count is the number of occurrences in this series up to the last heartbeat time.`,
	isRequired: true,
	format: 'int32',
},
		lastObservedTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime',
	description: `lastObservedTime is the time when last Event from the series was seen before last heartbeat.`,
	isRequired: true,
},
	},
} as const;