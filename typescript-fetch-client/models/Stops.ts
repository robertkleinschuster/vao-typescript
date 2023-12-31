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
import type { StopType } from './StopType';
import {
    StopTypeFromJSON,
    StopTypeFromJSONTyped,
    StopTypeToJSON,
} from './StopType';

/**
 * 
 * @export
 * @interface Stops
 */
export interface Stops {
    /**
     * 
     * @type {Array<StopType>}
     * @memberof Stops
     */
    stop: Array<StopType>;
}

/**
 * Check if a given object implements the Stops interface.
 */
export function instanceOfStops(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "stop" in value;

    return isInstance;
}

export function StopsFromJSON(json: any): Stops {
    return StopsFromJSONTyped(json, false);
}

export function StopsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Stops {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stop': ((json['Stop'] as Array<any>).map(StopTypeFromJSON)),
    };
}

export function StopsToJSON(value?: Stops | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Stop': ((value.stop as Array<any>).map(StopTypeToJSON)),
    };
}

