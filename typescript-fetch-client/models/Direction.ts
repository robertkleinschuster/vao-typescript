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
 * @interface Direction
 */
export interface Direction {
    /**
     * 
     * @type {string}
     * @memberof Direction
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof Direction
     */
    flag?: string;
    /**
     * 
     * @type {number}
     * @memberof Direction
     */
    routeIdxFrom?: number;
    /**
     * 
     * @type {number}
     * @memberof Direction
     */
    routeIdxTo?: number;
}

/**
 * Check if a given object implements the Direction interface.
 */
export function instanceOfDirection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DirectionFromJSON(json: any): Direction {
    return DirectionFromJSONTyped(json, false);
}

export function DirectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Direction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'flag': !exists(json, 'flag') ? undefined : json['flag'],
        'routeIdxFrom': !exists(json, 'routeIdxFrom') ? undefined : json['routeIdxFrom'],
        'routeIdxTo': !exists(json, 'routeIdxTo') ? undefined : json['routeIdxTo'],
    };
}

export function DirectionToJSON(value?: Direction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'flag': value.flag,
        'routeIdxFrom': value.routeIdxFrom,
        'routeIdxTo': value.routeIdxTo,
    };
}

