export const $io_k8s_api_batch_v1_CronJobStatus = {
	description: `CronJobStatus represents the current state of a cron job.`,
	properties: {
		active: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_ObjectReference',
	},
},
		lastScheduleTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `Information when was the last time the job was successfully scheduled.`,
},
		lastSuccessfulTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `Information when was the last time the job successfully completed.`,
},
	},
} as const;