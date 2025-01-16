import type { io_k8s_api_flowcontrol_v1_FlowSchemaCondition } from './io_k8s_api_flowcontrol_v1_FlowSchemaCondition';

/**
 * FlowSchemaStatus represents the current state of a FlowSchema.
 */
export type io_k8s_api_flowcontrol_v1_FlowSchemaStatus = {
	/**
	 * `conditions` is a list of the current states of FlowSchema.
	 */
	conditions?: Array<io_k8s_api_flowcontrol_v1_FlowSchemaCondition>;
};

