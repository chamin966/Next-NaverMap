import { LiaAngleRightSolid } from 'react-icons/lia';
import { LiaAngleLeftSolid } from 'react-icons/lia';
import styles from '../../styles/sideBar.module.scss';
import StoresSection from './StoresSection';
import DetailSection from './DetailSection';
import React, { useEffect, useState } from 'react';
import useSwr from 'swr';
import { Store } from '@/types/store';
import { SEARCHED_STORE_KEY } from '@/hooks/useSearchedStore';
import SearchBar from './SearchBar';
import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';

function SideBarSection() {
  const { data: searchedStore } = useSwr<Store>(SEARCHED_STORE_KEY);
  const { data: currentStore } = useSwr<Store>(CURRENT_STORE_KEY);
  const [isFolding, setIsFolding] = useState<boolean>(false);

  const onClickFoldBtn = () => {
    setIsFolding(!isFolding);
  };

  useEffect(() => {
    if (currentStore && isFolding) {
      setIsFolding(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStore]);

  return (
    <div
      className={`${styles.SideBarContainer} ${
        isFolding ? styles.sideBarFolding : ''
      }`}
    >
      <div className={styles.SearchContainer}>
        <SearchBar />
        <StoresSection />
        <div className={styles.SidBarFoldingButton} onClick={onClickFoldBtn}>
          {isFolding ? (
            <LiaAngleRightSolid size={20} />
          ) : (
            <LiaAngleLeftSolid size={20} />
          )}
        </div>
      </div>
      {searchedStore ? <></> : <DetailSection isFolding={isFolding} />}
    </div>
  );
}

export default SideBarSection;
