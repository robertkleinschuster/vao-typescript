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
 * @interface EcoType
 */
export interface EcoType {
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    co2?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    co2f?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    part?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    part10?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    partV?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    nmhc?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    nox?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    prime?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    primef?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    so2?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    ubp?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    dist?: number;
    /**
     * 
     * @type {string}
     * @memberof EcoType
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    nmvoc?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    ubp13?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    co2el?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    primeEnergy?: number;
    /**
     * 
     * @type {number}
     * @memberof EcoType
     */
    rating?: number;
    /**
     * 
     * @type {string}
     * @memberof EcoType
     */
    dur?: string;
}

/**
 * Check if a given object implements the EcoType interface.
 */
export function instanceOfEcoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EcoTypeFromJSON(json: any): EcoType {
    return EcoTypeFromJSONTyped(json, false);
}

export function EcoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EcoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'co2': !exists(json, 'co2') ? undefined : json['co2'],
        'co2f': !exists(json, 'co2f') ? undefined : json['co2f'],
        'part': !exists(json, 'part') ? undefined : json['part'],
        'part10': !exists(json, 'part10') ? undefined : json['part10'],
        'partV': !exists(json, 'partV') ? undefined : json['partV'],
        'nmhc': !exists(json, 'nmhc') ? undefined : json['nmhc'],
        'nox': !exists(json, 'nox') ? undefined : json['nox'],
        'prime': !exists(json, 'prime') ? undefined : json['prime'],
        'primef': !exists(json, 'primef') ? undefined : json['primef'],
        'so2': !exists(json, 'so2') ? undefined : json['so2'],
        'ubp': !exists(json, 'ubp') ? undefined : json['ubp'],
        'dist': !exists(json, 'dist') ? undefined : json['dist'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'nmvoc': !exists(json, 'nmvoc') ? undefined : json['nmvoc'],
        'ubp13': !exists(json, 'ubp13') ? undefined : json['ubp13'],
        'co2el': !exists(json, 'co2el') ? undefined : json['co2el'],
        'primeEnergy': !exists(json, 'primeEnergy') ? undefined : json['primeEnergy'],
        'rating': !exists(json, 'rating') ? undefined : json['rating'],
        'dur': !exists(json, 'dur') ? undefined : json['dur'],
    };
}

export function EcoTypeToJSON(value?: EcoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'co2': value.co2,
        'co2f': value.co2f,
        'part': value.part,
        'part10': value.part10,
        'partV': value.partV,
        'nmhc': value.nmhc,
        'nox': value.nox,
        'prime': value.prime,
        'primef': value.primef,
        'so2': value.so2,
        'ubp': value.ubp,
        'dist': value.dist,
        'type': value.type,
        'nmvoc': value.nmvoc,
        'ubp13': value.ubp13,
        'co2el': value.co2el,
        'primeEnergy': value.primeEnergy,
        'rating': value.rating,
        'dur': value.dur,
    };
}

