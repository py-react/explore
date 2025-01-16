import type { CreateQueueJob } from '../models/CreateQueueJob';
import type { Get_Packages_Response } from '../models/Get_Packages_Response';
import type { GetContainerResponse } from '../models/GetContainerResponse';
import type { InfraCreateUpdateRequest } from '../models/InfraCreateUpdateRequest';
import type { InfraDeleteResponse } from '../models/InfraDeleteResponse';
import type { InfraPostResponse } from '../models/InfraPostResponse';
import type { InfraPutResponse } from '../models/InfraPutResponse';
import type { KubernetesContext } from '../models/KubernetesContext';
import type { nodes___node_id___NodeSpec } from '../models/nodes___node_id___NodeSpec';
import type { RunContainer } from '../models/RunContainer';
import type { RunImage } from '../models/RunImage';
import type { RunQueue } from '../models/RunQueue';
import type { ServiceCreationSpec } from '../models/ServiceCreationSpec';
import type { StopQueue } from '../models/StopQueue';
import type { SwarmInitParams } from '../models/SwarmInitParams';
import type { SwarmJoinParams } from '../models/SwarmJoinParams';
import type { SwarmUpdateSpec } from '../models/SwarmUpdateSpec';
import type { SystemInfo } from '../models/SystemInfo';
import type { VolumeActionRequest } from '../models/VolumeActionRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export type TDataApiPackgesPost = {
                requestBody: RunImage
            }
export type TDataApiSwarmInitPost = {
                requestBody: SwarmInitParams
            }
export type TDataApiSwarmJoinPost = {
                requestBody: SwarmJoinParams
            }
export type TDataApiSwarmUpdatePut = {
                requestBody: SwarmUpdateSpec
            }
export type TDataApiSwarmNodesNodeIdGet = {
                nodeId: string
            }
export type TDataApiSwarmNodesNodeIdPut = {
                nodeId: string
requestBody: nodes___node_id___NodeSpec
            }
export type TDataApiSwarmServicesGet = {
                filters?: unknown
            }
export type TDataApiSwarmServicesServiceIdGet = {
                serviceId: string
            }
export type TDataApiSwarmServicesCreatePost = {
                requestBody: ServiceCreationSpec
            }
export type TDataApiStoragesPost = {
                requestBody: VolumeActionRequest
            }
export type TDataApiInfraGet = {
                category: string
project?: string
searchTerm?: string
subCategory: string
            }
export type TDataApiInfraPost = {
                requestBody: InfraCreateUpdateRequest
            }
export type TDataApiInfraPut = {
                requestBody: InfraCreateUpdateRequest
            }
export type TDataApiInfraDelete = {
                category: string
fileName: string
project: string
subCategory: string
            }
export type TDataApiKubernertesContextGet = {
                action: 'all' | 'current'
            }
export type TDataApiKubernertesContextPost = {
                requestBody: KubernetesContext
            }
export type TDataApiQueuePost = {
                requestBody: RunQueue
            }
export type TDataApiQueueDelete = {
                requestBody: StopQueue
            }
export type TDataApiContainersPost = {
                requestBody: RunContainer
            }
export type TDataApiSystemsPost = {
                requestBody: SystemInfo
            }
export type TDataApiQueueJobPost = {
                requestBody: CreateQueueJob
            }
export type TDataProxyApiDockerPathGet = {
                path: string
            }
export type TDataProxyKubeApiKubePathPost = {
                path: string
            }
export type TDataProxyKubeApiKubePathPost1 = {
                path: string
            }
export type TDataProxyKubeApiKubePathPost2 = {
                path: string
            }
export type TDataProxyKubeApiKubePathPost3 = {
                path: string
            }

export class DefaultService {

