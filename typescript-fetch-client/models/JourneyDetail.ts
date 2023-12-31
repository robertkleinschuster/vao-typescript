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
import type { Coordinate } from './Coordinate';
import {
    CoordinateFromJSON,
    CoordinateFromJSONTyped,
    CoordinateToJSON,
} from './Coordinate';
import type { Directions } from './Directions';
import {
    DirectionsFromJSON,
    DirectionsFromJSONTyped,
    DirectionsToJSON,
} from './Directions';
import type { Messages } from './Messages';
import {
    MessagesFromJSON,
    MessagesFromJSONTyped,
    MessagesToJSON,
} from './Messages';
import type { Names } from './Names';
import {
    NamesFromJSON,
    NamesFromJSONTyped,
    NamesToJSON,
} from './Names';
import type { Notes } from './Notes';
import {
    NotesFromJSON,
    NotesFromJSONTyped,
    NotesToJSON,
} from './Notes';
import type { ParallelJourneyRefType } from './ParallelJourneyRefType';
import {
    ParallelJourneyRefTypeFromJSON,
    ParallelJourneyRefTypeFromJSONTyped,
    ParallelJourneyRefTypeToJSON,
} from './ParallelJourneyRefType';
import type { Polyline } from './Polyline';
import {
    PolylineFromJSON,
    PolylineFromJSONTyped,
    PolylineToJSON,
} from './Polyline';
import type { PolylineGroup } from './PolylineGroup';
import {
    PolylineGroupFromJSON,
    PolylineGroupFromJSONTyped,
    PolylineGroupToJSON,
} from './PolylineGroup';
import type { ProductType } from './ProductType';
import {
    ProductTypeFromJSON,
    ProductTypeFromJSONTyped,
    ProductTypeToJSON,
} from './ProductType';
import type { ReferencedJourneyType } from './ReferencedJourneyType';
import {
    ReferencedJourneyTypeFromJSON,
    ReferencedJourneyTypeFromJSONTyped,
    ReferencedJourneyTypeToJSON,
} from './ReferencedJourneyType';
import type { ServiceDays } from './ServiceDays';
import {
    ServiceDaysFromJSON,
    ServiceDaysFromJSONTyped,
    ServiceDaysToJSON,
} from './ServiceDays';
import type { Stops } from './Stops';
import {
    StopsFromJSON,
    StopsFromJSONTyped,
    StopsToJSON,
} from './Stops';
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
 * @interface JourneyDetail
 */
export interface JourneyDetail {
    /**
     * 
     * @type {TechnicalMessages}
     * @memberof JourneyDetail
     */
    technicalMessages?: TechnicalMessages;
    /**
     * 
     * @type {Warnings}
     * @memberof JourneyDetail
     */
    warnings?: Warnings;
    /**
     * 
     * @type {string}
     * @memberof JourneyDetail
     */
    serverVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof JourneyDetail
     */
    dialectVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof JourneyDetail
     */
    version?: string;
    /**
     * 
     * @type {Date}
     * @memberof JourneyDetail
     */
    planRtTs?: Date;
    /**
     * 
     * @type {string}
     * @memberof JourneyDetail
     */
    errorCode?: string;
    /**
     * 
     * @type {string}
     * @memberof JourneyDetail
     */
    errorText?: string;
    /**
     * 
     * @type {string}
     * @memberof JourneyDetail
     */
    requestId?: string;
    /**
     * 
     * @type {Stops}
     * @memberof JourneyDetail
     */
    stops: Stops;
    /**
     * 
     * @type {Names}
     * @memberof JourneyDetail
     */
    names?: Names;
    /**
     * 
     * @type {Array<ProductType>}
     * @memberof JourneyDetail
     */
    readonly product?: Array<ProductType>;
    /**
     * 
     * @type {Directions}
     * @memberof JourneyDetail
     */
    directions?: Directions;
    /**
     * 
     * @type {Notes}
     * @memberof JourneyDetail
     */
    notes?: Notes;
    /**
     * 
     * @type {Messages}
     * @memberof JourneyDetail
     */
    messages?: Messages;
    /**
     * 
     * @type {string}
     * @memberof JourneyDetail
     */
    journeyStatus?: JourneyDetailJourneyStatusEnum;
    /**
     * 
     * @type {Polyline}
     * @memberof JourneyDetail
     */
    polyline?: Polyline;
    /**
     * 
     * @type {PolylineGroup}
     * @memberof JourneyDetail
     */
    polylineGroup?: PolylineGroup;
    /**
     * 
     * @type {Array<ServiceDays>}
     * @memberof JourneyDetail
     */
    readonly serviceDays?: Array<ServiceDays>;
    /**
     * 
     * @type {Array<ReferencedJourneyType>}
     * @memberof JourneyDetail
     */
    readonly referencedJourney?: Array<ReferencedJourneyType>;
    /**
     * 
     * @type {Coordinate}
     * @memberof JourneyDetail
     */
    lastPos?: Coordinate;
    /**
     * 
     * @type {Date}
     * @memberof JourneyDetail
     */
    lastPosReported?: Date;
    /**
     * 
     * @type {number}
     * @memberof JourneyDetail
     */
    lastPassRouteIdx?: number;
    /**
     * 
     * @type {number}
     * @memberof JourneyDetail
     */
    lastPassStopRef?: number;
    /**
     * 
     * @type {number}
     * @memberof JourneyDetail
     */
    rtLastPassRouteIdx?: number;
    /**
     * 
     * @type {number}
     * @memberof JourneyDetail
     */
    rtLastPassStopRef?: number;
    /**
     * 
     * @type {Array<ParallelJourneyRefType>}
     * @memberof JourneyDetail
     */
    readonly parallelJourneyRef?: Array<ParallelJourneyRefType>;
    /**
     * 
     * @type {boolean}
     * @memberof JourneyDetail
     */
    cancelled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JourneyDetail
     */
    partCancelled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JourneyDetail
     */
    reachable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JourneyDetail
     */
    redirected?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof JourneyDetail
     */
    uncertainDelay?: boolean;
    /**
     * 
     * @type {string}
     * @memberof JourneyDetail
     */
    dayOfOperation: string;
    /**
     * 
     * @type {string}
     * @memberof JourneyDetail
     */
    ref: string;
}


