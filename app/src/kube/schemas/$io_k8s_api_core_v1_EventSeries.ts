export const $io_k8s_api_core_v1_EventSeries = {
	description: `EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.`,
	properties: {
		count: {
	type: 'number',
	description: `Number of occurrences in this series up to the last heartbeat time`,
	format: 'int32',
},
		lastObservedTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime',
	description: `Time of the last occurrence observed`,
},
	},
} as const;