import type { io_k8s_api_core_v1_DownwardAPIVolumeFile } from './io_k8s_api_core_v1_DownwardAPIVolumeFile';

/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
export type io_k8s_api_core_v1_DownwardAPIProjection = {
	/**
	 * Items is a list of DownwardAPIVolume file
	 */
	items?: Array<io_k8s_api_core_v1_DownwardAPIVolumeFile>;
};

