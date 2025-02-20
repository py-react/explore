export const $io_k8s_api_networking_v1_NetworkPolicyPeer = {
	description: `NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed`,
	properties: {
		ipBlock: {
	type: 'io_k8s_api_networking_v1_IPBlock',
	description: `ipBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.`,
},
		namespaceSelector: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector',
	description: `namespaceSelector selects namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.

If podSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the namespaces selected by namespaceSelector. Otherwise it selects all pods in the namespaces selected by namespaceSelector.`,
},
		podSelector: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector',
	description: `podSelector is a label selector which selects pods. This field follows standard label selector semantics; if present but empty, it selects all pods.

If namespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the pods matching podSelector in the policy's own namespace.`,
},
	},
} as const;