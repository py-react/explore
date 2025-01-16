import React from 'react';
import { X } from 'lucide-react';
import { CreateStorageForm } from './CreateStorageForm';
import { CreateStorageParams } from '@/types/storage';

interface CreateStorageModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data:CreateStorageParams) => Promise<void>;
}

export function CreateStorageModal({ open, onClose,onSubmit }: CreateStorageModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Create Volume</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <CreateStorageForm onClose={onClose} onSubmitHandler={onSubmit} />
        </div>
      </div>
    </div>
  );
}