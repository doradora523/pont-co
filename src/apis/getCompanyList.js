import { useEffect, useState } from 'react';

export const useGetCompanyList = () => {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);

  const getCompanyList = async () => {
    setLoading(true);
    try {
      const URL = 'https://pont-co-default-rtdb.asia-southeast1.firebasedatabase.app/company.json';
      const response = await fetch(URL, { method: 'GET' });
      const result = await response.json();
      const companyList = Object.values(result);
      setCompanies(companyList);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching company list: ', error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getCompanyList();
  }, []);

  return { loading, companies };
};
