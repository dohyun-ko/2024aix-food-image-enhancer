import Spinner from '@/components/ui/spinner';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

const EnhanceProcessActivity: ActivityComponentType = () => {
  return (
    <AppScreen>
      <div
        className={
          'flex h-full flex-col items-center justify-center bg-[#f7931e]'
        }
      >
        <Spinner />

        <p className={'mt-6 text-[1.5rem] font-bold text-black'}>
          Enhancing Image...
        </p>
      </div>
    </AppScreen>
  );
};

export default EnhanceProcessActivity;
