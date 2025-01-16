import type { io_k8s_api_storage_v1_CSIDriver } from '../models/io_k8s_api_storage_v1_CSIDriver';
import type { io_k8s_api_storage_v1_CSIDriverList } from '../models/io_k8s_api_storage_v1_CSIDriverList';
import type { io_k8s_api_storage_v1_CSINode } from '../models/io_k8s_api_storage_v1_CSINode';
import type { io_k8s_api_storage_v1_CSINodeList } from '../models/io_k8s_api_storage_v1_CSINodeList';
import type { io_k8s_api_storage_v1_CSIStorageCapacity } from '../models/io_k8s_api_storage_v1_CSIStorageCapacity';
import type { io_k8s_api_storage_v1_CSIStorageCapacityList } from '../models/io_k8s_api_storage_v1_CSIStorageCapacityList';
import type { io_k8s_api_storage_v1_StorageClass } from '../models/io_k8s_api_storage_v1_StorageClass';
import type { io_k8s_api_storage_v1_StorageClassList } from '../models/io_k8s_api_storage_v1_StorageClassList';
import type { io_k8s_api_storage_v1_VolumeAttachment } from '../models/io_k8s_api_storage_v1_VolumeAttachment';
import type { io_k8s_api_storage_v1_VolumeAttachmentList } from '../models/io_k8s_api_storage_v1_VolumeAttachmentList';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_Patch } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_Patch';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_Status } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_Status';
import type { io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent } from '../models/io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export type TDataListStorageV1CsiDriver = {
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
export type TDataCreateStorageV1CsiDriver = {
                body: io_k8s_api_storage_v1_CSIDriver
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
export type TDataDeleteStorageV1CollectionCsiDriver = {
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
export type TDataReadStorageV1CsiDriver = {
                /**
 * name of the CSIDriver
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataReplaceStorageV1CsiDriver = {
                body: io_k8s_api_storage_v1_CSIDriver
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
 * name of the CSIDriver
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataDeleteStorageV1CsiDriver = {
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
 * name of the CSIDriver
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
export type TDataPatchStorageV1CsiDriver = {
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
 * name of the CSIDriver
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataListStorageV1CsiNode = {
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
export type TDataCreateStorageV1CsiNode = {
                body: io_k8s_api_storage_v1_CSINode
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
export type TDataDeleteStorageV1CollectionCsiNode = {
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
export type TDataReadStorageV1CsiNode = {
                /**
 * name of the CSINode
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataReplaceStorageV1CsiNode = {
                body: io_k8s_api_storage_v1_CSINode
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
 * name of the CSINode
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataDeleteStorageV1CsiNode = {
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
 * name of the CSINode
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
export type TDataPatchStorageV1CsiNode = {
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
 * name of the CSINode
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataListStorageV1CsiStorageCapacityForAllNamespaces = {
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
export type TDataListStorageV1NamespacedCsiStorageCapacity = {
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
export type TDataCreateStorageV1NamespacedCsiStorageCapacity = {
                body: io_k8s_api_storage_v1_CSIStorageCapacity
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
export type TDataDeleteStorageV1CollectionNamespacedCsiStorageCapacity = {
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
export type TDataReadStorageV1NamespacedCsiStorageCapacity = {
                /**
 * name of the CSIStorageCapacity
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
export type TDataReplaceStorageV1NamespacedCsiStorageCapacity = {
                body: io_k8s_api_storage_v1_CSIStorageCapacity
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
 * name of the CSIStorageCapacity
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
export type TDataDeleteStorageV1NamespacedCsiStorageCapacity = {
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
 * name of the CSIStorageCapacity
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
export type TDataPatchStorageV1NamespacedCsiStorageCapacity = {
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
 * name of the CSIStorageCapacity
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
export type TDataListStorageV1StorageClass = {
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
export type TDataCreateStorageV1StorageClass = {
                body: io_k8s_api_storage_v1_StorageClass
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
export type TDataDeleteStorageV1CollectionStorageClass = {
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
export type TDataReadStorageV1StorageClass = {
                /**
 * name of the StorageClass
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataReplaceStorageV1StorageClass = {
                body: io_k8s_api_storage_v1_StorageClass
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
 * name of the StorageClass
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataDeleteStorageV1StorageClass = {
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
 * name of the StorageClass
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
export type TDataPatchStorageV1StorageClass = {
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
 * name of the StorageClass
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataListStorageV1VolumeAttachment = {
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
export type TDataCreateStorageV1VolumeAttachment = {
                body: io_k8s_api_storage_v1_VolumeAttachment
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
export type TDataDeleteStorageV1CollectionVolumeAttachment = {
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
export type TDataReadStorageV1VolumeAttachment = {
                /**
 * name of the VolumeAttachment
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataReplaceStorageV1VolumeAttachment = {
                body: io_k8s_api_storage_v1_VolumeAttachment
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
 * name of the VolumeAttachment
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataDeleteStorageV1VolumeAttachment = {
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
 * name of the VolumeAttachment
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
export type TDataPatchStorageV1VolumeAttachment = {
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
 * name of the VolumeAttachment
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataReadStorageV1VolumeAttachmentStatus = {
                /**
 * name of the VolumeAttachment
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataReplaceStorageV1VolumeAttachmentStatus = {
                body: io_k8s_api_storage_v1_VolumeAttachment
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
 * name of the VolumeAttachment
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataPatchStorageV1VolumeAttachmentStatus = {
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
 * name of the VolumeAttachment
 */
name: string
/**
 * If 'true', then the output is pretty printed. Defaults to 'false' unless the user-agent indicates a browser or command-line HTTP tool (curl and wget).
 */
pretty?: string
            }
export type TDataWatchStorageV1CsiDriverList = {
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
export type TDataWatchStorageV1CsiDriver = {
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
 * name of the CSIDriver
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
export type TDataWatchStorageV1CsiNodeList = {
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
export type TDataWatchStorageV1CsiNode = {
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
 * name of the CSINode
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
export type TDataWatchStorageV1CsiStorageCapacityListForAllNamespaces = {
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
export type TDataWatchStorageV1NamespacedCsiStorageCapacityList = {
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
export type TDataWatchStorageV1NamespacedCsiStorageCapacity = {
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
 * name of the CSIStorageCapacity
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
export type TDataWatchStorageV1StorageClassList = {
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
export type TDataWatchStorageV1StorageClass = {
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
 * name of the StorageClass
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
export type TDataWatchStorageV1VolumeAttachmentList = {
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
export type TDataWatchStorageV1VolumeAttachment = {
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
 * name of the VolumeAttachment
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

export class StorageV1Service {

	/**
	 * get available resources
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList OK
	 * @throws ApiError
	 */
	public static getStorageV1ApiResources(): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList> {
				return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/storage.k8s.io/v1/',
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * list or watch objects of kind CSIDriver
	 * @returns io_k8s_api_storage_v1_CSIDriverList OK
	 * @throws ApiError
	 */
	public static listStorageV1CsiDriver(data: TDataListStorageV1CsiDriver = {}): CancelablePromise<io_k8s_api_storage_v1_CSIDriverList> {
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
			url: '/apis/storage.k8s.io/v1/csidrivers',
			query: {
				pretty, allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * create a CSIDriver
	 * @returns io_k8s_api_storage_v1_CSIDriver OK
	 * @throws ApiError
	 */
	public static createStorageV1CsiDriver(data: TDataCreateStorageV1CsiDriver): CancelablePromise<io_k8s_api_storage_v1_CSIDriver> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/apis/storage.k8s.io/v1/csidrivers',
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
	 * delete collection of CSIDriver
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
	 * @throws ApiError
	 */
	public static deleteStorageV1CollectionCsiDriver(data: TDataDeleteStorageV1CollectionCsiDriver = {}): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
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
			url: '/apis/storage.k8s.io/v1/csidrivers',
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
	 * read the specified CSIDriver
	 * @returns io_k8s_api_storage_v1_CSIDriver OK
	 * @throws ApiError
	 */
	public static readStorageV1CsiDriver(data: TDataReadStorageV1CsiDriver): CancelablePromise<io_k8s_api_storage_v1_CSIDriver> {
		const {
name,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/storage.k8s.io/v1/csidrivers/{name}',
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
	 * replace the specified CSIDriver
	 * @returns io_k8s_api_storage_v1_CSIDriver OK
	 * @throws ApiError
	 */
	public static replaceStorageV1CsiDriver(data: TDataReplaceStorageV1CsiDriver): CancelablePromise<io_k8s_api_storage_v1_CSIDriver> {
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
			url: '/apis/storage.k8s.io/v1/csidrivers/{name}',
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
	 * delete a CSIDriver
	 * @returns io_k8s_api_storage_v1_CSIDriver OK
	 * @throws ApiError
	 */
	public static deleteStorageV1CsiDriver(data: TDataDeleteStorageV1CsiDriver): CancelablePromise<io_k8s_api_storage_v1_CSIDriver> {
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
			url: '/apis/storage.k8s.io/v1/csidrivers/{name}',
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
	 * partially update the specified CSIDriver
	 * @returns io_k8s_api_storage_v1_CSIDriver OK
	 * @throws ApiError
	 */
	public static patchStorageV1CsiDriver(data: TDataPatchStorageV1CsiDriver): CancelablePromise<io_k8s_api_storage_v1_CSIDriver> {
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
			url: '/apis/storage.k8s.io/v1/csidrivers/{name}',
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
	 * list or watch objects of kind CSINode
	 * @returns io_k8s_api_storage_v1_CSINodeList OK
	 * @throws ApiError
	 */
	public static listStorageV1CsiNode(data: TDataListStorageV1CsiNode = {}): CancelablePromise<io_k8s_api_storage_v1_CSINodeList> {
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
			url: '/apis/storage.k8s.io/v1/csinodes',
			query: {
				pretty, allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * create a CSINode
	 * @returns io_k8s_api_storage_v1_CSINode OK
	 * @throws ApiError
	 */
	public static createStorageV1CsiNode(data: TDataCreateStorageV1CsiNode): CancelablePromise<io_k8s_api_storage_v1_CSINode> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/apis/storage.k8s.io/v1/csinodes',
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
	 * delete collection of CSINode
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
	 * @throws ApiError
	 */
	public static deleteStorageV1CollectionCsiNode(data: TDataDeleteStorageV1CollectionCsiNode = {}): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
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
			url: '/apis/storage.k8s.io/v1/csinodes',
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
	 * read the specified CSINode
	 * @returns io_k8s_api_storage_v1_CSINode OK
	 * @throws ApiError
	 */
	public static readStorageV1CsiNode(data: TDataReadStorageV1CsiNode): CancelablePromise<io_k8s_api_storage_v1_CSINode> {
		const {
name,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/storage.k8s.io/v1/csinodes/{name}',
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
	 * replace the specified CSINode
	 * @returns io_k8s_api_storage_v1_CSINode OK
	 * @throws ApiError
	 */
	public static replaceStorageV1CsiNode(data: TDataReplaceStorageV1CsiNode): CancelablePromise<io_k8s_api_storage_v1_CSINode> {
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
			url: '/apis/storage.k8s.io/v1/csinodes/{name}',
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
	 * delete a CSINode
	 * @returns io_k8s_api_storage_v1_CSINode OK
	 * @throws ApiError
	 */
	public static deleteStorageV1CsiNode(data: TDataDeleteStorageV1CsiNode): CancelablePromise<io_k8s_api_storage_v1_CSINode> {
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
			url: '/apis/storage.k8s.io/v1/csinodes/{name}',
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
	 * partially update the specified CSINode
	 * @returns io_k8s_api_storage_v1_CSINode OK
	 * @throws ApiError
	 */
	public static patchStorageV1CsiNode(data: TDataPatchStorageV1CsiNode): CancelablePromise<io_k8s_api_storage_v1_CSINode> {
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
			url: '/apis/storage.k8s.io/v1/csinodes/{name}',
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
	 * list or watch objects of kind CSIStorageCapacity
	 * @returns io_k8s_api_storage_v1_CSIStorageCapacityList OK
	 * @throws ApiError
	 */
	public static listStorageV1CsiStorageCapacityForAllNamespaces(data: TDataListStorageV1CsiStorageCapacityForAllNamespaces = {}): CancelablePromise<io_k8s_api_storage_v1_CSIStorageCapacityList> {
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
			url: '/apis/storage.k8s.io/v1/csistoragecapacities',
			query: {
				allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * list or watch objects of kind CSIStorageCapacity
	 * @returns io_k8s_api_storage_v1_CSIStorageCapacityList OK
	 * @throws ApiError
	 */
	public static listStorageV1NamespacedCsiStorageCapacity(data: TDataListStorageV1NamespacedCsiStorageCapacity): CancelablePromise<io_k8s_api_storage_v1_CSIStorageCapacityList> {
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
			url: '/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities',
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
	 * create a CSIStorageCapacity
	 * @returns io_k8s_api_storage_v1_CSIStorageCapacity OK
	 * @throws ApiError
	 */
	public static createStorageV1NamespacedCsiStorageCapacity(data: TDataCreateStorageV1NamespacedCsiStorageCapacity): CancelablePromise<io_k8s_api_storage_v1_CSIStorageCapacity> {
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
			url: '/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities',
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
	 * delete collection of CSIStorageCapacity
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
	 * @throws ApiError
	 */
	public static deleteStorageV1CollectionNamespacedCsiStorageCapacity(data: TDataDeleteStorageV1CollectionNamespacedCsiStorageCapacity): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
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
			url: '/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities',
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
	 * read the specified CSIStorageCapacity
	 * @returns io_k8s_api_storage_v1_CSIStorageCapacity OK
	 * @throws ApiError
	 */
	public static readStorageV1NamespacedCsiStorageCapacity(data: TDataReadStorageV1NamespacedCsiStorageCapacity): CancelablePromise<io_k8s_api_storage_v1_CSIStorageCapacity> {
		const {
name,
namespace,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}',
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
	 * replace the specified CSIStorageCapacity
	 * @returns io_k8s_api_storage_v1_CSIStorageCapacity OK
	 * @throws ApiError
	 */
	public static replaceStorageV1NamespacedCsiStorageCapacity(data: TDataReplaceStorageV1NamespacedCsiStorageCapacity): CancelablePromise<io_k8s_api_storage_v1_CSIStorageCapacity> {
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
			url: '/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}',
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
	 * delete a CSIStorageCapacity
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
	 * @throws ApiError
	 */
	public static deleteStorageV1NamespacedCsiStorageCapacity(data: TDataDeleteStorageV1NamespacedCsiStorageCapacity): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
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
			url: '/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}',
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
	 * partially update the specified CSIStorageCapacity
	 * @returns io_k8s_api_storage_v1_CSIStorageCapacity OK
	 * @throws ApiError
	 */
	public static patchStorageV1NamespacedCsiStorageCapacity(data: TDataPatchStorageV1NamespacedCsiStorageCapacity): CancelablePromise<io_k8s_api_storage_v1_CSIStorageCapacity> {
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
			url: '/apis/storage.k8s.io/v1/namespaces/{namespace}/csistoragecapacities/{name}',
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
	 * list or watch objects of kind StorageClass
	 * @returns io_k8s_api_storage_v1_StorageClassList OK
	 * @throws ApiError
	 */
	public static listStorageV1StorageClass(data: TDataListStorageV1StorageClass = {}): CancelablePromise<io_k8s_api_storage_v1_StorageClassList> {
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
			url: '/apis/storage.k8s.io/v1/storageclasses',
			query: {
				pretty, allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * create a StorageClass
	 * @returns io_k8s_api_storage_v1_StorageClass OK
	 * @throws ApiError
	 */
	public static createStorageV1StorageClass(data: TDataCreateStorageV1StorageClass): CancelablePromise<io_k8s_api_storage_v1_StorageClass> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/apis/storage.k8s.io/v1/storageclasses',
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
	 * delete collection of StorageClass
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
	 * @throws ApiError
	 */
	public static deleteStorageV1CollectionStorageClass(data: TDataDeleteStorageV1CollectionStorageClass = {}): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
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
			url: '/apis/storage.k8s.io/v1/storageclasses',
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
	 * read the specified StorageClass
	 * @returns io_k8s_api_storage_v1_StorageClass OK
	 * @throws ApiError
	 */
	public static readStorageV1StorageClass(data: TDataReadStorageV1StorageClass): CancelablePromise<io_k8s_api_storage_v1_StorageClass> {
		const {
name,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/storage.k8s.io/v1/storageclasses/{name}',
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
	 * replace the specified StorageClass
	 * @returns io_k8s_api_storage_v1_StorageClass OK
	 * @throws ApiError
	 */
	public static replaceStorageV1StorageClass(data: TDataReplaceStorageV1StorageClass): CancelablePromise<io_k8s_api_storage_v1_StorageClass> {
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
			url: '/apis/storage.k8s.io/v1/storageclasses/{name}',
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
	 * delete a StorageClass
	 * @returns io_k8s_api_storage_v1_StorageClass OK
	 * @throws ApiError
	 */
	public static deleteStorageV1StorageClass(data: TDataDeleteStorageV1StorageClass): CancelablePromise<io_k8s_api_storage_v1_StorageClass> {
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
			url: '/apis/storage.k8s.io/v1/storageclasses/{name}',
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
	 * partially update the specified StorageClass
	 * @returns io_k8s_api_storage_v1_StorageClass OK
	 * @throws ApiError
	 */
	public static patchStorageV1StorageClass(data: TDataPatchStorageV1StorageClass): CancelablePromise<io_k8s_api_storage_v1_StorageClass> {
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
			url: '/apis/storage.k8s.io/v1/storageclasses/{name}',
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
	 * list or watch objects of kind VolumeAttachment
	 * @returns io_k8s_api_storage_v1_VolumeAttachmentList OK
	 * @throws ApiError
	 */
	public static listStorageV1VolumeAttachment(data: TDataListStorageV1VolumeAttachment = {}): CancelablePromise<io_k8s_api_storage_v1_VolumeAttachmentList> {
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
			url: '/apis/storage.k8s.io/v1/volumeattachments',
			query: {
				pretty, allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * create a VolumeAttachment
	 * @returns io_k8s_api_storage_v1_VolumeAttachment OK
	 * @throws ApiError
	 */
	public static createStorageV1VolumeAttachment(data: TDataCreateStorageV1VolumeAttachment): CancelablePromise<io_k8s_api_storage_v1_VolumeAttachment> {
		const {
body,
dryRun,
fieldManager,
fieldValidation,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'POST',
			url: '/apis/storage.k8s.io/v1/volumeattachments',
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
	 * delete collection of VolumeAttachment
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_Status OK
	 * @throws ApiError
	 */
	public static deleteStorageV1CollectionVolumeAttachment(data: TDataDeleteStorageV1CollectionVolumeAttachment = {}): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_Status> {
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
			url: '/apis/storage.k8s.io/v1/volumeattachments',
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
	 * read the specified VolumeAttachment
	 * @returns io_k8s_api_storage_v1_VolumeAttachment OK
	 * @throws ApiError
	 */
	public static readStorageV1VolumeAttachment(data: TDataReadStorageV1VolumeAttachment): CancelablePromise<io_k8s_api_storage_v1_VolumeAttachment> {
		const {
name,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/storage.k8s.io/v1/volumeattachments/{name}',
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
	 * replace the specified VolumeAttachment
	 * @returns io_k8s_api_storage_v1_VolumeAttachment OK
	 * @throws ApiError
	 */
	public static replaceStorageV1VolumeAttachment(data: TDataReplaceStorageV1VolumeAttachment): CancelablePromise<io_k8s_api_storage_v1_VolumeAttachment> {
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
			url: '/apis/storage.k8s.io/v1/volumeattachments/{name}',
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
	 * delete a VolumeAttachment
	 * @returns io_k8s_api_storage_v1_VolumeAttachment OK
	 * @throws ApiError
	 */
	public static deleteStorageV1VolumeAttachment(data: TDataDeleteStorageV1VolumeAttachment): CancelablePromise<io_k8s_api_storage_v1_VolumeAttachment> {
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
			url: '/apis/storage.k8s.io/v1/volumeattachments/{name}',
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
	 * partially update the specified VolumeAttachment
	 * @returns io_k8s_api_storage_v1_VolumeAttachment OK
	 * @throws ApiError
	 */
	public static patchStorageV1VolumeAttachment(data: TDataPatchStorageV1VolumeAttachment): CancelablePromise<io_k8s_api_storage_v1_VolumeAttachment> {
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
			url: '/apis/storage.k8s.io/v1/volumeattachments/{name}',
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
	 * read status of the specified VolumeAttachment
	 * @returns io_k8s_api_storage_v1_VolumeAttachment OK
	 * @throws ApiError
	 */
	public static readStorageV1VolumeAttachmentStatus(data: TDataReadStorageV1VolumeAttachmentStatus): CancelablePromise<io_k8s_api_storage_v1_VolumeAttachment> {
		const {
name,
pretty,
} = data;
		return __request(OpenAPI, {
			method: 'GET',
			url: '/apis/storage.k8s.io/v1/volumeattachments/{name}/status',
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
	 * replace status of the specified VolumeAttachment
	 * @returns io_k8s_api_storage_v1_VolumeAttachment OK
	 * @throws ApiError
	 */
	public static replaceStorageV1VolumeAttachmentStatus(data: TDataReplaceStorageV1VolumeAttachmentStatus): CancelablePromise<io_k8s_api_storage_v1_VolumeAttachment> {
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
			url: '/apis/storage.k8s.io/v1/volumeattachments/{name}/status',
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
	 * partially update status of the specified VolumeAttachment
	 * @returns io_k8s_api_storage_v1_VolumeAttachment OK
	 * @throws ApiError
	 */
	public static patchStorageV1VolumeAttachmentStatus(data: TDataPatchStorageV1VolumeAttachmentStatus): CancelablePromise<io_k8s_api_storage_v1_VolumeAttachment> {
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
			url: '/apis/storage.k8s.io/v1/volumeattachments/{name}/status',
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
	 * watch individual changes to a list of CSIDriver. deprecated: use the 'watch' parameter with a list operation instead.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchStorageV1CsiDriverList(data: TDataWatchStorageV1CsiDriverList = {}): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
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
			url: '/apis/storage.k8s.io/v1/watch/csidrivers',
			query: {
				allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * watch changes to an object of kind CSIDriver. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchStorageV1CsiDriver(data: TDataWatchStorageV1CsiDriver): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
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
			url: '/apis/storage.k8s.io/v1/watch/csidrivers/{name}',
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
	 * watch individual changes to a list of CSINode. deprecated: use the 'watch' parameter with a list operation instead.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchStorageV1CsiNodeList(data: TDataWatchStorageV1CsiNodeList = {}): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
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
			url: '/apis/storage.k8s.io/v1/watch/csinodes',
			query: {
				allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * watch changes to an object of kind CSINode. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchStorageV1CsiNode(data: TDataWatchStorageV1CsiNode): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
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
			url: '/apis/storage.k8s.io/v1/watch/csinodes/{name}',
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
	 * watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchStorageV1CsiStorageCapacityListForAllNamespaces(data: TDataWatchStorageV1CsiStorageCapacityListForAllNamespaces = {}): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
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
			url: '/apis/storage.k8s.io/v1/watch/csistoragecapacities',
			query: {
				allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * watch individual changes to a list of CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchStorageV1NamespacedCsiStorageCapacityList(data: TDataWatchStorageV1NamespacedCsiStorageCapacityList): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
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
			url: '/apis/storage.k8s.io/v1/watch/namespaces/{namespace}/csistoragecapacities',
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
	 * watch changes to an object of kind CSIStorageCapacity. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchStorageV1NamespacedCsiStorageCapacity(data: TDataWatchStorageV1NamespacedCsiStorageCapacity): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
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
			url: '/apis/storage.k8s.io/v1/watch/namespaces/{namespace}/csistoragecapacities/{name}',
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
	 * watch individual changes to a list of StorageClass. deprecated: use the 'watch' parameter with a list operation instead.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchStorageV1StorageClassList(data: TDataWatchStorageV1StorageClassList = {}): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
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
			url: '/apis/storage.k8s.io/v1/watch/storageclasses',
			query: {
				allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * watch changes to an object of kind StorageClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchStorageV1StorageClass(data: TDataWatchStorageV1StorageClass): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
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
			url: '/apis/storage.k8s.io/v1/watch/storageclasses/{name}',
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
	 * watch individual changes to a list of VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchStorageV1VolumeAttachmentList(data: TDataWatchStorageV1VolumeAttachmentList = {}): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
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
			url: '/apis/storage.k8s.io/v1/watch/volumeattachments',
			query: {
				allowWatchBookmarks, continue: _continue, fieldSelector, labelSelector, limit, pretty, resourceVersion, resourceVersionMatch, sendInitialEvents, timeoutSeconds, watch
			},
			errors: {
				401: `Unauthorized`,
			},
		});
	}

	/**
	 * watch changes to an object of kind VolumeAttachment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
	 * @returns io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent OK
	 * @throws ApiError
	 */
	public static watchStorageV1VolumeAttachment(data: TDataWatchStorageV1VolumeAttachment): CancelablePromise<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent> {
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
			url: '/apis/storage.k8s.io/v1/watch/volumeattachments/{name}',
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

}