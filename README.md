# ![LOGO](logo.png) Kubernetes Engine **flow**ground Connector

## Description

A generated **flow**ground connector for the Kubernetes Engine API (version v1).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/container/v1/swagger.json<br/>
Generated at: 2019-05-07T17:41:27+03:00

## API Description

Builds and manages container-based applications, powered by the open source Kubernetes technology.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Lists all clusters owned by a project in either the specified zone or all<br/>
> zones.

*Tags:* `projects`

#### Input Parameters
* `parent` - _optional_ - The parent (project and location) where the clusters will be listed.
Specified in the format 'projects/*/locations/*'.
Location "-" matches all zones and all regions.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the parent field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides, or "-" for all zones.
This field has been deprecated and replaced by the parent field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a cluster, consisting of the specified number and type of Google<br/>
> Compute Engine instances.<br/>
> <br/>
> By default, the cluster is created in the project's<br/>
> [default network](/compute/docs/networks-and-firewalls#networks).<br/>
> <br/>
> One firewall is added for the cluster. After cluster creation,<br/>
> the cluster creates routes for each node to allow the containers<br/>
> on that node to communicate with all other instances in the<br/>
> cluster.<br/>
> <br/>
> Finally, an entry is added to the project's global metadata indicating<br/>
> which CIDR range is being used by the cluster.

*Tags:* `projects`

#### Input Parameters
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the parent field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the parent field.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Deletes the cluster, including the Kubernetes endpoint and all worker<br/>
> nodes.<br/>
> <br/>
> Firewalls and routes that were configured during cluster creation<br/>
> are also deleted.<br/>
> <br/>
> Other Google Compute Engine resources that might be in use by the cluster<br/>
> (e.g. load balancer resources) will not be deleted if they weren't present<br/>
> at the initial create time.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster to delete.
This field has been deprecated and replaced by the name field.
* `name` - _optional_ - The name (project, location, cluster) of the cluster to delete.
Specified in the format 'projects/*/locations/*/clusters/*'.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Gets the details of a specific cluster.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster to retrieve.
This field has been deprecated and replaced by the name field.
* `name` - _optional_ - The name (project, location, cluster) of the cluster to retrieve.
Specified in the format 'projects/*/locations/*/clusters/*'.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Updates the settings of a specific cluster.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster to upgrade.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets the addons for a specific cluster.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster to upgrade.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Enables or disables the ABAC authorization mechanism on a cluster.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster to update.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets the locations for a specific cluster.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster to upgrade.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets the logging service for a specific cluster.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster to upgrade.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Updates the master for a specific cluster.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster to upgrade.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets the monitoring service for a specific cluster.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster to upgrade.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists the node pools for a cluster.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster.
This field has been deprecated and replaced by the parent field.
* `parent` - _optional_ - The parent (project, location, cluster id) where the node pools will be
listed. Specified in the format 'projects/*/locations/*/clusters/*'.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://developers.google.com/console/help/new/#projectnumber).
This field has been deprecated and replaced by the parent field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the parent field.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a node pool for a cluster.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster.
This field has been deprecated and replaced by the parent field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://developers.google.com/console/help/new/#projectnumber).
This field has been deprecated and replaced by the parent field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the parent field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Deletes a node pool from a cluster.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster.
This field has been deprecated and replaced by the name field.
* `name` - _optional_ - The name (project, location, cluster, node pool id) of the node pool to
delete. Specified in the format
'projects/*/locations/*/clusters/*/nodePools/*'.
* `nodePoolId` - _required_ - Deprecated. The name of the node pool to delete.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://developers.google.com/console/help/new/#projectnumber).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Retrieves the node pool requested.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster.
This field has been deprecated and replaced by the name field.
* `name` - _optional_ - The name (project, location, cluster, node pool id) of the node pool to
get. Specified in the format
'projects/*/locations/*/clusters/*/nodePools/*'.
* `nodePoolId` - _required_ - Deprecated. The name of the node pool.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://developers.google.com/console/help/new/#projectnumber).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets the autoscaling settings for a specific node pool.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster to upgrade.
This field has been deprecated and replaced by the name field.
* `nodePoolId` - _required_ - Deprecated. The name of the node pool to upgrade.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets the NodeManagement options for a node pool.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster to update.
This field has been deprecated and replaced by the name field.
* `nodePoolId` - _required_ - Deprecated. The name of the node pool to update.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets the size for a specific node pool.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster to update.
This field has been deprecated and replaced by the name field.
* `nodePoolId` - _required_ - Deprecated. The name of the node pool to update.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Updates the version and/or image type for a specific node pool.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster to upgrade.
This field has been deprecated and replaced by the name field.
* `nodePoolId` - _required_ - Deprecated. The name of the node pool to upgrade.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Roll back the previously Aborted or Failed NodePool upgrade.<br/>
> This will be an no-op if the last upgrade successfully completed.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster to rollback.
This field has been deprecated and replaced by the name field.
* `nodePoolId` - _required_ - Deprecated. The name of the node pool to rollback.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets labels on a cluster.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://developers.google.com/console/help/new/#projectnumber).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Completes master IP rotation.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://developers.google.com/console/help/new/#projectnumber).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets the maintenance policy for a cluster.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - The name of the cluster to update.
* `projectId` - _required_ - The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
* `zone` - _required_ - The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Used to set master auth materials. Currently supports :-<br/>
> Changing the admin password for a specific cluster.<br/>
> This can be either via password generation or explicitly set the password.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster to upgrade.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Enables/Disables Network Policy for a cluster.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://developers.google.com/console/help/new/#projectnumber).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Start master IP rotation.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - Deprecated. The name of the cluster.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://developers.google.com/console/help/new/#projectnumber).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists all operations in a project in a specific zone or all zones.

*Tags:* `projects`

#### Input Parameters
* `parent` - _optional_ - The parent (project and location) where the operations will be listed.
Specified in the format 'projects/*/locations/*'.
Location "-" matches all zones and all regions.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the parent field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) to return operations for, or `-` for
all zones. This field has been deprecated and replaced by the parent field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Gets the specified operation.

