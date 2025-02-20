import type { io_k8s_apimachinery_pkg_apis_meta_v1_Time } from './io_k8s_apimachinery_pkg_apis_meta_v1_Time';

/**
 * PersistentVolumeStatus is the current status of a persistent volume.
 */
export type io_k8s_api_core_v1_PersistentVolumeStatus = {
	/**
	 * lastPhaseTransitionTime is the time the phase transitioned from one to another and automatically resets to current time everytime a volume phase transitions. This is a beta field and requires the PersistentVolumeLastPhaseTransitionTime feature to be enabled (enabled by default).
	 */
	lastPhaseTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
	/**
	 * message is a human-readable message indicating details about why the volume is in this state.
	 */
	message?: string;
	/**
	 * phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase
 * 
 * Possible enum values:
 * - `"Available"` used for PersistentVolumes that are not yet bound Available volumes are held by the binder and matched to PersistentVolumeClaims
 * - `"Bound"` used for PersistentVolumes that are bound
 * - `"Failed"` used for PersistentVolumes that failed to be correctly recycled or deleted after being released from a claim
 * - `"Pending"` used for PersistentVolumes that are not available
 * - `"Released"` used for PersistentVolumes where the bound PersistentVolumeClaim was deleted released volumes must be recycled before becoming available again this phase is used by the persistent volume claim binder to signal to another process to reclaim the resource
	 */
	phase?: 'Available' | 'Bound' | 'Failed' | 'Pending' | 'Released';
	/**
	 * reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI.
	 */
	reason?: string;
};


