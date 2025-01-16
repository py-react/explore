import type { io_k8s_apimachinery_pkg_runtime_RawExtension } from './io_k8s_apimachinery_pkg_runtime_RawExtension';

/**
 * Event represents a single event to a watched resource.
 */
export type io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent = {
	/**
	 * Object is:
 * * If Type is Added or Modified: the new state of the object.
 * * If Type is Deleted: the state of the object immediately before deletion.
 * * If Type is Error: *Status is recommended; other types may make sense
 * depending on context.
	 */
	object: io_k8s_apimachinery_pkg_runtime_RawExtension;
	type: string;
};

