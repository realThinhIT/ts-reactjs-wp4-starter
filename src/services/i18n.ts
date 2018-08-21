import * as i18n from 'i18next';
import * as RI18n from 'react-i18next';

import vi from '../locales/vi';
​
i18n
  .use(RI18n)
  .init({
    lng: 'vi',
    fallbackLng: 'en',
    debug: true,
  ​
    interpolation: {
      escapeValue: false,
    },

    resources: {
      vi
    },
  ​
    // react i18next special options (optional)
    react: {
      wait: false
    }
  }, () => { /*...*/ });
​
export default i18n;