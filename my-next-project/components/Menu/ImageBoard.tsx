import Image from 'next/image';

type Props = {
  images: string[];
};

function ImageBoard({ images }: Props) {
  return (
    <div>
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt="음식점 이미지"
          height={180}
          width={340}
          style={{ objectFit: 'cover' }}
        />
      ))}
    </div>
  );
}

export default ImageBoard;
