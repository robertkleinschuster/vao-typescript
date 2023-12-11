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
import type { Leg } from './Leg';
import {
    LegFromJSON,
    LegFromJSONTyped,
    LegToJSON,
} from './Leg';

/**
 * 
 * @export
 * @interface LegList
 */
export interface LegList {
    /**
     * 
     * @type {Array<Leg>}
     * @memberof LegList
     */
    leg?: Array<Leg>;
}

/**
 * Check if a given object implements the LegList interface.
 */
export function instanceOfLegList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LegListFromJSON(json: any): LegList {
    return LegListFromJSONTyped(json, false);
}

export function LegListFromJSONTyped(json: any, ignoreDiscriminator: boolean): LegList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'leg': !exists(json, 'Leg') ? undefined : ((json['Leg'] as Array<any>).map(LegFromJSON)),
    };
}

export function LegListToJSON(value?: LegList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Leg': value.leg === undefined ? undefined : ((value.leg as Array<any>).map(LegToJSON)),
    };
}

