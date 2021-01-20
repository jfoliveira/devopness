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

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { SslCertificate } from '../../generated/models';
import { SslCertificateCreate } from '../../generated/models';
import { SslCertificateRelation } from '../../generated/models';

/**
 * ApplicationsSSLCertificatesApiService - Auto-generated
 */
export class ApplicationsSSLCertificatesApiService extends ApiBaseService {
    /**
     * 
     * @summary Create a new SSL certificate linked to the current application
     * @param {number} applicationId Unique id of the parent application
     * @param {SslCertificateCreate} sslCertificateCreate A JSON object containing data for creating a new record of SSL certificate
     */
    public async addSslCertificateToApplication(applicationId: number, sslCertificateCreate: SslCertificateCreate): Promise<ApiResponse<SslCertificate>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'addSslCertificateToApplication');
        }
        if (sslCertificateCreate === null || sslCertificateCreate === undefined) {
            throw new ArgumentNullException('sslCertificateCreate', 'addSslCertificateToApplication');
        }
        
        let queryString = '';

        const requestUrl = '/applications/{application_id}/ssl-certificates' + (queryString? `?${queryString}` : '');

        const response = await this.post <SslCertificate, SslCertificateCreate>(requestUrl.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))), sslCertificateCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Returns a list of SSL certificates issued to an application
     * @param {number} applicationId Unique ID of the application to retrieve SSL Certificates from
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listApplicationSslCertificates(applicationId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<SslCertificateRelation>>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'listApplicationSslCertificates');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/applications/{application_id}/ssl-certificates' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<SslCertificateRelation>>(requestUrl.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))));
        return new ApiResponse(response);
    }
}
