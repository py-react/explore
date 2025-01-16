import type { io_k8s_api_batch_v1_JobSpec } from './io_k8s_api_batch_v1_JobSpec';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from './io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';

/**
 * JobTemplateSpec describes the data a Job should have when created from a template
 */
export type io_k8s_api_batch_v1_JobTemplateSpec = {
	/**
	 * Standard object's metadata of the jobs created from this template. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
	 */
	metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
	/**
	 * Specification of the desired behavior of the job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
	 */
	spec?: io_k8s_api_batch_v1_JobSpec;
};

