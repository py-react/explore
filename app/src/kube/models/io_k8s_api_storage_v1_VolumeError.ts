import type { io_k8s_apimachinery_pkg_apis_meta_v1_Time } from './io_k8s_apimachinery_pkg_apis_meta_v1_Time';

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export type io_k8s_api_storage_v1_VolumeError = {
	/**
	 * message represents the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information.
	 */
	message?: string;
	/**
	 * time represents the time the error was encountered.
	 */
	time?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
};

