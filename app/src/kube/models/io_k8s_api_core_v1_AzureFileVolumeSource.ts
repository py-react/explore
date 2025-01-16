

/**
 * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
 */
export type io_k8s_api_core_v1_AzureFileVolumeSource = {
	/**
	 * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
	 */
	readOnly?: boolean;
	/**
	 * secretName is the  name of secret that contains Azure Storage Account Name and Key
	 */
	secretName: string;
	/**
	 * shareName is the azure share Name
	 */
	shareName: string;
};

