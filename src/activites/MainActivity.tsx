import { Button } from '@/components/ui/button';
import { useFlow } from '@/stackflow';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

const MainActivity: ActivityComponentType = () => {
  const { push } = useFlow();

  const onEnhanceImageClick = () => {
    push('EnhanceUploadActivity', {});
  };

  return (
    <AppScreen>
      <div
        className={
          'flex h-full flex-col items-center justify-center bg-[#f7931e]'
        }
      >
        <h1 className={'text-center text-[2.5rem] font-black text-black'}>
          Food Image <br /> Enhancer
        </h1>

        <img src="/spaghetti.svg" alt="spaghetti" className={'w-1/2'} />

        <div className={'flex w-[60%] flex-col items-center items-stretch'}>
          <Button disabled>
            <span>Score Image</span>
          </Button>
          <p className={'mb-2 text-end text-sm'}>Coming Soon</p>

          <Button onClick={onEnhanceImageClick}>
            <span>Enhance Image</span>
          </Button>
        </div>
      </div>
    </AppScreen>
  );
};

export default MainActivity;
