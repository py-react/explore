import type { io_k8s_api_apps_v1_RollingUpdateDaemonSet } from './io_k8s_api_apps_v1_RollingUpdateDaemonSet';

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export type io_k8s_api_apps_v1_DaemonSetUpdateStrategy = {
	/**
	 * Rolling update config params. Present only if type = "RollingUpdate".
	 */
	rollingUpdate?: io_k8s_api_apps_v1_RollingUpdateDaemonSet;
	/**
	 * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
 * 
 * Possible enum values:
 * - `"OnDelete"` Replace the old daemons only when it's killed
 * - `"RollingUpdate"` Replace the old daemons by new ones using rolling update i.e replace them on each node one after the other.
	 */
	type?: 'OnDelete' | 'RollingUpdate';
};


