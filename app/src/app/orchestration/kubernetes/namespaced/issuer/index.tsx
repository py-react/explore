import React,{ useState, useEffect, useContext } from 'react'
import { Button } from "@/components/ui/button"

import { CertManagerIoV1Service} from '@/kube/services/CertManagerIoV1Service'
import { toast } from "sonner"
import KubernetesIssuerList from '@/components/kubernetes/issuer'
import { NamespaceContext } from '@/components/kubernetes/context/NamespaceContext'
import { NamespaceSelector } from '@/components/kubernetes/NamespaceSelector'


export default function IngressPage() {
  const {isLoading:isNamespaceLoading,selectedNamespace} = useContext(NamespaceContext)

  const [isLoading, setIsLoading] = useState(true)
  const [issuer, setIssuer] = useState([])

  useEffect(() => {
    if(!isNamespaceLoading && selectedNamespace)
    fetchIssuer()
  }, [isNamespaceLoading,selectedNamespace])

  const fetchIssuer = async () => {
    setIsLoading(true)
    try {
      const response = await CertManagerIoV1Service.listCertManagerIoV1NamespacedIssuer({namespace: selectedNamespace})
      setIssuer(response.items as [])
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
        <h1 className="text-2xl font-bold">Issuer</h1>
        <div className="flex gap-2 items-center">
          <NamespaceSelector />
          <Button>Create Issuer</Button>
        </div>
      </div>
      {!isLoading ? (
        <KubernetesIssuerList items={issuer} />
      ):<div>Loading...</div>}
    </div>
  )
}

