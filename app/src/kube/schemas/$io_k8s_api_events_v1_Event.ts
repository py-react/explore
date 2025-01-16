export const $io_k8s_api_events_v1_Event = {
	description: `Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.`,
	properties: {
		action: {
	type: 'string',
	description: `action is what action was taken/failed regarding to the regarding object. It is machine-readable. This field cannot be empty for new Events and it can have at most 128 characters.`,
},
		apiVersion: {
	type: 'string',
	description: `APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources`,
},
		deprecatedCount: {
	type: 'number',
	description: `deprecatedCount is the deprecated field assuring backward compatibility with core.v1 Event type.`,
	format: 'int32',
},
		deprecatedFirstTimestamp: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `deprecatedFirstTimestamp is the deprecated field assuring backward compatibility with core.v1 Event type.`,
},
		deprecatedLastTimestamp: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `deprecatedLastTimestamp is the deprecated field assuring backward compatibility with core.v1 Event type.`,
},
		deprecatedSource: {
	type: 'io_k8s_api_core_v1_EventSource',
	description: `deprecatedSource is the deprecated field assuring backward compatibility with core.v1 Event type.`,
},
		eventTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime',
	description: `eventTime is the time when this Event was first observed. It is required.`,
	isRequired: true,
},
		kind: {
	type: 'string',
	description: `Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		metadata: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta',
	description: `Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata`,
},
		note: {
	type: 'string',
	description: `note is a human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.`,
},
		reason: {
	type: 'string',
	description: `reason is why the action was taken. It is human-readable. This field cannot be empty for new Events and it can have at most 128 characters.`,
},
		regarding: {
	type: 'io_k8s_api_core_v1_ObjectReference',
	description: `regarding contains the object this Event is about. In most cases it's an Object reporting controller implements, e.g. ReplicaSetController implements ReplicaSets and this event is emitted because it acts on some changes in a ReplicaSet object.`,
},
		related: {
	type: 'io_k8s_api_core_v1_ObjectReference',
	description: `related is the optional secondary object for more complex actions. E.g. when regarding object triggers a creation or deletion of related object.`,
},
		reportingController: {
	type: 'string',
	description: `reportingController is the name of the controller that emitted this Event, e.g. \`kubernetes.io/kubelet\`. This field cannot be empty for new Events.`,
},
		reportingInstance: {
	type: 'string',
	description: `reportingInstance is the ID of the controller instance, e.g. \`kubelet-xyzf\`. This field cannot be empty for new Events and it can have at most 128 characters.`,
},
		series: {
	type: 'io_k8s_api_events_v1_EventSeries',
	description: `series is data about the Event series this event represents or nil if it's a singleton Event.`,
},
		type: {
	type: 'string',
	description: `type is the type of this event (Normal, Warning), new types could be added in the future. It is machine-readable. This field cannot be empty for new Events.`,
},
	},
} as const;