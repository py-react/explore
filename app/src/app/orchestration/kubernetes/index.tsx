import React, { useEffect, useState } from 'react'
import KubernetesNodesList from '@/components/kubernetes/NodesInfo'
import { CoreV1Service} from '@/kube/services/CoreV1Service'
import { toast } from "sonner"

import { io_k8s_api_core_v1_Node } from '@/kube'

type Node = io_k8s_api_core_v1_Node


function Kubernetes() {
  const [isLoading, setIsLoading] = useState(true)
  const [nodes, setNodes] = useState<Node[]>([])


  useEffect(() => {
      fetchNodes()
  },[])

  const fetchNodes = async () => {
    setIsLoading(true)
    try {
      const response = await CoreV1Service.listCoreV1Node()
      setNodes(response.items as [])
    } catch (err) {
      toast.error("Failed to fetch services")
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Nodes</h1>
      </div>
      {!isLoading ? (
        <KubernetesNodesList items={nodes} />
      ):<div>Loading...</div>}
    </div>
  )
}

export default Kubernetes

