import Image from 'next/image';
import styles from '../../styles/sideBar.module.scss';
import React from 'react';
import { Store } from '@/types/store';
import useCurrentStore from '@/hooks/useCurrentStore';

type Props = {
  storeInfo: Store;
};

function PeekStore({ storeInfo }: Props) {
  const { setCurrentStore } = useCurrentStore();

  const onClickStore = () => {
    setCurrentStore(storeInfo);
  };
  return (
    <div className={styles.StoreInfoContainer}>
      <Image
        className={styles.PeekStoreImage}
        src={storeInfo.images[0]}
        alt=""
        width={340}
        height={180}
        priority
        onClick={onClickStore}
      />
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
