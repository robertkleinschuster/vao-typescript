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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RGBAColorType
 */
export interface RGBAColorType {
    /**
     * 
     * @type {number}
     * @memberof RGBAColorType
     */
    r?: number;
    /**
     * 
     * @type {number}
     * @memberof RGBAColorType
     */
    g?: number;
    /**
     * 
     * @type {number}
     * @memberof RGBAColorType
     */
    b?: number;
    /**
     * 
     * @type {number}
     * @memberof RGBAColorType
     */
    a?: number;
    /**
     * 
     * @type {string}
     * @memberof RGBAColorType
     */
    hex?: string;
}

/**
 * Check if a given object implements the RGBAColorType interface.
 */
export function instanceOfRGBAColorType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RGBAColorTypeFromJSON(json: any): RGBAColorType {
    return RGBAColorTypeFromJSONTyped(json, false);
}

export function RGBAColorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RGBAColorType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'r': !exists(json, 'r') ? undefined : json['r'],
        'g': !exists(json, 'g') ? undefined : json['g'],
        'b': !exists(json, 'b') ? undefined : json['b'],
        'a': !exists(json, 'a') ? undefined : json['a'],
        'hex': !exists(json, 'hex') ? undefined : json['hex'],
    };
}

export function RGBAColorTypeToJSON(value?: RGBAColorType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'r': value.r,
        'g': value.g,
        'b': value.b,
        'a': value.a,
        'hex': value.hex,
    };
}

