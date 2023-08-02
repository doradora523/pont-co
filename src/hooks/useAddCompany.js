import { useCallback, useState } from 'react';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';

const useAddCompany = () => {
  const [isAddingCompany, setIsAddingCompany] = useState(false);

  const handleAddCompany = useCallback(async (company) => {
    console.log(company);
    if (company !== '') {
      const companiesCollectionRef = collection(db, 'companies');
      const q = query(companiesCollectionRef, where('name', '==', company));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        try {
          // 해당 회사가 없는 경우, 파이어스토어에 추가
          await addDoc(companiesCollectionRef, { name: company });
        } catch (error) {
          console.error('Error adding company to Firestore:', error);
        }
      }
      setIsAddingCompany(false);
    }
  }, []);

  return { handleAddCompany };
};

export default useAddCompany;
