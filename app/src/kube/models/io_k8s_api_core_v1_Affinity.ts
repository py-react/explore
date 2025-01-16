import type { io_k8s_api_core_v1_NodeAffinity } from './io_k8s_api_core_v1_NodeAffinity';
import type { io_k8s_api_core_v1_PodAffinity } from './io_k8s_api_core_v1_PodAffinity';
import type { io_k8s_api_core_v1_PodAntiAffinity } from './io_k8s_api_core_v1_PodAntiAffinity';

/**
 * Affinity is a group of affinity scheduling rules.
 */
export type io_k8s_api_core_v1_Affinity = {
	/**
	 * Describes node affinity scheduling rules for the pod.
	 */
	nodeAffinity?: io_k8s_api_core_v1_NodeAffinity;
	/**
	 * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
	 */
	podAffinity?: io_k8s_api_core_v1_PodAffinity;
	/**
	 * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
	 */
	podAntiAffinity?: io_k8s_api_core_v1_PodAntiAffinity;
};

