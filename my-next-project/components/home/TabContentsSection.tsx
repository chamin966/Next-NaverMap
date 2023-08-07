import { Store } from '@/types/store';
import styles from '../../styles/sideBar.module.scss';
import HomeBoard from '../Menu/HomeBoard';
import MenuBoard from '../Menu/MenuBoard';
import ImageBoard from '../Menu/ImageBoard';
import { useState } from 'react';

type Props = {
  currentStore: Store;
};

function TabContentsSection({ currentStore }: Props) {
  const [clickedTab, setClickedTab] = useState<string>('홈');
  const tap = ['홈', '메뉴', '사진'];

  return (
    <>
      <div className={styles.TabBar}>
        {tap.map((v, i) => (
          <div key={i} onClick={() => setClickedTab(v)}>
            {v}
          </div>
        ))}
      </div>
      <div className={styles.TabContents}>
        {clickedTab === '홈' ? (
          <HomeBoard
            description={currentStore.description}
            characteristic={currentStore.characteristic}
            address={currentStore.address}
            phone={currentStore.phone}
          />
        ) : clickedTab === '메뉴' ? (
          <MenuBoard menus={currentStore.menus} />
        ) : clickedTab === '사진' ? (
          <ImageBoard images={currentStore.images} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
export default TabContentsSection;