	/**
	 * @returns Get_Packages_Response Successful Response
	 * @throws ApiError
	 */
	public static apiPackgesGet(): CancelablePromise<Get_Packages_Response> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/packges',
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiPackgesPost(data: TDataApiPackgesPost): CancelablePromise<unknown> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/packges',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiSwarmInitPost(data: TDataApiSwarmInitPost): CancelablePromise<unknown> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/swarm/init',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiSwarmJoinPost(data: TDataApiSwarmJoinPost): CancelablePromise<unknown> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/swarm/join',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiSwarmUpdatePut(data: TDataApiSwarmUpdatePut): CancelablePromise<unknown> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/swarm/update',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiSwarmUnlockKeyGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/swarm/unlock_key',
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiSwarmNodesNodeIdGet(data: TDataApiSwarmNodesNodeIdGet): CancelablePromise<unknown> {
		const {
nodeId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/swarm/nodes/{node_id}',
			path: {
				node_id: nodeId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiSwarmNodesNodeIdPut(data: TDataApiSwarmNodesNodeIdPut): CancelablePromise<unknown> {
		const {
nodeId,
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/swarm/nodes/{node_id}',
			path: {
				node_id: nodeId
			},
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiSwarmServicesGet(data: TDataApiSwarmServicesGet = {}): CancelablePromise<unknown> {
		const {
filters,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/swarm/services',
			query: {
				filters
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiSwarmServicesServiceIdGet(data: TDataApiSwarmServicesServiceIdGet): CancelablePromise<unknown> {
		const {
serviceId,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/swarm/services/{service_id}',
			path: {
				service_id: serviceId
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiSwarmServicesCreatePost(data: TDataApiSwarmServicesCreatePost): CancelablePromise<unknown> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/swarm/services/create',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiStoragesGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/storages',
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiStoragesPost(data: TDataApiStoragesPost): CancelablePromise<unknown> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/storages',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiInfraGet(data: TDataApiInfraGet): CancelablePromise<unknown> {
		const {
category,
project,
searchTerm,
subCategory,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/infra',
			query: {
				category, sub_category: subCategory, project, search_term: searchTerm
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns InfraPostResponse Successful Response
	 * @throws ApiError
	 */
	public static apiInfraPost(data: TDataApiInfraPost): CancelablePromise<InfraPostResponse> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/infra',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns InfraPutResponse Successful Response
	 * @throws ApiError
	 */
	public static apiInfraPut(data: TDataApiInfraPut): CancelablePromise<InfraPutResponse> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/infra',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns InfraDeleteResponse Successful Response
	 * @throws ApiError
	 */
	public static apiInfraDelete(data: TDataApiInfraDelete): CancelablePromise<InfraDeleteResponse> {
		const {
category,
fileName,
project,
subCategory,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/infra',
			query: {
				category, sub_category: subCategory, project, file_name: fileName
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Retrieve all Kubernetes contexts.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiKubernertesContextGet(data: TDataApiKubernertesContextGet): CancelablePromise<unknown> {
		const {
action,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/kubernertes/context',
			query: {
				action
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Set a new Kubernetes context.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiKubernertesContextPost(data: TDataApiKubernertesContextPost): CancelablePromise<unknown> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/kubernertes/context',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiQueueGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/queue',
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiQueuePut(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/queue',
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiQueuePost(data: TDataApiQueuePost): CancelablePromise<unknown> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/queue',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiQueueDelete(data: TDataApiQueueDelete): CancelablePromise<unknown> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/queue',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns GetContainerResponse Successful Response
	 * @throws ApiError
	 */
	public static apiContainersGet(): CancelablePromise<GetContainerResponse> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/containers',
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiContainersPost(data: TDataApiContainersPost): CancelablePromise<unknown> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/containers',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiSystemsPost(data: TDataApiSystemsPost): CancelablePromise<unknown> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/systems',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiQueueJobGet(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/queueJob',
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiQueueJobPut(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/queueJob',
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiQueueJobPost(data: TDataApiQueueJobPost): CancelablePromise<unknown> {
		const {
requestBody,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/queueJob',
			body: requestBody,
			mediaType: 'application/json',
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static apiQueueJobDelete(): CancelablePromise<unknown> {
				return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/queueJob',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static get(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static infraGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/infra',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static infraManagerGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/infra/manager',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static dockerGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/docker',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static dockerStoragesGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/docker/storages',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static dockerContainerGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/docker/container',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static dockerPackagesGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/docker/packages',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static dockerHubGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/docker/hub',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static orchestrationGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/orchestration',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static orchestrationSwarmsGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/orchestration/swarms',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static orchestrationKubernetesGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/orchestration/kubernetes',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static orchestrationKubernetesNamespacedGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/orchestration/kubernetes/namespaced',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static orchestrationKubernetesNamespacedCertificateGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/orchestration/kubernetes/namespaced/certificate',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static orchestrationKubernetesNamespacedIngressGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/orchestration/kubernetes/namespaced/ingress',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static orchestrationKubernetesNamespacedSecretsGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/orchestration/kubernetes/namespaced/secrets',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static orchestrationKubernetesNamespacedNamespaceGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/orchestration/kubernetes/namespaced/namespace',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static orchestrationKubernetesNamespacedPodsGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/orchestration/kubernetes/namespaced/pods',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static orchestrationKubernetesNamespacedDeploymentGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/orchestration/kubernetes/namespaced/deployment',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static orchestrationKubernetesNamespacedConfigmapGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/orchestration/kubernetes/namespaced/configmap',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static orchestrationKubernetesNamespacedServicesGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/orchestration/kubernetes/namespaced/services',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static orchestrationKubernetesNamespacedIssuerGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/orchestration/kubernetes/namespaced/issuer',
		});
	}

	/**
	 * @returns string Successful Response
	 * @throws ApiError
	 */
	public static queuesGet(): CancelablePromise<string> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/queues',
		});
	}

	/**
	 * Proxy
	 * Proxy the GET request to Docker Hub registry without modifying the headers or body.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static proxyApiDockerPathGet(data: TDataProxyApiDockerPathGet): CancelablePromise<unknown> {
		const {
path,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/docker/{path}',
			path: {
				path
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Proxy Kube
	 * Proxy the GET request to Docker Hub registry without modifying the headers or body.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static proxyKubeApiKubePathPost(data: TDataProxyKubeApiKubePathPost): CancelablePromise<unknown> {
		const {
path,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/api/kube/{path}',
			path: {
				path
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Proxy Kube
	 * Proxy the GET request to Docker Hub registry without modifying the headers or body.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static proxyKubeApiKubePathPost1(data: TDataProxyKubeApiKubePathPost1): CancelablePromise<unknown> {
		const {
path,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/api/kube/{path}',
			path: {
				path
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Proxy Kube
	 * Proxy the GET request to Docker Hub registry without modifying the headers or body.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static proxyKubeApiKubePathPost2(data: TDataProxyKubeApiKubePathPost2): CancelablePromise<unknown> {
		const {
path,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/api/kube/{path}',
			path: {
				path
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

	/**
	 * Proxy Kube
	 * Proxy the GET request to Docker Hub registry without modifying the headers or body.
	 * @returns unknown Successful Response
	 * @throws ApiError
	 */
	public static proxyKubeApiKubePathPost3(data: TDataProxyKubeApiKubePathPost3): CancelablePromise<unknown> {
		const {
path,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/api/kube/{path}',
			path: {
				path
			},
			errors: {
				422: `Validation Error`,
			},
		});
	}

}