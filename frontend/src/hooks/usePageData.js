import { useState, useEffect } from 'react';
import axios from 'axios';

const baseurl = process.env.NEXT_PUBLIC_API_BASE_URL;

export function usePageData() {
  const [displayData, setDisplayData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const config = {
          method: 'get',
          url: `${baseurl}/api/get-page-data`,
        };
        const response = await axios(config);
        const tmpData = {};
        response.data.settings.forEach(element => {
          tmpData[element.key] = element.value;
        });
        setDisplayData(tmpData);
      } catch (err) {
        setError(err.message || 'データの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { displayData, loading, error };
}
