/* tslint:disable */
/* eslint-disable */
/**
 * Proxy API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.35.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface Verb14Request {
    type: Verb14TypeEnum;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Health API
     */
    async verb14Raw(requestParameters: Verb14Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling verb14.');
        }

        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/systemInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Health API
     */
    async verb14(requestParameters: Verb14Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.verb14Raw(requestParameters, initOverrides);
    }

}

/**
 * @export
 */
export const Verb14TypeEnum = {
    Full: 'full',
    Ready: 'ready',
    Alive: 'alive'
} as const;
export type Verb14TypeEnum = typeof Verb14TypeEnum[keyof typeof Verb14TypeEnum];
