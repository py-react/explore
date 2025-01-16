

/**
 * ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node. This API is deprecated since 1.22: https://git.k8s.io/enhancements/keps/sig-node/281-dynamic-kubelet-configuration
 */
export type io_k8s_api_core_v1_ConfigMapNodeConfigSource = {
	/**
	 * KubeletConfigKey declares which key of the referenced ConfigMap corresponds to the KubeletConfiguration structure This field is required in all cases.
	 */
	kubeletConfigKey: string;
	/**
	 * Name is the metadata.name of the referenced ConfigMap. This field is required in all cases.
	 */
	name: string;
	/**
	 * Namespace is the metadata.namespace of the referenced ConfigMap. This field is required in all cases.
	 */
	namespace: string;
	/**
	 * ResourceVersion is the metadata.ResourceVersion of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
	 */
	resourceVersion?: string;
	/**
	 * UID is the metadata.UID of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
	 */
	uid?: string;
};

