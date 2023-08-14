import Image from 'next/image';
import styles from '../../styles/sideBar.module.scss';

type Props = {
  images: string[];
};

function ImageBoard({ images }: Props) {
  return (
    <div className={styles.ImageBoardBox}>
      {images.map((img, i) => (
        <Image
          key={i}
          className={styles.ImageBoardImage}
          src={img}
          alt="음식점 이미지"
          height={180}
          width={340}
          style={{ objectFit: 'cover' }}
          priority
        />
      ))}
    </div>
  );
}

export default ImageBoard;
