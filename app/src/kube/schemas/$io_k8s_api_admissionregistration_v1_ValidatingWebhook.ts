export const $io_k8s_api_admissionregistration_v1_ValidatingWebhook = {
	description: `ValidatingWebhook describes an admission webhook and the resources and operations it applies to.`,
	properties: {
		admissionReviewVersions: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
		clientConfig: {
	type: 'io_k8s_api_admissionregistration_v1_WebhookClientConfig',
	description: `ClientConfig defines how to communicate with the hook. Required`,
	isRequired: true,
},
		failurePolicy: {
	type: 'Enum',
},
		matchConditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_admissionregistration_v1_MatchCondition',
	},
},
		matchPolicy: {
	type: 'Enum',
},
		name: {
	type: 'string',
	description: `The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.`,
	isRequired: true,
},
		namespaceSelector: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector',
	description: `NamespaceSelector decides whether to run the webhook on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the webhook.

For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {
  "matchExpressions": [
    {
      "key": "runlevel",
      "operator": "NotIn",
      "values": [
        "0",
        "1"
      ]
    }
  ]
}

If instead you want to only run the webhook on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {
  "matchExpressions": [
    {
      "key": "environment",
      "operator": "In",
      "values": [
        "prod",
        "staging"
      ]
    }
  ]
}

See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels for more examples of label selectors.

Default to the empty LabelSelector, which matches everything.`,
},
		objectSelector: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector',
	description: `ObjectSelector decides whether to run the webhook based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the webhook, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.`,
},
		rules: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_admissionregistration_v1_RuleWithOperations',
	},
},
		sideEffects: {
	type: 'Enum',
	isRequired: true,
},
		timeoutSeconds: {
	type: 'number',
	description: `TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.`,
	format: 'int32',
},
	},
} as const;