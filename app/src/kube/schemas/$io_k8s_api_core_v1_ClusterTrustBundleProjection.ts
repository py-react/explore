export const $io_k8s_api_core_v1_ClusterTrustBundleProjection = {
	description: `ClusterTrustBundleProjection describes how to select a set of ClusterTrustBundle objects and project their contents into the pod filesystem.`,
	properties: {
		labelSelector: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector',
	description: `Select all ClusterTrustBundles that match this label selector.  Only has effect if signerName is set.  Mutually-exclusive with name.  If unset, interpreted as "match nothing".  If set but empty, interpreted as "match everything".`,
},
		name: {
	type: 'string',
	description: `Select a single ClusterTrustBundle by object name.  Mutually-exclusive with signerName and labelSelector.`,
},
		optional: {
	type: 'boolean',
	description: `If true, don't block pod startup if the referenced ClusterTrustBundle(s) aren't available.  If using name, then the named ClusterTrustBundle is allowed not to exist.  If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles.`,
},
		path: {
	type: 'string',
	description: `Relative path from the volume root to write the bundle.`,
	isRequired: true,
},
		signerName: {
	type: 'string',
	description: `Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name.  The contents of all selected ClusterTrustBundles will be unified and deduplicated.`,
},
	},
} as const;