import type { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
import type { io_k8s_storage_snapshot_v1_VolumeSnapshotClass } from './io_k8s_storage_snapshot_v1_VolumeSnapshotClass';

/**
 * VolumeSnapshotClassList is a list of VolumeSnapshotClass
 */
export type io_k8s_storage_snapshot_v1_VolumeSnapshotClassList = {
	/**
	 * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
	 */
	apiVersion?: string;
	/**
	 * List of volumesnapshotclasses. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md
	 */
	items: Array<io_k8s_storage_snapshot_v1_VolumeSnapshotClass>;
	/**
	 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	kind?: string;
	/**
	 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
};

