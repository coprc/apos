(function() {
    window.apos = window.apos || {};
    var data = document.body && document.body.getAttribute('data-apos');
    Object.assign(window.apos, JSON.parse(data || '{}'));
    if (data) {
      document.body.removeAttribute('data-apos');
    }
    if (window.apos.modules) {
      for (const module of Object.values(window.apos.modules)) {
        if (module.alias) {
          window.apos[module.alias] = module;
        }
      }
    }
})();import index_0App from "/Users/ravindra/Misc/apos-app/node_modules/apostrophe/modules/@apostrophecms/util/ui/src/index.js";


import index_1App from "/Users/ravindra/Misc/apos-app/node_modules/apostrophe/modules/@apostrophecms/admin-bar/ui/src/index.js";


import index_2App from "/Users/ravindra/Misc/apos-app/node_modules/apostrophe/modules/@apostrophecms/video-widget/ui/src/index.js";


import index_3App from "/Users/ravindra/Misc/apos-app/modules/asset/ui/src/index.js";



import index_0Stylesheet from "/Users/ravindra/Misc/apos-app/node_modules/apostrophe/modules/@apostrophecms/image-widget/ui/src/index.scss";


import index_1Stylesheet from "/Users/ravindra/Misc/apos-app/modules/asset/ui/src/index.scss";index_0App();
index_1App();
index_2App();
index_3App();