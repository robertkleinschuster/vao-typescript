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

/**
 * 
 * @export
 * @interface WeatherInformationType
 */
export interface WeatherInformationType {
    /**
     * 
     * @type {IconType}
     * @memberof WeatherInformationType
     */
    icon?: IconType;
    /**
     * 
     * @type {string}
     * @memberof WeatherInformationType
     */
    type: WeatherInformationTypeTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof WeatherInformationType
     */
    date: string;
    /**
     * 
     * @type {string}
     * @memberof WeatherInformationType
     */
    time?: string;
    /**
     * 
     * @type {string}
     * @memberof WeatherInformationType
     */
    temp?: string;
    /**
     * 
     * @type {string}
     * @memberof WeatherInformationType
     */
    text?: string;
    /**
     * 
     * @type {string}
     * @memberof WeatherInformationType
     */
    summary?: string;
}


/**
 * @export
 */
export const WeatherInformationTypeTypeEnum = {
    Undef: 'UNDEF',
    Clear: 'CLEAR',
    PartiallyCloudy: 'PARTIALLY_CLOUDY',
    Cloudy: 'CLOUDY',
    Rain: 'RAIN',
    HeavyRain: 'HEAVY_RAIN',
    Snow: 'SNOW',
    HeavySnow: 'HEAVY_SNOW',
    Hail: 'HAIL',
    HeavyHail: 'HEAVY_HAIL',
    Fog: 'FOG',
    Thunderstorm: 'THUNDERSTORM',
    Storm: 'STORM',
    SlightlyCloudy: 'SLIGHTLY_CLOUDY',
    Sleet: 'SLEET',
    RainShower: 'RAIN_SHOWER',
    SnowShower: 'SNOW_SHOWER',
    SleetShower: 'SLEET_SHOWER',
    HeavyFog: 'HEAVY_FOG',
    SlipperyRoad: 'SLIPPERY_ROAD',
    Drizzle: 'DRIZZLE',
    WetAndCold: 'WET_AND_COLD',
    Dry: 'DRY',
    Sandstorm: 'SANDSTORM',
    HeavySandstorm: 'HEAVY_SANDSTORM',
    ThunderSandstorm: 'THUNDER_SANDSTORM',
    LightRain: 'LIGHT_RAIN'
} as const;
export type WeatherInformationTypeTypeEnum = typeof WeatherInformationTypeTypeEnum[keyof typeof WeatherInformationTypeTypeEnum];


/**
 * Check if a given object implements the WeatherInformationType interface.
 */
export function instanceOfWeatherInformationType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "date" in value;

    return isInstance;
}

export function WeatherInformationTypeFromJSON(json: any): WeatherInformationType {
    return WeatherInformationTypeFromJSONTyped(json, false);
}

export function WeatherInformationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): WeatherInformationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'icon': !exists(json, 'icon') ? undefined : IconTypeFromJSON(json['icon']),
        'type': json['type'],
        'date': json['date'],
        'time': !exists(json, 'time') ? undefined : json['time'],
        'temp': !exists(json, 'temp') ? undefined : json['temp'],
        'text': !exists(json, 'text') ? undefined : json['text'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
    };
}

export function WeatherInformationTypeToJSON(value?: WeatherInformationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'icon': IconTypeToJSON(value.icon),
        'type': value.type,
        'date': value.date,
        'time': value.time,
        'temp': value.temp,
        'text': value.text,
        'summary': value.summary,
    };
}

