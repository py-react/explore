import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * CiliumLoadBalancerIPPool is a Kubernetes third-party resource which is used to defined pools of IPs which the operator can use to to allocate and advertise IPs for Services of type LoadBalancer.
 */
export type io_cilium_v2alpha1_CiliumLoadBalancerIPPool = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	 */
	metadata: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
	/**
	 * Spec is a human readable description for a BGP load balancer ip pool.
	 */
	spec?: {
/**
 * CiliumLoadBalancerIPPoolCIDRBlock is a list of CIDRs comprising this IP Pool
 */
cidrs: Array<{
cidr: string;
}>;
/**
 * Disabled, if set to true means that no new IPs will be allocated from this pool. Existing allocations will not be removed from services.
 */
disabled?: boolean;
/**
 * ServiceSelector selects a set of services which are eligible to receive IPs from this
 */
serviceSelector?: {
/**
 * matchExpressions is a list of label selector requirements. The requirements are ANDed.
 */
matchExpressions?: Array<{
/**
 * key is the label key that the selector applies to.
 */
key: string;
/**
 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
 */
operator: 'In' | 'NotIn' | 'Exists' | 'DoesNotExist';
/**
 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
 */
values?: Array<string>;
}>;
/**
 * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
 */
matchLabels?: Record<string, string>;
};
};
	/**
	 * Status is the status of the IP Pool. 
 * It might be possible for users to define overlapping IP Pools, we can't validate or enforce non-overlapping pools during object creation. The Cilium operator will do this validation and update the status to reflect the ability to allocate IPs from this pool.
	 */
	status?: {
/**
 * Current service state
 */
conditions?: Array<{
/**
 * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
 */
lastTransitionTime: string;
/**
 * message is a human readable message indicating details about the transition. This may be an empty string.
 */
message: string;
/**
 * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
 */
observedGeneration?: number;
/**
 * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
 */
reason: string;
/**
 * status of the condition, one of True, False, Unknown.
 */
status: 'True' | 'False' | 'Unknown';
/**
 * type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
 */
type: string;
}>;
};
};

