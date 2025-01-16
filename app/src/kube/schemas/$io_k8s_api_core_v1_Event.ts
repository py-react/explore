export const $io_k8s_api_core_v1_Event = {
	description: `Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.`,
	properties: {
		action: {
	type: 'string',
	description: `What action was taken/failed regarding to the Regarding object.`,
},
		apiVersion: {
	type: 'string',
	description: `APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources`,
},
		count: {
	type: 'number',
	description: `The number of times this event has occurred.`,
	format: 'int32',
},
		eventTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime',
	description: `Time when this Event was first observed.`,
},
		firstTimestamp: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)`,
},
		involvedObject: {
	type: 'io_k8s_api_core_v1_ObjectReference',
	description: `The object that this event is about.`,
	isRequired: true,
},
		kind: {
	type: 'string',
	description: `Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		lastTimestamp: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `The time at which the most recent occurrence of this event was recorded.`,
},
		message: {
	type: 'string',
	description: `A human-readable description of the status of this operation.`,
},
		metadata: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta',
	description: `Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata`,
	isRequired: true,
},
		reason: {
	type: 'string',
	description: `This should be a short, machine understandable string that gives the reason for the transition into the object's current status.`,
},
		related: {
	type: 'io_k8s_api_core_v1_ObjectReference',
	description: `Optional secondary object for more complex actions.`,
},
		reportingComponent: {
	type: 'string',
	description: `Name of the controller that emitted this Event, e.g. \`kubernetes.io/kubelet\`.`,
},
		reportingInstance: {
	type: 'string',
	description: `ID of the controller instance, e.g. \`kubelet-xyzf\`.`,
},
		series: {
	type: 'io_k8s_api_core_v1_EventSeries',
	description: `Data about the Event series this event represents or nil if it's a singleton Event.`,
},
		source: {
	type: 'io_k8s_api_core_v1_EventSource',
	description: `The component reporting this event. Should be a short machine understandable string.`,
},
		type: {
	type: 'string',
	description: `Type of this event (Normal, Warning), new types could be added in the future`,
},
	},
} as const;