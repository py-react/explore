import React, { createContext, useEffect, useState } from "react";
import { CoreV1Service } from "@/kube/services/CoreV1Service";
import { toast } from "sonner";

export const NamespaceContext = createContext({});

export const NamespaceContextProvider = ({ children }) => {
  const [namespaces, setNamespaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedNamespace, setSelectedNamespace] = useState<string>("default");

  const fetchNamespaces = async () => {
    setIsLoading(true);
    try {
      const response = await CoreV1Service.listCoreV1Namespace();
      setNamespaces(response.items as []);
    } catch (err) {
      toast.error("Failed to fetch services");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if(namespaces.length) return
    fetchNamespaces();
  }, [namespaces]);

  return (
    <NamespaceContext.Provider
      value={{
        namespaces,
        isLoading,
        fetchNamespaces,
        setSelectedNamespace,
        selectedNamespace,
      }}
    >
      {children}
    </NamespaceContext.Provider>
  );
};
