/**
 *
 * Init Storybook Snapshot Tests
 *
 */

import { Lottie } from '@crello/react-lottie';
import initStoryshots, {
  snapshotWithOptions,
} from '@storybook/addon-storyshots';

initStoryshots({
  test: snapshotWithOptions({
    createNodeMock: element => {
      if (element.type === Lottie) {
        return document.createElement('svg');
      }
      return element;
    },
  }),
});
