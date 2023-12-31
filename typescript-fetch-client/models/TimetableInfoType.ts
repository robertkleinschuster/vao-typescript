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
 * @interface TimetableInfoType
 */
export interface TimetableInfoType {
    /**
     * 
     * @type {string}
     * @memberof TimetableInfoType
     */
    poolId: string;
    /**
     * 
     * @type {string}
     * @memberof TimetableInfoType
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof TimetableInfoType
     */
    time?: string;
    /**
     * 
     * @type {string}
     * @memberof TimetableInfoType
     */
    ident?: string;
    /**
     * 
     * @type {string}
     * @memberof TimetableInfoType
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof TimetableInfoType
     */
    type?: TimetableInfoTypeTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TimetableInfoType
     */
    begin?: string;
    /**
     * 
     * @type {string}
     * @memberof TimetableInfoType
     */
    end?: string;
}


/**
 * @export
 */
export const TimetableInfoTypeTypeEnum = {
    U: 'U',
    St: 'ST',
    Adr: 'ADR',
    Poi: 'POI'
} as const;
export type TimetableInfoTypeTypeEnum = typeof TimetableInfoTypeTypeEnum[keyof typeof TimetableInfoTypeTypeEnum];


/**
 * Check if a given object implements the TimetableInfoType interface.
 */
export function instanceOfTimetableInfoType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "poolId" in value;

    return isInstance;
}

export function TimetableInfoTypeFromJSON(json: any): TimetableInfoType {
    return TimetableInfoTypeFromJSONTyped(json, false);
}

export function TimetableInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimetableInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'poolId': json['poolId'],
        'date': !exists(json, 'date') ? undefined : json['date'],
        'time': !exists(json, 'time') ? undefined : json['time'],
        'ident': !exists(json, 'ident') ? undefined : json['ident'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'begin': !exists(json, 'begin') ? undefined : json['begin'],
        'end': !exists(json, 'end') ? undefined : json['end'],
    };
}

export function TimetableInfoTypeToJSON(value?: TimetableInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'poolId': value.poolId,
        'date': value.date,
        'time': value.time,
        'ident': value.ident,
        'comment': value.comment,
        'type': value.type,
        'begin': value.begin,
        'end': value.end,
    };
}

