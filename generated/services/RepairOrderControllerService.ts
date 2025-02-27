/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_RepairOrder_ } from '../models/BaseResponse_Page_RepairOrder_';
import type { BaseResponse_Page_RepairOrderVO_ } from '../models/BaseResponse_Page_RepairOrderVO_';
import type { BaseResponse_RepairOrder_ } from '../models/BaseResponse_RepairOrder_';
import type { BaseResponse_RepairOrderVO_ } from '../models/BaseResponse_RepairOrderVO_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { RepairOrderAddRequest } from '../models/RepairOrderAddRequest';
import type { RepairOrderQueryRequest } from '../models/RepairOrderQueryRequest';
import type { RepairOrderUpdateRequest } from '../models/RepairOrderUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RepairOrderControllerService {
    /**
     * addRepairOrder
     * @param repairOrderAddRequest repairOrderAddRequest
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addRepairOrderUsingPost(
        repairOrderAddRequest: RepairOrderAddRequest,
    ): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/repair_order/add',
            body: repairOrderAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deleteRepairOrder
     * @param deleteRequest deleteRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteRepairOrderUsingPost(
        deleteRequest: DeleteRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/repair_order/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getRepairOrderById
     * @param id id
     * @returns BaseResponse_RepairOrder_ OK
     * @throws ApiError
     */
    public static getRepairOrderByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_RepairOrder_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/repair_order/get',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getRepairOrderVOById
     * @param id id
     * @returns BaseResponse_RepairOrderVO_ OK
     * @throws ApiError
     */
    public static getRepairOrderVoByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_RepairOrderVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/repair_order/get/vo',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listRepairOrderByPage
     * @param repairOrderQueryRequest repairOrderQueryRequest
     * @returns BaseResponse_Page_RepairOrder_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listRepairOrderByPageUsingPost(
        repairOrderQueryRequest: RepairOrderQueryRequest,
    ): CancelablePromise<BaseResponse_Page_RepairOrder_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/repair_order/list/page',
            body: repairOrderQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listRepairOrderVOByPage
     * @param repairOrderQueryRequest repairOrderQueryRequest
     * @returns BaseResponse_Page_RepairOrderVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listRepairOrderVoByPageUsingPost(
        repairOrderQueryRequest: RepairOrderQueryRequest,
    ): CancelablePromise<BaseResponse_Page_RepairOrderVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/repair_order/list/page/vo',
            body: repairOrderQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * updateRepairOrder
     * @param repairOrderUpdateRequest repairOrderUpdateRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateRepairOrderUsingPost(
        repairOrderUpdateRequest: RepairOrderUpdateRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/repair_order/update',
            body: repairOrderUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
