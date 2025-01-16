import type { io_k8s_apimachinery_pkg_apis_meta_v1_APIVersions } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_APIVersions';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';



export class CoreService {

	/**
	 * get available API versions
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_APIVersions OK
	 * @throws ApiError
	 */
	public static getCoreApiVersions(): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_APIVersions> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/api/',
			errors: {
				401: `Unauthorized`,
			},
		});
	}

}