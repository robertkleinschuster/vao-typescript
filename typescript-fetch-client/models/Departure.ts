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
import type { ParallelJourneyRefType } from './ParallelJourneyRefType';
import {
    ParallelJourneyRefTypeFromJSON,
    ParallelJourneyRefTypeFromJSONTyped,
    ParallelJourneyRefTypeToJSON,
} from './ParallelJourneyRefType';
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
 * @interface Departure
 */
export interface Departure {
    /**
     * 
     * @type {JourneyDetailRef}
     * @memberof Departure
     */
    journeyDetailRef: JourneyDetailRef;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    journeyStatus?: DepartureJourneyStatusEnum;
    /**
     * 
     * @type {ProductType}
     * @memberof Departure
     */
    productAtStop?: ProductType;
    /**
     * 
     * @type {Array<ProductType>}
     * @memberof Departure
     */
    readonly product?: Array<ProductType>;
    /**
     * 
     * @type {Notes}
     * @memberof Departure
     */
    notes?: Notes;
    /**
     * 
     * @type {Messages}
     * @memberof Departure
     */
    messages?: Messages;
    /**
     * 
     * @type {Directions}
     * @memberof Departure
     */
    directions?: Directions;
    /**
     * 
     * @type {Array<string>}
     * @memberof Departure
     */
    readonly altId?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Departure
     */
    readonly mainMastAltId?: Array<string>;
    /**
     * 
     * @type {Stops}
     * @memberof Departure
     */
    stops?: Stops;
    /**
     * 
     * @type {Array<OccupancyType>}
     * @memberof Departure
     */
    readonly occupancy?: Array<OccupancyType>;
    /**
     * 
     * @type {Array<ParallelJourneyRefType>}
     * @memberof Departure
     */
    readonly parallelJourneyRef?: Array<ParallelJourneyRefType>;
    /**
     * 
     * @type {Array<ReferencedJourneyType>}
     * @memberof Departure
     */
    readonly referencedJourney?: Array<ReferencedJourneyType>;
    /**
     * 
     * @type {PlatformType}
     * @memberof Departure
     */
    platform?: PlatformType;
    /**
     * 
     * @type {PlatformType}
     * @memberof Departure
     */
    rtPlatform?: PlatformType;
    /**
     * 
     * @type {StopLocation}
     * @memberof Departure
     */
    mainMast?: StopLocation;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    stop: string;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    stopid: string;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    stopExtId?: string;
    /**
     * 
     * @type {number}
     * @memberof Departure
     */
    lon?: number;
    /**
     * 
     * @type {number}
     * @memberof Departure
     */
    lat?: number;
    /**
     * 
     * @type {number}
     * @memberof Departure
     */
    alt?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Departure
     */
    isMainMast?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Departure
     */
    hasMainMast?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    mainMastId?: string;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    mainMastExtId?: string;
    /**
     * 
     * @type {number}
     * @memberof Departure
     */
    mainMastLon?: number;
    /**
     * 
     * @type {number}
     * @memberof Departure
     */
    mainMastLat?: number;
    /**
     * 
     * @type {number}
     * @memberof Departure
     */
    mainMastAlt?: number;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    prognosisType?: DeparturePrognosisTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    time: string;
    /**
     * 
     * @type {boolean}
     * @memberof Departure
     */
    scheduledTimeChanged?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    date: string;
    /**
     * 
     * @type {number}
     * @memberof Departure
     */
    tz?: number;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    track?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Departure
     */
    trackHidden?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    rtTime?: string;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    rtDate?: string;
    /**
     * 
     * @type {number}
     * @memberof Departure
     */
    rtTz?: number;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    rtTrack?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Departure
     */
    rtTrackHidden?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Departure
     */
    cancelled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Departure
     */
    partCancelled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Departure
     */
    reachable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Departure
     */
    redirected?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    direction?: string;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    directionFlag?: string;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    directionExtId?: string;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    timeAtArrival?: string;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    dateAtArrival?: string;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    rtTimeAtArrival?: string;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    rtDateAtArrival?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Departure
     */
    isFastest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Departure
     */
    isBorderStop?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Departure
     */
    isTurningPoint?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Departure
     */
    entry?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Departure
     */
    rtCnclDataSourceType?: DepartureRtCnclDataSourceTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof Departure
     */
    uncertainDelay?: boolean;
}


