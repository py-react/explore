import type { io_k8s_api_networking_v1_Ingress } from '../models/io_k8s_api_networking_v1_Ingress';
import type { io_k8s_api_networking_v1_IngressClass } from '../models/io_k8s_api_networking_v1_IngressClass';
import type { io_k8s_api_networking_v1_IngressClassList } from '../models/io_k8s_api_networking_v1_IngressClassList';
import type { io_k8s_api_networking_v1_IngressList } from '../models/io_k8s_api_networking_v1_IngressList';
import type { io_k8s_api_networking_v1_NetworkPolicy } from '../models/io_k8s_api_networking_v1_NetworkPolicy';
import type { io_k8s_api_networking_v1_NetworkPolicyList } from '../models/io_k8s_api_networking_v1_NetworkPolicyList';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_Patch } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_Patch';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_Status } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_Status';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export type TDataListNetworkingV1IngressClass = {
                /**
 * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
 * 
 * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 */
_continue?: string
/**
 * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 */
allowWatchBookmarks?: boolean
/**
 * A selector to restrict the list of returned objects by their fields. Defaults to everything.
 */
fieldSelector?: string
/**
 * A selector to restrict the list of returned objects by their labels. Defaults to everything.
 */
labelSelector?: string
/**
 * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
 * 
 * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 */
limit?: number
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersion?: string
/**
 * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersionMatch?: string
/**
 * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
 * 
 * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
 * is interpreted as "data at least as new as the provided `resourceVersion`"
 * and the bookmark event is send when the state is synced
 * to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
 * If `resourceVersion` is unset, this is interpreted as "consistent read" and the
 * bookmark event is send when the state is synced at least to the moment
 * when request started being processed.
 * - `resourceVersionMatch` set to any other value or unset
 * Invalid error is returned.
 * 
 * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 */
sendInitialEvents?: boolean
/**
 * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
timeoutSeconds?: number
/**
 * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
watch?: boolean
            }
export type TDataCreateNetworkingV1IngressClass = {
                body: io_k8s_api_networking_v1_IngressClass
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 */
fieldManager?: string
/**
 * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
fieldValidation?: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataDeleteNetworkingV1CollectionIngressClass = {
                /**
 * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
 * 
 * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 */
_continue?: string
body?: io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * A selector to restrict the list of returned objects by their fields. Defaults to everything.
 */
fieldSelector?: string
/**
 * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 */
gracePeriodSeconds?: number
/**
 * A selector to restrict the list of returned objects by their labels. Defaults to everything.
 */
labelSelector?: string
/**
 * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
 * 
 * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 */
limit?: number
/**
 * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 */
orphanDependents?: boolean
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
propagationPolicy?: string
/**
 * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersion?: string
/**
 * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersionMatch?: string
/**
 * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
 * 
 * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
 * is interpreted as "data at least as new as the provided `resourceVersion`"
 * and the bookmark event is send when the state is synced
 * to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
 * If `resourceVersion` is unset, this is interpreted as "consistent read" and the
 * bookmark event is send when the state is synced at least to the moment
 * when request started being processed.
 * - `resourceVersionMatch` set to any other value or unset
 * Invalid error is returned.
 * 
 * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 */
sendInitialEvents?: boolean
/**
 * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
timeoutSeconds?: number
            }
export type TDataReadNetworkingV1IngressClass = {
                /**
 * name of the IngressClass
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataReplaceNetworkingV1IngressClass = {
                body: io_k8s_api_networking_v1_IngressClass
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 */
fieldManager?: string
/**
 * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
fieldValidation?: string
/**
 * name of the IngressClass
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataDeleteNetworkingV1IngressClass = {
                body?: io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 */
gracePeriodSeconds?: number
/**
 * name of the IngressClass
 */
name: string
/**
 * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 */
orphanDependents?: boolean
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
propagationPolicy?: string
            }
