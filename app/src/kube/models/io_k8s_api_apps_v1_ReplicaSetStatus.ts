import type { io_k8s_api_apps_v1_ReplicaSetCondition } from './io_k8s_api_apps_v1_ReplicaSetCondition';

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export type io_k8s_api_apps_v1_ReplicaSetStatus = {
	/**
	 * The number of available replicas (ready for at least minReadySeconds) for this replica set.
	 */
	availableReplicas?: number;
	/**
	 * Represents the latest available observations of a replica set's current state.
	 */
	conditions?: Array<io_k8s_api_apps_v1_ReplicaSetCondition>;
	/**
	 * The number of pods that have labels matching the labels of the pod template of the replicaset.
	 */
	fullyLabeledReplicas?: number;
	/**
	 * ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
	 */
	observedGeneration?: number;
	/**
	 * readyReplicas is the number of pods targeted by this ReplicaSet with a Ready Condition.
	 */
	readyReplicas?: number;
	/**
	 * Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
	 */
	replicas: number;
};

