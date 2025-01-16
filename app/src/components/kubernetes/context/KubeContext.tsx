import React, { createContext, useEffect, useState } from "react";
import {DefaultService} from "@/gingerJs_api_client";
import { toast } from "sonner";

export const KubeContext = createContext({});

export const KubeContextProvider = ({ children }) => {
  const [config, setConfig] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentKubeContext, setCurrentKubeContext] = useState<string>();

  const fetchconfig = async () => {
    setIsLoading(true);
    try {
      const response = await DefaultService.apiKubernertesContextGet({action:"all"});
      setConfig(response as {});
    } catch (err) {
      toast.error("Failed to fetch services");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if(Object.keys(config).length) return
    fetchconfig();
  }, [config]);

  return (
    <KubeContext.Provider
      value={{
        config,
        isLoading,
        fetchconfig,
        setCurrentKubeContext,
        currentKubeContext,
      }}
    >
      {children}
    </KubeContext.Provider>
  );
};
