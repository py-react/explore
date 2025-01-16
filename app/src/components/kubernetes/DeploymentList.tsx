import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { Deployment } from '../types/kubernetes';
import SmartDataViewer from '@/components/queues/queueJob/SmartDataViewer';

interface DeploymentListProps {
  deployments: Deployment[];
}

export function DeploymentList({ deployments }: DeploymentListProps) {
  const [expandedDeployment, setExpandedDeployment] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {deployments.map((deployment) => (
        <div key={deployment.metadata.uid} className="border border-gray-200 rounded-lg">
          <div
            className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
            onClick={() => setExpandedDeployment(
              expandedDeployment === deployment.metadata.name ? null : deployment.metadata.name
            )}
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">{deployment.metadata.name}</h3>
              <p className="text-sm text-gray-500">Namespace: {deployment.metadata.namespace}</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {Object.entries(deployment.metadata.labels||{}).map(([key, value]) => (
                  <span
                    key={key}
                    className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs"
                  >
                    {key}: {value}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div>
                <span className="font-medium">Replicas: </span>
                {deployment.status.readyReplicas}/{deployment.spec.replicas}
              </div>
              <div>
                <span className="font-medium">Strategy: </span>
                {deployment.spec.strategy.type}
              </div>
              {expandedDeployment === deployment.metadata.name ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </div>
          </div>
          
          {expandedDeployment === deployment.metadata.name && (
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Selector</h4>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(deployment.spec.selector.matchLabels).map(([key, value]) => (
                      <span
                        key={key}
                        className="px-2 py-1 bg-green-100 text-green-800 rounded-md text-sm"
                      >
                        {key}: {value}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Annotations</h4>
                  <div className="bg-white rounded-md p-3 text-sm">
                    {Object.entries(deployment.metadata.annotations).map(([key, value]) => (
                      <div key={key} className="flex flex-wrap gap-2 mb-1">
                        {key.endsWith("last-applied-configuration")?(
                            <>
                                <span className="font-medium">{key}:</span>
                                <SmartDataViewer data={JSON.parse(value)}  />
                            </>
                        ):
                        (<>
                                <span className="font-medium">{key}:</span>
                                <span>{value}</span>
                        </>)
                        }
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Containers</h4>
                  <div className="space-y-3">
                    {deployment.spec.template.spec.containers.map((container) => (
                      <div
                        key={container.name}
                        className="bg-white p-4 rounded-md border border-gray-200"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <p className="font-medium text-gray-900">{container.name}</p>
                            <p className="text-sm text-gray-600">{container.image}</p>
                          </div>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {container.imagePullPolicy}
                          </span>
                        </div>

                        {container.args && container.args.length > 0 && (
                          <div className="mb-3">
                            <p className="text-sm font-medium text-gray-700 mb-1">Arguments</p>
                            <div className="bg-gray-50 p-2 rounded text-sm font-mono">
                              {container.args.map((arg, index) => (
                                <div key={index} className="text-gray-600">{arg}</div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {container.ports && container.ports.length > 0 && (
                          <div className="mb-3">
                            <p className="text-sm font-medium text-gray-700 mb-1">Ports</p>
                            <div className="flex flex-wrap gap-2">
                              {container.ports.map((port) => (
                                <span
                                  key={`${port.containerPort}-${port.protocol}`}
                                  className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm"
                                >
                                  {port.name && `${port.name}: `}{port.containerPort}/{port.protocol}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {container.env && container.env.length > 0 && (
                          <div>
                            <details className="text-sm">
                              <summary className="cursor-pointer text-gray-700 font-medium">
                                Environment Variables
                              </summary>
                              <div className="mt-2 space-y-2">
                                {container.env.map((env) => (
                                  <div key={env.name} className="bg-gray-50 p-2 rounded">
                                    <span className="font-medium">{env.name}: </span>
                                    {env.value ? (
                                      <span>{env.value}</span>
                                    ) : env.valueFrom?.fieldRef ? (
                                      <span className="text-purple-600">
                                        {env.valueFrom.fieldRef.fieldPath}
                                      </span>
                                    ) : null}
                                  </div>
                                ))}
                              </div>
                            </details>
                          </div>
                        )}

                        {container.livenessProbe && (
                          <div className="mt-3">
                            <details className="text-sm">
                              <summary className="cursor-pointer text-gray-700 font-medium">
                                Liveness Probe
                              </summary>
                              <div className="mt-2 bg-gray-50 p-2 rounded space-y-1">
                                <div>Path: {container.livenessProbe.httpGet?.path}</div>
                                <div>Port: {container.livenessProbe.httpGet?.port}</div>
                                <div>Initial Delay: {container.livenessProbe.initialDelaySeconds}s</div>
                                <div>Period: {container.livenessProbe.periodSeconds}s</div>
                              </div>
                            </details>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Status</h4>
                  <div className="space-y-2">
                    {deployment.status.conditions.map((condition) => (
                      <div
                        key={condition.type}
                        className="bg-white p-3 rounded-md border border-gray-200"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{condition.type}</span>
                          <span
                            className={`px-2 py-1 rounded-md text-sm ${
                              condition.status === 'True'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {condition.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{condition.message}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Last updated: {new Date(condition.lastUpdateTime).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}