export const $io_k8s_api_core_v1_WindowsSecurityContextOptions = {
	description: `WindowsSecurityContextOptions contain Windows-specific options and credentials.`,
	properties: {
		gmsaCredentialSpec: {
	type: 'string',
	description: `GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.`,
},
		gmsaCredentialSpecName: {
	type: 'string',
	description: `GMSACredentialSpecName is the name of the GMSA credential spec to use.`,
},
		hostProcess: {
	type: 'boolean',
	description: `HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.`,
},
		runAsUserName: {
	type: 'string',
	description: `The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.`,
},
	},
} as const;