export type TDataPatchNetworkingV1IngressClass = {
                body: io_k8s_apimachinery_pkg_apis_meta_v1_Patch
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 */
fieldManager?: string
/**
 * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
fieldValidation?: string
/**
 * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
force?: boolean
/**
 * name of the IngressClass
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataListNetworkingV1IngressForAllNamespaces = {
                /**
 * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
 * 
 * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 */
_continue?: string
/**
 * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 */
allowWatchBookmarks?: boolean
/**
 * A selector to restrict the list of returned objects by their fields. Defaults to everything.
 */
fieldSelector?: string
/**
 * A selector to restrict the list of returned objects by their labels. Defaults to everything.
 */
labelSelector?: string
/**
 * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
 * 
 * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 */
limit?: number
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersion?: string
/**
 * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersionMatch?: string
/**
 * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
 * 
 * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
 * is interpreted as "data at least as new as the provided `resourceVersion`"
 * and the bookmark event is send when the state is synced
 * to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
 * If `resourceVersion` is unset, this is interpreted as "consistent read" and the
 * bookmark event is send when the state is synced at least to the moment
 * when request started being processed.
 * - `resourceVersionMatch` set to any other value or unset
 * Invalid error is returned.
 * 
 * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 */
sendInitialEvents?: boolean
/**
 * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
timeoutSeconds?: number
/**
 * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
watch?: boolean
            }
export type TDataListNetworkingV1NamespacedIngress = {
                /**
 * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
 * 
 * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 */
_continue?: string
/**
 * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 */
allowWatchBookmarks?: boolean
/**
 * A selector to restrict the list of returned objects by their fields. Defaults to everything.
 */
fieldSelector?: string
/**
 * A selector to restrict the list of returned objects by their labels. Defaults to everything.
 */
labelSelector?: string
/**
 * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
 * 
 * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 */
limit?: number
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersion?: string
/**
 * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersionMatch?: string
/**
 * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
 * 
 * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
 * is interpreted as "data at least as new as the provided `resourceVersion`"
 * and the bookmark event is send when the state is synced
 * to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
 * If `resourceVersion` is unset, this is interpreted as "consistent read" and the
 * bookmark event is send when the state is synced at least to the moment
 * when request started being processed.
 * - `resourceVersionMatch` set to any other value or unset
 * Invalid error is returned.
 * 
 * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 */
sendInitialEvents?: boolean
/**
 * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
timeoutSeconds?: number
/**
 * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
watch?: boolean
            }
export type TDataCreateNetworkingV1NamespacedIngress = {
                body: io_k8s_api_networking_v1_Ingress
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 */
fieldManager?: string
/**
 * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
fieldValidation?: string
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataDeleteNetworkingV1CollectionNamespacedIngress = {
                /**
 * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
 * 
 * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 */
_continue?: string
body?: io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * A selector to restrict the list of returned objects by their fields. Defaults to everything.
 */
fieldSelector?: string
/**
 * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 */
gracePeriodSeconds?: number
/**
 * A selector to restrict the list of returned objects by their labels. Defaults to everything.
 */
labelSelector?: string
/**
 * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
 * 
 * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 */
limit?: number
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 */
orphanDependents?: boolean
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
propagationPolicy?: string
/**
 * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersion?: string
/**
 * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersionMatch?: string
/**
 * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
 * 
 * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
 * is interpreted as "data at least as new as the provided `resourceVersion`"
 * and the bookmark event is send when the state is synced
 * to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
 * If `resourceVersion` is unset, this is interpreted as "consistent read" and the
 * bookmark event is send when the state is synced at least to the moment
 * when request started being processed.
 * - `resourceVersionMatch` set to any other value or unset
 * Invalid error is returned.
 * 
 * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 */
sendInitialEvents?: boolean
/**
 * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
timeoutSeconds?: number
            }
export type TDataReadNetworkingV1NamespacedIngress = {
                /**
 * name of the Ingress
 */
name: string
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataReplaceNetworkingV1NamespacedIngress = {
                body: io_k8s_api_networking_v1_Ingress
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 */
fieldManager?: string
/**
 * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
fieldValidation?: string
/**
 * name of the Ingress
 */
name: string
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataDeleteNetworkingV1NamespacedIngress = {
                body?: io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 */
gracePeriodSeconds?: number
/**
 * name of the Ingress
 */
name: string
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 */
orphanDependents?: boolean
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
propagationPolicy?: string
            }
export type TDataPatchNetworkingV1NamespacedIngress = {
                body: io_k8s_apimachinery_pkg_apis_meta_v1_Patch
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 */
fieldManager?: string
/**
 * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
fieldValidation?: string
/**
 * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
force?: boolean
/**
 * name of the Ingress
 */
name: string
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataReadNetworkingV1NamespacedIngressStatus = {
                /**
 * name of the Ingress
 */
name: string
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataReplaceNetworkingV1NamespacedIngressStatus = {
                body: io_k8s_api_networking_v1_Ingress
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 */
fieldManager?: string
/**
 * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
fieldValidation?: string
/**
 * name of the Ingress
 */
name: string
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataPatchNetworkingV1NamespacedIngressStatus = {
                body: io_k8s_apimachinery_pkg_apis_meta_v1_Patch
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 */
fieldManager?: string
/**
 * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
fieldValidation?: string
/**
 * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
force?: boolean
/**
 * name of the Ingress
 */
name: string
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataListNetworkingV1NamespacedNetworkPolicy = {
                /**
 * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
 * 
 * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 */
_continue?: string
/**
 * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 */
allowWatchBookmarks?: boolean
/**
 * A selector to restrict the list of returned objects by their fields. Defaults to everything.
 */
fieldSelector?: string
/**
 * A selector to restrict the list of returned objects by their labels. Defaults to everything.
 */
labelSelector?: string
/**
 * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
 * 
 * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 */
limit?: number
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersion?: string
/**
 * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersionMatch?: string
/**
 * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
 * 
 * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
 * is interpreted as "data at least as new as the provided `resourceVersion`"
 * and the bookmark event is send when the state is synced
 * to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
 * If `resourceVersion` is unset, this is interpreted as "consistent read" and the
 * bookmark event is send when the state is synced at least to the moment
 * when request started being processed.
 * - `resourceVersionMatch` set to any other value or unset
 * Invalid error is returned.
 * 
 * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 */
sendInitialEvents?: boolean
/**
 * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
timeoutSeconds?: number
/**
 * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
watch?: boolean
            }
export type TDataCreateNetworkingV1NamespacedNetworkPolicy = {
                body: io_k8s_api_networking_v1_NetworkPolicy
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 */
fieldManager?: string
/**
 * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
fieldValidation?: string
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataDeleteNetworkingV1CollectionNamespacedNetworkPolicy = {
                /**
 * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
 * 
 * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 */
_continue?: string
body?: io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * A selector to restrict the list of returned objects by their fields. Defaults to everything.
 */
fieldSelector?: string
/**
 * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 */
gracePeriodSeconds?: number
/**
 * A selector to restrict the list of returned objects by their labels. Defaults to everything.
 */
labelSelector?: string
/**
 * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
 * 
 * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 */
limit?: number
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 */
orphanDependents?: boolean
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
propagationPolicy?: string
/**
 * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersion?: string
/**
 * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersionMatch?: string
/**
 * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
 * 
 * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
 * is interpreted as "data at least as new as the provided `resourceVersion`"
 * and the bookmark event is send when the state is synced
 * to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
 * If `resourceVersion` is unset, this is interpreted as "consistent read" and the
 * bookmark event is send when the state is synced at least to the moment
 * when request started being processed.
 * - `resourceVersionMatch` set to any other value or unset
 * Invalid error is returned.
 * 
 * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 */
sendInitialEvents?: boolean
/**
 * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
timeoutSeconds?: number
            }
export type TDataReadNetworkingV1NamespacedNetworkPolicy = {
                /**
 * name of the NetworkPolicy
 */
name: string
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataReplaceNetworkingV1NamespacedNetworkPolicy = {
                body: io_k8s_api_networking_v1_NetworkPolicy
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint.
 */
fieldManager?: string
/**
 * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
fieldValidation?: string
/**
 * name of the NetworkPolicy
 */
name: string
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataDeleteNetworkingV1NamespacedNetworkPolicy = {
                body?: io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
 */
gracePeriodSeconds?: number
/**
 * name of the NetworkPolicy
 */
name: string
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
 */
orphanDependents?: boolean
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
 */
propagationPolicy?: string
            }
export type TDataPatchNetworkingV1NamespacedNetworkPolicy = {
                body: io_k8s_apimachinery_pkg_apis_meta_v1_Patch
/**
 * When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
 */
dryRun?: string
/**
 * fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch).
 */
fieldManager?: string
/**
 * fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered.
 */
fieldValidation?: string
/**
 * Force is going to "force" Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests.
 */
force?: boolean
/**
 * name of the NetworkPolicy
 */
name: string
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataListNetworkingV1NetworkPolicyForAllNamespaces = {
                /**
 * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
 * 
 * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 */
_continue?: string
/**
 * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 */
allowWatchBookmarks?: boolean
/**
 * A selector to restrict the list of returned objects by their fields. Defaults to everything.
 */
fieldSelector?: string
/**
 * A selector to restrict the list of returned objects by their labels. Defaults to everything.
 */
labelSelector?: string
/**
 * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
 * 
 * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 */
limit?: number
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersion?: string
/**
 * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersionMatch?: string
/**
 * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
 * 
 * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
 * is interpreted as "data at least as new as the provided `resourceVersion`"
 * and the bookmark event is send when the state is synced
 * to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
 * If `resourceVersion` is unset, this is interpreted as "consistent read" and the
 * bookmark event is send when the state is synced at least to the moment
 * when request started being processed.
 * - `resourceVersionMatch` set to any other value or unset
 * Invalid error is returned.
 * 
 * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 */
sendInitialEvents?: boolean
/**
 * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
timeoutSeconds?: number
/**
 * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
watch?: boolean
            }
export type TDataWatchNetworkingV1IngressClassList = {
                /**
 * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
 * 
 * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 */
_continue?: string
/**
 * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 */
allowWatchBookmarks?: boolean
/**
 * A selector to restrict the list of returned objects by their fields. Defaults to everything.
 */
fieldSelector?: string
/**
 * A selector to restrict the list of returned objects by their labels. Defaults to everything.
 */
labelSelector?: string
/**
 * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
 * 
 * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 */
limit?: number
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersion?: string
/**
 * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersionMatch?: string
/**
 * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
 * 
 * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
 * is interpreted as "data at least as new as the provided `resourceVersion`"
 * and the bookmark event is send when the state is synced
 * to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
 * If `resourceVersion` is unset, this is interpreted as "consistent read" and the
 * bookmark event is send when the state is synced at least to the moment
 * when request started being processed.
 * - `resourceVersionMatch` set to any other value or unset
 * Invalid error is returned.
 * 
 * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 */
sendInitialEvents?: boolean
/**
 * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
timeoutSeconds?: number
/**
 * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
watch?: boolean
            }
export type TDataWatchNetworkingV1IngressClass = {
                /**
 * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
 * 
 * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 */
_continue?: string
/**
 * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 */
allowWatchBookmarks?: boolean
/**
 * A selector to restrict the list of returned objects by their fields. Defaults to everything.
 */
fieldSelector?: string
/**
 * A selector to restrict the list of returned objects by their labels. Defaults to everything.
 */
labelSelector?: string
/**
 * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
 * 
 * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 */
limit?: number
/**
 * name of the IngressClass
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersion?: string
/**
 * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersionMatch?: string
/**
 * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
 * 
 * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
 * is interpreted as "data at least as new as the provided `resourceVersion`"
 * and the bookmark event is send when the state is synced
 * to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
 * If `resourceVersion` is unset, this is interpreted as "consistent read" and the
 * bookmark event is send when the state is synced at least to the moment
 * when request started being processed.
 * - `resourceVersionMatch` set to any other value or unset
 * Invalid error is returned.
 * 
 * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 */
sendInitialEvents?: boolean
/**
 * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
timeoutSeconds?: number
/**
 * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
watch?: boolean
            }
export type TDataWatchNetworkingV1IngressListForAllNamespaces = {
                /**
 * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
 * 
 * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 */
_continue?: string
/**
 * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 */
allowWatchBookmarks?: boolean
/**
 * A selector to restrict the list of returned objects by their fields. Defaults to everything.
 */
fieldSelector?: string
/**
 * A selector to restrict the list of returned objects by their labels. Defaults to everything.
 */
labelSelector?: string
/**
 * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
 * 
 * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 */
limit?: number
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersion?: string
/**
 * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersionMatch?: string
/**
 * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
 * 
 * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
 * is interpreted as "data at least as new as the provided `resourceVersion`"
 * and the bookmark event is send when the state is synced
 * to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
 * If `resourceVersion` is unset, this is interpreted as "consistent read" and the
 * bookmark event is send when the state is synced at least to the moment
 * when request started being processed.
 * - `resourceVersionMatch` set to any other value or unset
 * Invalid error is returned.
 * 
 * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 */
sendInitialEvents?: boolean
/**
 * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
timeoutSeconds?: number
/**
 * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
watch?: boolean
            }
export type TDataWatchNetworkingV1NamespacedIngressList = {
                /**
 * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
 * 
 * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 */
_continue?: string
/**
 * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 */
allowWatchBookmarks?: boolean
/**
 * A selector to restrict the list of returned objects by their fields. Defaults to everything.
 */
fieldSelector?: string
/**
 * A selector to restrict the list of returned objects by their labels. Defaults to everything.
 */
labelSelector?: string
/**
 * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
 * 
 * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 */
limit?: number
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersion?: string
/**
 * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersionMatch?: string
/**
 * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
 * 
 * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
 * is interpreted as "data at least as new as the provided `resourceVersion`"
 * and the bookmark event is send when the state is synced
 * to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
 * If `resourceVersion` is unset, this is interpreted as "consistent read" and the
 * bookmark event is send when the state is synced at least to the moment
 * when request started being processed.
 * - `resourceVersionMatch` set to any other value or unset
 * Invalid error is returned.
 * 
 * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 */
sendInitialEvents?: boolean
/**
 * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
timeoutSeconds?: number
/**
 * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
watch?: boolean
            }
export type TDataWatchNetworkingV1NamespacedIngress = {
                /**
 * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
 * 
 * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 */
_continue?: string
/**
 * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 */
allowWatchBookmarks?: boolean
/**
 * A selector to restrict the list of returned objects by their fields. Defaults to everything.
 */
fieldSelector?: string
/**
 * A selector to restrict the list of returned objects by their labels. Defaults to everything.
 */
labelSelector?: string
/**
 * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
 * 
 * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 */
limit?: number
/**
 * name of the Ingress
 */
name: string
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersion?: string
/**
 * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersionMatch?: string
/**
 * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
 * 
 * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
 * is interpreted as "data at least as new as the provided `resourceVersion`"
 * and the bookmark event is send when the state is synced
 * to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
 * If `resourceVersion` is unset, this is interpreted as "consistent read" and the
 * bookmark event is send when the state is synced at least to the moment
 * when request started being processed.
 * - `resourceVersionMatch` set to any other value or unset
 * Invalid error is returned.
 * 
 * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 */
sendInitialEvents?: boolean
/**
 * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
timeoutSeconds?: number
/**
 * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
watch?: boolean
            }
export type TDataWatchNetworkingV1NamespacedNetworkPolicyList = {
                /**
 * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
 * 
 * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 */
_continue?: string
/**
 * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 */
allowWatchBookmarks?: boolean
/**
 * A selector to restrict the list of returned objects by their fields. Defaults to everything.
 */
fieldSelector?: string
/**
 * A selector to restrict the list of returned objects by their labels. Defaults to everything.
 */
labelSelector?: string
/**
 * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
 * 
 * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 */
limit?: number
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersion?: string
/**
 * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersionMatch?: string
/**
 * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
 * 
 * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
 * is interpreted as "data at least as new as the provided `resourceVersion`"
 * and the bookmark event is send when the state is synced
 * to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
 * If `resourceVersion` is unset, this is interpreted as "consistent read" and the
 * bookmark event is send when the state is synced at least to the moment
 * when request started being processed.
 * - `resourceVersionMatch` set to any other value or unset
 * Invalid error is returned.
 * 
 * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 */
sendInitialEvents?: boolean
/**
 * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
timeoutSeconds?: number
/**
 * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
watch?: boolean
            }
export type TDataWatchNetworkingV1NamespacedNetworkPolicy = {
                /**
 * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
 * 
 * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 */
_continue?: string
/**
 * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 */
allowWatchBookmarks?: boolean
/**
 * A selector to restrict the list of returned objects by their fields. Defaults to everything.
 */
fieldSelector?: string
/**
 * A selector to restrict the list of returned objects by their labels. Defaults to everything.
 */
labelSelector?: string
/**
 * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
 * 
 * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 */
limit?: number
/**
 * name of the NetworkPolicy
 */
name: string
/**
 * object name and auth scope, such as for teams and projects
 */
namespace: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersion?: string
/**
 * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersionMatch?: string
/**
 * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
 * 
 * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
 * is interpreted as "data at least as new as the provided `resourceVersion`"
 * and the bookmark event is send when the state is synced
 * to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
 * If `resourceVersion` is unset, this is interpreted as "consistent read" and the
 * bookmark event is send when the state is synced at least to the moment
 * when request started being processed.
 * - `resourceVersionMatch` set to any other value or unset
 * Invalid error is returned.
 * 
 * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 */
sendInitialEvents?: boolean
/**
 * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
timeoutSeconds?: number
/**
 * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
watch?: boolean
            }
export type TDataWatchNetworkingV1NetworkPolicyListForAllNamespaces = {
                /**
 * The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the "next key".
 * 
 * This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications.
 */
_continue?: string
/**
 * allowWatchBookmarks requests watch events with type "BOOKMARK". Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server's discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored.
 */
allowWatchBookmarks?: boolean
/**
 * A selector to restrict the list of returned objects by their fields. Defaults to everything.
 */
fieldSelector?: string
/**
 * A selector to restrict the list of returned objects by their labels. Defaults to everything.
 */
labelSelector?: string
/**
 * limit is a maximum number of responses to return for a list call. If more items exist, the server will set the `continue` field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.
 * 
 * The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned.
 */
limit?: number
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
/**
 * resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersion?: string
/**
 * resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.
 * 
 * Defaults to unset
 */
resourceVersionMatch?: string
/**
 * `sendInitialEvents=true` may be set together with `watch=true`. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic "Bookmark" event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with `"k8s.io/initial-events-end": "true"` annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.
 * 
 * When `sendInitialEvents` option is set, we require `resourceVersionMatch` option to also be set. The semantic of the watch request is as following: - `resourceVersionMatch` = NotOlderThan
 * is interpreted as "data at least as new as the provided `resourceVersion`"
 * and the bookmark event is send when the state is synced
 * to a `resourceVersion` at least as fresh as the one provided by the ListOptions.
 * If `resourceVersion` is unset, this is interpreted as "consistent read" and the
 * bookmark event is send when the state is synced at least to the moment
 * when request started being processed.
 * - `resourceVersionMatch` set to any other value or unset
 * Invalid error is returned.
 * 
 * Defaults to true if `resourceVersion=""` or `resourceVersion="0"` (for backward compatibility reasons) and to false otherwise.
 */
sendInitialEvents?: boolean
/**
 * Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity.
 */
timeoutSeconds?: number
/**
 * Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
 */
watch?: boolean
            }

export class NetworkingV1Service {

	/**
	 * get available resources
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList OK
	 * @throws ApiError
	 */
	public static getNetworkingV1ApiResources(): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/',
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * list or watch objects of kind IngressClass
	 * @returns io_k8s_api_networking_v1_IngressClassList OK
	 * @throws ApiError
	 */
	public static listNetworkingV1IngressClass(data: TDataListNetworkingV1IngressClass = {}): CancelablePromise<io_k8s_api_networking_v1_IngressClassList> {
		const {
_continue,
allowWatchBookmarks,
fieldSelector,
labelSelector,
limit,
pretty,
resourceVersion,
resourceVersionMatch,
sendInitialEvents,
timeoutSeconds,
watch,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/ingressclasses',
			query: {
				pretty, allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * create an IngressClass
	 * @returns io_k8s_api_networking_v1_IngressClass OK
	 * @throws ApiError
	 */
	public static createNetworkingV1IngressClass(data: TDataCreateNetworkingV1IngressClass): CancelablePromise<io_k8s_api_networking_v1_IngressClass> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/apis/networking.k8s.io/v1/ingressclasses',
			query: {
				pretty, dryRun, fieldManager, fieldValidation
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * delete collection of IngressClass
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
	 * @throws ApiError
	 */
	public static deleteNetworkingV1CollectionIngressClass(data: TDataDeleteNetworkingV1CollectionIngressClass = {}): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
		const {
_continue,
body,
dryRun,
fieldSelector,
gracePeriodSeconds,
labelSelector,
limit,
orphanDependents,
pretty,
propagationPolicy,
resourceVersion,
resourceVersionMatch,
sendInitialEvents,
timeoutSeconds,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/apis/networking.k8s.io/v1/ingressclasses',
			query: {
				pretty, continue: _continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * read the specified IngressClass
	 * @returns io_k8s_api_networking_v1_IngressClass OK
	 * @throws ApiError
	 */
	public static readNetworkingV1IngressClass(data: TDataReadNetworkingV1IngressClass): CancelablePromise<io_k8s_api_networking_v1_IngressClass> {
		const {
name,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/ingressclasses/{name}',
			path: {
				name
			},
			query: {
				pretty
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * replace the specified IngressClass
	 * @returns io_k8s_api_networking_v1_IngressClass OK
	 * @throws ApiError
	 */
	public static replaceNetworkingV1IngressClass(data: TDataReplaceNetworkingV1IngressClass): CancelablePromise<io_k8s_api_networking_v1_IngressClass> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
name,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/apis/networking.k8s.io/v1/ingressclasses/{name}',
			path: {
				name
			},
			query: {
				pretty, dryRun, fieldManager, fieldValidation
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * delete an IngressClass
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
	 * @throws ApiError
	 */
	public static deleteNetworkingV1IngressClass(data: TDataDeleteNetworkingV1IngressClass): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
		const {
body,
dryRun,
gracePeriodSeconds,
name,
orphanDependents,
pretty,
propagationPolicy,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/apis/networking.k8s.io/v1/ingressclasses/{name}',
			path: {
				name
			},
			query: {
				pretty, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * partially update the specified IngressClass
	 * @returns io_k8s_api_networking_v1_IngressClass OK
	 * @throws ApiError
	 */
	public static patchNetworkingV1IngressClass(data: TDataPatchNetworkingV1IngressClass): CancelablePromise<io_k8s_api_networking_v1_IngressClass> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
force,
name,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/apis/networking.k8s.io/v1/ingressclasses/{name}',
			path: {
				name
			},
			query: {
				pretty, dryRun, fieldManager, fieldValidation, force
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * list or watch objects of kind Ingress
	 * @returns io_k8s_api_networking_v1_IngressList OK
	 * @throws ApiError
	 */
	public static listNetworkingV1IngressForAllNamespaces(data: TDataListNetworkingV1IngressForAllNamespaces = {}): CancelablePromise<io_k8s_api_networking_v1_IngressList> {
		const {
_continue,
allowWatchBookmarks,
fieldSelector,
labelSelector,
limit,
pretty,
resourceVersion,
resourceVersionMatch,
sendInitialEvents,
timeoutSeconds,
watch,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/ingresses',
			query: {
				allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * list or watch objects of kind Ingress
	 * @returns io_k8s_api_networking_v1_IngressList OK
	 * @throws ApiError
	 */
	public static listNetworkingV1NamespacedIngress(data: TDataListNetworkingV1NamespacedIngress): CancelablePromise<io_k8s_api_networking_v1_IngressList> {
		const {
_continue,
allowWatchBookmarks,
fieldSelector,
labelSelector,
limit,
namespace,
pretty,
resourceVersion,
resourceVersionMatch,
sendInitialEvents,
timeoutSeconds,
watch,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses',
			path: {
				namespace
			},
			query: {
				pretty, allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * create an Ingress
	 * @returns io_k8s_api_networking_v1_Ingress OK
	 * @throws ApiError
	 */
	public static createNetworkingV1NamespacedIngress(data: TDataCreateNetworkingV1NamespacedIngress): CancelablePromise<io_k8s_api_networking_v1_Ingress> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
namespace,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses',
			path: {
				namespace
			},
			query: {
				pretty, dryRun, fieldManager, fieldValidation
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * delete collection of Ingress
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
	 * @throws ApiError
	 */
	public static deleteNetworkingV1CollectionNamespacedIngress(data: TDataDeleteNetworkingV1CollectionNamespacedIngress): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
		const {
_continue,
body,
dryRun,
fieldSelector,
gracePeriodSeconds,
labelSelector,
limit,
namespace,
orphanDependents,
pretty,
propagationPolicy,
resourceVersion,
resourceVersionMatch,
sendInitialEvents,
timeoutSeconds,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses',
			path: {
				namespace
			},
			query: {
				pretty, continue: _continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * read the specified Ingress
	 * @returns io_k8s_api_networking_v1_Ingress OK
	 * @throws ApiError
	 */
	public static readNetworkingV1NamespacedIngress(data: TDataReadNetworkingV1NamespacedIngress): CancelablePromise<io_k8s_api_networking_v1_Ingress> {
		const {
name,
namespace,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}',
			path: {
				name, namespace
			},
			query: {
				pretty
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * replace the specified Ingress
	 * @returns io_k8s_api_networking_v1_Ingress OK
	 * @throws ApiError
	 */
	public static replaceNetworkingV1NamespacedIngress(data: TDataReplaceNetworkingV1NamespacedIngress): CancelablePromise<io_k8s_api_networking_v1_Ingress> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
name,
namespace,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}',
			path: {
				name, namespace
			},
			query: {
				pretty, dryRun, fieldManager, fieldValidation
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * delete an Ingress
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
	 * @throws ApiError
	 */
	public static deleteNetworkingV1NamespacedIngress(data: TDataDeleteNetworkingV1NamespacedIngress): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
		const {
body,
dryRun,
gracePeriodSeconds,
name,
namespace,
orphanDependents,
pretty,
propagationPolicy,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}',
			path: {
				name, namespace
			},
			query: {
				pretty, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * partially update the specified Ingress
	 * @returns io_k8s_api_networking_v1_Ingress OK
	 * @throws ApiError
	 */
	public static patchNetworkingV1NamespacedIngress(data: TDataPatchNetworkingV1NamespacedIngress): CancelablePromise<io_k8s_api_networking_v1_Ingress> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
force,
name,
namespace,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}',
			path: {
				name, namespace
			},
			query: {
				pretty, dryRun, fieldManager, fieldValidation, force
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * read status of the specified Ingress
	 * @returns io_k8s_api_networking_v1_Ingress OK
	 * @throws ApiError
	 */
	public static readNetworkingV1NamespacedIngressStatus(data: TDataReadNetworkingV1NamespacedIngressStatus): CancelablePromise<io_k8s_api_networking_v1_Ingress> {
		const {
name,
namespace,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status',
			path: {
				name, namespace
			},
			query: {
				pretty
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * replace status of the specified Ingress
	 * @returns io_k8s_api_networking_v1_Ingress OK
	 * @throws ApiError
	 */
	public static replaceNetworkingV1NamespacedIngressStatus(data: TDataReplaceNetworkingV1NamespacedIngressStatus): CancelablePromise<io_k8s_api_networking_v1_Ingress> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
name,
namespace,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status',
			path: {
				name, namespace
			},
			query: {
				pretty, dryRun, fieldManager, fieldValidation
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * partially update status of the specified Ingress
	 * @returns io_k8s_api_networking_v1_Ingress OK
	 * @throws ApiError
	 */
	public static patchNetworkingV1NamespacedIngressStatus(data: TDataPatchNetworkingV1NamespacedIngressStatus): CancelablePromise<io_k8s_api_networking_v1_Ingress> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
force,
name,
namespace,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/ingresses/{name}/status',
			path: {
				name, namespace
			},
			query: {
				pretty, dryRun, fieldManager, fieldValidation, force
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * list or watch objects of kind NetworkPolicy
	 * @returns io_k8s_api_networking_v1_NetworkPolicyList OK
	 * @throws ApiError
	 */
	public static listNetworkingV1NamespacedNetworkPolicy(data: TDataListNetworkingV1NamespacedNetworkPolicy): CancelablePromise<io_k8s_api_networking_v1_NetworkPolicyList> {
		const {
_continue,
allowWatchBookmarks,
fieldSelector,
labelSelector,
limit,
namespace,
pretty,
resourceVersion,
resourceVersionMatch,
sendInitialEvents,
timeoutSeconds,
watch,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies',
			path: {
				namespace
			},
			query: {
				pretty, allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * create a NetworkPolicy
	 * @returns io_k8s_api_networking_v1_NetworkPolicy OK
	 * @throws ApiError
	 */
	public static createNetworkingV1NamespacedNetworkPolicy(data: TDataCreateNetworkingV1NamespacedNetworkPolicy): CancelablePromise<io_k8s_api_networking_v1_NetworkPolicy> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
namespace,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies',
			path: {
				namespace
			},
			query: {
				pretty, dryRun, fieldManager, fieldValidation
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * delete collection of NetworkPolicy
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
	 * @throws ApiError
	 */
	public static deleteNetworkingV1CollectionNamespacedNetworkPolicy(data: TDataDeleteNetworkingV1CollectionNamespacedNetworkPolicy): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
		const {
_continue,
body,
dryRun,
fieldSelector,
gracePeriodSeconds,
labelSelector,
limit,
namespace,
orphanDependents,
pretty,
propagationPolicy,
resourceVersion,
resourceVersionMatch,
sendInitialEvents,
timeoutSeconds,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies',
			path: {
				namespace
			},
			query: {
				pretty, continue: _continue, dryRun, fieldSelector, gracePeriodSeconds, labelSelector, limit, orphanDependents, propagationPolicy, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * read the specified NetworkPolicy
	 * @returns io_k8s_api_networking_v1_NetworkPolicy OK
	 * @throws ApiError
	 */
	public static readNetworkingV1NamespacedNetworkPolicy(data: TDataReadNetworkingV1NamespacedNetworkPolicy): CancelablePromise<io_k8s_api_networking_v1_NetworkPolicy> {
		const {
name,
namespace,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}',
			path: {
				name, namespace
			},
			query: {
				pretty
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * replace the specified NetworkPolicy
	 * @returns io_k8s_api_networking_v1_NetworkPolicy OK
	 * @throws ApiError
	 */
	public static replaceNetworkingV1NamespacedNetworkPolicy(data: TDataReplaceNetworkingV1NamespacedNetworkPolicy): CancelablePromise<io_k8s_api_networking_v1_NetworkPolicy> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
name,
namespace,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'PUT',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}',
			path: {
				name, namespace
			},
			query: {
				pretty, dryRun, fieldManager, fieldValidation
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * delete a NetworkPolicy
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
	 * @throws ApiError
	 */
	public static deleteNetworkingV1NamespacedNetworkPolicy(data: TDataDeleteNetworkingV1NamespacedNetworkPolicy): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
		const {
body,
dryRun,
gracePeriodSeconds,
name,
namespace,
orphanDependents,
pretty,
propagationPolicy,
} = data;
		return __request(OpenAPI, {
			method: 'DELETE',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}',
			path: {
				name, namespace
			},
			query: {
				pretty, dryRun, gracePeriodSeconds, orphanDependents, propagationPolicy
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * partially update the specified NetworkPolicy
	 * @returns io_k8s_api_networking_v1_NetworkPolicy OK
	 * @throws ApiError
	 */
	public static patchNetworkingV1NamespacedNetworkPolicy(data: TDataPatchNetworkingV1NamespacedNetworkPolicy): CancelablePromise<io_k8s_api_networking_v1_NetworkPolicy> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
force,
name,
namespace,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'PATCH',
			url: '/apis/networking.k8s.io/v1/namespaces/{namespace}/networkpolicies/{name}',
			path: {
				name, namespace
			},
			query: {
				pretty, dryRun, fieldManager, fieldValidation, force
			},
			body: body,
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * list or watch objects of kind NetworkPolicy
	 * @returns io_k8s_api_networking_v1_NetworkPolicyList OK
	 * @throws ApiError
	 */
	public static listNetworkingV1NetworkPolicyForAllNamespaces(data: TDataListNetworkingV1NetworkPolicyForAllNamespaces = {}): CancelablePromise<io_k8s_api_networking_v1_NetworkPolicyList> {
		const {
_continue,
allowWatchBookmarks,
fieldSelector,
labelSelector,
limit,
pretty,
resourceVersion,
resourceVersionMatch,
sendInitialEvents,
timeoutSeconds,
watch,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/networkpolicies',
			query: {
				allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * watch individual changes to a list of IngressClass. deprecated: use the 'watch' parameter with a list operation instead.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchNetworkingV1IngressClassList(data: TDataWatchNetworkingV1IngressClassList = {}): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
		const {
_continue,
allowWatchBookmarks,
fieldSelector,
labelSelector,
limit,
pretty,
resourceVersion,
resourceVersionMatch,
sendInitialEvents,
timeoutSeconds,
watch,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/watch/ingressclasses',
			query: {
				allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * watch changes to an object of kind IngressClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchNetworkingV1IngressClass(data: TDataWatchNetworkingV1IngressClass): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
		const {
_continue,
allowWatchBookmarks,
fieldSelector,
labelSelector,
limit,
name,
pretty,
resourceVersion,
resourceVersionMatch,
sendInitialEvents,
timeoutSeconds,
watch,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/watch/ingressclasses/{name}',
			path: {
				name
			},
			query: {
				allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * watch individual changes to a list of Ingress. deprecated: use the 'watch' parameter with a list operation instead.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchNetworkingV1IngressListForAllNamespaces(data: TDataWatchNetworkingV1IngressListForAllNamespaces = {}): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
		const {
_continue,
allowWatchBookmarks,
fieldSelector,
labelSelector,
limit,
pretty,
resourceVersion,
resourceVersionMatch,
sendInitialEvents,
timeoutSeconds,
watch,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/watch/ingresses',
			query: {
				allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * watch individual changes to a list of Ingress. deprecated: use the 'watch' parameter with a list operation instead.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchNetworkingV1NamespacedIngressList(data: TDataWatchNetworkingV1NamespacedIngressList): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
		const {
_continue,
allowWatchBookmarks,
fieldSelector,
labelSelector,
limit,
namespace,
pretty,
resourceVersion,
resourceVersionMatch,
sendInitialEvents,
timeoutSeconds,
watch,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/ingresses',
			path: {
				namespace
			},
			query: {
				allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * watch changes to an object of kind Ingress. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchNetworkingV1NamespacedIngress(data: TDataWatchNetworkingV1NamespacedIngress): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
		const {
_continue,
allowWatchBookmarks,
fieldSelector,
labelSelector,
limit,
name,
namespace,
pretty,
resourceVersion,
resourceVersionMatch,
sendInitialEvents,
timeoutSeconds,
watch,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/ingresses/{name}',
			path: {
				name, namespace
			},
			query: {
				allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchNetworkingV1NamespacedNetworkPolicyList(data: TDataWatchNetworkingV1NamespacedNetworkPolicyList): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
		const {
_continue,
allowWatchBookmarks,
fieldSelector,
labelSelector,
limit,
namespace,
pretty,
resourceVersion,
resourceVersionMatch,
sendInitialEvents,
timeoutSeconds,
watch,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/networkpolicies',
			path: {
				namespace
			},
			query: {
				allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * watch changes to an object of kind NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchNetworkingV1NamespacedNetworkPolicy(data: TDataWatchNetworkingV1NamespacedNetworkPolicy): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
		const {
_continue,
allowWatchBookmarks,
fieldSelector,
labelSelector,
limit,
name,
namespace,
pretty,
resourceVersion,
resourceVersionMatch,
sendInitialEvents,
timeoutSeconds,
watch,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/watch/namespaces/{namespace}/networkpolicies/{name}',
			path: {
				name, namespace
			},
			query: {
				allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * watch individual changes to a list of NetworkPolicy. deprecated: use the 'watch' parameter with a list operation instead.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchNetworkingV1NetworkPolicyListForAllNamespaces(data: TDataWatchNetworkingV1NetworkPolicyListForAllNamespaces = {}): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
		const {
_continue,
allowWatchBookmarks,
fieldSelector,
labelSelector,
limit,
pretty,
resourceVersion,
resourceVersionMatch,
sendInitialEvents,
timeoutSeconds,
watch,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/networking.k8s.io/v1/watch/networkpolicies',
			query: {
				allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

}