import type { io_k8s_api_core_v1_ClusterTrustBundleProjection } from './io_k8s_api_core_v1_ClusterTrustBundleProjection';
import type { io_k8s_api_core_v1_ConfigMapProjection } from './io_k8s_api_core_v1_ConfigMapProjection';
import type { io_k8s_api_core_v1_DownwardAPIProjection } from './io_k8s_api_core_v1_DownwardAPIProjection';
import type { io_k8s_api_core_v1_SecretProjection } from './io_k8s_api_core_v1_SecretProjection';
import type { io_k8s_api_core_v1_ServiceAccountTokenProjection } from './io_k8s_api_core_v1_ServiceAccountTokenProjection';

/**
 * Projection that may be projected along with other supported volume types
 */
export type io_k8s_api_core_v1_VolumeProjection = {
	/**
	 * ClusterTrustBundle allows a pod to access the `.spec.trustBundle` field of ClusterTrustBundle objects in an auto-updating file.
 * 
 * Alpha, gated by the ClusterTrustBundleProjection feature gate.
 * 
 * ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector.
 * 
 * Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem.  Esoteric PEM features such as inter-block comments and block headers are stripped.  Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
	 */
	clusterTrustBundle?: io_k8s_api_core_v1_ClusterTrustBundleProjection;
	/**
	 * configMap information about the configMap data to project
	 */
	configMap?: io_k8s_api_core_v1_ConfigMapProjection;
	/**
	 * downwardAPI information about the downwardAPI data to project
	 */
	downwardAPI?: io_k8s_api_core_v1_DownwardAPIProjection;
	/**
	 * secret information about the secret data to project
	 */
	secret?: io_k8s_api_core_v1_SecretProjection;
	/**
	 * serviceAccountToken is information about the serviceAccountToken data to project
	 */
	serviceAccountToken?: io_k8s_api_core_v1_ServiceAccountTokenProjection;
};

