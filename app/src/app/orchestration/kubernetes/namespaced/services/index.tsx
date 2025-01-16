import React,{ useState, useEffect,useContext } from 'react'
import { Button } from "@/components/ui/button"
import { CoreV1Service } from '@/kube/services/CoreV1Service'
import { toast } from "sonner"
import { NamespaceContext } from '@/components/kubernetes/context/NamespaceContext'
import { ServiceList } from '@/components/kubernetes/SerivceList'
import { NamespaceSelector } from '@/components/kubernetes/NamespaceSelector'


export default function ServicesPage() {
  const {isLoading:isNamespacesLoading,selectedNamespace} = useContext(NamespaceContext)

  const [services, setServices] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(!isNamespacesLoading && selectedNamespace)
    fetchServices()
  }, [selectedNamespace,isNamespacesLoading])

  const fetchServices = async () => {
    setIsLoading(true)
    try {
      const response = await CoreV1Service.listCoreV1NamespacedService({namespace:selectedNamespace})
      setServices(response.items as [])
    } catch (err) {
      toast.error("Failed to fetch services")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (service) => {
    try {
      await CoreV1Service.deleteCoreV1NamespacedService({name:service.metadata.name, namespace:service.metadata.namespace})
      fetchServices()
      toast.success(`Service ${service.metadata.name} deleted successfully`)
    } catch (err) {
      toast.error(`Failed to delete service ${service.metadata.name}`)
    }
  }

  const handleEdit = (service) => {
    // Implement edit functionality
    console.log('Edit service:', service)
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Services</h1>
        <div className="flex gap-2 items-center">
          <NamespaceSelector />
          <Button>Create Service</Button>
        </div>
      </div>
      <ServiceList  services={services}/>
    </div>
  )
}

