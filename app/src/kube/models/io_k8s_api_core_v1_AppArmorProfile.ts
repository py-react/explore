

/**
 * AppArmorProfile defines a pod or container's AppArmor settings.
 */
export type io_k8s_api_core_v1_AppArmorProfile = {
	/**
	 * localhostProfile indicates a profile loaded on the node that should be used. The profile must be preconfigured on the node to work. Must match the loaded name of the profile. Must be set if and only if type is "Localhost".
	 */
	localhostProfile?: string;
	/**
	 * type indicates which kind of AppArmor profile will be applied. Valid options are:
 * Localhost - a profile pre-loaded on the node.
 * RuntimeDefault - the container runtime's default profile.
 * Unconfined - no AppArmor enforcement.
 * 
 * Possible enum values:
 * - `"Localhost"` indicates that a profile pre-loaded on the node should be used.
 * - `"RuntimeDefault"` indicates that the container runtime's default AppArmor profile should be used.
 * - `"Unconfined"` indicates that no AppArmor profile should be enforced.
	 */
	type: 'Localhost' | 'RuntimeDefault' | 'Unconfined';
};


