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
import type { CombinedProductType } from './CombinedProductType';
import {
    CombinedProductTypeFromJSON,
    CombinedProductTypeFromJSONTyped,
    CombinedProductTypeToJSON,
} from './CombinedProductType';
import type { FreqType } from './FreqType';
import {
    FreqTypeFromJSON,
    FreqTypeFromJSONTyped,
    FreqTypeToJSON,
} from './FreqType';
import type { GisRef } from './GisRef';
import {
    GisRefFromJSON,
    GisRefFromJSONTyped,
    GisRefToJSON,
} from './GisRef';
import type { GisRouteType } from './GisRouteType';
import {
    GisRouteTypeFromJSON,
    GisRouteTypeFromJSONTyped,
    GisRouteTypeToJSON,
} from './GisRouteType';
import type { JourneyDetail } from './JourneyDetail';
import {
    JourneyDetailFromJSON,
    JourneyDetailFromJSONTyped,
    JourneyDetailToJSON,
} from './JourneyDetail';
import type { JourneyDetailRef } from './JourneyDetailRef';
import {
    JourneyDetailRefFromJSON,
    JourneyDetailRefFromJSONTyped,
    JourneyDetailRefToJSON,
} from './JourneyDetailRef';
import type { JourneyType } from './JourneyType';
import {
    JourneyTypeFromJSON,
    JourneyTypeFromJSONTyped,
    JourneyTypeToJSON,
} from './JourneyType';
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
import type { OriginDestType } from './OriginDestType';
import {
    OriginDestTypeFromJSON,
    OriginDestTypeFromJSONTyped,
    OriginDestTypeToJSON,
} from './OriginDestType';
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
import type { TrafficMessageType } from './TrafficMessageType';
import {
    TrafficMessageTypeFromJSON,
    TrafficMessageTypeFromJSONTyped,
    TrafficMessageTypeToJSON,
} from './TrafficMessageType';

/**
 * 
 * @export
 * @interface Leg
 */
export interface Leg {
    /**
     * 
     * @type {string}
     * @memberof Leg
     */
    duration?: string;
    /**
     * 
     * @type {OriginDestType}
     * @memberof Leg
     */
    origin: OriginDestType;
    /**
     * 
     * @type {OriginDestType}
     * @memberof Leg
     */
    destination: OriginDestType;
    /**
     * 
     * @type {OriginDestType}
     * @memberof Leg
     */
    journeyOrigin?: OriginDestType;
    /**
     * 
     * @type {OriginDestType}
     * @memberof Leg
     */
    journeyDestination?: OriginDestType;
    /**
     * 
     * @type {Notes}
     * @memberof Leg
     */
    notes?: Notes;
    /**
     * 
     * @type {JourneyDetailRef}
     * @memberof Leg
     */
    journeyDetailRef?: JourneyDetailRef;
    /**
     * 
     * @type {FreqType}
     * @memberof Leg
     */
    freq?: FreqType;
    /**
     * 
     * @type {GisRef}
     * @memberof Leg
     */
    gisRef?: GisRef;
    /**
     * 
     * @type {GisRouteType}
     * @memberof Leg
     */
    gisRoute?: GisRouteType;
    /**
     * 
     * @type {Messages}
     * @memberof Leg
     */
    messages?: Messages;
    /**
     * 
     * @type {Array<TrafficMessageType>}
     * @memberof Leg
     */
    readonly trafficMessage?: Array<TrafficMessageType>;
    /**
     * 
     * @type {string}
     * @memberof Leg
     */
    journeyStatus?: LegJourneyStatusEnum;
    /**
     * 
     * @type {Array<ProductType>}
     * @memberof Leg
     */
    readonly product?: Array<ProductType>;
    /**
     * 
     * @type {Array<CombinedProductType>}
     * @memberof Leg
     */
    readonly combinedProduct?: Array<CombinedProductType>;
    /**
     * 
     * @type {Polyline}
     * @memberof Leg
     */
    polyline?: Polyline;
    /**
     * 
     * @type {PolylineGroup}
     * @memberof Leg
     */
    polylineGroup?: PolylineGroup;
    /**
     * 
     * @type {Stops}
     * @memberof Leg
     */
    stops?: Stops;
    /**
     * 
     * @type {Array<ServiceDays>}
     * @memberof Leg
     */
    readonly serviceDays?: Array<ServiceDays>;
    /**
     * 
     * @type {JourneyDetail}
     * @memberof Leg
     */
    journeyDetail?: JourneyDetail;
    /**
     * 
     * @type {Array<JourneyType>}
     * @memberof Leg
     */
    readonly parallelJourney?: Array<JourneyType>;
    /**
     * 
     * @type {Array<OccupancyType>}
     * @memberof Leg
     */
    readonly occupancy?: Array<OccupancyType>;
    /**
     * 
     * @type {Array<ReferencedJourneyType>}
     * @memberof Leg
     */
    readonly referencedJourney?: Array<ReferencedJourneyType>;
    /**
     * 
     * @type {string}
     * @memberof Leg
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof Leg
     */
    idx: number;
    /**
     * 
     * @type {string}
     * @memberof Leg
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Leg
     */
    addName?: string;
    /**
     * 
     * @type {string}
     * @memberof Leg
     */
    number?: string;
    /**
     * 
     * @type {string}
     * @memberof Leg
     */
    category?: string;
    /**
     * 
     * @type {string}
     * @memberof Leg
     */
    type: string;
    /**
     * 
     * @type {boolean}
     * @memberof Leg
     */
    cancelled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Leg
     */
    partCancelled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Leg
     */
    reachable?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Leg
     */
    redirected?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Leg
     */
    direction?: string;
    /**
     * 
     * @type {string}
     * @memberof Leg
     */
    directionFlag?: string;
    /**
     * 
     * @type {number}
     * @memberof Leg
     */
    dist?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Leg
     */
    hide?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Leg
     */
    psCtxArriveEarlier?: string;
    /**
     * 
     * @type {string}
     * @memberof Leg
     */
    psCtxDepartLater?: string;
    /**
     * 
     * @type {string}
     * @memberof Leg
     */
    recState?: LegRecStateEnum;
    /**
     * 
     * @type {boolean}
     * @memberof Leg
     */
    changeAssured?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Leg
     */
    uncertainDelay?: boolean;
}


