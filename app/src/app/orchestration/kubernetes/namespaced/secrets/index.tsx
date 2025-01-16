

import React,{ useState, useEffect, useContext } from 'react'
import { Button } from "@/components/ui/button"
import { CoreV1Service } from '@/kube/services/CoreV1Service'
import { toast } from "sonner"
import { NamespaceContext } from '@/components/kubernetes/context/NamespaceContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Trash2, Key, Clock, ChevronDown, ChevronUp } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import KubernetesSecretList from '@/components/kubernetes/secrets'
import { NamespaceSelector } from '@/components/kubernetes/NamespaceSelector'

interface Secret {
  metadata: {
    name: string;
    namespace: string;
    uid: string;
    creationTimestamp: string;
  };
  type: string;
  data: Record<string, string>;
}

export default function SecretsPage() {
  const {isLoading:isNamespacesLoading,selectedNamespace} = useContext(NamespaceContext)

  const [secrets, setSecrets] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(!isNamespacesLoading && selectedNamespace) {
      fetchSecrets()
    }
  }, [isNamespacesLoading,selectedNamespace])

  const fetchSecrets = async () => {
    setIsLoading(true)
    try {
      const response = await CoreV1Service.listCoreV1NamespacedSecret({namespace:selectedNamespace})
      setSecrets(response.items as [])
    } catch (err) {
      toast.error("Failed to fetch pods")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (pod) => {
    try {
      await CoreV1Service.deleteCoreV1NamespacedSecret({name:pod.metadata.name, namespace:pod.metadata.namespace})
      fetchSecrets()
      toast.success(`Pod ${pod.metadata.name} deleted successfully`)
    } catch (err) {
      toast.error(`Failed to delete pod ${pod.metadata.name}`)
    }
  }

  const handleEdit = (pod) => {
    // Implement edit functionality
    console.log('Edit pod:', pod)
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Secrets</h1>
        <div className="flex gap-2 items-center">
          <NamespaceSelector />
          <Button>Create Secret</Button>
        </div>
      </div>
      <div className="space-y-4">
        <KubernetesSecretList  items={secrets}/>
      </div>
    </div>
  )
}