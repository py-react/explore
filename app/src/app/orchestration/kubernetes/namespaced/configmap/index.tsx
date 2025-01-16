import React,{ useState, useEffect, useContext } from 'react'
import { Button } from "@/components/ui/button"
import {ConfigMapTable} from '@/components/kubernetes/ConfigMapTable'
import { CoreV1Service } from '@/kube/services/CoreV1Service'
import { toast } from "sonner"
import { NamespaceContext } from '@/components/kubernetes/context/NamespaceContext'
import { NamespaceSelector } from '@/components/kubernetes/NamespaceSelector'

export default function ConfigMapsPage() {
  const {isLoading:isNamespacesLoading,selectedNamespace} = useContext(NamespaceContext)

  const [configMaps, setConfigMaps] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(!isNamespacesLoading && selectedNamespace){
      fetchConfigMaps()
    }
  }, [isNamespacesLoading,selectedNamespace])

  const fetchConfigMaps = async () => {
    setIsLoading(true)
    try {
      const response = await CoreV1Service.listCoreV1NamespacedConfigMap({namespace:selectedNamespace})
      setConfigMaps(response.items as [])
    } catch (err) {
      toast.error("Failed to fetch config maps")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (configMap) => {
    try {
      await CoreV1Service.deleteCoreV1NamespacedConfigMap({name:configMap.metadata.name, namespace:configMap.metadata.namespace})
      fetchConfigMaps()
      toast.success(`ConfigMap ${configMap.metadata.name} deleted successfully`)
    } catch (err) {
      toast.error(`Failed to delete config map ${configMap.metadata.name}`)
    }
  }

  const handleEdit = (configMap) => {
    // Implement edit functionality
    console.log('Edit config map:', configMap)
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <div className='w-full'>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Config Maps</h1>
        <div className="flex gap-2 items-center">
          <NamespaceSelector />
          <Button>Create Config Map</Button>
        </div>
      </div>
      <ConfigMapTable
        configMaps={configMaps}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  )
}