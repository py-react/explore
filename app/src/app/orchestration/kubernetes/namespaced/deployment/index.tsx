import React,{ useState,useContext, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { AppsV1Service} from '@/kube/services/AppsV1Service'
import { NamespaceContext } from '@/components/kubernetes/context/NamespaceContext'
import { toast } from "sonner"
import { DeploymentList } from '@/components/kubernetes/DeploymentList'
import { NamespaceSelector } from '@/components/kubernetes/NamespaceSelector'


export default function ServicesPage() {
  const {isLoading:isNamespaceLoading,selectedNamespace} = useContext(NamespaceContext)
  const [isLoading, setIsLoading] = useState(true)
  const [deployments, setDeployemnts] = useState([])
  
  // const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  useEffect(() => {
    if(!isNamespaceLoading && selectedNamespace)
      fetchDeployment()
  }, [selectedNamespace,isNamespaceLoading])

  const fetchDeployment = async () => {
    setIsLoading(true)
    try {
      const response = await AppsV1Service.listAppsV1NamespacedDeployment({namespace:selectedNamespace})
      setDeployemnts(response.items as [])
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
        <h1 className="text-2xl font-bold">Deployment</h1>
        <div className="flex gap-2 items-center">
          <NamespaceSelector />
          <Button>Create Deployment</Button>
        </div>
      </div>
      {!isLoading ? (
        <DeploymentList deployments={deployments} />
      ):<div>Loading...</div>}
    </div>
  )
}

