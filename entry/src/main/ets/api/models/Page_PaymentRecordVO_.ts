/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderItem } from './OrderItem';
import type { PaymentRecordVO } from './PaymentRecordVO';
export type Page_PaymentRecordVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: Array<OrderItem>;
    pages?: number;
    records?: Array<PaymentRecordVO>;
    searchCount?: boolean;
    size?: number;
    total?: number;
};

