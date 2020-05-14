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



/**
 * 
 * @export
 * @interface ApplicationEnvironmentVariable
 */
export interface ApplicationEnvironmentVariable {
    /**
     * The unique key used to identify the variable on the target
     * @type {string}
     * @memberof ApplicationEnvironmentVariable
     */
    key: string;
    /**
     * The value to be assigned to this variable when deployed to its target
     * @type {string}
     * @memberof ApplicationEnvironmentVariable
     */
    value: string;
    /**
     * A text describing the variable, provided by the end user
     * @type {string}
     * @memberof ApplicationEnvironmentVariable
     */
    description?: string;
    /**
     * The target defining how the variable key/value pair will be deployed
     * @type {string}
     * @memberof ApplicationEnvironmentVariable
     */
    target: ApplicationEnvironmentVariableTargetEnum;
    /**
     * The type of the key/value pair
     * @type {string}
     * @memberof ApplicationEnvironmentVariable
     */
    type: ApplicationEnvironmentVariableTypeEnum;
    /**
     * Indicates if the variable value should be encrypted by `devopness` in the deployment logs
     * @type {boolean}
     * @memberof ApplicationEnvironmentVariable
     */
    encrypted?: boolean;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof ApplicationEnvironmentVariable
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof ApplicationEnvironmentVariable
     */
    updated_at?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ApplicationEnvironmentVariableTargetEnum {
    AppConfigFile = 'app-config-file',
    DeploymentScript = 'deployment-script',
    SharedScript = 'shared-script',
    NginxBlockHttpBefore = 'nginx-block-http-before',
    NginxBlockHttpAfter = 'nginx-block-http-after',
    NginxBlockServer = 'nginx-block-server',
    OsEnvVar = 'os-env-var',
    PhpCli = 'php-cli',
    PhpWeb = 'php-web'
}
/**
    * @export
    * @enum {string}
    */
export enum ApplicationEnvironmentVariableTypeEnum {
    Variable = 'variable',
    File = 'file'
}



