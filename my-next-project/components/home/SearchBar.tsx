import styles from '../../styles/sideBar.module.scss';
import useSearchedStore from '@/hooks/useSearchedStore';
import useCurrentStore from '@/hooks/useCurrentStore';
import { TfiClose } from 'react-icons/tfi';
import { ImSearch } from 'react-icons/im';
import { useState } from 'react';

function SearchBar() {
  const { setSearchedStore, clearSearchedStore } = useSearchedStore();
  const { clearCurrentStore } = useCurrentStore();

  const [inputText, setInputText] = useState<string>('');

  const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setInputText(e.target.value);
  };

  const onSubmitInputText = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputText('');
    const stores = (await import('../../public/stores.json')).default;
    const store = stores.find((store) => store.name === inputText);
    if (store) setSearchedStore(store);
  };

  const onClickErase = () => {
    setInputText('');
    clearSearchedStore();
    clearCurrentStore();
  };

  return (
    <>
      <div className={styles.SearchBarContainer}>
        <button className={styles.SearchBtn}>
          <ImSearch />
        </button>
        <form onSubmit={onSubmitInputText}>
          <input
            type="text"
            className={styles.SearchBar}
            placeholder="식당 검색"
            value={inputText}
            onChange={onChangeInputText}
          />
        </form>
        <button onClick={onClickErase}>
          <TfiClose />
        </button>
      </div>
    </>
  );
}

export default SearchBar;
