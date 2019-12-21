/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage page.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.pages.HomePage';

export default defineMessages({
  bannerText: {
    id: `${scope}.bannerText`,
    defaultMessage: 'free shipping on orders over $100!',
  },
  heroText: {
    id: `${scope}.heroText`,
    defaultMessage: 'New Arrivals',
  },
});
