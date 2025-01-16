import React,{ useState,useContext, useEffect } from 'react'
import { Button } from "@/components/ui/button"

import { NetworkingV1Service} from '@/kube/services/NetworkingV1Service'
import { NamespaceContext } from '@/components/kubernetes/context/NamespaceContext'
import { toast } from "sonner"
import { DeploymentList } from '@/components/kubernetes/DeploymentList'
import KubernetesIngressList from '@/components/kubernetes/Ingress'
import { NamespaceSelector } from '@/components/kubernetes/NamespaceSelector'


export default function IngressPage() {
  const {isLoading:isNamespaceLoading,selectedNamespace} = useContext(NamespaceContext)
  const [isLoading, setIsLoading] = useState(true)
  const [ingress, setIngress] = useState([])
  
  // const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  useEffect(() => {
    if(!isNamespaceLoading && selectedNamespace)
      fetchIngress()
  }, [selectedNamespace,isNamespaceLoading])

  const fetchIngress = async () => {
    setIsLoading(true)
    try {
      const response = await NetworkingV1Service.listNetworkingV1NamespacedIngress({namespace:selectedNamespace})
      setIngress(response.items as [])
    } catch (err) {
      toast.error("Failed to fetch services")
    } finally {
      setIsLoading(false)
    }
  }


  // const handleDelete = async (namespace) => {
  //   try {
  //     await AppsV1Service.delete({name:namespace.metadata.namespace})
  //     toast.success(`Service ${namespace.metadata.name} deleted successfully`)
  //   } catch (err) {
  //     toast.error(`Failed to delete service ${namespace.metadata.name}`)
  //   }
  // }

  // const handleEdit = (service) => {
  //   // Implement edit functionality
  //   console.log('Edit service:', service)
  // }
  // const handleCreate = async (newNamespace) => {
  //   try {
  //     await CoreV1Service.createCoreV1Namespace(newNamespace)
  //     setIsCreateModalOpen(false)
  //     toast.success(`Namespace ${newNamespace.metadata.name} created successfully`)
  //   } catch (err) {
  //     toast.error(`Failed to create namespace ${newNamespace.metadata.name}`)
  //   }
  // }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Ingress</h1>
        <div className="flex gap-2 items-center">
          <NamespaceSelector />
          <Button>Create Ingress</Button>
        </div>
      </div>
      {!isLoading ? (
        <KubernetesIngressList ingressList={ingress} />
      ):<div>Loading...</div>}
    </div>
  )
}