*Tags:* `projects`

#### Input Parameters
* `name` - _optional_ - The name (project, location, operation id) of the operation to get.
Specified in the format 'projects/*/locations/*/operations/*'.
* `operationId` - _required_ - Deprecated. The server-assigned `name` of the operation.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Cancels the specified operation.

*Tags:* `projects`

#### Input Parameters
* `operationId` - _required_ - Deprecated. The server-assigned `name` of the operation.
This field has been deprecated and replaced by the name field.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the operation resides.
This field has been deprecated and replaced by the name field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Returns configuration info about the Kubernetes Engine service.

*Tags:* `projects`

#### Input Parameters
* `name` - _optional_ - The name (project and location) of the server config to get,
specified in the format 'projects/*/locations/*'.
* `projectId` - _required_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _required_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) to return operations for.
This field has been deprecated and replaced by the name field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Deletes a node pool from a cluster.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _optional_ - Deprecated. The name of the cluster.
This field has been deprecated and replaced by the name field.
* `name` - _required_ - The name (project, location, cluster, node pool id) of the node pool to
delete. Specified in the format
'projects/*/locations/*/clusters/*/nodePools/*'.
* `nodePoolId` - _optional_ - Deprecated. The name of the node pool to delete.
This field has been deprecated and replaced by the name field.
* `projectId` - _optional_ - Deprecated. The Google Developers Console [project ID or project
number](https://developers.google.com/console/help/new/#projectnumber).
This field has been deprecated and replaced by the name field.
* `zone` - _optional_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Retrieves the node pool requested.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _optional_ - Deprecated. The name of the cluster.
This field has been deprecated and replaced by the name field.
* `name` - _required_ - The name (project, location, cluster, node pool id) of the node pool to
get. Specified in the format
'projects/*/locations/*/clusters/*/nodePools/*'.
* `nodePoolId` - _optional_ - Deprecated. The name of the node pool.
This field has been deprecated and replaced by the name field.
* `projectId` - _optional_ - Deprecated. The Google Developers Console [project ID or project
number](https://developers.google.com/console/help/new/#projectnumber).
This field has been deprecated and replaced by the name field.
* `zone` - _optional_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the name field.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Updates the version and/or image type for a specific node pool.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster, node pool) of the node pool to
update. Specified in the format
'projects/*/locations/*/clusters/*/nodePools/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Returns configuration info about the Kubernetes Engine service.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project and location) of the server config to get,
specified in the format 'projects/*/locations/*'.
* `projectId` - _optional_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the name field.
* `zone` - _optional_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) to return operations for.
This field has been deprecated and replaced by the name field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Cancels the specified operation.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, operation id) of the operation to cancel.
Specified in the format 'projects/*/locations/*/operations/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Completes master IP rotation.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster id) of the cluster to complete IP
rotation. Specified in the format 'projects/*/locations/*/clusters/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Roll back the previously Aborted or Failed NodePool upgrade.<br/>
> This will be an no-op if the last upgrade successfully completed.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster, node pool id) of the node poll to
rollback upgrade.
Specified in the format 'projects/*/locations/*/clusters/*/nodePools/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets the addons for a specific cluster.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster) of the cluster to set addons.
Specified in the format 'projects/*/locations/*/clusters/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets the autoscaling settings for a specific node pool.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster, node pool) of the node pool to set
autoscaler settings. Specified in the format
'projects/*/locations/*/clusters/*/nodePools/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Enables or disables the ABAC authorization mechanism on a cluster.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster id) of the cluster to set legacy abac.
Specified in the format 'projects/*/locations/*/clusters/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets the locations for a specific cluster.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster) of the cluster to set locations.
Specified in the format 'projects/*/locations/*/clusters/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets the logging service for a specific cluster.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster) of the cluster to set logging.
Specified in the format 'projects/*/locations/*/clusters/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets the maintenance policy for a cluster.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster id) of the cluster to set maintenance
policy.
Specified in the format 'projects/*/locations/*/clusters/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets the NodeManagement options for a node pool.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster, node pool id) of the node pool to set
management properties. Specified in the format
'projects/*/locations/*/clusters/*/nodePools/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Used to set master auth materials. Currently supports :-<br/>
> Changing the admin password for a specific cluster.<br/>
> This can be either via password generation or explicitly set the password.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster) of the cluster to set auth.
Specified in the format 'projects/*/locations/*/clusters/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets the monitoring service for a specific cluster.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster) of the cluster to set monitoring.
Specified in the format 'projects/*/locations/*/clusters/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Enables/Disables Network Policy for a cluster.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster id) of the cluster to set networking
policy. Specified in the format 'projects/*/locations/*/clusters/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets labels on a cluster.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster id) of the cluster to set labels.
Specified in the format 'projects/*/locations/*/clusters/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Sets the size for a specific node pool.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster, node pool id) of the node pool to set
size.
Specified in the format 'projects/*/locations/*/clusters/*/nodePools/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Start master IP rotation.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster id) of the cluster to start IP
rotation. Specified in the format 'projects/*/locations/*/clusters/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Updates the master for a specific cluster.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name (project, location, cluster) of the cluster to update.
Specified in the format 'projects/*/locations/*/clusters/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### GetOpenIDConfig gets the OIDC discovery document for the cluster.<br/>
> See the OpenID Connect Discovery 1.0 specification for details.<br/>
> https://openid.net/specs/openid-connect-discovery-1_0.html<br/>
> This API is not yet intended for general use, and is not available for all<br/>
> clusters.

