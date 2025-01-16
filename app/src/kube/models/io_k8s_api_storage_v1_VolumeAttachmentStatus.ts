import type { io_k8s_api_storage_v1_VolumeError } from './io_k8s_api_storage_v1_VolumeError';

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export type io_k8s_api_storage_v1_VolumeAttachmentStatus = {
	/**
	 * attachError represents the last error encountered during attach operation, if any. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
	 */
	attachError?: io_k8s_api_storage_v1_VolumeError;
	/**
	 * attached indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
	 */
	attached: boolean;
	/**
	 * attachmentMetadata is populated with any information returned by the attach operation, upon successful attach, that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
	 */
	attachmentMetadata?: Record<string, string>;
	/**
	 * detachError represents the last error encountered during detach operation, if any. This field must only be set by the entity completing the detach operation, i.e. the external-attacher.
	 */
	detachError?: io_k8s_api_storage_v1_VolumeError;
};

