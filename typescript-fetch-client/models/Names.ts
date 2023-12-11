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
import type { Name } from './Name';
import {
    NameFromJSON,
    NameFromJSONTyped,
    NameToJSON,
} from './Name';

/**
 * 
 * @export
 * @interface Names
 */
export interface Names {
    /**
     * 
     * @type {Array<Name>}
     * @memberof Names
     */
    name: Array<Name>;
}

/**
 * Check if a given object implements the Names interface.
 */
export function instanceOfNames(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function NamesFromJSON(json: any): Names {
    return NamesFromJSONTyped(json, false);
}

export function NamesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Names {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': ((json['Name'] as Array<any>).map(NameFromJSON)),
    };
}

export function NamesToJSON(value?: Names | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': ((value.name as Array<any>).map(NameToJSON)),
    };
}

