import { Store } from '@/types/store';

type Props = {
  currentStore?: Store;
};

function DetailContents({ currentStore }: Props) {
  if (!currentStore) return null;
  console.log('넘어옴!', currentStore);
  return;
}

export default DetailContents;
