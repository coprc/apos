require('apostrophe')({
  shortName: 'a3-boilerplate',
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // `className` options set custom CSS classes for Apostrophe core widgets.
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bp-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bp-video-widget'
      }
    },
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},
    // The project's first custom page type.
    'default-page': {},

    '@apostrophecms/import-export': {},
    '@apostrophecms/i18n': {
      options: {
        defaultLocale: 'en-in',
        adminLocales: [
          {
            label: 'English',
            value: 'en-in'
          },
        ],
        locales: {
          'bg-bg': {
            label: 'Bulgaria',
            prefix: '/bg-bg',
          },
          'de-at': {
            label: 'Austria',
            prefix: '/de-at',
          },
          'en-au': {
            label: 'Australia',
            prefix: '/en-au',
          },
          'en-ie': {
            label: 'Ireland',
            prefix: '/en-ie',
          },
          'en-in': {
            label: 'India',
            prefix: '/en-in',
          },
          'es-cl': {
            label: 'Chile',
            prefix: '/es-cl',
          },
          'es-mx': {
            label: 'Mexico',
            prefix: '/es-mx',
          },
          'en-my': {
            label: 'Malaysia',
            prefix: '/en-my',
          },
          'en-nz': {
            label: 'New Zealand',
            prefix: '/en-nz',
          },
          'en-th': {
            label: 'Thaïland (en)',
            prefix: '/en-th',
          },
          'hu-hu': {
            label: 'Hungary',
            prefix: '/hu-hu',
          },
          'id-id': {
            label: 'Indonesia',
            prefix: '/id-id',
          },
          'nl-nl': {
            label: 'Netherlands',
            prefix: '/nl-nl',
          },
          'pt-br': {
            label: 'Brazil',
            prefix: '/pt-br',
          },
          'pt-pt': {
            label: 'Portugal',
            prefix: '/pt-pt',
          },
          'sk-sk': {
            label: 'Slovakia',
            prefix: '/sk-sk',
          },
          'th-th': {
            label: 'Thaïland (th)',
            prefix: '/th-th',
          },
          'vi-vn': {
            label: 'Viet Nam',
            prefix: '/vi-vn',
          }
        }
      }
    },
  }
});