/**
 * @export
 */
export const JourneyDetailJourneyStatusEnum = {
    P: 'P',
    R: 'R',
    A: 'A',
    S: 'S'
} as const;
export type JourneyDetailJourneyStatusEnum = typeof JourneyDetailJourneyStatusEnum[keyof typeof JourneyDetailJourneyStatusEnum];


/**
 * Check if a given object implements the JourneyDetail interface.
 */
export function instanceOfJourneyDetail(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "stops" in value;
    isInstance = isInstance && "dayOfOperation" in value;
    isInstance = isInstance && "ref" in value;

    return isInstance;
}

export function JourneyDetailFromJSON(json: any): JourneyDetail {
    return JourneyDetailFromJSONTyped(json, false);
}

export function JourneyDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): JourneyDetail {
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
        'stops': StopsFromJSON(json['Stops']),
        'names': !exists(json, 'Names') ? undefined : NamesFromJSON(json['Names']),
        'product': !exists(json, 'Product') ? undefined : ((json['Product'] as Array<any>).map(ProductTypeFromJSON)),
        'directions': !exists(json, 'Directions') ? undefined : DirectionsFromJSON(json['Directions']),
        'notes': !exists(json, 'Notes') ? undefined : NotesFromJSON(json['Notes']),
        'messages': !exists(json, 'Messages') ? undefined : MessagesFromJSON(json['Messages']),
        'journeyStatus': !exists(json, 'JourneyStatus') ? undefined : json['JourneyStatus'],
        'polyline': !exists(json, 'Polyline') ? undefined : PolylineFromJSON(json['Polyline']),
        'polylineGroup': !exists(json, 'PolylineGroup') ? undefined : PolylineGroupFromJSON(json['PolylineGroup']),
        'serviceDays': !exists(json, 'ServiceDays') ? undefined : ((json['ServiceDays'] as Array<any>).map(ServiceDaysFromJSON)),
        'referencedJourney': !exists(json, 'referencedJourney') ? undefined : ((json['referencedJourney'] as Array<any>).map(ReferencedJourneyTypeFromJSON)),
        'lastPos': !exists(json, 'lastPos') ? undefined : CoordinateFromJSON(json['lastPos']),
        'lastPosReported': !exists(json, 'lastPosReported') ? undefined : (new Date(json['lastPosReported'])),
        'lastPassRouteIdx': !exists(json, 'lastPassRouteIdx') ? undefined : json['lastPassRouteIdx'],
        'lastPassStopRef': !exists(json, 'lastPassStopRef') ? undefined : json['lastPassStopRef'],
        'rtLastPassRouteIdx': !exists(json, 'rtLastPassRouteIdx') ? undefined : json['rtLastPassRouteIdx'],
        'rtLastPassStopRef': !exists(json, 'rtLastPassStopRef') ? undefined : json['rtLastPassStopRef'],
        'parallelJourneyRef': !exists(json, 'ParallelJourneyRef') ? undefined : ((json['ParallelJourneyRef'] as Array<any>).map(ParallelJourneyRefTypeFromJSON)),
        'cancelled': !exists(json, 'cancelled') ? undefined : json['cancelled'],
        'partCancelled': !exists(json, 'partCancelled') ? undefined : json['partCancelled'],
        'reachable': !exists(json, 'reachable') ? undefined : json['reachable'],
        'redirected': !exists(json, 'redirected') ? undefined : json['redirected'],
        'uncertainDelay': !exists(json, 'uncertainDelay') ? undefined : json['uncertainDelay'],
        'dayOfOperation': json['dayOfOperation'],
        'ref': json['ref'],
    };
}

export function JourneyDetailToJSON(value?: JourneyDetail | null): any {
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
        'Stops': StopsToJSON(value.stops),
        'Names': NamesToJSON(value.names),
        'Directions': DirectionsToJSON(value.directions),
        'Notes': NotesToJSON(value.notes),
        'Messages': MessagesToJSON(value.messages),
        'JourneyStatus': value.journeyStatus,
        'Polyline': PolylineToJSON(value.polyline),
        'PolylineGroup': PolylineGroupToJSON(value.polylineGroup),
        'lastPos': CoordinateToJSON(value.lastPos),
        'lastPosReported': value.lastPosReported === undefined ? undefined : (value.lastPosReported.toISOString()),
        'lastPassRouteIdx': value.lastPassRouteIdx,
        'lastPassStopRef': value.lastPassStopRef,
        'rtLastPassRouteIdx': value.rtLastPassRouteIdx,
        'rtLastPassStopRef': value.rtLastPassStopRef,
        'cancelled': value.cancelled,
        'partCancelled': value.partCancelled,
        'reachable': value.reachable,
        'redirected': value.redirected,
        'uncertainDelay': value.uncertainDelay,
        'dayOfOperation': value.dayOfOperation,
        'ref': value.ref,
    };
}

