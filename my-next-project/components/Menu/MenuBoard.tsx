import { Menu } from '@/types/store';

type Props = {
  menus: Menu[];
};

function MenuBoard({ menus }: Props) {
  return (
    <div>
      {menus.map((v, i) => (
        <ul key={i}>
          <li>{v.name}</li>
          <li>{v.price}</li>
        </ul>
      ))}
    </div>
  );
}

export default MenuBoard;
