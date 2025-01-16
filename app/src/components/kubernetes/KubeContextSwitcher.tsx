import React, { useContext, useEffect, useState } from "react";
import {
  BoxesIcon,
  Check,
  ChevronDown,
  Cloud,
  IdCardIcon,
  UserIcon,
} from "lucide-react";
import type { KubernetesContext, KubernetesConfig } from "./types";
import { KubeContext } from "./context/KubeContext";
import { DefaultService } from "@/gingerJs_api_client";
import { toast } from "sonner";
import { NamespaceContext } from "./context/NamespaceContext";

export function KubeContextSwitcher() {
  const {
    isLoading: isKubeContextLoading,
    config: kubeConfig,
    setCurrentKubeContext,
  } = useContext(KubeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState<KubernetesConfig>(
    {} as KubernetesConfig
  );

  useEffect(() => {
    if (!isKubeContextLoading && kubeConfig) setConfig(kubeConfig);
  }, [kubeConfig, isKubeContextLoading]);

  const handleContextChange = async (newContext: KubernetesContext) => {
    try {
        await DefaultService.apiKubernertesContextPost({
            requestBody: { name: newContext.name },
        });
        setCurrentKubeContext(newContext.name);
      setConfig((prev) => ({
        ...prev,
        current_context: newContext,
      }));
      setIsOpen(false);
      toast.info(`Switched to context: ${newContext.name}`);
      window.location.reload()
    } catch (err) {
      toast.info(
        `Error while switching to context "${newContext.name}": ${err}`
      );
    }
  };

  return (
    <div className="relative mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-3 py-2 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors w-full"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-col text-xs text-gray-500 gap-2 truncate">
            <span
              className=" flex  items-center gap-2"
              title={config?.current_context?.context?.cluster}
            >
              <BoxesIcon className="h-3 w-3" />{" "}
              {config?.current_context?.context?.cluster}
            </span>
            <span
              className=" flex items-center gap-2"
              title={config?.current_context?.context?.user}
            >
              <UserIcon className="h-3 w-3" />{" "}
              {config?.current_context?.context?.user}
            </span>
            <span
              className=" flex items-center gap-2"
              title={config?.current_context?.context?.name}
            >
              <IdCardIcon className="h-4 w-4" />
              {config?.current_context?.name}
            </span>
          </div>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && config && (
        <div className="absolute right-0 mt-1 w-72 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-50">
          {config?.contexts?.map((context) => (
            <button
              key={context.name}
              onClick={() => handleContextChange(context)}
              className={`flex items-center gap-3 w-full px-3 py-2 text-left hover:bg-gray-50 transition-colors ${
                config.current_context.name === context.name ? "bg-blue-50" : ""
              }`}
            >
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-700 truncate">
                  {context.name}
                </div>
                <div className="flex text-xs text-gray-500 gap-1">
                  <span className="truncate" title={context.context.cluster}>
                    {context.context.cluster}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="truncate" title={context.context.user}>
                    {context.context.user}
                  </span>
                </div>
              </div>
              {config.current_context.name === context.name && (
                <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
