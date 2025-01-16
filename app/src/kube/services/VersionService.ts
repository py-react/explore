import type { io_k8s_apimachinery_pkg_version_Info } from '../models/io_k8s_apimachinery_pkg_version_Info';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';



export class VersionService {

	/**
	 * get the code version
	 * @returns io_k8s_apimachinery_pkg_version_Info OK
	 * @throws ApiError
	 */
	public static getCodeVersion(): CancelablePromise<io_k8s_apimachinery_pkg_version_Info> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/version/',
			errors: {
				401: `Unauthorized`,
			},
		});
	}

}