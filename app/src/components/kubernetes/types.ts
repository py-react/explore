export interface KubernetesContext {
    context: {
      cluster: string;
      user: string;
    };
    name: string;
  }
  
  export interface KubernetesConfig {
    contexts: KubernetesContext[];
    current_context: KubernetesContext;
  }