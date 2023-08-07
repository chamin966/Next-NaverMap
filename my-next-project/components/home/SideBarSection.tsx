import { LiaAngleRightSolid } from 'react-icons/lia';
import styles from '../../styles/sideBar.module.scss';
import StoresSection from './StoresSection';
import DetailSection from './DetailSection';

function SideBarSection() {
  return (
    <div className={styles.SideBarContainer}>
      <div className={styles.SearchContainer}>
        <input
          type="text"
          className={styles.SearchBar}
          placeholder="식당 검색"
        ></input>
        <StoresSection />
        <div className={styles.FoldingButton}>
          <LiaAngleRightSolid size={20}>접기</LiaAngleRightSolid>
        </div>
      </div>
      <DetailSection />
    </div>
  );
}

export default SideBarSection;
