import Image from 'next/image';
import styles from '../../styles/sideBar.module.scss';

type Props = {
  name: string;
  address: string;
  image: string;
  foodKind: string;
};

function PeekStore({ name, address, image, foodKind }: Props) {
  return (
    <div className={styles.StoreInfoContainer}>
      <Image
        className={styles.PeekStoreImage}
        src={image}
        alt=""
        width={340}
        height={180}
        priority
      />
      <div className={styles.PeekStoreTextBox}>
        <div>
          <span>{name} </span>
          <span>{foodKind}</span>
        </div>
        <div>{address}</div>
      </div>
    </div>
  );
}

export default PeekStore;
