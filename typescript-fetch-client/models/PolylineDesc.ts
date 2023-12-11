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
 * @interface PolylineDesc
 */
export interface PolylineDesc {
    /**
     * 
     * @type {Array<number>}
     * @memberof PolylineDesc
     */
    crd?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof PolylineDesc
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PolylineDesc
     */
    delta: boolean;
    /**
     * 
     * @type {number}
     * @memberof PolylineDesc
     */
    dim?: number;
    /**
     * 
     * @type {string}
     * @memberof PolylineDesc
     */
    crdEncYX?: string;
    /**
     * 
     * @type {string}
     * @memberof PolylineDesc
     */
    crdEncZ?: string;
    /**
     * 
     * @type {string}
     * @memberof PolylineDesc
     */
    crdEncS?: string;
}

/**
 * Check if a given object implements the PolylineDesc interface.
 */
export function instanceOfPolylineDesc(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "delta" in value;

    return isInstance;
}

export function PolylineDescFromJSON(json: any): PolylineDesc {
    return PolylineDescFromJSONTyped(json, false);
}

export function PolylineDescFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolylineDesc {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'crd': !exists(json, 'crd') ? undefined : json['crd'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'delta': json['delta'],
        'dim': !exists(json, 'dim') ? undefined : json['dim'],
        'crdEncYX': !exists(json, 'crdEncYX') ? undefined : json['crdEncYX'],
        'crdEncZ': !exists(json, 'crdEncZ') ? undefined : json['crdEncZ'],
        'crdEncS': !exists(json, 'crdEncS') ? undefined : json['crdEncS'],
    };
}

export function PolylineDescToJSON(value?: PolylineDesc | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'crd': value.crd,
        'name': value.name,
        'delta': value.delta,
        'dim': value.dim,
        'crdEncYX': value.crdEncYX,
        'crdEncZ': value.crdEncZ,
        'crdEncS': value.crdEncS,
    };
}
