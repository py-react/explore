export const $io_k8s_api_core_v1_VolumeProjection = {
	description: `Projection that may be projected along with other supported volume types`,
	properties: {
		clusterTrustBundle: {
	type: 'io_k8s_api_core_v1_ClusterTrustBundleProjection',
	description: `ClusterTrustBundle allows a pod to access the \`.spec.trustBundle\` field of ClusterTrustBundle objects in an auto-updating file.

Alpha, gated by the ClusterTrustBundleProjection feature gate.

ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector.

Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem.  Esoteric PEM features such as inter-block comments and block headers are stripped.  Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.`,
},
		configMap: {
	type: 'io_k8s_api_core_v1_ConfigMapProjection',
	description: `configMap information about the configMap data to project`,
},
		downwardAPI: {
	type: 'io_k8s_api_core_v1_DownwardAPIProjection',
	description: `downwardAPI information about the downwardAPI data to project`,
},
		secret: {
	type: 'io_k8s_api_core_v1_SecretProjection',
	description: `secret information about the secret data to project`,
},
		serviceAccountToken: {
	type: 'io_k8s_api_core_v1_ServiceAccountTokenProjection',
	description: `serviceAccountToken is information about the serviceAccountToken data to project`,
},
	},
} as const;