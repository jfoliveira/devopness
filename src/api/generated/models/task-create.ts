/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone  # Authentication  <!-- ReDoc-Inject: <security-definitions> -->
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface TaskCreate
 */
export interface TaskCreate {
    /**
     * The command line to be executed when running the task
     * @type {string}
     * @memberof TaskCreate
     */
    command: string;
    /**
     * A cron expression consisting of Minute, Hour, Day of Month, Month and Day of Week subexpressions
     * @type {string}
     * @memberof TaskCreate
     */
    pattern: string;
    /**
     * The name of the Unix user on behalf of which the task will be executed
     * @type {string}
     * @memberof TaskCreate
     */
    run_as_user: string;
    /**
     * Indicates if the task was auto_generated by `devopness` itself
     * @type {boolean}
     * @memberof TaskCreate
     */
    auto_generated?: boolean;
}


