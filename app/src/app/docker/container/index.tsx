import React, { useEffect, useState } from "react";
import { ContainerDetails } from "@/components/containers/ContainerDetails";
import { useContainerDetails } from "@/components/containers/hooks/useContainerDetails";
import { ContainerList } from "@/components/containers/ContainerList";
import useAutoRefresh from "@/components/containers/hooks/useAutoRefresh";
import { Loader, Plus } from "lucide-react";
import { ContainerRunnerModal } from "@/components/containers/runner/ContainerRunnerModal";
import { ContainerRunConfig } from "@/components/containers/runner/types";
import { toast } from "sonner";
import { ContainerRunnerUpdateModal } from "@/components/containers/runner/ContainerRunnerUpdateModal";
import { Container } from "@/types/container";
import { DefaultService } from "@/gingerJs_api_client";

const fetchData = async () => {
  // Simulating an API call
  return new Promise(async (resolve) => {
    const containersResponse = await DefaultService.apiContainersGet()
    resolve(containersResponse.containers);
  });
};

function ContainerListPage({ containers: listItems }:{containers:Container[]}) {
  const [showRunnerModal, setShowRunnerModal] = useState(false);

  const {
    selectedContainer,
    showDetails,
    hideDetails,
    editSelected,
    editing: editingContainer,
  } = useContainerDetails();
  const [containers, setContainers] = useState<Container[]>(listItems||[]);
  // const { data, isFetching, error } = useAutoRefresh(fetchData, 1500) ;

  useEffect(()=>{
    if(!listItems)return
    setContainers(listItems)
  },[listItems])

  // useEffect(() => {
  //   if (data) {
  //     setContainers(data as Container[]);
  //     if (selectedContainer) {
  //       const newSelectedContainerData = (data as Container[]).find(
  //         (item) => item.id === selectedContainer.id
  //       );
  //       if (newSelectedContainerData) {
  //         showDetails(newSelectedContainerData);
  //       }
  //     }
  //   }
  // }, [data]);

  return (
    <div key="instances">
      <div className="mb-2 flex items-center w-full gap-2 h-4 text-sm">
        {false && (
          <>
            <Loader className="w-3.5 h-3.5" />
            <span>Refreshing</span>
          </>
        )}
      </div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Containers</h1>
        <div className="mb-2 flex justify-start">
          <button
            type="button"
            onClick={() => setShowRunnerModal(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent 
                          text-sm font-medium rounded-md text-white bg-gray-600 
                          hover:bg-gray-700 focus:outline-none focus:ring-2 
                          focus:ring-offset-2 focus:ring-gray-500"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Conatiner
          </button>
        </div>
        <ContainerList
          showDetails={showDetails}
          containers={containers}
          setContainers={setContainers}
          editSelected={editSelected}
        />
      </div>
      {selectedContainer && !editingContainer && (
        <ContainerDetails
          // @ts-ignore
          container={selectedContainer}
          onClose={hideDetails}
          showDetails={showDetails}
          setContainers={setContainers}
          editSelected={editSelected}
        />
      )}

      <ContainerRunnerModal
        open={showRunnerModal}
        onClose={() => setShowRunnerModal(false)}
        onSubmit={async (data: ContainerRunConfig) => {
          const reasponse = await fetch("/api/containers", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              action: "run",
              instanceConfig: data,
            }),
          });

          const responseData = await reasponse.json();
          if (responseData.error) {
            toast.error(responseData.message);
            return;
          }
          setShowRunnerModal(false);
          toast.success(responseData.message);
          setContainers((prev) => {
            showDetails(responseData.container);
            return [responseData.container, ...prev];
          });
        }}
      />
      {selectedContainer && (
        <ContainerRunnerUpdateModal
          open={editingContainer}
          data={selectedContainer}
          onClose={() => editSelected(false)}
          onSubmit={async (data: ContainerRunConfig) => {
            const reasponse = await fetch("/api/containers", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                action: "update",
                containerId: selectedContainer.id,
                updateInstanceConfig: data,
              }),
            });

            const responseData = await reasponse.json();
            if (responseData.error) {
              toast.error(responseData.message);
              return;
            }
            setShowRunnerModal(false);
            toast.success(responseData.message);
            setContainers((prev) => {
              showDetails(responseData.container);
              editSelected(false);
              return [responseData.container, ...prev];
            });
          }}
        />
      )}
    </div>
  );
}

export default ContainerListPage;
