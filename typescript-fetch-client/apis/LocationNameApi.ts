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

export interface Verb1Request {
    input: string;
    requestId?: string;
    format?: Verb1FormatEnum;
    jsonpCallback?: string;
    lang?: string;
    maxNo?: number;
    type?: Verb1TypeEnum;
    locationSelectionMode?: Verb1LocationSelectionModeEnum;
    withEquivalentLocations?: Verb1WithEquivalentLocationsEnum;
    restrictSelection?: Verb1RestrictSelectionEnum;
    products?: number;
    withProducts?: Verb1WithProductsEnum;
    productRepresentatives?: Verb1ProductRepresentativesEnum;
    coordLat?: number;
    coordLong?: number;
    r?: number;
    refineId?: string;
    meta?: string;
    stations?: string;
    sattributes?: string;
    sinfotexts?: string;
    filterMode?: Verb1FilterModeEnum;
    poolId?: string;
    withMastNames?: Verb1WithMastNamesEnum;
}

/**
 * 
 */
export class LocationNameApi extends runtime.BaseAPI {

    /**
     * Location search by name
     */
    async verb1Raw(requestParameters: Verb1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LocationList>> {
        if (requestParameters.input === null || requestParameters.input === undefined) {
            throw new runtime.RequiredError('input','Required parameter requestParameters.input was null or undefined when calling verb1.');
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

        if (requestParameters.input !== undefined) {
            queryParameters['input'] = requestParameters.input;
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

        if (requestParameters.withEquivalentLocations !== undefined) {
            queryParameters['withEquivalentLocations'] = requestParameters.withEquivalentLocations;
        }

        if (requestParameters.restrictSelection !== undefined) {
            queryParameters['restrictSelection'] = requestParameters.restrictSelection;
        }

        if (requestParameters.products !== undefined) {
            queryParameters['products'] = requestParameters.products;
        }

        if (requestParameters.withProducts !== undefined) {
            queryParameters['withProducts'] = requestParameters.withProducts;
        }

        if (requestParameters.productRepresentatives !== undefined) {
            queryParameters['productRepresentatives'] = requestParameters.productRepresentatives;
        }

        if (requestParameters.coordLat !== undefined) {
            queryParameters['coordLat'] = requestParameters.coordLat;
        }

        if (requestParameters.coordLong !== undefined) {
            queryParameters['coordLong'] = requestParameters.coordLong;
        }

        if (requestParameters.r !== undefined) {
            queryParameters['r'] = requestParameters.r;
        }

        if (requestParameters.refineId !== undefined) {
            queryParameters['refineId'] = requestParameters.refineId;
        }

        if (requestParameters.meta !== undefined) {
            queryParameters['meta'] = requestParameters.meta;
        }

        if (requestParameters.stations !== undefined) {
            queryParameters['stations'] = requestParameters.stations;
        }

        if (requestParameters.sattributes !== undefined) {
            queryParameters['sattributes'] = requestParameters.sattributes;
        }

        if (requestParameters.sinfotexts !== undefined) {
            queryParameters['sinfotexts'] = requestParameters.sinfotexts;
        }

        if (requestParameters.filterMode !== undefined) {
            queryParameters['filterMode'] = requestParameters.filterMode;
        }

        if (requestParameters.poolId !== undefined) {
            queryParameters['poolId'] = requestParameters.poolId;
        }

        if (requestParameters.withMastNames !== undefined) {
            queryParameters['withMastNames'] = requestParameters.withMastNames;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["accessId"] = this.configuration.apiKey("accessId"); // accessId authentication
        }

        const response = await this.request({
            path: `/location.name`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LocationListFromJSON(jsonValue));
    }

    /**
     * Location search by name
     */
    async verb1(requestParameters: Verb1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LocationList> {
        const response = await this.verb1Raw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const Verb1FormatEnum = {
    Xml: 'xml',
    Json: 'json',
    Jsonp: 'jsonp'
} as const;
export type Verb1FormatEnum = typeof Verb1FormatEnum[keyof typeof Verb1FormatEnum];
/**
 * @export
 */
export const Verb1TypeEnum = {
    A: 'A',
    All: 'ALL',
    Ap: 'AP',
    P: 'P',
    S: 'S',
    Sa: 'SA',
    Sp: 'SP'
} as const;
export type Verb1TypeEnum = typeof Verb1TypeEnum[keyof typeof Verb1TypeEnum];
/**
 * @export
 */
export const Verb1LocationSelectionModeEnum = {
    A: 'SLCT_A',
    N: 'SLCT_N'
} as const;
export type Verb1LocationSelectionModeEnum = typeof Verb1LocationSelectionModeEnum[keyof typeof Verb1LocationSelectionModeEnum];
/**
 * @export
 */
export const Verb1WithEquivalentLocationsEnum = {
    _0: '0',
    _1: '1'
} as const;
export type Verb1WithEquivalentLocationsEnum = typeof Verb1WithEquivalentLocationsEnum[keyof typeof Verb1WithEquivalentLocationsEnum];
/**
 * @export
 */
export const Verb1RestrictSelectionEnum = {
    D: 'D',
    I: 'I',
    S: 'S',
    V: 'V'
} as const;
export type Verb1RestrictSelectionEnum = typeof Verb1RestrictSelectionEnum[keyof typeof Verb1RestrictSelectionEnum];
/**
 * @export
 */
export const Verb1WithProductsEnum = {
    _0: '0',
    _1: '1'
} as const;
export type Verb1WithProductsEnum = typeof Verb1WithProductsEnum[keyof typeof Verb1WithProductsEnum];
/**
 * @export
 */
export const Verb1ProductRepresentativesEnum = {
    _0: '0',
    _1: '1'
} as const;
export type Verb1ProductRepresentativesEnum = typeof Verb1ProductRepresentativesEnum[keyof typeof Verb1ProductRepresentativesEnum];
/**
 * @export
 */
export const Verb1FilterModeEnum = {
    DistPeri: 'DIST_PERI',
    ExclPeri: 'EXCL_PERI',
    SlctPeri: 'SLCT_PERI'
} as const;
export type Verb1FilterModeEnum = typeof Verb1FilterModeEnum[keyof typeof Verb1FilterModeEnum];
/**
 * @export
 */
export const Verb1WithMastNamesEnum = {
    _0: '0',
    _1: '1'
} as const;
export type Verb1WithMastNamesEnum = typeof Verb1WithMastNamesEnum[keyof typeof Verb1WithMastNamesEnum];