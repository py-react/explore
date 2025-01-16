export const $io_k8s_api_core_v1_Volume = {
	description: `Volume represents a named volume in a pod that may be accessed by any container in the pod.`,
	properties: {
		awsElasticBlockStore: {
	type: 'io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource',
	description: `awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore`,
},
		azureDisk: {
	type: 'io_k8s_api_core_v1_AzureDiskVolumeSource',
	description: `azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.`,
},
		azureFile: {
	type: 'io_k8s_api_core_v1_AzureFileVolumeSource',
	description: `azureFile represents an Azure File Service mount on the host and bind mount to the pod.`,
},
		cephfs: {
	type: 'io_k8s_api_core_v1_CephFSVolumeSource',
	description: `cephFS represents a Ceph FS mount on the host that shares a pod's lifetime`,
},
		cinder: {
	type: 'io_k8s_api_core_v1_CinderVolumeSource',
	description: `cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md`,
},
		configMap: {
	type: 'io_k8s_api_core_v1_ConfigMapVolumeSource',
	description: `configMap represents a configMap that should populate this volume`,
},
		csi: {
	type: 'io_k8s_api_core_v1_CSIVolumeSource',
	description: `csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).`,
},
		downwardAPI: {
	type: 'io_k8s_api_core_v1_DownwardAPIVolumeSource',
	description: `downwardAPI represents downward API about the pod that should populate this volume`,
},
		emptyDir: {
	type: 'io_k8s_api_core_v1_EmptyDirVolumeSource',
	description: `emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir`,
},
		ephemeral: {
	type: 'io_k8s_api_core_v1_EphemeralVolumeSource',
	description: `ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed.

Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity
   tracking are needed,
c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through
   a PersistentVolumeClaim (see EphemeralVolumeSource for more
   information on the connection between this volume type
   and PersistentVolumeClaim).

Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod.

Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information.

A pod can use both types of ephemeral volumes and persistent volumes at the same time.`,
},
		fc: {
	type: 'io_k8s_api_core_v1_FCVolumeSource',
	description: `fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.`,
},
		flexVolume: {
	type: 'io_k8s_api_core_v1_FlexVolumeSource',
	description: `flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.`,
},
		flocker: {
	type: 'io_k8s_api_core_v1_FlockerVolumeSource',
	description: `flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running`,
},
		gcePersistentDisk: {
	type: 'io_k8s_api_core_v1_GCEPersistentDiskVolumeSource',
	description: `gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk`,
},
		gitRepo: {
	type: 'io_k8s_api_core_v1_GitRepoVolumeSource',
	description: `gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.`,
},
		glusterfs: {
	type: 'io_k8s_api_core_v1_GlusterfsVolumeSource',
	description: `glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md`,
},
		hostPath: {
	type: 'io_k8s_api_core_v1_HostPathVolumeSource',
	description: `hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath`,
},
		iscsi: {
	type: 'io_k8s_api_core_v1_ISCSIVolumeSource',
	description: `iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md`,
},
		name: {
	type: 'string',
	description: `name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names`,
	isRequired: true,
},
		nfs: {
	type: 'io_k8s_api_core_v1_NFSVolumeSource',
	description: `nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs`,
},
		persistentVolumeClaim: {
	type: 'io_k8s_api_core_v1_PersistentVolumeClaimVolumeSource',
	description: `persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims`,
},
		photonPersistentDisk: {
	type: 'io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource',
	description: `photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine`,
},
		portworxVolume: {
	type: 'io_k8s_api_core_v1_PortworxVolumeSource',
	description: `portworxVolume represents a portworx volume attached and mounted on kubelets host machine`,
},
		projected: {
	type: 'io_k8s_api_core_v1_ProjectedVolumeSource',
	description: `projected items for all in one resources secrets, configmaps, and downward API`,
},
		quobyte: {
	type: 'io_k8s_api_core_v1_QuobyteVolumeSource',
	description: `quobyte represents a Quobyte mount on the host that shares a pod's lifetime`,
},
		rbd: {
	type: 'io_k8s_api_core_v1_RBDVolumeSource',
	description: `rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md`,
},
		scaleIO: {
	type: 'io_k8s_api_core_v1_ScaleIOVolumeSource',
	description: `scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.`,
},
		secret: {
	type: 'io_k8s_api_core_v1_SecretVolumeSource',
	description: `secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret`,
},
		storageos: {
	type: 'io_k8s_api_core_v1_StorageOSVolumeSource',
	description: `storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.`,
},
		vsphereVolume: {
	type: 'io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource',
	description: `vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine`,
},
	},
} as const;