/**
 * @export
 */
export const DepartureJourneyStatusEnum = {
    P: 'P',
    R: 'R',
    A: 'A',
    S: 'S'
} as const;
export type DepartureJourneyStatusEnum = typeof DepartureJourneyStatusEnum[keyof typeof DepartureJourneyStatusEnum];

/**
 * @export
 */
export const DeparturePrognosisTypeEnum = {
    Prognosed: 'PROGNOSED',
    Manual: 'MANUAL',
    Reported: 'REPORTED',
    Corrected: 'CORRECTED',
    Calculated: 'CALCULATED'
} as const;
export type DeparturePrognosisTypeEnum = typeof DeparturePrognosisTypeEnum[keyof typeof DeparturePrognosisTypeEnum];

/**
 * @export
 */
export const DepartureRtCnclDataSourceTypeEnum = {
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
export type DepartureRtCnclDataSourceTypeEnum = typeof DepartureRtCnclDataSourceTypeEnum[keyof typeof DepartureRtCnclDataSourceTypeEnum];


/**
 * Check if a given object implements the Departure interface.
 */
export function instanceOfDeparture(value: object): boolean {
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

export function DepartureFromJSON(json: any): Departure {
    return DepartureFromJSONTyped(json, false);
}

export function DepartureFromJSONTyped(json: any, ignoreDiscriminator: boolean): Departure {
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
        'parallelJourneyRef': !exists(json, 'ParallelJourneyRef') ? undefined : ((json['ParallelJourneyRef'] as Array<any>).map(ParallelJourneyRefTypeFromJSON)),
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
        'scheduledTimeChanged': !exists(json, 'scheduledTimeChanged') ? undefined : json['scheduledTimeChanged'],
        'date': json['date'],
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
        'direction': !exists(json, 'direction') ? undefined : json['direction'],
        'directionFlag': !exists(json, 'directionFlag') ? undefined : json['directionFlag'],
        'directionExtId': !exists(json, 'directionExtId') ? undefined : json['directionExtId'],
        'timeAtArrival': !exists(json, 'timeAtArrival') ? undefined : json['timeAtArrival'],
        'dateAtArrival': !exists(json, 'dateAtArrival') ? undefined : json['dateAtArrival'],
        'rtTimeAtArrival': !exists(json, 'rtTimeAtArrival') ? undefined : json['rtTimeAtArrival'],
        'rtDateAtArrival': !exists(json, 'rtDateAtArrival') ? undefined : json['rtDateAtArrival'],
        'isFastest': !exists(json, 'isFastest') ? undefined : json['isFastest'],
        'isBorderStop': !exists(json, 'isBorderStop') ? undefined : json['isBorderStop'],
        'isTurningPoint': !exists(json, 'isTurningPoint') ? undefined : json['isTurningPoint'],
        'entry': !exists(json, 'entry') ? undefined : json['entry'],
        'rtCnclDataSourceType': !exists(json, 'rtCnclDataSourceType') ? undefined : json['rtCnclDataSourceType'],
        'uncertainDelay': !exists(json, 'uncertainDelay') ? undefined : json['uncertainDelay'],
    };
}

export function DepartureToJSON(value?: Departure | null): any {
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
        'scheduledTimeChanged': value.scheduledTimeChanged,
        'date': value.date,
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
        'direction': value.direction,
        'directionFlag': value.directionFlag,
        'directionExtId': value.directionExtId,
        'timeAtArrival': value.timeAtArrival,
        'dateAtArrival': value.dateAtArrival,
        'rtTimeAtArrival': value.rtTimeAtArrival,
        'rtDateAtArrival': value.rtDateAtArrival,
        'isFastest': value.isFastest,
        'isBorderStop': value.isBorderStop,
        'isTurningPoint': value.isTurningPoint,
        'entry': value.entry,
        'rtCnclDataSourceType': value.rtCnclDataSourceType,
        'uncertainDelay': value.uncertainDelay,
    };
}
