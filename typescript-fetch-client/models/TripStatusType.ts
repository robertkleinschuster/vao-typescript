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
 * @interface TripStatusType
 */
export interface TripStatusType {
    /**
     * 
     * @type {boolean}
     * @memberof TripStatusType
     */
    detour?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TripStatusType
     */
    daily?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TripStatusType
     */
    direct?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TripStatusType
     */
    subOptimalDirect?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TripStatusType
     */
    slowDirect?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TripStatusType
     */
    economic?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TripStatusType
     */
    convenient?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TripStatusType
     */
    specialtrain?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TripStatusType
     */
    ukNationalRouteingGuideFailure?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TripStatusType
     */
    hint?: string;
    /**
     * 
     * @type {number}
     * @memberof TripStatusType
     */
    hintCode?: number;
    /**
     * 
     * @type {boolean}
     * @memberof TripStatusType
     */
    unsharp?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TripStatusType
     */
    timeDiffCritical?: boolean;
}

/**
 * Check if a given object implements the TripStatusType interface.
 */
export function instanceOfTripStatusType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TripStatusTypeFromJSON(json: any): TripStatusType {
    return TripStatusTypeFromJSONTyped(json, false);
}

export function TripStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TripStatusType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'detour': !exists(json, 'detour') ? undefined : json['detour'],
        'daily': !exists(json, 'daily') ? undefined : json['daily'],
        'direct': !exists(json, 'direct') ? undefined : json['direct'],
        'subOptimalDirect': !exists(json, 'subOptimalDirect') ? undefined : json['subOptimalDirect'],
        'slowDirect': !exists(json, 'slowDirect') ? undefined : json['slowDirect'],
        'economic': !exists(json, 'economic') ? undefined : json['economic'],
        'convenient': !exists(json, 'convenient') ? undefined : json['convenient'],
        'specialtrain': !exists(json, 'specialtrain') ? undefined : json['specialtrain'],
        'ukNationalRouteingGuideFailure': !exists(json, 'ukNationalRouteingGuideFailure') ? undefined : json['ukNationalRouteingGuideFailure'],
        'hint': !exists(json, 'hint') ? undefined : json['hint'],
        'hintCode': !exists(json, 'hintCode') ? undefined : json['hintCode'],
        'unsharp': !exists(json, 'unsharp') ? undefined : json['unsharp'],
        'timeDiffCritical': !exists(json, 'timeDiffCritical') ? undefined : json['timeDiffCritical'],
    };
}

export function TripStatusTypeToJSON(value?: TripStatusType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'detour': value.detour,
        'daily': value.daily,
        'direct': value.direct,
        'subOptimalDirect': value.subOptimalDirect,
        'slowDirect': value.slowDirect,
        'economic': value.economic,
        'convenient': value.convenient,
        'specialtrain': value.specialtrain,
        'ukNationalRouteingGuideFailure': value.ukNationalRouteingGuideFailure,
        'hint': value.hint,
        'hintCode': value.hintCode,
        'unsharp': value.unsharp,
        'timeDiffCritical': value.timeDiffCritical,
    };
}
