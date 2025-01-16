import type { io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource } from './io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource';
import type { io_k8s_api_core_v1_AzureDiskVolumeSource } from './io_k8s_api_core_v1_AzureDiskVolumeSource';
import type { io_k8s_api_core_v1_AzureFilePersistentVolumeSource } from './io_k8s_api_core_v1_AzureFilePersistentVolumeSource';
import type { io_k8s_api_core_v1_CephFSPersistentVolumeSource } from './io_k8s_api_core_v1_CephFSPersistentVolumeSource';
import type { io_k8s_api_core_v1_CinderPersistentVolumeSource } from './io_k8s_api_core_v1_CinderPersistentVolumeSource';
import type { io_k8s_api_core_v1_CSIPersistentVolumeSource } from './io_k8s_api_core_v1_CSIPersistentVolumeSource';
import type { io_k8s_api_core_v1_FCVolumeSource } from './io_k8s_api_core_v1_FCVolumeSource';
import type { io_k8s_api_core_v1_FlexPersistentVolumeSource } from './io_k8s_api_core_v1_FlexPersistentVolumeSource';
import type { io_k8s_api_core_v1_FlockerVolumeSource } from './io_k8s_api_core_v1_FlockerVolumeSource';
import type { io_k8s_api_core_v1_GCEPersistentDiskVolumeSource } from './io_k8s_api_core_v1_GCEPersistentDiskVolumeSource';
import type { io_k8s_api_core_v1_GlusterfsPersistentVolumeSource } from './io_k8s_api_core_v1_GlusterfsPersistentVolumeSource';
import type { io_k8s_api_core_v1_HostPathVolumeSource } from './io_k8s_api_core_v1_HostPathVolumeSource';
import type { io_k8s_api_core_v1_ISCSIPersistentVolumeSource } from './io_k8s_api_core_v1_ISCSIPersistentVolumeSource';
import type { io_k8s_api_core_v1_LocalVolumeSource } from './io_k8s_api_core_v1_LocalVolumeSource';
import type { io_k8s_api_core_v1_NFSVolumeSource } from './io_k8s_api_core_v1_NFSVolumeSource';
import type { io_k8s_api_core_v1_ObjectReference } from './io_k8s_api_core_v1_ObjectReference';
import type { io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource } from './io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource';
import type { io_k8s_api_core_v1_PortworxVolumeSource } from './io_k8s_api_core_v1_PortworxVolumeSource';
import type { io_k8s_api_core_v1_QuobyteVolumeSource } from './io_k8s_api_core_v1_QuobyteVolumeSource';
import type { io_k8s_api_core_v1_RBDPersistentVolumeSource } from './io_k8s_api_core_v1_RBDPersistentVolumeSource';
import type { io_k8s_api_core_v1_ScaleIOPersistentVolumeSource } from './io_k8s_api_core_v1_ScaleIOPersistentVolumeSource';
import type { io_k8s_api_core_v1_StorageOSPersistentVolumeSource } from './io_k8s_api_core_v1_StorageOSPersistentVolumeSource';
import type { io_k8s_api_core_v1_VolumeNodeAffinity } from './io_k8s_api_core_v1_VolumeNodeAffinity';
import type { io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource } from './io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource';
import type { io_k8s_apimachinery_pkg_api_resource_Quantity } from './io_k8s_apimachinery_pkg_api_resource_Quantity';

