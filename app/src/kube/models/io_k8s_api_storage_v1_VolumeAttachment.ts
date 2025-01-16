import type { io_k8s_api_storage_v1_VolumeAttachmentSpec } from './io_k8s_api_storage_v1_VolumeAttachmentSpec';
import type { io_k8s_api_storage_v1_VolumeAttachmentStatus } from './io_k8s_api_storage_v1_VolumeAttachmentStatus';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.
 * 
 * VolumeAttachment objects are non-namespaced.
 */
export type io_k8s_api_storage_v1_VolumeAttachment = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
	/**
	 * spec represents specification of the desired attach/detach volume behavior. Populated by the Kubernetes system.
	 */
	spec: io_k8s_api_storage_v1_VolumeAttachmentSpec;
	/**
	 * status represents status of the VolumeAttachment request. Populated by the entity completing the attach or detach operation, i.e. the external-attacher.
	 */
	status?: io_k8s_api_storage_v1_VolumeAttachmentStatus;
};

