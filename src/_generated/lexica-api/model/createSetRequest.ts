/**
 * R.Systems.Lexica.Api.Web
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CreateSetEntryRequest } from './createSetEntryRequest';


export interface CreateSetRequest { 
    setName?: string | null;
    entries?: Array<CreateSetEntryRequest> | null;
}

