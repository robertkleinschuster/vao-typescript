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
import type { PolylineDesc } from './PolylineDesc';
import {
    PolylineDescFromJSON,
    PolylineDescFromJSONTyped,
    PolylineDescToJSON,
} from './PolylineDesc';

/**
 * 
 * @export
 * @interface PolylineGroup
 */
export interface PolylineGroup {
    /**
     * 
     * @type {Array<PolylineDesc>}
     * @memberof PolylineGroup
     */
    readonly polylineDesc?: Array<PolylineDesc>;
    /**
     * 
     * @type {string}
     * @memberof PolylineGroup
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PolylineGroup
     */
    coordType?: PolylineGroupCoordTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PolylineGroup
     */
    layerName?: string;
}


/**
 * @export
 */
export const PolylineGroupCoordTypeEnum = {
    Wgs84: 'WGS84',
    Planar: 'PLANAR',
    Hafasgeo: 'HAFASGEO'
} as const;
export type PolylineGroupCoordTypeEnum = typeof PolylineGroupCoordTypeEnum[keyof typeof PolylineGroupCoordTypeEnum];


/**
 * Check if a given object implements the PolylineGroup interface.
 */
export function instanceOfPolylineGroup(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PolylineGroupFromJSON(json: any): PolylineGroup {
    return PolylineGroupFromJSONTyped(json, false);
}

export function PolylineGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolylineGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'polylineDesc': !exists(json, 'polylineDesc') ? undefined : ((json['polylineDesc'] as Array<any>).map(PolylineDescFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'coordType': !exists(json, 'coordType') ? undefined : json['coordType'],
        'layerName': !exists(json, 'layerName') ? undefined : json['layerName'],
    };
}

export function PolylineGroupToJSON(value?: PolylineGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'coordType': value.coordType,
        'layerName': value.layerName,
    };
}

