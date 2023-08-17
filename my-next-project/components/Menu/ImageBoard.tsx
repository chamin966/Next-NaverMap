import Image from 'next/image';
import styles from '../../styles/sideBar.module.scss';

type Props = {
  images: string[];
};

function ImageBoard({ images }: Props) {
  return (
    <div className={styles.ImageBoardBox}>
      {images.map((img, i) => (
        <div key={i} className={styles.ImageBox}>
          <Image
            className={styles.ImageBoardImage}
            src={img}
            alt="음식점 이미지"
            fill
            sizes="340px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      ))}
    </div>
  );
}

export default ImageBoard;
