import { useState, useEffect } from 'react';
import axios from 'axios';

const baseurl = process.env.NEXT_PUBLIC_API_BASE_URL;

export function useDashboardData() {
  const [data, setData] = useState({
    userid: '',
    username: '',
    products: [],
    coupons: [],
    sellCount: 0,
    profit: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userData = JSON.parse(localStorage.getItem('userData')) || null;
      if (!userData?.token) {
        setError('ログインが必要です');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const config = {
          method: 'get',
          url: `${baseurl}/api/dashboard`,
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + userData.token,
          },
        };
        const response = await axios(config);
        setData(response.data);
      } catch (err) {
        setError(err.message || 'データの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { ...data, loading, error };
}
