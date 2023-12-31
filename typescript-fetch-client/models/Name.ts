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
import type { ProductType } from './ProductType';
import {
    ProductTypeFromJSON,
    ProductTypeFromJSONTyped,
    ProductTypeToJSON,
} from './ProductType';

/**
 * 
 * @export
 * @interface Name
 */
export interface Name {
    /**
     * 
     * @type {ProductType}
     * @memberof Name
     */
    product?: ProductType;
    /**
     * 
     * @type {string}
     * @memberof Name
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Name
     */
    addName?: string;
    /**
     * 
     * @type {string}
     * @memberof Name
     */
    number: string;
    /**
     * 
     * @type {string}
     * @memberof Name
     */
    category?: string;
    /**
     * 
     * @type {number}
     * @memberof Name
     */
    routeIdxFrom?: number;
    /**
     * 
     * @type {number}
     * @memberof Name
     */
    routeIdxTo?: number;
}

/**
 * Check if a given object implements the Name interface.
 */
export function instanceOfName(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "number" in value;

    return isInstance;
}

export function NameFromJSON(json: any): Name {
    return NameFromJSONTyped(json, false);
}

export function NameFromJSONTyped(json: any, ignoreDiscriminator: boolean): Name {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'product': !exists(json, 'Product') ? undefined : ProductTypeFromJSON(json['Product']),
        'name': json['name'],
        'addName': !exists(json, 'addName') ? undefined : json['addName'],
        'number': json['number'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'routeIdxFrom': !exists(json, 'routeIdxFrom') ? undefined : json['routeIdxFrom'],
        'routeIdxTo': !exists(json, 'routeIdxTo') ? undefined : json['routeIdxTo'],
    };
}

export function NameToJSON(value?: Name | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Product': ProductTypeToJSON(value.product),
        'name': value.name,
        'addName': value.addName,
        'number': value.number,
        'category': value.category,
        'routeIdxFrom': value.routeIdxFrom,
        'routeIdxTo': value.routeIdxTo,
    };
}

