// frontend/src/api.ts
import { useEffect, useState } from 'react';
import { OpenAPI, AppService } from '../../shared/api-client';
import { safeApi } from './lib/apiResult';

// ① OpenAPI の設定（ベースURL やヘッダー）を初期化
OpenAPI.BASE = 'http://localhost:3011';       // NestJS サーバーの URL
OpenAPI.HEADERS = {
  // 必要に応じて認証トークンなどをセット
  // Authorization: `Bearer ${localStorage.getItem('token')}`,
};

// ③ API 呼び出し例（React コンポーネント内で）
export function useGetHello() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHello = async () => {
      const result = await safeApi(() => AppService.appControllerGetHello());
      if (result.success) {
        setMessage(result.data);
      } else {
        setError(`Error: ${result.error.message} (${result.error.status ?? 'unknown'})`);
      }
    }
    fetchHello();
  }, []);

  return { message, error };
}
