// frontend/src/api.ts
import { useCallback, useEffect, useState } from 'react';
import { AppService, CreateUserDto, OpenAPI, UserService } from '../../shared/api-client';
import { ApiResult, safeApi } from './lib/apiClient';

// ① OpenAPI の設定（ベースURL やヘッダー）を初期化
OpenAPI.BASE = 'http://localhost:3011';       // NestJS サーバーの URL
OpenAPI.HEADERS = {
  // 必要に応じて認証トークンなどをセット
  // Authorization: `Bearer ${localStorage.getItem('token')}`,
};

export function useApi<T>(apiFn: () => Promise<T>) {
  const [result, setResult] = useState<ApiResult<T> | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await safeApi(apiFn);
      setResult(response);
    };
    fetchData();
  }, [apiFn]);

  return result;
}

export function useGetHello() {
  return useApi(() => AppService.appControllerGetHello());
}

export function useUserCreate() {
  const [result, setResult] = useState<ApiResult<{ message?: string }> | null>(null);
  const [loading, setLoading] = useState(false);

  const createUser = useCallback(
    async (data: CreateUserDto) => {
      setLoading(true);
      const res = await safeApi(() => UserService.userControllerCreate(data));
      setResult(res);
      setLoading(false);
      return res;
    },
    [],
  );

  return { createUser, result, loading };
}