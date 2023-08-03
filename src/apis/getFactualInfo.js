import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetCompanyList } from './getCompanyList';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFactualInfo = createAsyncThunk('questions/getFactualInfo', async (data, { rejectWithValue }) => {
  try {
    const response = await fetch(
      'https://pont-api.onrender.com/api/v1/prediction/74882db9-a048-4902-878a-e7ddefa1c322',
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer uG/mnawWy5vp7XuL/iG0dRahBfB2Tu600iEIs8vYgX4=',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('Error: ', error.message);
    return rejectWithValue(error.message);
  }
});

const useFactualInfo = () => {
  const { user } = useSelector((state) => state.auth);
  const factualInfo = useSelector((state) => state.questions);
  const { companies } = useGetCompanyList();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user && companies) {
      const coId = companies.find((company) => company.name === user.company)?.keyword;

      dispatch(
        getFactualInfo({
          question: '회사의 미션, 비전, 핵심가치를 리스트 형태로 알려줘',
          overrideConfig: {
            pineconeMetadataFilter: { id: coId },
          },
        }),
      );
    }
  }, []);

  return factualInfo;
};

export default useFactualInfo;
