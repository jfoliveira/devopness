/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DeploymentType } from './deployment-type';

/**
 * 
 * @export
 * @interface ApplicationDeployment
 */
export interface ApplicationDeployment {
    /**
     * 
     * @type {DeploymentType}
     * @memberof ApplicationDeployment
     */
    type: DeploymentType;
    /**
     * The commit\'s full hash that uniquely identify a commit. Required when re-deploying
     * @type {string}
     * @memberof ApplicationDeployment
     */
    hash?: string;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof ApplicationDeployment
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof ApplicationDeployment
     */
    updated_at?: string;
}

