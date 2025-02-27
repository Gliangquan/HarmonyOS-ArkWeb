/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_PaymentBill_ } from '../models/BaseResponse_Page_PaymentBill_';
import type { BaseResponse_Page_PaymentBillVO_ } from '../models/BaseResponse_Page_PaymentBillVO_';
import type { BaseResponse_PaymentBill_ } from '../models/BaseResponse_PaymentBill_';
import type { BaseResponse_PaymentBillVO_ } from '../models/BaseResponse_PaymentBillVO_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { PaymentBillAddRequest } from '../models/PaymentBillAddRequest';
import type { PaymentBillQueryRequest } from '../models/PaymentBillQueryRequest';
import type { PaymentBillUpdateRequest } from '../models/PaymentBillUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaymentBillControllerService {
    /**
     * addPaymentBill
     * @param paymentBillAddRequest paymentBillAddRequest
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addPaymentBillUsingPost(
        paymentBillAddRequest: PaymentBillAddRequest,
    ): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/payment_bill/add',
            body: paymentBillAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deletePaymentBill
     * @param deleteRequest deleteRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deletePaymentBillUsingPost(
        deleteRequest: DeleteRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/payment_bill/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getPaymentBillById
     * @param id id
     * @returns BaseResponse_PaymentBill_ OK
     * @throws ApiError
     */
    public static getPaymentBillByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_PaymentBill_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/payment_bill/get',
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
     * getPaymentBillVOById
     * @param id id
     * @returns BaseResponse_PaymentBillVO_ OK
     * @throws ApiError
     */
    public static getPaymentBillVoByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_PaymentBillVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/payment_bill/get/vo',
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
     * listPaymentBillByPage
     * @param paymentBillQueryRequest paymentBillQueryRequest
     * @returns BaseResponse_Page_PaymentBill_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listPaymentBillByPageUsingPost(
        paymentBillQueryRequest: PaymentBillQueryRequest,
    ): CancelablePromise<BaseResponse_Page_PaymentBill_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/payment_bill/list/page',
            body: paymentBillQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listPaymentBillVOByPage
     * @param paymentBillQueryRequest paymentBillQueryRequest
     * @returns BaseResponse_Page_PaymentBillVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listPaymentBillVoByPageUsingPost(
        paymentBillQueryRequest: PaymentBillQueryRequest,
    ): CancelablePromise<BaseResponse_Page_PaymentBillVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/payment_bill/list/page/vo',
            body: paymentBillQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * updatePaymentBill
     * @param paymentBillUpdateRequest paymentBillUpdateRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updatePaymentBillUsingPost(
        paymentBillUpdateRequest: PaymentBillUpdateRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/payment_bill/update',
            body: paymentBillUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