*Tags:* `projects`

#### Input Parameters
* `parent` - _required_ - The cluster (project, location, cluster id) to get the discovery document
for. Specified in the format 'projects/*/locations/*/clusters/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists all clusters owned by a project in either the specified zone or all<br/>
> zones.

*Tags:* `projects`

#### Input Parameters
* `parent` - _required_ - The parent (project and location) where the clusters will be listed.
Specified in the format 'projects/*/locations/*'.
Location "-" matches all zones and all regions.
* `projectId` - _optional_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the parent field.
* `zone` - _optional_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides, or "-" for all zones.
This field has been deprecated and replaced by the parent field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a cluster, consisting of the specified number and type of Google<br/>
> Compute Engine instances.<br/>
> <br/>
> By default, the cluster is created in the project's<br/>
> [default network](/compute/docs/networks-and-firewalls#networks).<br/>
> <br/>
> One firewall is added for the cluster. After cluster creation,<br/>
> the cluster creates routes for each node to allow the containers<br/>
> on that node to communicate with all other instances in the<br/>
> cluster.<br/>
> <br/>
> Finally, an entry is added to the project's global metadata indicating<br/>
> which CIDR range is being used by the cluster.

*Tags:* `projects`

#### Input Parameters
* `parent` - _required_ - The parent (project and location) where the cluster will be created.
Specified in the format 'projects/*/locations/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### GetJSONWebKeys gets the public component of the cluster signing keys in<br/>
> JSON Web Key format.<br/>
> This API is not yet intended for general use, and is not available for all<br/>
> clusters.

*Tags:* `projects`

#### Input Parameters
* `parent` - _required_ - The cluster (project, location, cluster id) to get keys for. Specified in
the format 'projects/*/locations/*/clusters/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists the node pools for a cluster.

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _optional_ - Deprecated. The name of the cluster.
This field has been deprecated and replaced by the parent field.
* `parent` - _required_ - The parent (project, location, cluster id) where the node pools will be
listed. Specified in the format 'projects/*/locations/*/clusters/*'.
* `projectId` - _optional_ - Deprecated. The Google Developers Console [project ID or project
number](https://developers.google.com/console/help/new/#projectnumber).
This field has been deprecated and replaced by the parent field.
* `zone` - _optional_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) in which the cluster
resides.
This field has been deprecated and replaced by the parent field.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a node pool for a cluster.

*Tags:* `projects`

#### Input Parameters
* `parent` - _required_ - The parent (project, location, cluster id) where the node pool will be
created. Specified in the format
'projects/*/locations/*/clusters/*'.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists all operations in a project in a specific zone or all zones.

*Tags:* `projects`

#### Input Parameters
* `parent` - _required_ - The parent (project and location) where the operations will be listed.
Specified in the format 'projects/*/locations/*'.
Location "-" matches all zones and all regions.
* `projectId` - _optional_ - Deprecated. The Google Developers Console [project ID or project
number](https://support.google.com/cloud/answer/6158840).
This field has been deprecated and replaced by the parent field.
* `zone` - _optional_ - Deprecated. The name of the Google Compute Engine
[zone](/compute/docs/zones#available) to return operations for, or `-` for
all zones. This field has been deprecated and replaced by the parent field.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

## License

**flow**ground :- Telekom iPaaS / googleapis-com-container-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
