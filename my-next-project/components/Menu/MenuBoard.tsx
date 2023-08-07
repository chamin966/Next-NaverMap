import { Menu } from '@/types/store';
import styles from '../../styles/sideBar.module.scss';

type Props = {
  menus: Menu[];
};

function MenuBoard({ menus }: Props) {
  return (
    <div>
      <div className={styles.menuTitleBox}>
        <div>
          <span>메뉴</span>
          <span>{menus.length}</span>
        </div>
      </div>
      {menus.map((v, i) => (
        <ul className={styles.menuBox} key={i}>
          <li>{v.name}</li>
          <li>
            <hr className={styles.hr_dotted} />
          </li>
          <li>{v.price}</li>
        </ul>
      ))}
    </div>
  );
}

export default MenuBoard;
