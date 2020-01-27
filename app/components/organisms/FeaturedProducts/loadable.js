/**
 *
 * Asynchronously loads the component for FeaturedProducts
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
