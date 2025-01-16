export const $io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta = {
	description: `ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.`,
	properties: {
		annotations: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		creationTimestamp: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.

Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata`,
},
		deletionGracePeriodSeconds: {
	type: 'number',
	description: `Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.`,
	format: 'int64',
},
		deletionTimestamp: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.

Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata`,
},
		finalizers: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		generateName: {
	type: 'string',
	description: `GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.

If this field is specified and the generated name exists, the server will return a 409.

Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency`,
},
		generation: {
	type: 'number',
	description: `A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.`,
	format: 'int64',
},
		labels: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		managedFields: {
	type: 'array',
	contains: {
		type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ManagedFieldsEntry',
	},
},
		name: {
	type: 'string',
	description: `Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names`,
},
		namespace: {
	type: 'string',
	description: `Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.

Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces`,
},
		ownerReferences: {
	type: 'array',
	contains: {
		type: 'io_k8s_apimachinery_pkg_apis_meta_v1_OwnerReference',
	},
},
		resourceVersion: {
	type: 'string',
	description: `An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.

Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency`,
},
		selfLink: {
	type: 'string',
	description: `Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.`,
},
		uid: {
	type: 'string',
	description: `UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.

Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids`,
},
	},
} as const;