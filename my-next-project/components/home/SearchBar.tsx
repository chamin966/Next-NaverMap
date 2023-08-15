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
    if (store) {
      setSearchedStore(store);
      clearCurrentStore();
    } else alert('검색어와 매칭되는 결과가 없습니다.');
  };

  const onClickErase = () => {
    setInputText('');
    clearSearchedStore();
  };

  return (
    <>
      <div className={styles.SearchBarContainer}>
        <div className={styles.SearchIcon}>
          <ImSearch />
        </div>
        <form onSubmit={onSubmitInputText}>
          <input
            type="text"
            className={styles.SearchBar}
            placeholder="식당 검색"
            value={inputText}
            onChange={onChangeInputText}
          />
        </form>
        <button onClick={onClickErase} aria-label="검색 결과 초기화">
          <TfiClose />
        </button>
      </div>
    </>
  );
}

export default SearchBar;
