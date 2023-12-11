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
  DepartureBoard,
} from '../models/index';
import {
    DepartureBoardFromJSON,
    DepartureBoardToJSON,
} from '../models/index';

export interface Verb6Request {
    type: Verb6TypeEnum;
    requestId?: string;
    format?: Verb6FormatEnum;
    jsonpCallback?: string;
    lang?: string;
    id?: string;
    extId?: string;
    direction?: string;
    date?: string;
    time?: string;
    duration?: number;
    maxJourneys?: number;
    products?: number;
    operators?: string;
    categories?: string;
    lines?: string;
    attributes?: string;
    platforms?: string;
    passlist?: Verb6PasslistEnum;
    passlistMaxStops?: number;
    minDur?: number;
    baim?: Verb6BaimEnum;
    rtMode?: Verb6RtModeEnum;
}

/**
 * 
 */
export class DepartureBoardApi extends runtime.BaseAPI {

    /**
     * Departure board
     */
    async verb6Raw(requestParameters: Verb6Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DepartureBoard>> {
        if (requestParameters.type === null || requestParameters.type === undefined) {
            throw new runtime.RequiredError('type','Required parameter requestParameters.type was null or undefined when calling verb6.');
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

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        if (requestParameters.extId !== undefined) {
            queryParameters['extId'] = requestParameters.extId;
        }

        if (requestParameters.direction !== undefined) {
            queryParameters['direction'] = requestParameters.direction;
        }

        if (requestParameters.date !== undefined) {
            queryParameters['date'] = requestParameters.date;
        }

        if (requestParameters.time !== undefined) {
            queryParameters['time'] = requestParameters.time;
        }

        if (requestParameters.duration !== undefined) {
            queryParameters['duration'] = requestParameters.duration;
        }

        if (requestParameters.maxJourneys !== undefined) {
            queryParameters['maxJourneys'] = requestParameters.maxJourneys;
        }

        if (requestParameters.products !== undefined) {
            queryParameters['products'] = requestParameters.products;
        }

        if (requestParameters.operators !== undefined) {
            queryParameters['operators'] = requestParameters.operators;
        }

        if (requestParameters.categories !== undefined) {
            queryParameters['categories'] = requestParameters.categories;
        }

        if (requestParameters.lines !== undefined) {
            queryParameters['lines'] = requestParameters.lines;
        }

        if (requestParameters.attributes !== undefined) {
            queryParameters['attributes'] = requestParameters.attributes;
        }

        if (requestParameters.platforms !== undefined) {
            queryParameters['platforms'] = requestParameters.platforms;
        }

        if (requestParameters.passlist !== undefined) {
            queryParameters['passlist'] = requestParameters.passlist;
        }

        if (requestParameters.passlistMaxStops !== undefined) {
            queryParameters['passlistMaxStops'] = requestParameters.passlistMaxStops;
        }

        if (requestParameters.minDur !== undefined) {
            queryParameters['minDur'] = requestParameters.minDur;
        }

        if (requestParameters.baim !== undefined) {
            queryParameters['baim'] = requestParameters.baim;
        }

        if (requestParameters.rtMode !== undefined) {
            queryParameters['rtMode'] = requestParameters.rtMode;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["accessId"] = this.configuration.apiKey("accessId"); // accessId authentication
        }

        const response = await this.request({
            path: `/departureBoard`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DepartureBoardFromJSON(jsonValue));
    }

    /**
     * Departure board
     */
    async verb6(requestParameters: Verb6Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DepartureBoard> {
        const response = await this.verb6Raw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const Verb6TypeEnum = {
    Dep: 'DEP',
    DepEquivs: 'DEP_EQUIVS',
    DepMast: 'DEP_MAST',
    DepStation: 'DEP_STATION'
} as const;
export type Verb6TypeEnum = typeof Verb6TypeEnum[keyof typeof Verb6TypeEnum];
/**
 * @export
 */
export const Verb6FormatEnum = {
    Xml: 'xml',
    Json: 'json',
    Jsonp: 'jsonp'
} as const;
export type Verb6FormatEnum = typeof Verb6FormatEnum[keyof typeof Verb6FormatEnum];
/**
 * @export
 */
export const Verb6PasslistEnum = {
    _0: '0',
    _1: '1'
} as const;
export type Verb6PasslistEnum = typeof Verb6PasslistEnum[keyof typeof Verb6PasslistEnum];
/**
 * @export
 */
export const Verb6BaimEnum = {
    _0: '0',
    _1: '1'
} as const;
export type Verb6BaimEnum = typeof Verb6BaimEnum[keyof typeof Verb6BaimEnum];
/**
 * @export
 */
export const Verb6RtModeEnum = {
    Off: 'OFF',
    ServerDefault: 'SERVER_DEFAULT'
} as const;
export type Verb6RtModeEnum = typeof Verb6RtModeEnum[keyof typeof Verb6RtModeEnum];