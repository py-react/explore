import type { io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationCondition } from './io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationCondition';

/**
 * PriorityLevelConfigurationStatus represents the current state of a "request-priority".
 */
export type io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus = {
	/**
	 * `conditions` is the current state of "request-priority".
	 */
	conditions?: Array<io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationCondition>;
};

