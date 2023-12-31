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
import type { Directions } from './Directions';
import {
    DirectionsFromJSON,
    DirectionsFromJSONTyped,
    DirectionsToJSON,
} from './Directions';
import type { JourneyDetailRef } from './JourneyDetailRef';
import {
    JourneyDetailRefFromJSON,
    JourneyDetailRefFromJSONTyped,
    JourneyDetailRefToJSON,
} from './JourneyDetailRef';
import type { Messages } from './Messages';
import {
    MessagesFromJSON,
    MessagesFromJSONTyped,
    MessagesToJSON,
} from './Messages';
import type { Notes } from './Notes';
import {
    NotesFromJSON,
    NotesFromJSONTyped,
    NotesToJSON,
} from './Notes';
import type { OccupancyType } from './OccupancyType';
import {
    OccupancyTypeFromJSON,
    OccupancyTypeFromJSONTyped,
    OccupancyTypeToJSON,
} from './OccupancyType';
import type { PlatformType } from './PlatformType';
import {
    PlatformTypeFromJSON,
    PlatformTypeFromJSONTyped,
    PlatformTypeToJSON,
} from './PlatformType';
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
import type { StopLocation } from './StopLocation';
import {
    StopLocationFromJSON,
    StopLocationFromJSONTyped,
    StopLocationToJSON,
} from './StopLocation';
import type { Stops } from './Stops';
import {
    StopsFromJSON,
    StopsFromJSONTyped,
    StopsToJSON,
} from './Stops';

/**
 * 
 * @export
 * @interface Arrival
 */
export interface Arrival {
    /**
     * 
     * @type {JourneyDetailRef}
     * @memberof Arrival
     */
    journeyDetailRef: JourneyDetailRef;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    journeyStatus?: ArrivalJourneyStatusEnum;
    /**
     * 
     * @type {ProductType}
     * @memberof Arrival
     */
    productAtStop?: ProductType;
    /**
     * 
     * @type {Array<ProductType>}
     * @memberof Arrival
     */
    readonly product?: Array<ProductType>;
    /**
     * 
     * @type {Notes}
     * @memberof Arrival
     */
    notes?: Notes;
    /**
     * 
     * @type {Messages}
     * @memberof Arrival
     */
    messages?: Messages;
    /**
     * 
     * @type {Directions}
     * @memberof Arrival
     */
    directions?: Directions;
    /**
     * 
     * @type {Array<string>}
     * @memberof Arrival
     */
    readonly altId?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Arrival
     */
    readonly mainMastAltId?: Array<string>;
    /**
     * 
     * @type {Stops}
     * @memberof Arrival
     */
    stops?: Stops;
    /**
     * 
     * @type {Array<OccupancyType>}
     * @memberof Arrival
     */
    readonly occupancy?: Array<OccupancyType>;
    /**
     * 
     * @type {Array<ReferencedJourneyType>}
     * @memberof Arrival
     */
    readonly referencedJourney?: Array<ReferencedJourneyType>;
    /**
     * 
     * @type {PlatformType}
     * @memberof Arrival
     */
    platform?: PlatformType;
    /**
     * 
     * @type {PlatformType}
     * @memberof Arrival
     */
    rtPlatform?: PlatformType;
    /**
     * 
     * @type {StopLocation}
     * @memberof Arrival
     */
    mainMast?: StopLocation;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    stop: string;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    stopid: string;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    stopExtId?: string;
    /**
     * 
     * @type {number}
     * @memberof Arrival
     */
    lon?: number;
    /**
     * 
     * @type {number}
     * @memberof Arrival
     */
    lat?: number;
    /**
     * 
     * @type {number}
     * @memberof Arrival
     */
    alt?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Arrival
     */
    isMainMast?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Arrival
     */
    hasMainMast?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    mainMastId?: string;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    mainMastExtId?: string;
    /**
     * 
     * @type {number}
     * @memberof Arrival
     */
    mainMastLon?: number;
    /**
     * 
     * @type {number}
     * @memberof Arrival
     */
    mainMastLat?: number;
    /**
     * 
     * @type {number}
     * @memberof Arrival
     */
    mainMastAlt?: number;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    prognosisType?: ArrivalPrognosisTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    time: string;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    date: string;
    /**
     * 
     * @type {boolean}
     * @memberof Arrival
     */
    scheduledTimeChanged?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Arrival
     */
    tz?: number;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    track?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Arrival
     */
    trackHidden?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    rtTime?: string;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    rtDate?: string;
    /**
     * 
     * @type {number}
     * @memberof Arrival
     */
    rtTz?: number;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    rtTrack?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Arrival
     */
    rtTrackHidden?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Arrival
     */
    cancelled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Arrival
     */
    partCancelled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Arrival
     */
    reachable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Arrival
     */
    redirected?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Arrival
     */
    uncertainDelay?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    origin?: string;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    directionFlag?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Arrival
     */
    isBorderStop?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Arrival
     */
    isTurningPoint?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Arrival
     */
    entry?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Arrival
     */
    rtCnclDataSourceType?: ArrivalRtCnclDataSourceTypeEnum;
}


