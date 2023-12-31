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
import type {
  TripList,
} from '../models/index';
import {
    TripListFromJSON,
    TripListToJSON,
} from '../models/index';

export interface Verb9Request {
    ctx: string;
    requestId?: string;
    format?: Verb9FormatEnum;
    jsonpCallback?: string;
    lang?: string;
    poly?: Verb9PolyEnum;
    polyEnc?: Verb9PolyEncEnum;
    eco?: Verb9EcoEnum;
}

/**
 * 
 */
export class GisrouteApi extends runtime.BaseAPI {

    /**
     * Gis Route
     */
    async verb9Raw(requestParameters: Verb9Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TripList>> {
        if (requestParameters.ctx === null || requestParameters.ctx === undefined) {
            throw new runtime.RequiredError('ctx','Required parameter requestParameters.ctx was null or undefined when calling verb9.');
        }

        const queryParameters: any = {};

        if (requestParameters.requestId !== undefined) {
            queryParameters['requestId'] = requestParameters.requestId;
        }

        if (requestParameters.format !== undefined) {
            queryParameters['format'] = requestParameters.format;
        }

        if (requestParameters.jsonpCallback !== undefined) {
            queryParameters['jsonpCallback'] = requestParameters.jsonpCallback;
        }

        if (requestParameters.lang !== undefined) {
            queryParameters['lang'] = requestParameters.lang;
        }

        if (requestParameters.ctx !== undefined) {
            queryParameters['ctx'] = requestParameters.ctx;
        }

        if (requestParameters.poly !== undefined) {
            queryParameters['poly'] = requestParameters.poly;
        }

        if (requestParameters.polyEnc !== undefined) {
            queryParameters['polyEnc'] = requestParameters.polyEnc;
        }

        if (requestParameters.eco !== undefined) {
            queryParameters['eco'] = requestParameters.eco;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["accessId"] = this.configuration.apiKey("accessId"); // accessId authentication
        }

        const response = await this.request({
            path: `/gisroute`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TripListFromJSON(jsonValue));
    }

    /**
     * Gis Route
     */
    async verb9(requestParameters: Verb9Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TripList> {
        const response = await this.verb9Raw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const Verb9FormatEnum = {
    Xml: 'xml',
    Json: 'json',
    Jsonp: 'jsonp'
} as const;
export type Verb9FormatEnum = typeof Verb9FormatEnum[keyof typeof Verb9FormatEnum];
/**
 * @export
 */
export const Verb9PolyEnum = {
    _0: '0',
    _1: '1'
} as const;
export type Verb9PolyEnum = typeof Verb9PolyEnum[keyof typeof Verb9PolyEnum];
/**
 * @export
 */
export const Verb9PolyEncEnum = {
    Dlt: 'DLT',
    Gpa: 'GPA',
    N: 'N'
} as const;
export type Verb9PolyEncEnum = typeof Verb9PolyEncEnum[keyof typeof Verb9PolyEncEnum];
/**
 * @export
 */
export const Verb9EcoEnum = {
    _0: '0',
    _1: '1'
} as const;
export type Verb9EcoEnum = typeof Verb9EcoEnum[keyof typeof Verb9EcoEnum];
