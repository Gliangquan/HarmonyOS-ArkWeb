/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderItem } from './OrderItem';
import type { PaymentBillVO } from './PaymentBillVO';
export type Page_PaymentBillVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: Array<OrderItem>;
    pages?: number;
    records?: Array<PaymentBillVO>;
    searchCount?: boolean;
    size?: number;
    total?: number;
};