/**
 * @export
 */
export const ArrivalJourneyStatusEnum = {
    P: 'P',
    R: 'R',
    A: 'A',
    S: 'S'
} as const;
export type ArrivalJourneyStatusEnum = typeof ArrivalJourneyStatusEnum[keyof typeof ArrivalJourneyStatusEnum];

/**
 * @export
 */
export const ArrivalPrognosisTypeEnum = {
    Prognosed: 'PROGNOSED',
    Manual: 'MANUAL',
    Reported: 'REPORTED',
    Corrected: 'CORRECTED',
    Calculated: 'CALCULATED'
} as const;
export type ArrivalPrognosisTypeEnum = typeof ArrivalPrognosisTypeEnum[keyof typeof ArrivalPrognosisTypeEnum];

/**
 * @export
 */
export const ArrivalRtCnclDataSourceTypeEnum = {
    Default: 'DEFAULT',
    Vdv: 'VDV',
    Him: 'HIM',
    Hrc: 'HRC',
    Siri: 'SIRI',
    Uic: 'UIC',
    Hrx: 'HRX',
    Gtfs: 'GTFS',
    Fis: 'FIS',
    Dds: 'DDS',
    Paisa: 'PAISA',
    Fe: 'FE',
    Blacklist: 'BLACKLIST',
    Aramis: 'ARAMIS',
    Rtabo2: 'RTABO2'
} as const;
export type ArrivalRtCnclDataSourceTypeEnum = typeof ArrivalRtCnclDataSourceTypeEnum[keyof typeof ArrivalRtCnclDataSourceTypeEnum];


/**
 * Check if a given object implements the Arrival interface.
 */
export function instanceOfArrival(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "journeyDetailRef" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "stop" in value;
    isInstance = isInstance && "stopid" in value;
    isInstance = isInstance && "time" in value;
    isInstance = isInstance && "date" in value;

    return isInstance;
}

export function ArrivalFromJSON(json: any): Arrival {
    return ArrivalFromJSONTyped(json, false);
}

