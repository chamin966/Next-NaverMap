import { Store } from '@/types/store';
import styles from '../../styles/sideBar.module.scss';
import Image from 'next/image';
import TabContentsSection from './TabContentsSection';

type Props = {
  currentStore?: Store;
};

function DetailContents({ currentStore }: Props) {
  if (!currentStore) return null;

  return (
    <div className={styles.DetailContainer}>
      <div className={styles.DetailImageBox}>
        {currentStore.images.slice(0, 2).map((img, i) => (
          <Image
            key={i}
            src={img}
            alt="음식점 이미지"
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
          />
        ))}
      </div>
      <div className={styles.DetailbarTextInfo}>
        <div>
          <span>{currentStore.name} </span>
          <span>{currentStore.foodKind}</span>
        </div>
      </div>
      <TabContentsSection currentStore={currentStore} />
    </div>
  );
}

export default DetailContents;
