import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * CiliumNode represents a node managed by Cilium. It contains a specification to control various node specific configuration aspects and a status section to represent the status of the node.
 */
export type io_cilium_v2_CiliumNode = {
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
	 * Spec defines the desired specification/configuration of the node.
	 */
	spec: {
/**
 * Addresses is the list of all node addresses.
 */
addresses?: Array<{
/**
 * IP is an IP of a node
 */
ip?: string;
/**
 * Type is the type of the node address
 */
type?: string;
}>;
/**
 * AlibabaCloud is the AlibabaCloud IPAM specific configuration.
 */
'alibaba-cloud'?: {
/**
 * AvailabilityZone is the availability zone to use when allocating ENIs.
 */
'availability-zone'?: string;
/**
 * CIDRBlock is vpc ipv4 CIDR
 */
'cidr-block'?: string;
/**
 * InstanceType is the ECS instance type, e.g. "ecs.g6.2xlarge"
 */
'instance-type'?: string;
/**
 * SecurityGroupTags is the list of tags to use when evaluating which security groups to use for the ENI.
 */
'security-group-tags'?: Record<string, string>;
/**
 * SecurityGroups is the list of security groups to attach to any ENI that is created and attached to the instance.
 */
'security-groups'?: Array<string>;
/**
 * VPCID is the VPC ID to use when allocating ENIs.
 */
'vpc-id'?: string;
/**
 * VSwitchTags is the list of tags to use when evaluating which vSwitch to use for the ENI.
 */
'vswitch-tags'?: Record<string, string>;
/**
 * VSwitches is the ID of vSwitch available for ENI
 */
vswitches?: Array<string>;
};
/**
 * Azure is the Azure IPAM specific configuration.
 */
azure?: {
/**
 * InterfaceName is the name of the interface the cilium-operator will use to allocate all the IPs on
 */
'interface-name'?: string;
};
/**
 * BootID is a unique node identifier generated on boot
 */
bootid?: string;
/**
 * Encryption is the encryption configuration of the node.
 */
encryption?: {
/**
 * Key is the index to the key to use for encryption or 0 if encryption is disabled.
 */
key?: number;
};
/**
 * ENI is the AWS ENI specific configuration.
 */
eni?: {
/**
 * AvailabilityZone is the availability zone to use when allocating ENIs.
 */
'availability-zone'?: string;
/**
 * DeleteOnTermination defines that the ENI should be deleted when the associated instance is terminated. If the parameter is not set the default behavior is to delete the ENI on instance termination.
 */
'delete-on-termination'?: boolean;
/**
 * DisablePrefixDelegation determines whether ENI prefix delegation should be disabled on this node.
 */
'disable-prefix-delegation'?: boolean;
/**
 * ExcludeInterfaceTags is the list of tags to use when excluding ENIs for Cilium IP allocation. Any interface matching this set of tags will not be managed by Cilium.
 */
'exclude-interface-tags'?: Record<string, string>;
/**
 * FirstInterfaceIndex is the index of the first ENI to use for IP allocation, e.g. if the node has eth0, eth1, eth2 and FirstInterfaceIndex is set to 1, then only eth1 and eth2 will be used for IP allocation, eth0 will be ignored for PodIP allocation.
 */
'first-interface-index'?: number;
/**
 * InstanceID is the AWS InstanceId of the node. The InstanceID is used to retrieve AWS metadata for the node. 
 * OBSOLETE: This field is obsolete, please use Spec.InstanceID
 */
'instance-id'?: string;
/**
 * InstanceType is the AWS EC2 instance type, e.g. "m5.large"
 */
'instance-type'?: string;
/**
 * MaxAboveWatermark is the maximum number of addresses to allocate beyond the addresses needed to reach the PreAllocate watermark. Going above the watermark can help reduce the number of API calls to allocate IPs, e.g. when a new ENI is allocated, as many secondary IPs as possible are allocated. Limiting the amount can help reduce waste of IPs. 
 * OBSOLETE: This field is obsolete, please use Spec.IPAM.MaxAboveWatermark
 */
'max-above-watermark'?: number;
/**
 * MinAllocate is the minimum number of IPs that must be allocated when the node is first bootstrapped. It defines the minimum base socket of addresses that must be available. After reaching this watermark, the PreAllocate and MaxAboveWatermark logic takes over to continue allocating IPs. 
 * OBSOLETE: This field is obsolete, please use Spec.IPAM.MinAllocate
 */
'min-allocate'?: number;
/**
 * NodeSubnetID is the subnet of the primary ENI the instance was brought up with. It is used as a sensible default subnet to create ENIs in.
 */
'node-subnet-id'?: string;
/**
 * PreAllocate defines the number of IP addresses that must be available for allocation in the IPAMspec. It defines the buffer of addresses available immediately without requiring cilium-operator to get involved. 
 * OBSOLETE: This field is obsolete, please use Spec.IPAM.PreAllocate
 */
'pre-allocate'?: number;
/**
 * SecurityGroupTags is the list of tags to use when evaliating what AWS security groups to use for the ENI.
 */
'security-group-tags'?: Record<string, string>;
/**
 * SecurityGroups is the list of security groups to attach to any ENI that is created and attached to the instance.
 */
'security-groups'?: Array<string>;
/**
 * SubnetIDs is the list of subnet ids to use when evaluating what AWS subnets to use for ENI and IP allocation.
 */
'subnet-ids'?: Array<string>;
/**
 * SubnetTags is the list of tags to use when evaluating what AWS subnets to use for ENI and IP allocation.
 */
'subnet-tags'?: Record<string, string>;
/**
 * UsePrimaryAddress determines whether an ENI's primary address should be available for allocations on the node
 */
'use-primary-address'?: boolean;
/**
 * VpcID is the VPC ID to use when allocating ENIs.
 */
'vpc-id'?: string;
};
/**
 * HealthAddressing is the addressing information for health connectivity checking.
 */
health?: {
/**
 * IPv4 is the IPv4 address of the IPv4 health endpoint.
 */
ipv4?: string;
/**
 * IPv6 is the IPv6 address of the IPv4 health endpoint.
 */
ipv6?: string;
};
/**
 * IngressAddressing is the addressing information for Ingress listener.
 */
ingress?: {
ipv4?: string;
ipv6?: string;
};
/**
 * InstanceID is the identifier of the node. This is different from the node name which is typically the FQDN of the node. The InstanceID typically refers to the identifier used by the cloud provider or some other means of identification.
 */
'instance-id'?: string;
/**
 * IPAM is the address management specification. This section can be populated by a user or it can be automatically populated by an IPAM operator.
 */
ipam?: {
/**
 * MaxAboveWatermark is the maximum number of addresses to allocate beyond the addresses needed to reach the PreAllocate watermark. Going above the watermark can help reduce the number of API calls to allocate IPs, e.g. when a new ENI is allocated, as many secondary IPs as possible are allocated. Limiting the amount can help reduce waste of IPs.
 */
'max-above-watermark'?: number;
/**
 * MaxAllocate is the maximum number of IPs that can be allocated to the node. When the current amount of allocated IPs will approach this value, the considered value for PreAllocate will decrease down to 0 in order to not attempt to allocate more addresses than defined.
 */
'max-allocate'?: number;
/**
 * MinAllocate is the minimum number of IPs that must be allocated when the node is first bootstrapped. It defines the minimum base socket of addresses that must be available. After reaching this watermark, the PreAllocate and MaxAboveWatermark logic takes over to continue allocating IPs.
 */
'min-allocate'?: number;
/**
 * PodCIDRAllocationThreshold defines the minimum number of free IPs which must be available to this node via its pod CIDR pool. If the total number of IP addresses in the pod CIDR pool is less than this value, the pod CIDRs currently in-use by this node will be marked as depleted and cilium-operator will allocate a new pod CIDR to this node. This value effectively defines the buffer of IP addresses available immediately without requiring cilium-operator to get involved.
 */
'pod-cidr-allocation-threshold'?: number;
/**
 * PodCIDRReleaseThreshold defines the maximum number of free IPs which may be available to this node via its pod CIDR pool. While the total number of free IP addresses in the pod CIDR pool is larger than this value, cilium-agent will attempt to release currently unused pod CIDRs.
 */
'pod-cidr-release-threshold'?: number;
/**
 * PodCIDRs is the list of CIDRs available to the node for allocation. When an IP is used, the IP will be added to Status.IPAM.Used
 */
podCIDRs?: Array<string>;
/**
 * Pool is the list of IPs available to the node for allocation. When an IP is used, the IP will remain on this list but will be added to Status.IPAM.Used
 */
pool?: Record<string, {
/**
 * Owner is the owner of the IP. This field is set if the IP has been allocated. It will be set to the pod name or another identifier representing the usage of the IP 
 * The owner field is left blank for an entry in Spec.IPAM.Pool and filled out as the IP is used and also added to Status.IPAM.Used.
 */
owner?: string;
/**
 * Resource is set for both available and allocated IPs, it represents what resource the IP is associated with, e.g. in combination with AWS ENI, this will refer to the ID of the ENI
 */
resource?: string;
}>;
/**
 * Pools contains the list of assigned IPAM pools for this node.
 */
pools?: {
/**
 * Allocated contains the list of pooled CIDR assigned to this node. The operator will add new pod CIDRs to this field, whereas the agent will remove CIDRs it has released.
 */
allocated?: Array<{
/**
 * CIDRs contains a list of pod CIDRs currently allocated from this pool
 */
cidrs?: Array<string>;
/**
 * Pool is the name of the IPAM pool backing this allocation
 */
pool: string;
}>;
/**
 * Requested contains a list of IPAM pool requests, i.e. indicates how many addresses this node requests out of each pool listed here. This field is owned and written to by cilium-agent and read by the operator.
 */
requested?: Array<{
/**
 * Needed indicates how many IPs out of the above Pool this node requests from the operator. The operator runs a reconciliation loop to ensure each node always has enough PodCIDRs allocated in each pool to fulfill the requested number of IPs here.
 */
needed?: {
/**
 * IPv4Addrs contains the number of requested IPv4 addresses out of a given pool
 */
'ipv4-addrs'?: number;
/**
 * IPv6Addrs contains the number of requested IPv6 addresses out of a given pool
 */
'ipv6-addrs'?: number;
};
/**
 * Pool is the name of the IPAM pool backing this request
 */
pool: string;
}>;
};
/**
 * PreAllocate defines the number of IP addresses that must be available for allocation in the IPAMspec. It defines the buffer of addresses available immediately without requiring cilium-operator to get involved.
 */
'pre-allocate'?: number;
};
/**
 * NodeIdentity is the Cilium numeric identity allocated for the node, if any.
 */
nodeidentity?: number;
};
	/**
	 * Status defines the realized specification/configuration and status of the node.
	 */
	status?: {
/**
 * AlibabaCloud is the AlibabaCloud specific status of the node.
 */
'alibaba-cloud'?: {
/**
 * ENIs is the list of ENIs on the node
 */
enis?: Record<string, {
/**
 * InstanceID is the InstanceID using this ENI
 */
'instance-id'?: string;
/**
 * MACAddress is the mac address of the ENI
 */
'mac-address'?: string;
/**
 * NetworkInterfaceID is the ENI id
 */
'network-interface-id'?: string;
/**
 * PrimaryIPAddress is the primary IP on ENI
 */
'primary-ip-address'?: string;
/**
 * PrivateIPSets is the list of all IPs on the ENI, including PrimaryIPAddress
 */
'private-ipsets'?: Array<{
primary?: boolean;
'private-ip-address'?: string;
}>;
/**
 * SecurityGroupIDs is the security group ids used by this ENI
 */
'security-groupids'?: Array<string>;
/**
 * Tags is the tags on this ENI
 */
tags?: Record<string, string>;
/**
 * Type is the ENI type Primary or Secondary
 */
type?: string;
/**
 * VPC is the vpc to which the ENI belongs
 */
vpc?: {
/**
 * CIDRBlock is the VPC IPv4 CIDR
 */
cidr?: string;
/**
 * IPv6CIDRBlock is the VPC IPv6 CIDR
 */
'ipv6-cidr'?: string;
/**
 * VPCID is the vpc to which the ENI belongs
 */
'vpc-id'?: string;
};
/**
 * VSwitch is the vSwitch the ENI is using
 */
vswitch?: {
/**
 * CIDRBlock is the vSwitch IPv4 CIDR
 */
cidr?: string;
/**
 * IPv6CIDRBlock is the vSwitch IPv6 CIDR
 */
'ipv6-cidr'?: string;
/**
 * VSwitchID is the vSwitch to which the ENI belongs
 */
'vswitch-id'?: string;
};
/**
 * ZoneID is the zone to which the ENI belongs
 */
'zone-id'?: string;
}>;
};
/**
 * Azure is the Azure specific status of the node.
 */
azure?: {
/**
 * Interfaces is the list of interfaces on the node
 */
interfaces?: Array<{
/**
 * GatewayIP is the interface's subnet's default route 
 * OBSOLETE: This field is obsolete, please use Gateway field instead.
 */
GatewayIP?: string;
/**
 * Addresses is the list of all IPs associated with the interface, including all secondary addresses
 */
addresses?: Array<{
/**
 * IP is the ip address of the address
 */
ip?: string;
/**
 * State is the provisioning state of the address
 */
state?: string;
/**
 * Subnet is the subnet the address belongs to
 */
subnet?: string;
}>;
/**
 * CIDR is the range that the interface belongs to.
 */
cidr?: string;
/**
 * Gateway is the interface's subnet's default route
 */
gateway?: string;
/**
 * ID is the identifier
 */
id?: string;
/**
 * MAC is the mac address
 */
mac?: string;
/**
 * Name is the name of the interface
 */
name?: string;
/**
 * SecurityGroup is the security group associated with the interface
 */
'security-group'?: string;
/**
 * State is the provisioning state
 */
state?: string;
}>;
};
/**
 * ENI is the AWS ENI specific status of the node.
 */
eni?: {
/**
 * ENIs is the list of ENIs on the node
 */
enis?: Record<string, {
/**
 * Addresses is the list of all secondary IPs associated with the ENI
 */
addresses?: Array<string>;
/**
 * AvailabilityZone is the availability zone of the ENI
 */
'availability-zone'?: string;
/**
 * Description is the description field of the ENI
 */
description?: string;
/**
 * ID is the ENI ID
 */
id?: string;
/**
 * IP is the primary IP of the ENI
 */
ip?: string;
/**
 * MAC is the mac address of the ENI
 */
mac?: string;
/**
 * Number is the interface index, it used in combination with FirstInterfaceIndex
 */
number?: number;
/**
 * Prefixes is the list of all /28 prefixes associated with the ENI
 */
prefixes?: Array<string>;
/**
 * SecurityGroups are the security groups associated with the ENI
 */
'security-groups'?: Array<string>;
/**
 * Subnet is the subnet the ENI is associated with
 */
subnet?: {
/**
 * CIDR is the CIDR range associated with the subnet
 */
cidr?: string;
/**
 * ID is the ID of the subnet
 */
id?: string;
};
/**
 * Tags is the set of tags of the ENI. Used to detect ENIs which should not be managed by Cilium
 */
tags?: Record<string, string>;
/**
 * VPC is the VPC information to which the ENI is attached to
 */
vpc?: {
/**
 * CIDRs is the list of CIDR ranges associated with the VPC
 */
cidrs?: Array<string>;
/**
 * / ID is the ID of a VPC
 */
id?: string;
/**
 * PrimaryCIDR is the primary CIDR of the VPC
 */
'primary-cidr'?: string;
};
}>;
};
/**
 * IPAM is the IPAM status of the node.
 */
ipam?: {
/**
 * Operator is the Operator status of the node
 */
'operator-status'?: {
/**
 * Error is the error message set by cilium-operator.
 */
error?: string;
};
/**
 * PodCIDRs lists the status of each pod CIDR allocated to this node.
 */
'pod-cidrs'?: Record<string, {
/**
 * Status describes the status of a pod CIDR
 */
status?: 'released' | 'depleted' | 'in-use';
}>;
/**
 * ReleaseIPs tracks the state for every IP considered for release. value can be one of the following string : * marked-for-release : Set by operator as possible candidate for IP * ready-for-release  : Acknowledged as safe to release by agent * do-not-release     : IP already in use / not owned by the node. Set by agent * released           : IP successfully released. Set by operator
 */
'release-ips'?: Record<string, 'marked-for-release' | 'ready-for-release' | 'do-not-release' | 'released'>;
/**
 * Used lists all IPs out of Spec.IPAM.Pool which have been allocated and are in use.
 */
used?: Record<string, {
/**
 * Owner is the owner of the IP. This field is set if the IP has been allocated. It will be set to the pod name or another identifier representing the usage of the IP 
 * The owner field is left blank for an entry in Spec.IPAM.Pool and filled out as the IP is used and also added to Status.IPAM.Used.
 */
owner?: string;
/**
 * Resource is set for both available and allocated IPs, it represents what resource the IP is associated with, e.g. in combination with AWS ENI, this will refer to the ID of the ENI
 */
resource?: string;
}>;
};
};
};

