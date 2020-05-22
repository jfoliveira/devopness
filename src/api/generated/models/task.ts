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
 * @interface Task
 */
export interface Task {
    /**
     * The Id of the given background process
     * @type {number}
     * @memberof Task
     */
    id?: number;
    /**
     * The command line to be executed when running the task
     * @type {string}
     * @memberof Task
     */
    command: string;
    /**
     * A cron expression consisting of Minute, Hour, Day of Month, Month and Day of Week subexpressions
     * @type {string}
     * @memberof Task
     */
    pattern: string;
    /**
     * A translation of the cron expression to a readable string indicating its execution frequency.
     * @type {string}
     * @memberof Task
     */
    pattern_human_readable?: TaskPatternHumanReadableEnum;
    /**
     * The name of the Unix user on behalf of which the task will be executed
     * @type {string}
     * @memberof Task
     */
    run_as_user: string;
    /**
     * Indicates if the task was auto_generated by `devopness` itself
     * @type {boolean}
     * @memberof Task
     */
    auto_generated?: boolean;
    /**
     * Current status of deploying to remote servers the current task
     * @type {string}
     * @memberof Task
     */
    status?: TaskStatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum TaskPatternHumanReadableEnum {
    EveryMinute = 'Every Minute',
    Hourly = 'Hourly',
    Nightly = 'Nightly',
    Weekly = 'Weekly',
    Monthly = 'Monthly',
    Yearly = 'Yearly'
}
/**
    * @export
    * @enum {string}
    */
export enum TaskStatusEnum {
    Pending = 'pending',
    InProgress = 'in-progress',
    Cancelled = 'cancelled',
    Completed = 'completed',
    Failed = 'failed'
}



