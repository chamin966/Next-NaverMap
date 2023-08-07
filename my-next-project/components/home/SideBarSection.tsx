import { LiaAngleRightSolid } from 'react-icons/lia';
import styles from '../../styles/sideBar.module.scss';
import StoresSection from './StoresSection';
import DetailSection from './DetailSection';
import React, { useState } from 'react';
import useSwr from 'swr';
import { Store } from '@/types/store';
import useSearchedStore, { SEARCHED_STORE_KEY } from '@/hooks/useSearchedStore';

function SideBarSection() {
  const { data: searchedStore } = useSwr<Store>(SEARCHED_STORE_KEY);
  const { setSearchedStore, clearSearchedStore } = useSearchedStore();

  const [inputText, setInputText] = useState<string>('');

  const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputText(e.target.value);
  };

  const onSubmitInputText = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputText('');
    const stores = (await import('../../public/stores.json')).default;
    const store = stores.find((store) => store.name === inputText);
    if (store) setSearchedStore(store);
  };

  const onClickErase = () => {
    setInputText('');
    clearSearchedStore();
  };

  return (
    <div className={styles.SideBarContainer}>
      <div className={styles.SearchContainer}>
        <form onSubmit={onSubmitInputText}>
          <input
            type="text"
            className={styles.SearchBar}
            placeholder="식당 검색"
            value={inputText}
            onChange={onChangeInputText}
          />
        </form>
        <button onClick={onClickErase}>X</button>
        <StoresSection />
        <div className={styles.FoldingButton}>
          <LiaAngleRightSolid size={20}>접기</LiaAngleRightSolid>
        </div>
      </div>
      {searchedStore ? <></> : <DetailSection />}
    </div>
  );
}

export default SideBarSection;
