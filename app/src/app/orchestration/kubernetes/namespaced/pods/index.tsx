import React,{ useState, useEffect, useContext } from 'react'
import { Button } from "@/components/ui/button"
import { CoreV1Service } from '@/kube/services/CoreV1Service'
import { toast } from "sonner"
import { PodTable } from '@/components/kubernetes/PodTable'
import { NamespaceContext } from '@/components/kubernetes/context/NamespaceContext'
import { NamespaceSelector } from '@/components/kubernetes/NamespaceSelector'

export default function PodsPage() {
  const {isLoading:isNamespacesLoading,selectedNamespace} = useContext(NamespaceContext)
  const [pods, setPods] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(!isNamespacesLoading && selectedNamespace){
      fetchPods()
    }
  }, [selectedNamespace,isNamespacesLoading])

  const fetchPods = async () => {
    setIsLoading(true)
    try {
      const response = await CoreV1Service.listCoreV1NamespacedPod({namespace:selectedNamespace})
      setPods(response.items as [])
    } catch (err) {
      toast.error("Failed to fetch pods")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (pod) => {
    try {
      await CoreV1Service.deleteCoreV1NamespacedPod({name:pod.metadata.name, namespace:pod.metadata.namespace})
      fetchPods()
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
    <div className='w-full'>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Pods</h1>
        <div className="flex gap-2 items-center">
          <NamespaceSelector />
          <Button>Create Pod</Button>
        </div>
      </div>
      <PodTable
        pods={pods}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}