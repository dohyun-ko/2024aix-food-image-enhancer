import { Button } from '@/components/ui/button';
import { useFlow } from '@/stackflow';
import { targetImageAtom } from '@/store';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { useAtom } from 'jotai';

const EnhanceCompleteActivity: ActivityComponentType = () => {
  const [image, setImage] = useAtom(targetImageAtom);

  const { pop } = useFlow();

  return (
    <AppScreen>
      <div
        className={
          'flex h-full flex-col items-center justify-center bg-[#f7931e] px-10'
        }
      >
        <p className={'mt-6 text-[1.5rem] font-bold text-black'}>
          Image Enhanced!
        </p>
        <img
          className={'mt-6 rounded-lg'}
          src={
            image
              ? URL.createObjectURL(image)
              : 'https://via.placeholder.com/400x400?text=Enhanced'
          }
          alt={'Enhanced Image'}
        />
        <p className={'mt-6 text-center text-lg font-medium text-black'}>
          The enhanced image is <br />
          <span className={'text-4xl font-black text-red-600'}> 24%</span>
          <br />
          more tempting!
        </p>
        <p className={'w-full text-end text-xs'}>
          according to our evaluation model.
        </p>

        <div className={'mt-6 flex flex-col items-stretch space-y-4'}>
          <Button
            onClick={() => {
              if (!image) return;
              const a = document.createElement('a');
              a.href = URL.createObjectURL(image);
              a.download = 'enhanced-image.jpg';
              a.click();
            }}
          >
            Download
          </Button>

          <Button
            onClick={() => {
              setImage(null);

              pop(3);
              // replace('MainActivity', {});
            }}
          >
            Try Another One
          </Button>
        </div>
      </div>
    </AppScreen>
  );
};

export default EnhanceCompleteActivity;
