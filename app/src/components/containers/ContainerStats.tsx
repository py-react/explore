import React from 'react';
import { Cpu, HardDrive, Network, Gauge } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

import { cn } from 'src/libs/utils';

interface StatCardProps {
    icon: LucideIcon;
    label: string;
    value: string;
    subValue?: string;
    className?: string;
  }

interface ContainerStatsProps {
  stats: {
    cpu: string;
    memory: string;
    diskIoStats: {
      read: string;
      write: string;
    };
    networkIoStats: {
      rx: string;
      tx: string;
    };
  };
}

export function ContainerStats({ stats }: ContainerStatsProps) {
  // Parse memory values
  const [used, total] = stats.memory.split('/').map(s => s.trim());
  const memoryPercentage = ((parseFloat(used) / parseFloat(total)) * 100).toFixed(1);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        icon={Cpu}
        label="CPU Usage"
        value={stats.cpu}
      />
      
      <StatCard
        icon={Gauge}
        label="Memory Usage"
        value={used}
        subValue={`${memoryPercentage}% of ${total}`}
      />
      
      <StatCard
        icon={HardDrive}
        label="Disk I/O"
        value={`↑ ${stats.diskIoStats.write}`}
        subValue={`↓ ${stats.diskIoStats.read}`}
      />
      
      <StatCard
        icon={Network}
        label="Network I/O"
        value={`↑ ${stats.networkIoStats.tx}`}
        subValue={`↓ ${stats.networkIoStats.rx}`}
      />
    </div>
  );
}

export function StatCard({ icon: Icon, label, value, subValue, className }: StatCardProps) {
    return (
      <div className={cn(
        "bg-white rounded-lg p-4 flex items-start gap-3",
        "border border-gray-100 shadow-sm",
        className
      )}>
        <div className="p-2 bg-gray-50 rounded-lg">
          <Icon className="w-4 h-4 text-gray-500" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <p className="text-lg font-semibold text-gray-900">{value}</p>
          {subValue && (
            <p className="text-sm text-gray-500">{subValue}</p>
          )}
        </div>
      </div>
    );
  }