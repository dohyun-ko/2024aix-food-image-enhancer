import { Button } from '@/components/ui/button';
import { useFlow } from '@/stackflow';
import { targetImageAtom } from '@/store';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { useAtom } from 'jotai';

const EnhanceUploadActivity: ActivityComponentType = () => {
  const { push } = useFlow();

  const [image, setImage] = useAtom(targetImageAtom);

  const onUseImageClick = () => {
    push('EnhanceProcessActivity', {});
  };

  return (
    <AppScreen>
      <div
        className={
          'flex h-full flex-col items-center justify-center bg-[#f7931e]'
        }
      >
        {!image ? (
          <>
            <img
              src="/phone.svg"
              alt="phone"
              className={'w-[35%] -rotate-90'}
            />

            <label htmlFor="file-upload" className={'cursor-pointer'}>
              <Button
                asChild
                size={'lg'}
                className={'text-center text-[1.5rem]'}
              >
                <p>Upload Image</p>
              </Button>

              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className={'hidden'}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setImage(file);
                  }
                }}
              />
            </label>
          </>
        ) : (
          <>
            <img
              src={URL.createObjectURL(image)}
              alt="selected"
              className={'w-[80%] rounded-lg'}
            />

            <div className={'mt-4 flex flex-col items-stretch'}>
              <Button onClick={onUseImageClick}>Use this image</Button>

              <Button
                variant={'outline'}
                onClick={() => {
                  setImage(null);
                }}
                className={'mt-2'}
              >
                Cancel
              </Button>
            </div>
          </>
        )}
      </div>
    </AppScreen>
  );
};

export default EnhanceUploadActivity;
