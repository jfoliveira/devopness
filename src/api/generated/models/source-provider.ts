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


import { SourceProviderDisplayableName } from './source-provider-displayable-name';
import { SourceProviderName } from './source-provider-name';

/**
 * 
 * @export
 * @interface SourceProvider
 */
export interface SourceProvider {
    /**
     * The unique id of the given record
     * @type {number}
     * @memberof SourceProvider
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof SourceProvider
     */
    name?: string;
    /**
     * 
     * @type {SourceProviderDisplayableName}
     * @memberof SourceProvider
     */
    name_human_readable?: SourceProviderDisplayableName;
    /**
     * 
     * @type {SourceProviderName}
     * @memberof SourceProvider
     */
    provider: SourceProviderName;
    /**
     * The nickname of the user on the Source Authentication provider
     * @type {string}
     * @memberof SourceProvider
     */
    provider_user_nickname: string;
    /**
     * The current user\'s id
     * @type {number}
     * @memberof SourceProvider
     */
    user_id?: number;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof SourceProvider
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof SourceProvider
     */
    updated_at?: string;
}

