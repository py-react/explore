import React from 'react';
import { Network } from 'lucide-react';
import type { ContainerPorts } from 'src/types/container';

interface ContainerPortsProps {
  ports: ContainerPorts;
  testSize?:string
}

export function ContainerPorts({ ports,testSize="text-sm" }: ContainerPortsProps) {
  const portMappings = Object.entries(ports||{});

  if (portMappings.length === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      <div className={`flex items-center gap-2 ${testSize} text-gray-600`}>
        <Network className={`${testSize === "text-sm"?"w-4 h-4":"w-6 h-6"}`} />
        <span>Port Mappings</span>
      </div>
      <div className={`${testSize==="text-sm"?"":"my-1 px-2"}`}>
        {portMappings.map(([containerPort, hostPorts]) => (
          <div key={containerPort} className={`${testSize} text-gray-500`}>
            {containerPort||"Not bound"} → {hostPorts?.map(p => p.HostPort).join(', ')||"Not bound"}
          </div>
        ))}
      </div>
    </div>
  );
}