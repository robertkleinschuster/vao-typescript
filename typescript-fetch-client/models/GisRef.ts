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
 * @interface GisRef
 */
export interface GisRef {
    /**
     * 
     * @type {string}
     * @memberof GisRef
     */
    ref: string;
}

/**
 * Check if a given object implements the GisRef interface.
 */
export function instanceOfGisRef(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ref" in value;

    return isInstance;
}

export function GisRefFromJSON(json: any): GisRef {
    return GisRefFromJSONTyped(json, false);
}

export function GisRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): GisRef {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ref': json['ref'],
    };
}

export function GisRefToJSON(value?: GisRef | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ref': value.ref,
    };
}

