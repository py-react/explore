import React from 'react';
import { ContainerCard } from './ContainerCard';
import { ContainerFilters } from './ContainerFilters';
import { useContainerFilters } from './hooks/useContainerFilters';
import type { Container } from 'src/types/container';

interface ContainerListProps {
  containers: Container[];
  showDetails:(container: Container) => void
  setContainers:React.Dispatch<React.SetStateAction<any[]>>
  editSelected: React.Dispatch<React.SetStateAction<boolean>>
}

export function ContainerList({ containers,showDetails,setContainers,editSelected }: ContainerListProps) {
  const { filteredContainers, ...filterProps } = useContainerFilters(containers);

  return (
    <div className="space-y-6">
      <ContainerFilters {...filterProps} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContainers?.map((container) => container?(
          <ContainerCard
            key={container.id}
            showDetails={showDetails}
            container={container}
            setContainers={setContainers}
            editSelected={editSelected}
          />
        ):null)}
      </div>
      
      {filteredContainers?.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No containers found matching your criteria</p>
        </div>
      )}
    </div>
  );
}