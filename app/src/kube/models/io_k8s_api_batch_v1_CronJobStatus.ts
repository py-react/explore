import type { io_k8s_api_core_v1_ObjectReference } from './io_k8s_api_core_v1_ObjectReference';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_Time } from './io_k8s_apimachinery_pkg_apis_meta_v1_Time';

/**
 * CronJobStatus represents the current state of a cron job.
 */
export type io_k8s_api_batch_v1_CronJobStatus = {
	/**
	 * A list of pointers to currently running jobs.
	 */
	active?: Array<io_k8s_api_core_v1_ObjectReference>;
	/**
	 * Information when was the last time the job was successfully scheduled.
	 */
	lastScheduleTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
	/**
	 * Information when was the last time the job successfully completed.
	 */
	lastSuccessfulTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
};

