import type { io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource } from './io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource';
import type { io_k8s_api_core_v1_AzureDiskVolumeSource } from './io_k8s_api_core_v1_AzureDiskVolumeSource';
import type { io_k8s_api_core_v1_AzureFileVolumeSource } from './io_k8s_api_core_v1_AzureFileVolumeSource';
import type { io_k8s_api_core_v1_CephFSVolumeSource } from './io_k8s_api_core_v1_CephFSVolumeSource';
import type { io_k8s_api_core_v1_CinderVolumeSource } from './io_k8s_api_core_v1_CinderVolumeSource';
import type { io_k8s_api_core_v1_ConfigMapVolumeSource } from './io_k8s_api_core_v1_ConfigMapVolumeSource';
import type { io_k8s_api_core_v1_CSIVolumeSource } from './io_k8s_api_core_v1_CSIVolumeSource';
import type { io_k8s_api_core_v1_DownwardAPIVolumeSource } from './io_k8s_api_core_v1_DownwardAPIVolumeSource';
import type { io_k8s_api_core_v1_EmptyDirVolumeSource } from './io_k8s_api_core_v1_EmptyDirVolumeSource';
import type { io_k8s_api_core_v1_EphemeralVolumeSource } from './io_k8s_api_core_v1_EphemeralVolumeSource';
import type { io_k8s_api_core_v1_FCVolumeSource } from './io_k8s_api_core_v1_FCVolumeSource';
import type { io_k8s_api_core_v1_FlexVolumeSource } from './io_k8s_api_core_v1_FlexVolumeSource';
import type { io_k8s_api_core_v1_FlockerVolumeSource } from './io_k8s_api_core_v1_FlockerVolumeSource';
import type { io_k8s_api_core_v1_GCEPersistentDiskVolumeSource } from './io_k8s_api_core_v1_GCEPersistentDiskVolumeSource';
import type { io_k8s_api_core_v1_GitRepoVolumeSource } from './io_k8s_api_core_v1_GitRepoVolumeSource';
import type { io_k8s_api_core_v1_GlusterfsVolumeSource } from './io_k8s_api_core_v1_GlusterfsVolumeSource';
import type { io_k8s_api_core_v1_HostPathVolumeSource } from './io_k8s_api_core_v1_HostPathVolumeSource';
import type { io_k8s_api_core_v1_ISCSIVolumeSource } from './io_k8s_api_core_v1_ISCSIVolumeSource';
import type { io_k8s_api_core_v1_NFSVolumeSource } from './io_k8s_api_core_v1_NFSVolumeSource';
import type { io_k8s_api_core_v1_PersistentVolumeClaimVolumeSource } from './io_k8s_api_core_v1_PersistentVolumeClaimVolumeSource';
import type { io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource } from './io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource';
import type { io_k8s_api_core_v1_PortworxVolumeSource } from './io_k8s_api_core_v1_PortworxVolumeSource';
import type { io_k8s_api_core_v1_ProjectedVolumeSource } from './io_k8s_api_core_v1_ProjectedVolumeSource';
import type { io_k8s_api_core_v1_QuobyteVolumeSource } from './io_k8s_api_core_v1_QuobyteVolumeSource';
import type { io_k8s_api_core_v1_RBDVolumeSource } from './io_k8s_api_core_v1_RBDVolumeSource';
import type { io_k8s_api_core_v1_ScaleIOVolumeSource } from './io_k8s_api_core_v1_ScaleIOVolumeSource';
import type { io_k8s_api_core_v1_SecretVolumeSource } from './io_k8s_api_core_v1_SecretVolumeSource';
import type { io_k8s_api_core_v1_StorageOSVolumeSource } from './io_k8s_api_core_v1_StorageOSVolumeSource';
import type { io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource } from './io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource';

