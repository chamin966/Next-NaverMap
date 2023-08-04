import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';
import { Store } from '@/types/store';
import useSwr from 'swr';
import DetailContents from './DetailContents';

function DetailSection() {
  const { data: currentStore } = useSwr<Store>(CURRENT_STORE_KEY);
  console.log(currentStore);
  return <DetailContents currentStore={currentStore} />;
}

export default DetailSection;
