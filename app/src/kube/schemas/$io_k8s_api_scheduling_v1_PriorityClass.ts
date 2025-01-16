export const $io_k8s_api_scheduling_v1_PriorityClass = {
	description: `PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources`,
},
		description: {
	type: 'string',
	description: `description is an arbitrary string that usually provides guidelines on when this priority class should be used.`,
},
		globalDefault: {
	type: 'boolean',
	description: `globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as \`globalDefault\`. However, if more than one PriorityClasses exists with their \`globalDefault\` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.`,
},
		kind: {
	type: 'string',
	description: `Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		metadata: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta',
	description: `Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata`,
},
		preemptionPolicy: {
	type: 'Enum',
},
		value: {
	type: 'number',
	description: `value represents the integer value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec.`,
	isRequired: true,
	format: 'int32',
},
	},
} as const;