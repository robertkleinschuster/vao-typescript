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
 * @interface MessageTextType
 */
export interface MessageTextType {
    /**
     * 
     * @type {Array<string>}
     * @memberof MessageTextType
     */
    readonly tag: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof MessageTextType
     */
    readonly text: Array<string>;
}

/**
 * Check if a given object implements the MessageTextType interface.
 */
export function instanceOfMessageTextType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "tag" in value;
    isInstance = isInstance && "text" in value;

    return isInstance;
}

export function MessageTextTypeFromJSON(json: any): MessageTextType {
    return MessageTextTypeFromJSONTyped(json, false);
}

export function MessageTextTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MessageTextType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tag': json['tag'],
        'text': json['text'],
    };
}

export function MessageTextTypeToJSON(value?: MessageTextType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}
