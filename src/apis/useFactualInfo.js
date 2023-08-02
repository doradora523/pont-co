import { useSelector } from 'react-redux';
import { useGetCompanyList } from './useGetCompanyList';
import { useEffect, useState } from 'react';

export const getFactualInfo = async (data) => {
  const response = await fetch('https://pont-api.onrender.com/api/v1/prediction/74882db9-a048-4902-878a-e7ddefa1c322', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer uG/mnawWy5vp7XuL/iG0dRahBfB2Tu600iEIs8vYgX4=A',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
};

const useFactualInfo = () => {
  const { user } = useSelector((state) => state.auth);
  const { companies } = useGetCompanyList();
  const [factualInfo, setFactualInfo] = useState()
  const coId = companies.find((company) => company.name === user.company)?.id;
  
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getFactualInfo({
            question: '회사의 미션, 비전, 핵심가치를 리스트 형태로 알려줘',
            overrideConfig: {
              pineconeMetadataFilter: { id: coId },
            },
          });
          setFactualInfo(response);
        } catch (error) {
          console.error('Error fetching factual info: ', error);
        }
      };
      
      fetchData();
    }, [coId]);
    
  return {factualInfo};
};

export default useFactualInfo;