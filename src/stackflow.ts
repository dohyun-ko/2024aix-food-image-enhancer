import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { stackflow } from '@stackflow/react';
import EnhanceCompleteActivity from './activites/EnhanceCompleteActivity';
import EnhanceProcessActivity from './activites/EnhanceProcessActivity';
import EnhanceUploadActivity from './activites/EnhanceUploadActivity';
import MainActivity from './activites/MainActivity';

export const { Stack, useFlow } = stackflow({
  transitionDuration: 300,
  activities: {
    MainActivity,
    EnhanceUploadActivity,
    EnhanceProcessActivity,
    EnhanceCompleteActivity,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  initialActivity: () => 'MainActivity',
});
