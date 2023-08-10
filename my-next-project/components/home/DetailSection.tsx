import { CURRENT_STORE_KEY } from '@/hooks/useCurrentStore';
import { Store } from '@/types/store';
import useSwr from 'swr';
import DetailContents from './DetailContents';

type Props = {
  isFolding: boolean;
};

function DetailSection({ isFolding }: Props) {
  const { data: currentStore } = useSwr<Store>(CURRENT_STORE_KEY);

  return <DetailContents isFolding={isFolding} currentStore={currentStore} />;
}

export default DetailSection;