export function ArrivalFromJSONTyped(json: any, ignoreDiscriminator: boolean): Arrival {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'journeyDetailRef': JourneyDetailRefFromJSON(json['JourneyDetailRef']),
        'journeyStatus': !exists(json, 'JourneyStatus') ? undefined : json['JourneyStatus'],
        'productAtStop': !exists(json, 'ProductAtStop') ? undefined : ProductTypeFromJSON(json['ProductAtStop']),
        'product': !exists(json, 'Product') ? undefined : ((json['Product'] as Array<any>).map(ProductTypeFromJSON)),
        'notes': !exists(json, 'Notes') ? undefined : NotesFromJSON(json['Notes']),
        'messages': !exists(json, 'Messages') ? undefined : MessagesFromJSON(json['Messages']),
        'directions': !exists(json, 'Directions') ? undefined : DirectionsFromJSON(json['Directions']),
        'altId': !exists(json, 'altId') ? undefined : json['altId'],
        'mainMastAltId': !exists(json, 'mainMastAltId') ? undefined : json['mainMastAltId'],
        'stops': !exists(json, 'Stops') ? undefined : StopsFromJSON(json['Stops']),
        'occupancy': !exists(json, 'Occupancy') ? undefined : ((json['Occupancy'] as Array<any>).map(OccupancyTypeFromJSON)),
        'referencedJourney': !exists(json, 'referencedJourney') ? undefined : ((json['referencedJourney'] as Array<any>).map(ReferencedJourneyTypeFromJSON)),
        'platform': !exists(json, 'platform') ? undefined : PlatformTypeFromJSON(json['platform']),
        'rtPlatform': !exists(json, 'rtPlatform') ? undefined : PlatformTypeFromJSON(json['rtPlatform']),
        'mainMast': !exists(json, 'mainMast') ? undefined : StopLocationFromJSON(json['mainMast']),
        'name': json['name'],
        'type': json['type'],
        'stop': json['stop'],
        'stopid': json['stopid'],
        'stopExtId': !exists(json, 'stopExtId') ? undefined : json['stopExtId'],
        'lon': !exists(json, 'lon') ? undefined : json['lon'],
        'lat': !exists(json, 'lat') ? undefined : json['lat'],
        'alt': !exists(json, 'alt') ? undefined : json['alt'],
        'isMainMast': !exists(json, 'isMainMast') ? undefined : json['isMainMast'],
        'hasMainMast': !exists(json, 'hasMainMast') ? undefined : json['hasMainMast'],
        'mainMastId': !exists(json, 'mainMastId') ? undefined : json['mainMastId'],
        'mainMastExtId': !exists(json, 'mainMastExtId') ? undefined : json['mainMastExtId'],
        'mainMastLon': !exists(json, 'mainMastLon') ? undefined : json['mainMastLon'],
        'mainMastLat': !exists(json, 'mainMastLat') ? undefined : json['mainMastLat'],
        'mainMastAlt': !exists(json, 'mainMastAlt') ? undefined : json['mainMastAlt'],
        'prognosisType': !exists(json, 'prognosisType') ? undefined : json['prognosisType'],
        'time': json['time'],
        'date': json['date'],
        'scheduledTimeChanged': !exists(json, 'scheduledTimeChanged') ? undefined : json['scheduledTimeChanged'],
        'tz': !exists(json, 'tz') ? undefined : json['tz'],
        'track': !exists(json, 'track') ? undefined : json['track'],
        'trackHidden': !exists(json, 'trackHidden') ? undefined : json['trackHidden'],
        'rtTime': !exists(json, 'rtTime') ? undefined : json['rtTime'],
        'rtDate': !exists(json, 'rtDate') ? undefined : json['rtDate'],
        'rtTz': !exists(json, 'rtTz') ? undefined : json['rtTz'],
        'rtTrack': !exists(json, 'rtTrack') ? undefined : json['rtTrack'],
        'rtTrackHidden': !exists(json, 'rtTrackHidden') ? undefined : json['rtTrackHidden'],
        'cancelled': !exists(json, 'cancelled') ? undefined : json['cancelled'],
        'partCancelled': !exists(json, 'partCancelled') ? undefined : json['partCancelled'],
        'reachable': !exists(json, 'reachable') ? undefined : json['reachable'],
        'redirected': !exists(json, 'redirected') ? undefined : json['redirected'],
        'uncertainDelay': !exists(json, 'uncertainDelay') ? undefined : json['uncertainDelay'],
        'origin': !exists(json, 'origin') ? undefined : json['origin'],
        'directionFlag': !exists(json, 'directionFlag') ? undefined : json['directionFlag'],
        'isBorderStop': !exists(json, 'isBorderStop') ? undefined : json['isBorderStop'],
        'isTurningPoint': !exists(json, 'isTurningPoint') ? undefined : json['isTurningPoint'],
        'entry': !exists(json, 'entry') ? undefined : json['entry'],
        'rtCnclDataSourceType': !exists(json, 'rtCnclDataSourceType') ? undefined : json['rtCnclDataSourceType'],
    };
}

export function ArrivalToJSON(value?: Arrival | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'JourneyDetailRef': JourneyDetailRefToJSON(value.journeyDetailRef),
        'JourneyStatus': value.journeyStatus,
        'ProductAtStop': ProductTypeToJSON(value.productAtStop),
        'Notes': NotesToJSON(value.notes),
        'Messages': MessagesToJSON(value.messages),
        'Directions': DirectionsToJSON(value.directions),
        'Stops': StopsToJSON(value.stops),
        'platform': PlatformTypeToJSON(value.platform),
        'rtPlatform': PlatformTypeToJSON(value.rtPlatform),
        'mainMast': StopLocationToJSON(value.mainMast),
        'name': value.name,
        'type': value.type,
        'stop': value.stop,
        'stopid': value.stopid,
        'stopExtId': value.stopExtId,
        'lon': value.lon,
        'lat': value.lat,
        'alt': value.alt,
        'isMainMast': value.isMainMast,
        'hasMainMast': value.hasMainMast,
        'mainMastId': value.mainMastId,
        'mainMastExtId': value.mainMastExtId,
        'mainMastLon': value.mainMastLon,
        'mainMastLat': value.mainMastLat,
        'mainMastAlt': value.mainMastAlt,
        'prognosisType': value.prognosisType,
        'time': value.time,
        'date': value.date,
        'scheduledTimeChanged': value.scheduledTimeChanged,
        'tz': value.tz,
        'track': value.track,
        'trackHidden': value.trackHidden,
        'rtTime': value.rtTime,
        'rtDate': value.rtDate,
        'rtTz': value.rtTz,
        'rtTrack': value.rtTrack,
        'rtTrackHidden': value.rtTrackHidden,
        'cancelled': value.cancelled,
        'partCancelled': value.partCancelled,
        'reachable': value.reachable,
        'redirected': value.redirected,
        'uncertainDelay': value.uncertainDelay,
        'origin': value.origin,
        'directionFlag': value.directionFlag,
        'isBorderStop': value.isBorderStop,
        'isTurningPoint': value.isTurningPoint,
        'entry': value.entry,
        'rtCnclDataSourceType': value.rtCnclDataSourceType,
    };
}

