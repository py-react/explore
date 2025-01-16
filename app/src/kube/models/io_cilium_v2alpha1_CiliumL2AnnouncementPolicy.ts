import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * CiliumL2AnnouncementPolicy is a Kubernetes third-party resource which is used to defined which nodes should announce what services on the L2 network.
 */
export type io_cilium_v2alpha1_CiliumL2AnnouncementPolicy = {
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
	 * Spec is a human readable description of a L2 announcement policy
	 */
	spec?: {
/**
 * If true, the external IPs of the services are announced
 */
externalIPs?: boolean;
/**
 * A list of regular expressions that express which network interface(s) should be used to announce the services over. If nil, all network interfaces are used.
 */
interfaces?: Array<string>;
/**
 * If true, the loadbalancer IPs of the services are announced 
 * If nil this policy applies to all services.
 */
loadBalancerIPs?: boolean;
/**
 * NodeSelector selects a group of nodes which will announce the IPs for the services selected by the service selector. 
 * If nil this policy applies to all nodes.
 */
nodeSelector?: {
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
/**
 * ServiceSelector selects a set of services which will be announced over L2 networks 
 * If nil this policy applies to all services.
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
	 * Status is the status of the policy.
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

