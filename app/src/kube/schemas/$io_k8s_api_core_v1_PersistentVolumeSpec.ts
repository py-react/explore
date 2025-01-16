export const $io_k8s_api_core_v1_PersistentVolumeSpec = {
	description: `PersistentVolumeSpec is the specification of a persistent volume.`,
	properties: {
		accessModes: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
		awsElasticBlockStore: {
	type: 'io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource',
	description: `awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore`,
},
		azureDisk: {
	type: 'io_k8s_api_core_v1_AzureDiskVolumeSource',
	description: `azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.`,
},
		azureFile: {
	type: 'io_k8s_api_core_v1_AzureFilePersistentVolumeSource',
	description: `azureFile represents an Azure File Service mount on the host and bind mount to the pod.`,
},
		capacity: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
		cephfs: {
	type: 'io_k8s_api_core_v1_CephFSPersistentVolumeSource',
	description: `cephFS represents a Ceph FS mount on the host that shares a pod's lifetime`,
},
		cinder: {
	type: 'io_k8s_api_core_v1_CinderPersistentVolumeSource',
	description: `cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md`,
},
		claimRef: {
	type: 'io_k8s_api_core_v1_ObjectReference',
	description: `claimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#binding`,
},
		csi: {
	type: 'io_k8s_api_core_v1_CSIPersistentVolumeSource',
	description: `csi represents storage that is handled by an external CSI driver (Beta feature).`,
},
		fc: {
	type: 'io_k8s_api_core_v1_FCVolumeSource',
	description: `fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.`,
},
		flexVolume: {
	type: 'io_k8s_api_core_v1_FlexPersistentVolumeSource',
	description: `flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.`,
},
		flocker: {
	type: 'io_k8s_api_core_v1_FlockerVolumeSource',
	description: `flocker represents a Flocker volume attached to a kubelet's host machine and exposed to the pod for its usage. This depends on the Flocker control service being running`,
},
		gcePersistentDisk: {
	type: 'io_k8s_api_core_v1_GCEPersistentDiskVolumeSource',
	description: `gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk`,
},
		glusterfs: {
	type: 'io_k8s_api_core_v1_GlusterfsPersistentVolumeSource',
	description: `glusterfs represents a Glusterfs volume that is attached to a host and exposed to the pod. Provisioned by an admin. More info: https://examples.k8s.io/volumes/glusterfs/README.md`,
},
		hostPath: {
	type: 'io_k8s_api_core_v1_HostPathVolumeSource',
	description: `hostPath represents a directory on the host. Provisioned by a developer or tester. This is useful for single-node development and testing only! On-host storage is not supported in any way and WILL NOT WORK in a multi-node cluster. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath`,
},
		iscsi: {
	type: 'io_k8s_api_core_v1_ISCSIPersistentVolumeSource',
	description: `iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin.`,
},
		local: {
	type: 'io_k8s_api_core_v1_LocalVolumeSource',
	description: `local represents directly-attached storage with node affinity`,
},
		mountOptions: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		nfs: {
	type: 'io_k8s_api_core_v1_NFSVolumeSource',
	description: `nfs represents an NFS mount on the host. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs`,
},
		nodeAffinity: {
	type: 'io_k8s_api_core_v1_VolumeNodeAffinity',
	description: `nodeAffinity defines constraints that limit what nodes this volume can be accessed from. This field influences the scheduling of pods that use this volume.`,
},
		persistentVolumeReclaimPolicy: {
	type: 'Enum',
},
		photonPersistentDisk: {
	type: 'io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource',
	description: `photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine`,
},
		portworxVolume: {
	type: 'io_k8s_api_core_v1_PortworxVolumeSource',
	description: `portworxVolume represents a portworx volume attached and mounted on kubelets host machine`,
},
		quobyte: {
	type: 'io_k8s_api_core_v1_QuobyteVolumeSource',
	description: `quobyte represents a Quobyte mount on the host that shares a pod's lifetime`,
},
		rbd: {
	type: 'io_k8s_api_core_v1_RBDPersistentVolumeSource',
	description: `rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md`,
},
		scaleIO: {
	type: 'io_k8s_api_core_v1_ScaleIOPersistentVolumeSource',
	description: `scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.`,
},
		storageClassName: {
	type: 'string',
	description: `storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.`,
},
		storageos: {
	type: 'io_k8s_api_core_v1_StorageOSPersistentVolumeSource',
	description: `storageOS represents a StorageOS volume that is attached to the kubelet's host machine and mounted into the pod More info: https://examples.k8s.io/volumes/storageos/README.md`,
},
		volumeAttributesClassName: {
	type: 'string',
	description: `Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is an alpha field and requires enabling VolumeAttributesClass feature.`,
},
		volumeMode: {
	type: 'Enum',
},
		vsphereVolume: {
	type: 'io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource',
	description: `vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine`,
},
	},
} as const;