/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 */
export type io_k8s_api_core_v1_Volume = {
	/**
	 * awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
	 */
	awsElasticBlockStore?: io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource;
	/**
	 * azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
	 */
	azureDisk?: io_k8s_api_core_v1_AzureDiskVolumeSource;
	/**
	 * azureFile represents an Azure File Service mount on the host and bind mount to the pod.
	 */
	azureFile?: io_k8s_api_core_v1_AzureFileVolumeSource;
	/**
	 * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
	 */
	cephfs?: io_k8s_api_core_v1_CephFSVolumeSource;
	/**
	 * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
	 */
	cinder?: io_k8s_api_core_v1_CinderVolumeSource;
	/**
	 * configMap represents a configMap that should populate this volume
	 */
	configMap?: io_k8s_api_core_v1_ConfigMapVolumeSource;
	/**
	 * csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).
	 */
	csi?: io_k8s_api_core_v1_CSIVolumeSource;
	/**
	 * downwardAPI represents downward API about the pod that should populate this volume
	 */
	downwardAPI?: io_k8s_api_core_v1_DownwardAPIVolumeSource;
	/**
	 * emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
	 */
	emptyDir?: io_k8s_api_core_v1_EmptyDirVolumeSource;
	/**
	 * ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed.
 * 
 * Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity
 * tracking are needed,
 * c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through
 * a PersistentVolumeClaim (see EphemeralVolumeSource for more
 * information on the connection between this volume type
 * and PersistentVolumeClaim).
 * 
 * Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod.
 * 
 * Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information.
 * 
 * A pod can use both types of ephemeral volumes and persistent volumes at the same time.
	 */
	ephemeral?: io_k8s_api_core_v1_EphemeralVolumeSource;
	/**
	 * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
	 */
	fc?: io_k8s_api_core_v1_FCVolumeSource;
	/**
	 * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
	 */
	flexVolume?: io_k8s_api_core_v1_FlexVolumeSource;
	/**
	 * flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
	 */
	flocker?: io_k8s_api_core_v1_FlockerVolumeSource;
	/**
	 * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
	 */
	gcePersistentDisk?: io_k8s_api_core_v1_GCEPersistentDiskVolumeSource;
	/**
	 * gitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
	 */
	gitRepo?: io_k8s_api_core_v1_GitRepoVolumeSource;
	/**
	 * glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
	 */
	glusterfs?: io_k8s_api_core_v1_GlusterfsVolumeSource;
	/**
	 * hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
	 */
	hostPath?: io_k8s_api_core_v1_HostPathVolumeSource;
	/**
	 * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
	 */
	iscsi?: io_k8s_api_core_v1_ISCSIVolumeSource;
	/**
	 * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
	 */
	name: string;
	/**
	 * nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
	 */
	nfs?: io_k8s_api_core_v1_NFSVolumeSource;
	/**
	 * persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
	 */
	persistentVolumeClaim?: io_k8s_api_core_v1_PersistentVolumeClaimVolumeSource;
	/**
	 * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
	 */
	photonPersistentDisk?: io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource;
	/**
	 * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
	 */
	portworxVolume?: io_k8s_api_core_v1_PortworxVolumeSource;
	/**
	 * projected items for all in one resources secrets, configmaps, and downward API
	 */
	projected?: io_k8s_api_core_v1_ProjectedVolumeSource;
	/**
	 * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
	 */
	quobyte?: io_k8s_api_core_v1_QuobyteVolumeSource;
	/**
	 * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
	 */
	rbd?: io_k8s_api_core_v1_RBDVolumeSource;
	/**
	 * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
	 */
	scaleIO?: io_k8s_api_core_v1_ScaleIOVolumeSource;
	/**
	 * secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
	 */
	secret?: io_k8s_api_core_v1_SecretVolumeSource;
	/**
	 * storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
	 */
	storageos?: io_k8s_api_core_v1_StorageOSVolumeSource;
	/**
	 * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
	 */
	vsphereVolume?: io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource;
};

