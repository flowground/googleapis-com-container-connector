/**
 * Auto-generated action file for "Kubernetes Engine" API.
 *
 * Generated at: 2019-05-07T14:41:27.641Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-container-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'container.projects.locations.clusters.create'
 * Endpoint Path: '/v1/{parent}/clusters'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "parent",
    "access_token",
    "alt",
    "callback",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "uploadType",
    "upload_protocol"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "parent": "parent",
    "access_token": "access_token",
    "alt": "alt",
    "callback": "callback",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "uploadType": "uploadType",
    "upload_protocol": "upload_protocol",
    "disabled": "disabled",
    "horizontalPodAutoscaling": "horizontalPodAutoscaling",
    "httpLoadBalancing": "httpLoadBalancing",
    "kubernetesDashboard": "kubernetesDashboard",
    "networkPolicyConfig": "networkPolicyConfig",
    "addonsConfig": "addonsConfig",
    "clusterIpv4Cidr": "clusterIpv4Cidr",
    "conditions": "conditions",
    "createTime": "createTime",
    "currentMasterVersion": "currentMasterVersion",
    "currentNodeCount": "currentNodeCount",
    "currentNodeVersion": "currentNodeVersion",
    "description": "description",
    "enableKubernetesAlpha": "enableKubernetesAlpha",
    "endpoint": "endpoint",
    "expireTime": "expireTime",
    "initialClusterVersion": "initialClusterVersion",
    "initialNodeCount": "initialNodeCount",
    "instanceGroupUrls": "instanceGroupUrls",
    "clusterIpv4CidrBlock": "clusterIpv4CidrBlock",
    "clusterSecondaryRangeName": "clusterSecondaryRangeName",
    "createSubnetwork": "createSubnetwork",
    "nodeIpv4Cidr": "nodeIpv4Cidr",
    "nodeIpv4CidrBlock": "nodeIpv4CidrBlock",
    "servicesIpv4Cidr": "servicesIpv4Cidr",
    "servicesIpv4CidrBlock": "servicesIpv4CidrBlock",
    "servicesSecondaryRangeName": "servicesSecondaryRangeName",
    "subnetworkName": "subnetworkName",
    "useIpAliases": "useIpAliases",
    "ipAllocationPolicy": "ipAllocationPolicy",
    "labelFingerprint": "labelFingerprint",
    "enabled": "enabled",
    "legacyAbac": "legacyAbac",
    "location": "location",
    "locations": "locations",
    "loggingService": "loggingService",
    "duration": "duration",
    "startTime": "startTime",
    "dailyMaintenanceWindow": "dailyMaintenanceWindow",
    "window": "window",
    "maintenancePolicy": "maintenancePolicy",
    "clientCertificate": "clientCertificate",
    "issueClientCertificate": "issueClientCertificate",
    "clientCertificateConfig": "clientCertificateConfig",
    "clientKey": "clientKey",
    "clusterCaCertificate": "clusterCaCertificate",
    "password": "password",
    "username": "username",
    "masterAuth": "masterAuth",
    "cidrBlocks": "cidrBlocks",
    "masterAuthorizedNetworksConfig": "masterAuthorizedNetworksConfig",
    "monitoringService": "monitoringService",
    "name": "name",
    "network": "network",
    "subnetwork": "subnetwork",
    "networkConfig": "networkConfig",
    "provider": "provider",
    "networkPolicy": "networkPolicy",
    "accelerators": "accelerators",
    "diskSizeGb": "diskSizeGb",
    "diskType": "diskType",
    "imageType": "imageType",
    "labels": "labels",
    "localSsdCount": "localSsdCount",
    "machineType": "machineType",
    "metadata": "metadata",
    "minCpuPlatform": "minCpuPlatform",
    "oauthScopes": "oauthScopes",
    "preemptible": "preemptible",
    "serviceAccount": "serviceAccount",
    "tags": "tags",
    "taints": "taints",
    "nodeConfig": "nodeConfig",
    "nodeIpv4CidrSize": "nodeIpv4CidrSize",
    "nodePools": "nodePools",
    "enablePrivateEndpoint": "enablePrivateEndpoint",
    "enablePrivateNodes": "enablePrivateNodes",
    "masterIpv4CidrBlock": "masterIpv4CidrBlock",
    "privateEndpoint": "privateEndpoint",
    "publicEndpoint": "publicEndpoint",
    "privateClusterConfig": "privateClusterConfig",
    "resourceLabels": "resourceLabels",
    "selfLink": "selfLink",
    "status": "status",
    "statusMessage": "statusMessage",
    "zone": "zone",
    "cluster": "cluster",
    "projectId": "projectId",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'container.projects.locations.clusters.create',
        pathName: '/v1/{parent}/clusters',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}