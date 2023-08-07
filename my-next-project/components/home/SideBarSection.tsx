import { LiaAngleRightSolid } from 'react-icons/lia';
import styles from '../../styles/sideBar.module.scss';
import StoresSection from './StoresSection';
import DetailSection from './DetailSection';
import React, { useState } from 'react';
import useSwr from 'swr';
import { Store } from '@/types/store';
import { SEARCHED_STORE_KEY } from '@/hooks/useSearchedStore';
import SearchBar from './SearchBar';

function SideBarSection() {
  const { data: searchedStore } = useSwr<Store>(SEARCHED_STORE_KEY);

  return (
    <div className={styles.SideBarContainer}>
      <div className={styles.SearchContainer}>
        <SearchBar />
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
