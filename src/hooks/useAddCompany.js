import { useCallback } from 'react';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';

const useAddCompany = () => {
  const companiesCollectionRef = collection(db, 'companies');

  const addCompanyToDB = async (company) => {
    const q = query(companiesCollectionRef, where('name', '==', company));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      try {
        await addDoc(companiesCollectionRef, { name: company });
      } catch (error) {
        console.error('Error adding company to Firestore:', error);
      }
    }
  };

  const handleAddCompany = useCallback(async (company) => {
    console.log(company);
    if (company !== '') {
      await addCompanyToDB(company);
    }
  }, []);

  return { handleAddCompany };
};

export default useAddCompany;
