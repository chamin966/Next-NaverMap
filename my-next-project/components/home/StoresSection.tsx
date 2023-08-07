import { STORE_KEY } from '@/hooks/useStores';
import { Store } from '@/types/store';
import styles from '../../styles/sideBar.module.scss';
import useSwr from 'swr';
import PeekStore from './PeekStore';

function StoresSection() {
  const { data: allStore } = useSwr<Store[]>(STORE_KEY);

  return (
    <div className={styles.StoresContainer}>
      {allStore?.map((store) => (
        <PeekStore
          key={store.nid}
          name={store.name}
          address={store.address}
          image={store.images[0]}
          foodKind={store.foodKind}
        />
      ))}
    </div>
  );
}

export default StoresSection;
