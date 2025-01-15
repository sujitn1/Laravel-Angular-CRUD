
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular"
  }
],
  assets: {
    'index.csr.html': {size: 512, hash: 'f1e268aa3f5f59cd64a33a92e691500ca7813fc6e5fd51737f347d06990a7952', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1025, hash: '49fe4d93b594ca0c9ccce642c415edb61ce896435e356f5a1248d4dd482e1ec7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2603, hash: 'dbc3679c0bae27233281deb7fc6115bd7dc4611651adacbe030de42c3c48e089', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
