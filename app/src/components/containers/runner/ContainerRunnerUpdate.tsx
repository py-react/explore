import React, { useState } from 'react';
import { useForm, Controller, UseFormRegister } from 'react-hook-form';
import { Tabs } from '@/components/ui/tabs';
import { ContainerRunConfig } from './types';
import { LoaderIcon } from 'lucide-react';
import { Container } from '@/types/container';
import { formatBytesForForm } from '@/libs/utils';
import { toast } from 'sonner';
import { ResourceConfig } from './sections/ResourceConfig';

const tabs = [
    { id: 'resources', label: 'Resources' },
  ];

export const ContainerRunnerUpdate = ({
  onSubmitHandler,
  submitting,
  setSubmitting,
  data,
}: {
  data: Container;
  onSubmitHandler: (data: ContainerRunConfig) => Promise<void>;
  submitting: boolean;
  setSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [activeTab] = useState("resources");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      memory: (data.host_config.Memory|| data.stats.memory_stats.limit) ?formatBytesForForm( data.host_config.Memory|| data.stats.memory_stats.limit):"",
      cpuShares:data.host_config.CpuShares?data.host_config.CpuShares:"",
      memoryReservation:data.host_config.MemoryReservation?formatBytesForForm(data.host_config.MemoryReservation):"",
      memorySwap:data.host_config.MemorySwap?formatBytesForForm(data.host_config.MemorySwap):""
    },
  });

  const onSubmit = async(data) => {
    try {
        if(submitting)return
        setSubmitting(true);
        await onSubmitHandler(data);
        setSubmitting(false);
        // TODO: Implement actual container run API call
      } catch (error) {
        toast.error(`Failed to run container: ${error}`);
      }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Tabs tabs={tabs} activeTab={activeTab} onChange={() => {}} />
      <ResourceConfig register={register} errors={errors} />;

      <div className="flex justify-end pt-4 border-t">
        <button
          disabled={submitting}
          type="submit"
          className={`px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 
                   focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex justify-between items-center ${
                     submitting ? "pointer-events-none" : "pointer-events-auto"
                   }`}
        >
          {submitting ? (
            <LoaderIcon className="w-4 h-4 mr-2" />
          ) : (
            null
          )}
          Update
        </button>
      </div>
    </form>
  );
};

