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
 * @interface Coordinate
 */
export interface Coordinate {
    /**
     * 
     * @type {number}
     * @memberof Coordinate
     */
    lon: number;
    /**
     * 
     * @type {number}
     * @memberof Coordinate
     */
    lat: number;
    /**
     * 
     * @type {number}
     * @memberof Coordinate
     */
    alt?: number;
}

/**
 * Check if a given object implements the Coordinate interface.
 */
export function instanceOfCoordinate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "lon" in value;
    isInstance = isInstance && "lat" in value;

    return isInstance;
}

export function CoordinateFromJSON(json: any): Coordinate {
    return CoordinateFromJSONTyped(json, false);
}

export function CoordinateFromJSONTyped(json: any, ignoreDiscriminator: boolean): Coordinate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lon': json['lon'],
        'lat': json['lat'],
        'alt': !exists(json, 'alt') ? undefined : json['alt'],
    };
}

export function CoordinateToJSON(value?: Coordinate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lon': value.lon,
        'lat': value.lat,
        'alt': value.alt,
    };
}

