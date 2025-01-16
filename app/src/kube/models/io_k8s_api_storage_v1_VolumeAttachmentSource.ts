import type { io_k8s_api_core_v1_PersistentVolumeSpec } from './io_k8s_api_core_v1_PersistentVolumeSpec';

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export type io_k8s_api_storage_v1_VolumeAttachmentSource = {
	/**
	 * inlineVolumeSpec contains all the information necessary to attach a persistent volume defined by a pod's inline VolumeSource. This field is populated only for the CSIMigration feature. It contains translated fields from a pod's inline VolumeSource to a PersistentVolumeSpec. This field is beta-level and is only honored by servers that enabled the CSIMigration feature.
	 */
	inlineVolumeSpec?: io_k8s_api_core_v1_PersistentVolumeSpec;
	/**
	 * persistentVolumeName represents the name of the persistent volume to attach.
	 */
	persistentVolumeName?: string;
};

