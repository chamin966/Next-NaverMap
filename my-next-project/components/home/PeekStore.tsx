import Image from 'next/image';
import styles from '../../styles/sideBar.module.scss';
import React from 'react';
import { Store } from '@/types/store';
import useCurrentStore from '@/hooks/useCurrentStore';
import useSearchedStore from '@/hooks/useSearchedStore';

type Props = {
  storeInfo: Store;
};

function PeekStore({ storeInfo }: Props) {
  const { setCurrentStore } = useCurrentStore();
  const { clearSearchedStore } = useSearchedStore();

  const onClickStore = () => {
    setCurrentStore(storeInfo);
    clearSearchedStore();
  };

  return (
    <div className={styles.StoreInfoContainer}>
      <div className={styles.peekImageBox}>
        <Image
          className={styles.PeekStoreImage}
          src={storeInfo.images[0]}
          alt=""
          fill
          sizes="340px"
          onClick={onClickStore}
          priority
        />
      </div>
      <div className={styles.PeekStoreTextBox}>
        <div>
          <span onClick={onClickStore}>{storeInfo.name} </span>
          <span>{storeInfo.foodKind}</span>
        </div>
        <div>{storeInfo.address}</div>
      </div>
    </div>
  );
}

export default PeekStore;
