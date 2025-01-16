
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export type TDataLogFileHandler = {
                /**
 * path to the log
 */
logpath: string
            }

export class LogsService {

	/**
	 * @throws ApiError
	 */
	public static logFileListHandler(): CancelablePromise<void> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/logs/',
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * @throws ApiError
	 */
	public static logFileHandler(data: TDataLogFileHandler): CancelablePromise<void> {
		const {
logpath,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/logs/{logpath}',
			path: {
				logpath
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

}