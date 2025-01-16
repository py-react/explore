import type { io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime } from './io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime';

/**
 * LeaseSpec is a specification of a Lease.
 */
export type io_k8s_api_coordination_v1_LeaseSpec = {
	/**
	 * acquireTime is a time when the current lease was acquired.
	 */
	acquireTime?: io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime;
	/**
	 * holderIdentity contains the identity of the holder of a current lease.
	 */
	holderIdentity?: string;
	/**
	 * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed renewTime.
	 */
	leaseDurationSeconds?: number;
	/**
	 * leaseTransitions is the number of transitions of a lease between holders.
	 */
	leaseTransitions?: number;
	/**
	 * renewTime is a time when the current holder of a lease has last updated the lease.
	 */
	renewTime?: io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime;
};

