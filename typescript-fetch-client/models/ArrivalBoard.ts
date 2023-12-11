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
import type { Arrival } from './Arrival';
import {
    ArrivalFromJSON,
    ArrivalFromJSONTyped,
    ArrivalToJSON,
} from './Arrival';
import type { Message } from './Message';
import {
    MessageFromJSON,
    MessageFromJSONTyped,
    MessageToJSON,
} from './Message';
import type { TechnicalMessages } from './TechnicalMessages';
import {
    TechnicalMessagesFromJSON,
    TechnicalMessagesFromJSONTyped,
    TechnicalMessagesToJSON,
} from './TechnicalMessages';
import type { Warnings } from './Warnings';
import {
    WarningsFromJSON,
    WarningsFromJSONTyped,
    WarningsToJSON,
} from './Warnings';

/**
 * 
 * @export
 * @interface ArrivalBoard
 */
export interface ArrivalBoard {
    /**
     * 
     * @type {TechnicalMessages}
     * @memberof ArrivalBoard
     */
    technicalMessages?: TechnicalMessages;
    /**
     * 
     * @type {Warnings}
     * @memberof ArrivalBoard
     */
    warnings?: Warnings;
    /**
     * 
     * @type {string}
     * @memberof ArrivalBoard
     */
    serverVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof ArrivalBoard
     */
    dialectVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof ArrivalBoard
     */
    version?: string;
    /**
     * 
     * @type {Date}
     * @memberof ArrivalBoard
     */
    planRtTs?: Date;
    /**
     * 
     * @type {string}
     * @memberof ArrivalBoard
     */
    errorCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ArrivalBoard
     */
    errorText?: string;
    /**
     * 
     * @type {string}
     * @memberof ArrivalBoard
     */
    requestId?: string;
    /**
     * 
     * @type {Array<Arrival>}
     * @memberof ArrivalBoard
     */
    arrival?: Array<Arrival>;
    /**
     * 
     * @type {Array<Message>}
     * @memberof ArrivalBoard
     */
    message?: Array<Message>;
    /**
     * 
     * @type {string}
     * @memberof ArrivalBoard
     */
    stopid?: string;
    /**
     * 
     * @type {string}
     * @memberof ArrivalBoard
     */
    stopExtId?: string;
}

/**
 * Check if a given object implements the ArrivalBoard interface.
 */
export function instanceOfArrivalBoard(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ArrivalBoardFromJSON(json: any): ArrivalBoard {
    return ArrivalBoardFromJSONTyped(json, false);
}

export function ArrivalBoardFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArrivalBoard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'technicalMessages': !exists(json, 'TechnicalMessages') ? undefined : TechnicalMessagesFromJSON(json['TechnicalMessages']),
        'warnings': !exists(json, 'Warnings') ? undefined : WarningsFromJSON(json['Warnings']),
        'serverVersion': !exists(json, 'serverVersion') ? undefined : json['serverVersion'],
        'dialectVersion': !exists(json, 'dialectVersion') ? undefined : json['dialectVersion'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'planRtTs': !exists(json, 'planRtTs') ? undefined : (new Date(json['planRtTs'])),
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
        'errorText': !exists(json, 'errorText') ? undefined : json['errorText'],
        'requestId': !exists(json, 'requestId') ? undefined : json['requestId'],
        'arrival': !exists(json, 'Arrival') ? undefined : ((json['Arrival'] as Array<any>).map(ArrivalFromJSON)),
        'message': !exists(json, 'Message') ? undefined : ((json['Message'] as Array<any>).map(MessageFromJSON)),
        'stopid': !exists(json, 'stopid') ? undefined : json['stopid'],
        'stopExtId': !exists(json, 'stopExtId') ? undefined : json['stopExtId'],
    };
}

export function ArrivalBoardToJSON(value?: ArrivalBoard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'TechnicalMessages': TechnicalMessagesToJSON(value.technicalMessages),
        'Warnings': WarningsToJSON(value.warnings),
        'serverVersion': value.serverVersion,
        'dialectVersion': value.dialectVersion,
        'version': value.version,
        'planRtTs': value.planRtTs === undefined ? undefined : (value.planRtTs.toISOString()),
        'errorCode': value.errorCode,
        'errorText': value.errorText,
        'requestId': value.requestId,
        'Arrival': value.arrival === undefined ? undefined : ((value.arrival as Array<any>).map(ArrivalToJSON)),
        'Message': value.message === undefined ? undefined : ((value.message as Array<any>).map(MessageToJSON)),
        'stopid': value.stopid,
        'stopExtId': value.stopExtId,
    };
}
