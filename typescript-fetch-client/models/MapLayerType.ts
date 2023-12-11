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
import type { Rect } from './Rect';
import {
    RectFromJSON,
    RectFromJSONTyped,
    RectToJSON,
} from './Rect';

/**
 * 
 * @export
 * @interface MapLayerType
 */
export interface MapLayerType {
    /**
     * 
     * @type {Rect}
     * @memberof MapLayerType
     */
    extend?: Rect;
    /**
     * 
     * @type {Rect}
     * @memberof MapLayerType
     */
    initialBoundingBox?: Rect;
    /**
     * 
     * @type {Array<string>}
     * @memberof MapLayerType
     */
    subdomain?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof MapLayerType
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MapLayerType
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof MapLayerType
     */
    zoomMin?: number;
    /**
     * 
     * @type {number}
     * @memberof MapLayerType
     */
    zoomMax?: number;
    /**
     * 
     * @type {number}
     * @memberof MapLayerType
     */
    opacity?: number;
    /**
     * 
     * @type {string}
     * @memberof MapLayerType
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof MapLayerType
     */
    projection?: string;
    /**
     * 
     * @type {string}
     * @memberof MapLayerType
     */
    attribute?: string;
    /**
     * 
     * @type {string}
     * @memberof MapLayerType
     */
    label?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MapLayerType
     */
    show?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MapLayerType
     */
    selectable?: boolean;
}

/**
 * Check if a given object implements the MapLayerType interface.
 */
export function instanceOfMapLayerType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function MapLayerTypeFromJSON(json: any): MapLayerType {
    return MapLayerTypeFromJSONTyped(json, false);
}

export function MapLayerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MapLayerType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'extend': !exists(json, 'extend') ? undefined : RectFromJSON(json['extend']),
        'initialBoundingBox': !exists(json, 'initialBoundingBox') ? undefined : RectFromJSON(json['initialBoundingBox']),
        'subdomain': !exists(json, 'subdomain') ? undefined : json['subdomain'],
        'id': json['id'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'zoomMin': !exists(json, 'zoomMin') ? undefined : json['zoomMin'],
        'zoomMax': !exists(json, 'zoomMax') ? undefined : json['zoomMax'],
        'opacity': !exists(json, 'opacity') ? undefined : json['opacity'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'projection': !exists(json, 'projection') ? undefined : json['projection'],
        'attribute': !exists(json, 'attribute') ? undefined : json['attribute'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'show': !exists(json, 'show') ? undefined : json['show'],
        'selectable': !exists(json, 'selectable') ? undefined : json['selectable'],
    };
}

export function MapLayerTypeToJSON(value?: MapLayerType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'extend': RectToJSON(value.extend),
        'initialBoundingBox': RectToJSON(value.initialBoundingBox),
        'subdomain': value.subdomain,
        'id': value.id,
        'url': value.url,
        'zoomMin': value.zoomMin,
        'zoomMax': value.zoomMax,
        'opacity': value.opacity,
        'type': value.type,
        'projection': value.projection,
        'attribute': value.attribute,
        'label': value.label,
        'show': value.show,
        'selectable': value.selectable,
    };
}

