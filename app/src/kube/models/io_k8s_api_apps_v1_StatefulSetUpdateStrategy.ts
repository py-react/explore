import type { io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy } from './io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy';

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export type io_k8s_api_apps_v1_StatefulSetUpdateStrategy = {
	/**
	 * RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
	 */
	rollingUpdate?: io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy;
	/**
	 * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
 * 
 * Possible enum values:
 * - `"OnDelete"` triggers the legacy behavior. Version tracking and ordered rolling restarts are disabled. Pods are recreated from the StatefulSetSpec when they are manually deleted. When a scale operation is performed with this strategy,specification version indicated by the StatefulSet's currentRevision.
 * - `"RollingUpdate"` indicates that update will be applied to all Pods in the StatefulSet with respect to the StatefulSet ordering constraints. When a scale operation is performed with this strategy, new Pods will be created from the specification version indicated by the StatefulSet's updateRevision.
	 */
	type?: 'OnDelete' | 'RollingUpdate';
};


