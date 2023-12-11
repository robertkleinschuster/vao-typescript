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
import type { GisRouteSegment } from './GisRouteSegment';
import {
    GisRouteSegmentFromJSON,
    GisRouteSegmentFromJSONTyped,
    GisRouteSegmentToJSON,
} from './GisRouteSegment';
import type { Notes } from './Notes';
import {
    NotesFromJSON,
    NotesFromJSONTyped,
    NotesToJSON,
} from './Notes';
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

/**
 * 
 * @export
 * @interface GisRouteType
 */
export interface GisRouteType {
    /**
     * 
     * @type {string}
     * @memberof GisRouteType
     */
    durS?: string;
    /**
     * 
     * @type {string}
     * @memberof GisRouteType
     */
    durR?: string;
    /**
     * 
     * @type {string}
     * @memberof GisRouteType
     */
    durST?: string;
    /**
     * 
     * @type {string}
     * @memberof GisRouteType
     */
    durW2C?: string;
    /**
     * 
     * @type {string}
     * @memberof GisRouteType
     */
    durW2D?: string;
    /**
     * 
     * @type {Array<GisRouteSegment>}
     * @memberof GisRouteType
     */
    readonly seg?: Array<GisRouteSegment>;
    /**
     * 
     * @type {Notes}
     * @memberof GisRouteType
     */
    notes?: Notes;
    /**
     * 
     * @type {Polyline}
     * @memberof GisRouteType
     */
    polyline?: Polyline;
    /**
     * 
     * @type {PolylineGroup}
     * @memberof GisRouteType
     */
    polylineGroup?: PolylineGroup;
    /**
     * 
     * @type {Array<Polyline>}
     * @memberof GisRouteType
     */
    readonly altPolyline?: Array<Polyline>;
    /**
     * 
     * @type {Array<PolylineGroup>}
     * @memberof GisRouteType
     */
    readonly altPolylineGroup?: Array<PolylineGroup>;
    /**
     * 
     * @type {number}
     * @memberof GisRouteType
     */
    dist?: number;
    /**
     * 
     * @type {string}
     * @memberof GisRouteType
     */
    dirTxt?: string;
    /**
     * 
     * @type {number}
     * @memberof GisRouteType
     */
    dirGeo?: number;
    /**
     * 
     * @type {string}
     * @memberof GisRouteType
     */
    edgeHashS?: string;
    /**
     * 
     * @type {string}
     * @memberof GisRouteType
     */
    edgeHashR?: string;
    /**
     * 
     * @type {number}
     * @memberof GisRouteType
     */
    totUphill?: number;
    /**
     * 
     * @type {number}
     * @memberof GisRouteType
     */
    totDownhill?: number;
}

/**
 * Check if a given object implements the GisRouteType interface.
 */
export function instanceOfGisRouteType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GisRouteTypeFromJSON(json: any): GisRouteType {
    return GisRouteTypeFromJSONTyped(json, false);
}

export function GisRouteTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GisRouteType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'durS': !exists(json, 'durS') ? undefined : json['durS'],
        'durR': !exists(json, 'durR') ? undefined : json['durR'],
        'durST': !exists(json, 'durST') ? undefined : json['durST'],
        'durW2C': !exists(json, 'durW2C') ? undefined : json['durW2C'],
        'durW2D': !exists(json, 'durW2D') ? undefined : json['durW2D'],
        'seg': !exists(json, 'seg') ? undefined : ((json['seg'] as Array<any>).map(GisRouteSegmentFromJSON)),
        'notes': !exists(json, 'Notes') ? undefined : NotesFromJSON(json['Notes']),
        'polyline': !exists(json, 'polyline') ? undefined : PolylineFromJSON(json['polyline']),
        'polylineGroup': !exists(json, 'polylineGroup') ? undefined : PolylineGroupFromJSON(json['polylineGroup']),
        'altPolyline': !exists(json, 'altPolyline') ? undefined : ((json['altPolyline'] as Array<any>).map(PolylineFromJSON)),
        'altPolylineGroup': !exists(json, 'altPolylineGroup') ? undefined : ((json['altPolylineGroup'] as Array<any>).map(PolylineGroupFromJSON)),
        'dist': !exists(json, 'dist') ? undefined : json['dist'],
        'dirTxt': !exists(json, 'dirTxt') ? undefined : json['dirTxt'],
        'dirGeo': !exists(json, 'dirGeo') ? undefined : json['dirGeo'],
        'edgeHashS': !exists(json, 'edgeHashS') ? undefined : json['edgeHashS'],
        'edgeHashR': !exists(json, 'edgeHashR') ? undefined : json['edgeHashR'],
        'totUphill': !exists(json, 'totUphill') ? undefined : json['totUphill'],
        'totDownhill': !exists(json, 'totDownhill') ? undefined : json['totDownhill'],
    };
}

export function GisRouteTypeToJSON(value?: GisRouteType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'durS': value.durS,
        'durR': value.durR,
        'durST': value.durST,
        'durW2C': value.durW2C,
        'durW2D': value.durW2D,
        'Notes': NotesToJSON(value.notes),
        'polyline': PolylineToJSON(value.polyline),
        'polylineGroup': PolylineGroupToJSON(value.polylineGroup),
        'dist': value.dist,
        'dirTxt': value.dirTxt,
        'dirGeo': value.dirGeo,
        'edgeHashS': value.edgeHashS,
        'edgeHashR': value.edgeHashR,
        'totUphill': value.totUphill,
        'totDownhill': value.totDownhill,
    };
}
