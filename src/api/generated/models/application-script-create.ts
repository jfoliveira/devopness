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
 * @interface ApplicationScriptCreate
 */
export interface ApplicationScriptCreate {
    /**
     * Name/short description of the script
     * @type {string}
     * @memberof ApplicationScriptCreate
     */
    name: string;
    /**
     * A command line or multiline bash script
     * @type {string}
     * @memberof ApplicationScriptCreate
     */
    source_code: string;
    /**
     * 
     * @type {TriggerType}
     * @memberof ApplicationScriptCreate
     */
    trigger_type: TriggerType;
    /**
     * 
     * @type {TriggerEvent}
     * @memberof ApplicationScriptCreate
     */
    trigger_event: TriggerEvent;
    /**
     * The relative order of the script execution in case the event has multiple scripts attached to it
     * @type {number}
     * @memberof ApplicationScriptCreate
     */
    trigger_order: number;
}

