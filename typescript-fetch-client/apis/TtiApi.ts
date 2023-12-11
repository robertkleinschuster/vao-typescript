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
  TimetableInfoList,
} from '../models/index';
import {
    TimetableInfoListFromJSON,
    TimetableInfoListToJSON,
} from '../models/index';

export interface Verb11Request {
    requestId?: string;
    format?: Verb11FormatEnum;
    jsonpCallback?: string;
}

/**
 * 
 */
export class TtiApi extends runtime.BaseAPI {

    /**
     * Timetable info
     */
    async verb11Raw(requestParameters: Verb11Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TimetableInfoList>> {
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

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["accessId"] = this.configuration.apiKey("accessId"); // accessId authentication
        }

        const response = await this.request({
            path: `/tti`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TimetableInfoListFromJSON(jsonValue));
    }

    /**
     * Timetable info
     */
    async verb11(requestParameters: Verb11Request = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TimetableInfoList> {
        const response = await this.verb11Raw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const Verb11FormatEnum = {
    Xml: 'xml',
    Json: 'json',
    Jsonp: 'jsonp'
} as const;
export type Verb11FormatEnum = typeof Verb11FormatEnum[keyof typeof Verb11FormatEnum];