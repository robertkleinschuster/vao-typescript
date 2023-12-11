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
 * @interface UrlLinkType
 */
export interface UrlLinkType {
    /**
     * 
     * @type {string}
     * @memberof UrlLinkType
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UrlLinkType
     */
    url: string;
}

/**
 * Check if a given object implements the UrlLinkType interface.
 */
export function instanceOfUrlLinkType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function UrlLinkTypeFromJSON(json: any): UrlLinkType {
    return UrlLinkTypeFromJSONTyped(json, false);
}

export function UrlLinkTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UrlLinkType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'url': json['url'],
    };
}

export function UrlLinkTypeToJSON(value?: UrlLinkType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'url': value.url,
    };
}