/**
 * @export
 */
export const LegJourneyStatusEnum = {
    P: 'P',
    R: 'R',
    A: 'A',
    S: 'S'
} as const;
export type LegJourneyStatusEnum = typeof LegJourneyStatusEnum[keyof typeof LegJourneyStatusEnum];

/**
 * @export
 */
export const LegRecStateEnum = {
    U: 'U',
    C: 'C',
    P: 'P',
    N: 'N',
    O: 'O'
} as const;
export type LegRecStateEnum = typeof LegRecStateEnum[keyof typeof LegRecStateEnum];


/**
 * Check if a given object implements the Leg interface.
 */
export function instanceOfLeg(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "origin" in value;
    isInstance = isInstance && "destination" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "idx" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function LegFromJSON(json: any): Leg {
    return LegFromJSONTyped(json, false);
}

export function LegFromJSONTyped(json: any, ignoreDiscriminator: boolean): Leg {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'origin': OriginDestTypeFromJSON(json['Origin']),
        'destination': OriginDestTypeFromJSON(json['Destination']),
        'journeyOrigin': !exists(json, 'JourneyOrigin') ? undefined : OriginDestTypeFromJSON(json['JourneyOrigin']),
        'journeyDestination': !exists(json, 'JourneyDestination') ? undefined : OriginDestTypeFromJSON(json['JourneyDestination']),
        'notes': !exists(json, 'Notes') ? undefined : NotesFromJSON(json['Notes']),
        'journeyDetailRef': !exists(json, 'JourneyDetailRef') ? undefined : JourneyDetailRefFromJSON(json['JourneyDetailRef']),
        'freq': !exists(json, 'Freq') ? undefined : FreqTypeFromJSON(json['Freq']),
        'gisRef': !exists(json, 'GisRef') ? undefined : GisRefFromJSON(json['GisRef']),
        'gisRoute': !exists(json, 'GisRoute') ? undefined : GisRouteTypeFromJSON(json['GisRoute']),
        'messages': !exists(json, 'Messages') ? undefined : MessagesFromJSON(json['Messages']),
        'trafficMessage': !exists(json, 'TrafficMessage') ? undefined : ((json['TrafficMessage'] as Array<any>).map(TrafficMessageTypeFromJSON)),
        'journeyStatus': !exists(json, 'JourneyStatus') ? undefined : json['JourneyStatus'],
        'product': !exists(json, 'Product') ? undefined : ((json['Product'] as Array<any>).map(ProductTypeFromJSON)),
        'combinedProduct': !exists(json, 'CombinedProduct') ? undefined : ((json['CombinedProduct'] as Array<any>).map(CombinedProductTypeFromJSON)),
        'polyline': !exists(json, 'Polyline') ? undefined : PolylineFromJSON(json['Polyline']),
        'polylineGroup': !exists(json, 'PolylineGroup') ? undefined : PolylineGroupFromJSON(json['PolylineGroup']),
        'stops': !exists(json, 'Stops') ? undefined : StopsFromJSON(json['Stops']),
        'serviceDays': !exists(json, 'ServiceDays') ? undefined : ((json['ServiceDays'] as Array<any>).map(ServiceDaysFromJSON)),
        'journeyDetail': !exists(json, 'JourneyDetail') ? undefined : JourneyDetailFromJSON(json['JourneyDetail']),
        'parallelJourney': !exists(json, 'ParallelJourney') ? undefined : ((json['ParallelJourney'] as Array<any>).map(JourneyTypeFromJSON)),
        'occupancy': !exists(json, 'Occupancy') ? undefined : ((json['Occupancy'] as Array<any>).map(OccupancyTypeFromJSON)),
        'referencedJourney': !exists(json, 'referencedJourney') ? undefined : ((json['referencedJourney'] as Array<any>).map(ReferencedJourneyTypeFromJSON)),
        'id': json['id'],
        'idx': json['idx'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'addName': !exists(json, 'addName') ? undefined : json['addName'],
        'number': !exists(json, 'number') ? undefined : json['number'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'type': json['type'],
        'cancelled': !exists(json, 'cancelled') ? undefined : json['cancelled'],
        'partCancelled': !exists(json, 'partCancelled') ? undefined : json['partCancelled'],
        'reachable': !exists(json, 'reachable') ? undefined : json['reachable'],
        'redirected': !exists(json, 'redirected') ? undefined : json['redirected'],
        'direction': !exists(json, 'direction') ? undefined : json['direction'],
        'directionFlag': !exists(json, 'directionFlag') ? undefined : json['directionFlag'],
        'dist': !exists(json, 'dist') ? undefined : json['dist'],
        'hide': !exists(json, 'hide') ? undefined : json['hide'],
        'psCtxArriveEarlier': !exists(json, 'psCtxArriveEarlier') ? undefined : json['psCtxArriveEarlier'],
        'psCtxDepartLater': !exists(json, 'psCtxDepartLater') ? undefined : json['psCtxDepartLater'],
        'recState': !exists(json, 'recState') ? undefined : json['recState'],
        'changeAssured': !exists(json, 'changeAssured') ? undefined : json['changeAssured'],
        'uncertainDelay': !exists(json, 'uncertainDelay') ? undefined : json['uncertainDelay'],
    };
}

export function LegToJSON(value?: Leg | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duration': value.duration,
        'Origin': OriginDestTypeToJSON(value.origin),
        'Destination': OriginDestTypeToJSON(value.destination),
        'JourneyOrigin': OriginDestTypeToJSON(value.journeyOrigin),
        'JourneyDestination': OriginDestTypeToJSON(value.journeyDestination),
        'Notes': NotesToJSON(value.notes),
        'JourneyDetailRef': JourneyDetailRefToJSON(value.journeyDetailRef),
        'Freq': FreqTypeToJSON(value.freq),
        'GisRef': GisRefToJSON(value.gisRef),
        'GisRoute': GisRouteTypeToJSON(value.gisRoute),
        'Messages': MessagesToJSON(value.messages),
        'JourneyStatus': value.journeyStatus,
        'Polyline': PolylineToJSON(value.polyline),
        'PolylineGroup': PolylineGroupToJSON(value.polylineGroup),
        'Stops': StopsToJSON(value.stops),
        'JourneyDetail': JourneyDetailToJSON(value.journeyDetail),
        'id': value.id,
        'idx': value.idx,
        'name': value.name,
        'addName': value.addName,
        'number': value.number,
        'category': value.category,
        'type': value.type,
        'cancelled': value.cancelled,
        'partCancelled': value.partCancelled,
        'reachable': value.reachable,
        'redirected': value.redirected,
        'direction': value.direction,
        'directionFlag': value.directionFlag,
        'dist': value.dist,
        'hide': value.hide,
        'psCtxArriveEarlier': value.psCtxArriveEarlier,
        'psCtxDepartLater': value.psCtxDepartLater,
        'recState': value.recState,
        'changeAssured': value.changeAssured,
        'uncertainDelay': value.uncertainDelay,
    };
}
