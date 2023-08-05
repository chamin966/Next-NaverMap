import { LiaMapMarkerAltSolid } from 'react-icons/lia';
import { LiaPhoneSolid } from 'react-icons/lia';
import { LiaHomeSolid } from 'react-icons/lia';
import { LiaNewspaperSolid } from 'react-icons/lia';
import { LiaThumbsUpSolid } from 'react-icons/lia';

type Props = {
  description: string;
  characteristic: string;
  address: string;
  phone: string;
};

function HomeBoard({ description, characteristic, address, phone }: Props) {
  return (
    <ul>
      <li>
        <LiaThumbsUpSolid />
        {characteristic}
      </li>
      <li>
        <LiaPhoneSolid />
        {phone}
      </li>
      <li>
        <LiaHomeSolid />
        {address}
      </li>
      <li>
        <LiaNewspaperSolid />
        {description}
      </li>
    </ul>
  );
}

export default HomeBoard;
