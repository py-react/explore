export const $io_cilium_v2_CiliumNode = {
	description: `CiliumNode represents a node managed by Cilium. It contains a specification to control various node specific configuration aspects and a status section to represent the status of the node.`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources`,
},
		kind: {
	type: 'string',
	description: `Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds`,
},
		metadata: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta',
	description: `Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata`,
	isRequired: true,
},
		spec: {
	description: `Spec defines the desired specification/configuration of the node.`,
	properties: {
		addresses: {
	type: 'array',
	contains: {
	description: `NodeAddress is a node address.`,
	properties: {
		ip: {
	type: 'string',
	description: `IP is an IP of a node`,
},
		type: {
	type: 'string',
	description: `Type is the type of the node address`,
},
	},
},
},
		'alibaba-cloud': {
	description: `AlibabaCloud is the AlibabaCloud IPAM specific configuration.`,
	properties: {
		'availability-zone': {
	type: 'string',
	description: `AvailabilityZone is the availability zone to use when allocating ENIs.`,
},
		'cidr-block': {
	type: 'string',
	description: `CIDRBlock is vpc ipv4 CIDR`,
},
		'instance-type': {
	type: 'string',
	description: `InstanceType is the ECS instance type, e.g. "ecs.g6.2xlarge"`,
},
		'security-group-tags': {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		'security-groups': {
	type: 'array',
	contains: {
	type: 'string',
},
},
		'vpc-id': {
	type: 'string',
	description: `VPCID is the VPC ID to use when allocating ENIs.`,
},
		'vswitch-tags': {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		vswitches: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
},
		azure: {
	description: `Azure is the Azure IPAM specific configuration.`,
	properties: {
		'interface-name': {
	type: 'string',
	description: `InterfaceName is the name of the interface the cilium-operator will use to allocate all the IPs on`,
},
	},
},
		bootid: {
	type: 'string',
	description: `BootID is a unique node identifier generated on boot`,
},
		encryption: {
	description: `Encryption is the encryption configuration of the node.`,
	properties: {
		key: {
	type: 'number',
	description: `Key is the index to the key to use for encryption or 0 if encryption is disabled.`,
},
	},
},
		eni: {
	description: `ENI is the AWS ENI specific configuration.`,
	properties: {
		'availability-zone': {
	type: 'string',
	description: `AvailabilityZone is the availability zone to use when allocating ENIs.`,
},
		'delete-on-termination': {
	type: 'boolean',
	description: `DeleteOnTermination defines that the ENI should be deleted when the associated instance is terminated. If the parameter is not set the default behavior is to delete the ENI on instance termination.`,
},
		'disable-prefix-delegation': {
	type: 'boolean',
	description: `DisablePrefixDelegation determines whether ENI prefix delegation should be disabled on this node.`,
},
		'exclude-interface-tags': {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		'first-interface-index': {
	type: 'number',
	description: `FirstInterfaceIndex is the index of the first ENI to use for IP allocation, e.g. if the node has eth0, eth1, eth2 and FirstInterfaceIndex is set to 1, then only eth1 and eth2 will be used for IP allocation, eth0 will be ignored for PodIP allocation.`,
},
		'instance-id': {
	type: 'string',
	description: `InstanceID is the AWS InstanceId of the node. The InstanceID is used to retrieve AWS metadata for the node. 
 OBSOLETE: This field is obsolete, please use Spec.InstanceID`,
},
		'instance-type': {
	type: 'string',
	description: `InstanceType is the AWS EC2 instance type, e.g. "m5.large"`,
},
		'max-above-watermark': {
	type: 'number',
	description: `MaxAboveWatermark is the maximum number of addresses to allocate beyond the addresses needed to reach the PreAllocate watermark. Going above the watermark can help reduce the number of API calls to allocate IPs, e.g. when a new ENI is allocated, as many secondary IPs as possible are allocated. Limiting the amount can help reduce waste of IPs. 
 OBSOLETE: This field is obsolete, please use Spec.IPAM.MaxAboveWatermark`,
},
		'min-allocate': {
	type: 'number',
	description: `MinAllocate is the minimum number of IPs that must be allocated when the node is first bootstrapped. It defines the minimum base socket of addresses that must be available. After reaching this watermark, the PreAllocate and MaxAboveWatermark logic takes over to continue allocating IPs. 
 OBSOLETE: This field is obsolete, please use Spec.IPAM.MinAllocate`,
},
		'node-subnet-id': {
	type: 'string',
	description: `NodeSubnetID is the subnet of the primary ENI the instance was brought up with. It is used as a sensible default subnet to create ENIs in.`,
},
		'pre-allocate': {
	type: 'number',
	description: `PreAllocate defines the number of IP addresses that must be available for allocation in the IPAMspec. It defines the buffer of addresses available immediately without requiring cilium-operator to get involved. 
 OBSOLETE: This field is obsolete, please use Spec.IPAM.PreAllocate`,
},
		'security-group-tags': {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		'security-groups': {
	type: 'array',
	contains: {
	type: 'string',
},
},
		'subnet-ids': {
	type: 'array',
	contains: {
	type: 'string',
},
},
		'subnet-tags': {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		'use-primary-address': {
	type: 'boolean',
	description: `UsePrimaryAddress determines whether an ENI's primary address should be available for allocations on the node`,
},
		'vpc-id': {
	type: 'string',
	description: `VpcID is the VPC ID to use when allocating ENIs.`,
},
	},
},
		health: {
	description: `HealthAddressing is the addressing information for health connectivity checking.`,
	properties: {
		ipv4: {
	type: 'string',
	description: `IPv4 is the IPv4 address of the IPv4 health endpoint.`,
},
		ipv6: {
	type: 'string',
	description: `IPv6 is the IPv6 address of the IPv4 health endpoint.`,
},
	},
},
		ingress: {
	description: `IngressAddressing is the addressing information for Ingress listener.`,
	properties: {
		ipv4: {
	type: 'string',
},
		ipv6: {
	type: 'string',
},
	},
},
		'instance-id': {
	type: 'string',
	description: `InstanceID is the identifier of the node. This is different from the node name which is typically the FQDN of the node. The InstanceID typically refers to the identifier used by the cloud provider or some other means of identification.`,
},
		ipam: {
	description: `IPAM is the address management specification. This section can be populated by a user or it can be automatically populated by an IPAM operator.`,
	properties: {
		'max-above-watermark': {
	type: 'number',
	description: `MaxAboveWatermark is the maximum number of addresses to allocate beyond the addresses needed to reach the PreAllocate watermark. Going above the watermark can help reduce the number of API calls to allocate IPs, e.g. when a new ENI is allocated, as many secondary IPs as possible are allocated. Limiting the amount can help reduce waste of IPs.`,
},
		'max-allocate': {
	type: 'number',
	description: `MaxAllocate is the maximum number of IPs that can be allocated to the node. When the current amount of allocated IPs will approach this value, the considered value for PreAllocate will decrease down to 0 in order to not attempt to allocate more addresses than defined.`,
},
		'min-allocate': {
	type: 'number',
	description: `MinAllocate is the minimum number of IPs that must be allocated when the node is first bootstrapped. It defines the minimum base socket of addresses that must be available. After reaching this watermark, the PreAllocate and MaxAboveWatermark logic takes over to continue allocating IPs.`,
},
		'pod-cidr-allocation-threshold': {
	type: 'number',
	description: `PodCIDRAllocationThreshold defines the minimum number of free IPs which must be available to this node via its pod CIDR pool. If the total number of IP addresses in the pod CIDR pool is less than this value, the pod CIDRs currently in-use by this node will be marked as depleted and cilium-operator will allocate a new pod CIDR to this node. This value effectively defines the buffer of IP addresses available immediately without requiring cilium-operator to get involved.`,
},
		'pod-cidr-release-threshold': {
	type: 'number',
	description: `PodCIDRReleaseThreshold defines the maximum number of free IPs which may be available to this node via its pod CIDR pool. While the total number of free IP addresses in the pod CIDR pool is larger than this value, cilium-agent will attempt to release currently unused pod CIDRs.`,
},
		podCIDRs: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		pool: {
	type: 'dictionary',
	contains: {
	description: `AllocationIP is an IP which is available for allocation, or already has been allocated`,
	properties: {
		owner: {
	type: 'string',
	description: `Owner is the owner of the IP. This field is set if the IP has been allocated. It will be set to the pod name or another identifier representing the usage of the IP 
 The owner field is left blank for an entry in Spec.IPAM.Pool and filled out as the IP is used and also added to Status.IPAM.Used.`,
},
		resource: {
	type: 'string',
	description: `Resource is set for both available and allocated IPs, it represents what resource the IP is associated with, e.g. in combination with AWS ENI, this will refer to the ID of the ENI`,
},
	},
},
},
		pools: {
	description: `Pools contains the list of assigned IPAM pools for this node.`,
	properties: {
		allocated: {
	type: 'array',
	contains: {
	description: `IPAMPoolAllocation describes an allocation of an IPAM pool from the operator to the node. It contains the assigned PodCIDRs allocated from this pool`,
	properties: {
		cidrs: {
	type: 'array',
	contains: {
	type: 'string',
	description: `IPAMPodCIDR is a pod CIDR`,
	format: 'cidr',
},
},
		pool: {
	type: 'string',
	description: `Pool is the name of the IPAM pool backing this allocation`,
	isRequired: true,
	minLength: 1,
},
	},
},
},
		requested: {
	type: 'array',
	contains: {
	properties: {
		needed: {
	description: `Needed indicates how many IPs out of the above Pool this node requests from the operator. The operator runs a reconciliation loop to ensure each node always has enough PodCIDRs allocated in each pool to fulfill the requested number of IPs here.`,
	properties: {
		'ipv4-addrs': {
	type: 'number',
	description: `IPv4Addrs contains the number of requested IPv4 addresses out of a given pool`,
},
		'ipv6-addrs': {
	type: 'number',
	description: `IPv6Addrs contains the number of requested IPv6 addresses out of a given pool`,
},
	},
},
		pool: {
	type: 'string',
	description: `Pool is the name of the IPAM pool backing this request`,
	isRequired: true,
	minLength: 1,
},
	},
},
},
	},
},
		'pre-allocate': {
	type: 'number',
	description: `PreAllocate defines the number of IP addresses that must be available for allocation in the IPAMspec. It defines the buffer of addresses available immediately without requiring cilium-operator to get involved.`,
},
	},
},
		nodeidentity: {
	type: 'number',
	description: `NodeIdentity is the Cilium numeric identity allocated for the node, if any.`,
	format: 'int64',
},
	},
	isRequired: true,
},
		status: {
	description: `Status defines the realized specification/configuration and status of the node.`,
	properties: {
		'alibaba-cloud': {
	description: `AlibabaCloud is the AlibabaCloud specific status of the node.`,
	properties: {
		enis: {
	type: 'dictionary',
	contains: {
	description: `ENI represents an AlibabaCloud Elastic Network Interface`,
	properties: {
		'instance-id': {
	type: 'string',
	description: `InstanceID is the InstanceID using this ENI`,
},
		'mac-address': {
	type: 'string',
	description: `MACAddress is the mac address of the ENI`,
},
		'network-interface-id': {
	type: 'string',
	description: `NetworkInterfaceID is the ENI id`,
},
		'primary-ip-address': {
	type: 'string',
	description: `PrimaryIPAddress is the primary IP on ENI`,
},
		'private-ipsets': {
	type: 'array',
	contains: {
	description: `PrivateIPSet is a nested struct in ecs response`,
	properties: {
		primary: {
	type: 'boolean',
},
		'private-ip-address': {
	type: 'string',
},
	},
},
},
		'security-groupids': {
	type: 'array',
	contains: {
	type: 'string',
},
},
		tags: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		type: {
	type: 'string',
	description: `Type is the ENI type Primary or Secondary`,
},
		vpc: {
	description: `VPC is the vpc to which the ENI belongs`,
	properties: {
		cidr: {
	type: 'string',
	description: `CIDRBlock is the VPC IPv4 CIDR`,
},
		'ipv6-cidr': {
	type: 'string',
	description: `IPv6CIDRBlock is the VPC IPv6 CIDR`,
},
		'vpc-id': {
	type: 'string',
	description: `VPCID is the vpc to which the ENI belongs`,
},
	},
},
		vswitch: {
	description: `VSwitch is the vSwitch the ENI is using`,
	properties: {
		cidr: {
	type: 'string',
	description: `CIDRBlock is the vSwitch IPv4 CIDR`,
},
		'ipv6-cidr': {
	type: 'string',
	description: `IPv6CIDRBlock is the vSwitch IPv6 CIDR`,
},
		'vswitch-id': {
	type: 'string',
	description: `VSwitchID is the vSwitch to which the ENI belongs`,
},
	},
},
		'zone-id': {
	type: 'string',
	description: `ZoneID is the zone to which the ENI belongs`,
},
	},
},
},
	},
},
		azure: {
	description: `Azure is the Azure specific status of the node.`,
	properties: {
		interfaces: {
	type: 'array',
	contains: {
	description: `AzureInterface represents an Azure Interface`,
	properties: {
		GatewayIP: {
	type: 'string',
	description: `GatewayIP is the interface's subnet's default route 
 OBSOLETE: This field is obsolete, please use Gateway field instead.`,
},
		addresses: {
	type: 'array',
	contains: {
	description: `AzureAddress is an IP address assigned to an AzureInterface`,
	properties: {
		ip: {
	type: 'string',
	description: `IP is the ip address of the address`,
},
		state: {
	type: 'string',
	description: `State is the provisioning state of the address`,
},
		subnet: {
	type: 'string',
	description: `Subnet is the subnet the address belongs to`,
},
	},
},
},
		cidr: {
	type: 'string',
	description: `CIDR is the range that the interface belongs to.`,
},
		gateway: {
	type: 'string',
	description: `Gateway is the interface's subnet's default route`,
},
		id: {
	type: 'string',
	description: `ID is the identifier`,
},
		mac: {
	type: 'string',
	description: `MAC is the mac address`,
},
		name: {
	type: 'string',
	description: `Name is the name of the interface`,
},
		'security-group': {
	type: 'string',
	description: `SecurityGroup is the security group associated with the interface`,
},
		state: {
	type: 'string',
	description: `State is the provisioning state`,
},
	},
},
},
	},
},
		eni: {
	description: `ENI is the AWS ENI specific status of the node.`,
	properties: {
		enis: {
	type: 'dictionary',
	contains: {
	description: `ENI represents an AWS Elastic Network Interface 
 More details: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html`,
	properties: {
		addresses: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		'availability-zone': {
	type: 'string',
	description: `AvailabilityZone is the availability zone of the ENI`,
},
		description: {
	type: 'string',
	description: `Description is the description field of the ENI`,
},
		id: {
	type: 'string',
	description: `ID is the ENI ID`,
},
		ip: {
	type: 'string',
	description: `IP is the primary IP of the ENI`,
},
		mac: {
	type: 'string',
	description: `MAC is the mac address of the ENI`,
},
		number: {
	type: 'number',
	description: `Number is the interface index, it used in combination with FirstInterfaceIndex`,
},
		prefixes: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		'security-groups': {
	type: 'array',
	contains: {
	type: 'string',
},
},
		subnet: {
	description: `Subnet is the subnet the ENI is associated with`,
	properties: {
		cidr: {
	type: 'string',
	description: `CIDR is the CIDR range associated with the subnet`,
},
		id: {
	type: 'string',
	description: `ID is the ID of the subnet`,
},
	},
},
		tags: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		vpc: {
	description: `VPC is the VPC information to which the ENI is attached to`,
	properties: {
		cidrs: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		id: {
	type: 'string',
	description: `/ ID is the ID of a VPC`,
},
		'primary-cidr': {
	type: 'string',
	description: `PrimaryCIDR is the primary CIDR of the VPC`,
},
	},
},
	},
},
},
	},
},
		ipam: {
	description: `IPAM is the IPAM status of the node.`,
	properties: {
		'operator-status': {
	description: `Operator is the Operator status of the node`,
	properties: {
		error: {
	type: 'string',
	description: `Error is the error message set by cilium-operator.`,
},
	},
},
		'pod-cidrs': {
	type: 'dictionary',
	contains: {
	properties: {
		status: {
	type: 'Enum',
},
	},
},
},
		'release-ips': {
	type: 'dictionary',
	contains: {
	type: 'Enum',
},
},
		used: {
	type: 'dictionary',
	contains: {
	description: `AllocationIP is an IP which is available for allocation, or already has been allocated`,
	properties: {
		owner: {
	type: 'string',
	description: `Owner is the owner of the IP. This field is set if the IP has been allocated. It will be set to the pod name or another identifier representing the usage of the IP 
 The owner field is left blank for an entry in Spec.IPAM.Pool and filled out as the IP is used and also added to Status.IPAM.Used.`,
},
		resource: {
	type: 'string',
	description: `Resource is set for both available and allocated IPs, it represents what resource the IP is associated with, e.g. in combination with AWS ENI, this will refer to the ID of the ENI`,
},
	},
},
},
	},
},
	},
},
	},
} as const;