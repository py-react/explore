import type { io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';



export class AppsService {

	/**
	 * get information of a group
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup OK
	 * @throws ApiError
	 */
	public static getAppsApiGroup(): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/apps/',
			errors: {
				401: `Unauthorized`,
			},
		});
	}

}