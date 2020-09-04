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


import { TriggerEvent } from './trigger-event';
import { TriggerType } from './trigger-type';

/**
 * 
 * @export
 * @interface ApplicationScript
 */
export interface ApplicationScript {
    /**
     * The unique id of the given record
     * @type {number}
     * @memberof ApplicationScript
     */
    id: number;
    /**
     * The unique id of the application that script is linked
     * @type {number}
     * @memberof ApplicationScript
     */
    application_id: number;
    /**
     * The unique id of the user that own the script
     * @type {number}
     * @memberof ApplicationScript
     */
    user_id: number;
    /**
     * Name/short description of the script
     * @type {string}
     * @memberof ApplicationScript
     */
    name: string;
    /**
     * A command line or multiline bash script
     * @type {string}
     * @memberof ApplicationScript
     */
    source_code: string;
    /**
     * 
     * @type {TriggerType}
     * @memberof ApplicationScript
     */
    trigger_type: TriggerType;
    /**
     * 
     * @type {TriggerEvent}
     * @memberof ApplicationScript
     */
    trigger_event: TriggerEvent;
    /**
     * The relative order of the script execution in case the event has multiple scripts attached
     * @type {number}
     * @memberof ApplicationScript
     */
    trigger_order: number;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof ApplicationScript
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof ApplicationScript
     */
    updated_at?: string;
}

