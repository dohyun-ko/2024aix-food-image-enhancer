import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';
import EnhanceProcessActivity from './activites/EnhanceProcessActivity';
import EnhanceUploadActivity from './activites/EnhanceUploadActivity';
import MainActivity from './activites/MainActivity';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 300,
  activities: {
    MainActivity,
    EnhanceUploadActivity,
    EnhanceProcessActivity,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  initialActivity: () => 'MainActivity',
});
