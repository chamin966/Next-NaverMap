import { LiaPhoneSolid } from 'react-icons/lia';
import { LiaHomeSolid } from 'react-icons/lia';
import { LiaNewspaperSolid } from 'react-icons/lia';
import { LiaThumbsUpSolid } from 'react-icons/lia';
import { HiOutlineClipboardDocumentCheck } from 'react-icons/hi2';

import styles from '../../styles/sideBar.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import usePath from '@/hooks/usePath';
import { MAP_KEY } from '@/types/naverMap';
import useSwr from 'swr';

type Props = {
  name: string;
  description: string;
  characteristic: string;
  address: string;
  phone: string;
  nid: number;
};

function HomeBoard({
  name,
  description,
  characteristic,
  address,
  phone,
  nid,
}: Props) {
  const { data: map } = useSwr(MAP_KEY);
  const { copyPath } = usePath();

  const onClickCopyUrl = () => {
    copyPath(name, nid, map);
  };

  return (
    <ul className={styles.HomeBoardContainer}>
      <ul>
        <li className={styles.HomeBoardIcon}>
          <LiaThumbsUpSolid />
        </li>
        <li>{characteristic}</li>
      </ul>
      <ul>
        <li>
          <Image
            src={'/images/naver.png'}
            width={20}
            height={20}
            alt=""
            priority
          />
        </li>
        <li>
          <Link
            className={styles.naverUrl}
            href={`https://pcmap.place.naver.com/restaurant/${nid}/home`}
            target="_blank"
            style={{ color: '#48ce50' }} // css를 안먹어서 직접 넣어줘야 함
          >
            네이버 상세 정보
          </Link>
        </li>
      </ul>
      <ul>
        <li className={styles.HomeBoardIcon}>
          <HiOutlineClipboardDocumentCheck />
        </li>
        <li className={styles.copyLink} onClick={onClickCopyUrl}>
          현재 페이지 URL 복사
        </li>
      </ul>
      <ul>
        <li className={styles.HomeBoardIcon}>
          <LiaPhoneSolid />
        </li>
        <li>{phone}</li>
      </ul>
      <ul>
        <li className={styles.HomeBoardIcon}>
          <LiaHomeSolid />
        </li>
        <li>{address}</li>
      </ul>
      <ul>
        <li className={styles.HomeBoardIcon}>
          <LiaNewspaperSolid />
        </li>
        <li>{description}</li>
      </ul>
    </ul>
  );
}

export default HomeBoard;
