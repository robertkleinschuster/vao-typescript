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
 * @interface ResultStatusType
 */
export interface ResultStatusType {
    /**
     * 
     * @type {boolean}
     * @memberof ResultStatusType
     */
    timeDiffCritical?: boolean;
}

/**
 * Check if a given object implements the ResultStatusType interface.
 */
export function instanceOfResultStatusType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResultStatusTypeFromJSON(json: any): ResultStatusType {
    return ResultStatusTypeFromJSONTyped(json, false);
}

export function ResultStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResultStatusType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timeDiffCritical': !exists(json, 'timeDiffCritical') ? undefined : json['timeDiffCritical'],
    };
}

export function ResultStatusTypeToJSON(value?: ResultStatusType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'timeDiffCritical': value.timeDiffCritical,
    };
}

