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
  LocationList,
} from '../models/index';
import {
    LocationListFromJSON,
    LocationListToJSON,
} from '../models/index';

export interface Verb2Request {
    originCoordLat: number;
    originCoordLong: number;
    requestId?: string;
    format?: Verb2FormatEnum;
    jsonpCallback?: string;
    lang?: string;
    r?: number;
    maxNo?: number;
    type?: Verb2TypeEnum;
    locationSelectionMode?: Verb2LocationSelectionModeEnum;
    products?: number;
    meta?: string;
    sattributes?: string;
    sinfotexts?: string;
    poolId?: string;
}

/**
 * 
 */
export class LocationNearbystopsApi extends runtime.BaseAPI {

    /**
     * Location search by coordinate
     */
    async verb2Raw(requestParameters: Verb2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationList>> {
        if (requestParameters.originCoordLat === null || requestParameters.originCoordLat === undefined) {
            throw new runtime.RequiredError('originCoordLat','Required parameter requestParameters.originCoordLat was null or undefined when calling verb2.');
        }

        if (requestParameters.originCoordLong === null || requestParameters.originCoordLong === undefined) {
            throw new runtime.RequiredError('originCoordLong','Required parameter requestParameters.originCoordLong was null or undefined when calling verb2.');
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

        if (requestParameters.originCoordLat !== undefined) {
            queryParameters['originCoordLat'] = requestParameters.originCoordLat;
        }

        if (requestParameters.originCoordLong !== undefined) {
            queryParameters['originCoordLong'] = requestParameters.originCoordLong;
        }

        if (requestParameters.r !== undefined) {
            queryParameters['r'] = requestParameters.r;
        }

        if (requestParameters.maxNo !== undefined) {
            queryParameters['maxNo'] = requestParameters.maxNo;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.locationSelectionMode !== undefined) {
            queryParameters['locationSelectionMode'] = requestParameters.locationSelectionMode;
        }

        if (requestParameters.products !== undefined) {
            queryParameters['products'] = requestParameters.products;
        }

        if (requestParameters.meta !== undefined) {
            queryParameters['meta'] = requestParameters.meta;
        }

        if (requestParameters.sattributes !== undefined) {
            queryParameters['sattributes'] = requestParameters.sattributes;
        }

        if (requestParameters.sinfotexts !== undefined) {
            queryParameters['sinfotexts'] = requestParameters.sinfotexts;
        }

        if (requestParameters.poolId !== undefined) {
            queryParameters['poolId'] = requestParameters.poolId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["accessId"] = this.configuration.apiKey("accessId"); // accessId authentication
        }

        const response = await this.request({
            path: `/location.nearbystops`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationListFromJSON(jsonValue));
    }

    /**
     * Location search by coordinate
     */
    async verb2(requestParameters: Verb2Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationList> {
        const response = await this.verb2Raw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const Verb2FormatEnum = {
    Xml: 'xml',
    Json: 'json',
    Jsonp: 'jsonp'
} as const;
export type Verb2FormatEnum = typeof Verb2FormatEnum[keyof typeof Verb2FormatEnum];
/**
 * @export
 */
export const Verb2TypeEnum = {
    S: 'S',
    P: 'P',
    Sp: 'SP',
    Se: 'SE',
    Pe: 'PE',
    Spe: 'SPE'
} as const;
export type Verb2TypeEnum = typeof Verb2TypeEnum[keyof typeof Verb2TypeEnum];
/**
 * @export
 */
export const Verb2LocationSelectionModeEnum = {
    A: 'SLCT_A',
    N: 'SLCT_N'
} as const;
export type Verb2LocationSelectionModeEnum = typeof Verb2LocationSelectionModeEnum[keyof typeof Verb2LocationSelectionModeEnum];