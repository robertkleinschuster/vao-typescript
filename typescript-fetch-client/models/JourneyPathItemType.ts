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
 * @interface JourneyPathItemType
 */
export interface JourneyPathItemType {
    /**
     * 
     * @type {number}
     * @memberof JourneyPathItemType
     */
    progressInTime?: number;
    /**
     * 
     * @type {number}
     * @memberof JourneyPathItemType
     */
    progressInPercent?: number;
    /**
     * 
     * @type {number}
     * @memberof JourneyPathItemType
     */
    progressAbs?: number;
    /**
     * 
     * @type {string}
     * @memberof JourneyPathItemType
     */
    fromLocationId?: string;
    /**
     * 
     * @type {string}
     * @memberof JourneyPathItemType
     */
    toLocationId?: string;
    /**
     * 
     * @type {number}
     * @memberof JourneyPathItemType
     */
    dirGeo?: number;
    /**
     * 
     * @type {string}
     * @memberof JourneyPathItemType
     */
    state?: JourneyPathItemTypeStateEnum;
}


/**
 * @export
 */
export const JourneyPathItemTypeStateEnum = {
    U: 'U',
    B: 'B',
    O: 'O',
    A: 'A'
} as const;
export type JourneyPathItemTypeStateEnum = typeof JourneyPathItemTypeStateEnum[keyof typeof JourneyPathItemTypeStateEnum];


/**
 * Check if a given object implements the JourneyPathItemType interface.
 */
export function instanceOfJourneyPathItemType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function JourneyPathItemTypeFromJSON(json: any): JourneyPathItemType {
    return JourneyPathItemTypeFromJSONTyped(json, false);
}

export function JourneyPathItemTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): JourneyPathItemType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'progressInTime': !exists(json, 'progressInTime') ? undefined : json['progressInTime'],
        'progressInPercent': !exists(json, 'progressInPercent') ? undefined : json['progressInPercent'],
        'progressAbs': !exists(json, 'progressAbs') ? undefined : json['progressAbs'],
        'fromLocationId': !exists(json, 'fromLocationId') ? undefined : json['fromLocationId'],
        'toLocationId': !exists(json, 'toLocationId') ? undefined : json['toLocationId'],
        'dirGeo': !exists(json, 'dirGeo') ? undefined : json['dirGeo'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function JourneyPathItemTypeToJSON(value?: JourneyPathItemType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'progressInTime': value.progressInTime,
        'progressInPercent': value.progressInPercent,
        'progressAbs': value.progressAbs,
        'fromLocationId': value.fromLocationId,
        'toLocationId': value.toLocationId,
        'dirGeo': value.dirGeo,
        'state': value.state,
    };
}

