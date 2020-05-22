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
 * @interface SocialAccountCreate
 */
export interface SocialAccountCreate {
    /**
     * The name of the Social Authentication provider
     * @type {string}
     * @memberof SocialAccountCreate
     */
    provider: SocialAccountCreateProviderEnum;
    /**
     * The temporary code forwarded by the OAuth provider as a parameter to our callback URL
     * @type {string}
     * @memberof SocialAccountCreate
     */
    callback_code: string;
}

/**
    * @export
    * @enum {string}
    */
export enum SocialAccountCreateProviderEnum {
    Bitbucket = 'bitbucket',
    Facebook = 'facebook',
    Github = 'github',
    Gitlab = 'gitlab',
    Google = 'google',
    Linkedin = 'linkedin'
}



