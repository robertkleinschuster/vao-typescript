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
import type { IconType } from './IconType';
import {
    IconTypeFromJSON,
    IconTypeFromJSONTyped,
    IconTypeToJSON,
} from './IconType';
import type { OperatorType } from './OperatorType';
import {
    OperatorTypeFromJSON,
    OperatorTypeFromJSONTyped,
    OperatorTypeToJSON,
} from './OperatorType';
import type { ProductStatusType } from './ProductStatusType';
import {
    ProductStatusTypeFromJSON,
    ProductStatusTypeFromJSONTyped,
    ProductStatusTypeToJSON,
} from './ProductStatusType';
import type { StopType } from './StopType';
import {
    StopTypeFromJSON,
    StopTypeFromJSONTyped,
    StopTypeToJSON,
} from './StopType';

/**
 * 
 * @export
 * @interface ProductType
 */
export interface ProductType {
    /**
     * 
     * @type {IconType}
     * @memberof ProductType
     */
    icon?: IconType;
    /**
     * 
     * @type {ProductStatusType}
     * @memberof ProductType
     */
    status?: ProductStatusType;
    /**
     * 
     * @type {StopType}
     * @memberof ProductType
     */
    fromLocation?: StopType;
    /**
     * 
     * @type {StopType}
     * @memberof ProductType
     */
    toLocation?: StopType;
    /**
     * 
     * @type {OperatorType}
     * @memberof ProductType
     */
    operatorInfo?: OperatorType;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    internalName?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    addName?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    displayNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    num?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    line?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    lineId?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    catOut?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    catIn?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    catCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    cls?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    catOutS?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    catOutL?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    operatorCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    operator?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    admin?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductType
     */
    routeIdxFrom?: number;
    /**
     * 
     * @type {number}
     * @memberof ProductType
     */
    routeIdxTo?: number;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    matchId?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    tarGr?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    surcharge?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    outCtrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    locTraffic?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductType
     */
    shipTraffic?: string;
}

/**
 * Check if a given object implements the ProductType interface.
 */
export function instanceOfProductType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProductTypeFromJSON(json: any): ProductType {
    return ProductTypeFromJSONTyped(json, false);
}

export function ProductTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'icon': !exists(json, 'icon') ? undefined : IconTypeFromJSON(json['icon']),
        'status': !exists(json, 'status') ? undefined : ProductStatusTypeFromJSON(json['status']),
        'fromLocation': !exists(json, 'fromLocation') ? undefined : StopTypeFromJSON(json['fromLocation']),
        'toLocation': !exists(json, 'toLocation') ? undefined : StopTypeFromJSON(json['toLocation']),
        'operatorInfo': !exists(json, 'operatorInfo') ? undefined : OperatorTypeFromJSON(json['operatorInfo']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'internalName': !exists(json, 'internalName') ? undefined : json['internalName'],
        'addName': !exists(json, 'addName') ? undefined : json['addName'],
        'displayNumber': !exists(json, 'displayNumber') ? undefined : json['displayNumber'],
        'num': !exists(json, 'num') ? undefined : json['num'],
        'line': !exists(json, 'line') ? undefined : json['line'],
        'lineId': !exists(json, 'lineId') ? undefined : json['lineId'],
        'catOut': !exists(json, 'catOut') ? undefined : json['catOut'],
        'catIn': !exists(json, 'catIn') ? undefined : json['catIn'],
        'catCode': !exists(json, 'catCode') ? undefined : json['catCode'],
        'cls': !exists(json, 'cls') ? undefined : json['cls'],
        'catOutS': !exists(json, 'catOutS') ? undefined : json['catOutS'],
        'catOutL': !exists(json, 'catOutL') ? undefined : json['catOutL'],
        'operatorCode': !exists(json, 'operatorCode') ? undefined : json['operatorCode'],
        'operator': !exists(json, 'operator') ? undefined : json['operator'],
        'admin': !exists(json, 'admin') ? undefined : json['admin'],
        'routeIdxFrom': !exists(json, 'routeIdxFrom') ? undefined : json['routeIdxFrom'],
        'routeIdxTo': !exists(json, 'routeIdxTo') ? undefined : json['routeIdxTo'],
        'matchId': !exists(json, 'matchId') ? undefined : json['matchId'],
        'tarGr': !exists(json, 'tarGr') ? undefined : json['tarGr'],
        'surcharge': !exists(json, 'surcharge') ? undefined : json['surcharge'],
        'outCtrl': !exists(json, 'outCtrl') ? undefined : json['outCtrl'],
        'locTraffic': !exists(json, 'locTraffic') ? undefined : json['locTraffic'],
        'shipTraffic': !exists(json, 'shipTraffic') ? undefined : json['shipTraffic'],
    };
}

export function ProductTypeToJSON(value?: ProductType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'icon': IconTypeToJSON(value.icon),
        'status': ProductStatusTypeToJSON(value.status),
        'fromLocation': StopTypeToJSON(value.fromLocation),
        'toLocation': StopTypeToJSON(value.toLocation),
        'operatorInfo': OperatorTypeToJSON(value.operatorInfo),
        'name': value.name,
        'internalName': value.internalName,
        'addName': value.addName,
        'displayNumber': value.displayNumber,
        'num': value.num,
        'line': value.line,
        'lineId': value.lineId,
        'catOut': value.catOut,
        'catIn': value.catIn,
        'catCode': value.catCode,
        'cls': value.cls,
        'catOutS': value.catOutS,
        'catOutL': value.catOutL,
        'operatorCode': value.operatorCode,
        'operator': value.operator,
        'admin': value.admin,
        'routeIdxFrom': value.routeIdxFrom,
        'routeIdxTo': value.routeIdxTo,
        'matchId': value.matchId,
        'tarGr': value.tarGr,
        'surcharge': value.surcharge,
        'outCtrl': value.outCtrl,
        'locTraffic': value.locTraffic,
        'shipTraffic': value.shipTraffic,
    };
}