/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
export type io_k8s_api_core_v1_PersistentVolumeSpec = {
	/**
	 * accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
	 */
	accessModes?: Array<'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'>;
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
	azureFile?: io_k8s_api_core_v1_AzureFilePersistentVolumeSource;
	/**
	 * capacity is the description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
	 */
	capacity?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
	/**
	 * cephFS represents a Ceph FS mount on the host that shares a pod's lifetime
	 */
	cephfs?: io_k8s_api_core_v1_CephFSPersistentVolumeSource;
	/**
	 * cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
	 */
	cinder?: io_k8s_api_core_v1_CinderPersistentVolumeSource;
	/**
	 * claimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#binding
	 */
	claimRef?: io_k8s_api_core_v1_ObjectReference;
	/**
	 * csi represents storage that is handled by an external CSI driver (Beta feature).
	 */
	csi?: io_k8s_api_core_v1_CSIPersistentVolumeSource;
	/**
	 * fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
	 */
	fc?: io_k8s_api_core_v1_FCVolumeSource;
	/**
	 * flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
	 */
	flexVolume?: io_k8s_api_core_v1_FlexPersistentVolumeSource;
	/**
	 * flocker represents a Flocker volume attached to a kubelet's host machine and exposed to the pod for its usage. This depends on the Flocker control service being running
	 */
	flocker?: io_k8s_api_core_v1_FlockerVolumeSource;
	/**
	 * gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
	 */
	gcePersistentDisk?: io_k8s_api_core_v1_GCEPersistentDiskVolumeSource;
	/**
	 * glusterfs represents a Glusterfs volume that is attached to a host and exposed to the pod. Provisioned by an admin. More info: https://examples.k8s.io/volumes/glusterfs/README.md
	 */
	glusterfs?: io_k8s_api_core_v1_GlusterfsPersistentVolumeSource;
	/**
	 * hostPath represents a directory on the host. Provisioned by a developer or tester. This is useful for single-node development and testing only! On-host storage is not supported in any way and WILL NOT WORK in a multi-node cluster. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
	 */
	hostPath?: io_k8s_api_core_v1_HostPathVolumeSource;
	/**
	 * iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin.
	 */
	iscsi?: io_k8s_api_core_v1_ISCSIPersistentVolumeSource;
	/**
	 * local represents directly-attached storage with node affinity
	 */
	local?: io_k8s_api_core_v1_LocalVolumeSource;
	/**
	 * mountOptions is the list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
	 */
	mountOptions?: Array<string>;
	/**
	 * nfs represents an NFS mount on the host. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
	 */
	nfs?: io_k8s_api_core_v1_NFSVolumeSource;
	/**
	 * nodeAffinity defines constraints that limit what nodes this volume can be accessed from. This field influences the scheduling of pods that use this volume.
	 */
	nodeAffinity?: io_k8s_api_core_v1_VolumeNodeAffinity;
	/**
	 * persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
 * 
 * Possible enum values:
 * - `"Delete"` means the volume will be deleted from Kubernetes on release from its claim. The volume plugin must support Deletion.
 * - `"Recycle"` means the volume will be recycled back into the pool of unbound persistent volumes on release from its claim. The volume plugin must support Recycling.
 * - `"Retain"` means the volume will be left in its current phase (Released) for manual reclamation by the administrator. The default policy is Retain.
	 */
	persistentVolumeReclaimPolicy?: 'Delete' | 'Recycle' | 'Retain';
	/**
	 * photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
	 */
	photonPersistentDisk?: io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource;
	/**
	 * portworxVolume represents a portworx volume attached and mounted on kubelets host machine
	 */
	portworxVolume?: io_k8s_api_core_v1_PortworxVolumeSource;
	/**
	 * quobyte represents a Quobyte mount on the host that shares a pod's lifetime
	 */
	quobyte?: io_k8s_api_core_v1_QuobyteVolumeSource;
	/**
	 * rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
	 */
	rbd?: io_k8s_api_core_v1_RBDPersistentVolumeSource;
	/**
	 * scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
	 */
	scaleIO?: io_k8s_api_core_v1_ScaleIOPersistentVolumeSource;
	/**
	 * storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
	 */
	storageClassName?: string;
	/**
	 * storageOS represents a StorageOS volume that is attached to the kubelet's host machine and mounted into the pod More info: https://examples.k8s.io/volumes/storageos/README.md
	 */
	storageos?: io_k8s_api_core_v1_StorageOSPersistentVolumeSource;
	/**
	 * Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is an alpha field and requires enabling VolumeAttributesClass feature.
	 */
	volumeAttributesClassName?: string;
	/**
	 * volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.
 * 
 * Possible enum values:
 * - `"Block"` means the volume will not be formatted with a filesystem and will remain a raw block device.
 * - `"Filesystem"` means the volume will be or is formatted with a filesystem.
	 */
	volumeMode?: 'Block' | 'Filesystem';
	/**
	 * vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
	 */
	vsphereVolume?: io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource;
};



