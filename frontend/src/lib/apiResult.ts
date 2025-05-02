// lib/apiClient.ts
import { ApiError } from '../../../shared/api-client';
import axios from 'axios';

export type ApiSuccess<T> = {
  success: true;
  data: T;
};

export type ApiFailure = {
  success: false;
  error: {
    message: string;
    status?: number;
  };
};

export type ApiResult<T> = ApiSuccess<T> | ApiFailure;

export async function safeApi<T>(fn: () => Promise<T>): Promise<ApiResult<T>> {
  try {
    const data = await fn();
    return { success: true, data };
  } catch (err) {
    if (err instanceof ApiError) {
      return {
        success: false,
        error: {
          message: err.message,
          status: err.status,
        },
      };
    }
    if (axios.isAxiosError(err)) {
      return {
        success: false,
        error: {
          message: err.message,
          status: err.response?.status,
        },
      };
    }
    return {
      success: false,
      error: {
        message: 'Unknown error',
      },
    };
  }
}
