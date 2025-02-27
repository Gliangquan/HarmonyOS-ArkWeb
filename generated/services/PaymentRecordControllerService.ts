/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_PaymentRecord_ } from '../models/BaseResponse_Page_PaymentRecord_';
import type { BaseResponse_Page_PaymentRecordVO_ } from '../models/BaseResponse_Page_PaymentRecordVO_';
import type { BaseResponse_PaymentRecord_ } from '../models/BaseResponse_PaymentRecord_';
import type { BaseResponse_PaymentRecordVO_ } from '../models/BaseResponse_PaymentRecordVO_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { PaymentRecordAddRequest } from '../models/PaymentRecordAddRequest';
import type { PaymentRecordQueryRequest } from '../models/PaymentRecordQueryRequest';
import type { PaymentRecordUpdateRequest } from '../models/PaymentRecordUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaymentRecordControllerService {
    /**
     * addPaymentRecord
     * @param paymentRecordAddRequest paymentRecordAddRequest
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addPaymentRecordUsingPost(
        paymentRecordAddRequest: PaymentRecordAddRequest,
    ): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/payment_record/add',
            body: paymentRecordAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deletePaymentRecord
     * @param deleteRequest deleteRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deletePaymentRecordUsingPost(
        deleteRequest: DeleteRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/payment_record/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getPaymentRecordById
     * @param id id
     * @returns BaseResponse_PaymentRecord_ OK
     * @throws ApiError
     */
    public static getPaymentRecordByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_PaymentRecord_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/payment_record/get',
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
     * getPaymentRecordVOById
     * @param id id
     * @returns BaseResponse_PaymentRecordVO_ OK
     * @throws ApiError
     */
    public static getPaymentRecordVoByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_PaymentRecordVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/payment_record/get/vo',
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
     * listPaymentRecordByPage
     * @param paymentRecordQueryRequest paymentRecordQueryRequest
     * @returns BaseResponse_Page_PaymentRecord_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listPaymentRecordByPageUsingPost(
        paymentRecordQueryRequest: PaymentRecordQueryRequest,
    ): CancelablePromise<BaseResponse_Page_PaymentRecord_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/payment_record/list/page',
            body: paymentRecordQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listPaymentRecordVOByPage
     * @param paymentRecordQueryRequest paymentRecordQueryRequest
     * @returns BaseResponse_Page_PaymentRecordVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listPaymentRecordVoByPageUsingPost(
        paymentRecordQueryRequest: PaymentRecordQueryRequest,
    ): CancelablePromise<BaseResponse_Page_PaymentRecordVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/payment_record/list/page/vo',
            body: paymentRecordQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * updatePaymentRecord
     * @param paymentRecordUpdateRequest paymentRecordUpdateRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updatePaymentRecordUsingPost(
        paymentRecordUpdateRequest: PaymentRecordUpdateRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/payment_record/update',
            body: paymentRecordUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
