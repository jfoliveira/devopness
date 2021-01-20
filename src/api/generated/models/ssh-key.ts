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


import { ActionRelation } from './action-relation';
import { UserRelation } from './user-relation';

/**
 * 
 * @export
 * @interface SshKey
 */
export interface SshKey {
    /**
     * The Id of the given SSH public key
     * @type {number}
     * @memberof SshKey
     */
    id?: number;
    /**
     * The name entered by the user to uniquely identify the public SSH key
     * @type {string}
     * @memberof SshKey
     */
    name: string;
    /**
     * The Id of the user to which the SSH key belongs to
     * @type {number}
     * @memberof SshKey
     */
    created_by?: number;
    /**
     * The public SSH key to add to your `devopness` account and associate it to the given project
     * @type {string}
     * @memberof SshKey
     */
    public_key?: string;
    /**
     * The hashed fingerprint of the public key
     * @type {string}
     * @memberof SshKey
     */
    fingerprint?: string;
    /**
     * 
     * @type {UserRelation}
     * @memberof SshKey
     */
    created_by_user?: UserRelation;
    /**
     * 
     * @type {ActionRelation}
     * @memberof SshKey
     */
    last_action?: ActionRelation | null;
}

