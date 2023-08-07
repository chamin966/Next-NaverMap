import { LiaPhoneSolid } from 'react-icons/lia';
import { LiaHomeSolid } from 'react-icons/lia';
import { LiaNewspaperSolid } from 'react-icons/lia';
import { LiaThumbsUpSolid } from 'react-icons/lia';
import styles from '../../styles/sideBar.module.scss';

type Props = {
  description: string;
  characteristic: string;
  address: string;
  phone: string;
};

function HomeBoard({ description, characteristic, address, phone }: Props) {
  return (
    <ul className={styles.HomeBoardContainer}>
      <ul>
        <li>
          <LiaThumbsUpSolid />
        </li>
        <li>{characteristic}</li>
      </ul>
      <ul>
        <li>
          <LiaPhoneSolid />
        </li>
        <li>{phone}</li>
      </ul>
      <ul>
        <li>
          <LiaHomeSolid />
        </li>
        <li>{address}</li>
      </ul>
      <ul>
        <li>
          <LiaNewspaperSolid />
        </li>
        <li>{description}</li>
      </ul>
    </ul>
  );
}

export default HomeBoard;
