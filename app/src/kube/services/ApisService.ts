import type { io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';



export class ApisService {

	/**
	 * get available API versions
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList OK
	 * @throws ApiError
	 */
	public static getApiVersions(): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/',
			errors: {
				401: `Unauthorized`,
			},
		});
	}

}