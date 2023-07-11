```bash
npm run storybook
```

then switch locales. Following error occurs.

```
Storybook preview hooks can only be called inside decorators and story functions.
Error: Storybook preview hooks can only be called inside decorators and story functions.
    at invalidHooksError (http://localhost:6006/vendors-node_modules_babel_runtime_helpers_esm_defineProperty_js-node_modules_storybook_nextj-5100d7.iframe.bundle.js:698:5553)
    at useStoryContext (http://localhost:6006/vendors-node_modules_babel_runtime_helpers_esm_defineProperty_js-node_modules_storybook_nextj-5100d7.iframe.bundle.js:700:2227)
    at useGlobals (http://localhost:6006/vendors-node_modules_babel_runtime_helpers_esm_defineProperty_js-node_modules_storybook_nextj-5100d7.iframe.bundle.js:700:2914)
    at c (http://localhost:6006/vendors-node_modules_babel_runtime_helpers_esm_defineProperty_js-node_modules_storybook_nextj-5100d7.iframe.bundle.js:75238:528)
    at hookified (http://localhost:6006/sb-preview/runtime.js:7:17226)
    at http://localhost:6006/sb-preview/runtime.js:34:1451
    at http://localhost:6006/sb-preview/runtime.js:34:1912
    at renderWithHooks (http://localhost:6006/vendors-node_modules_babel_runtime_helpers_esm_defineProperty_js-node_modules_storybook_nextj-5100d7.iframe.bundle.js:55765:18)
    at updateFunctionComponent (http://localhost:6006/vendors-node_modules_babel_runtime_helpers_esm_defineProperty_js-node_modules_storybook_nextj-5100d7.iframe.bundle.js:59043:20)
    at beginWork (http://localhost:6006/vendors-node_modules_babel_runtime_helpers_esm_defineProperty_js-node_modules_storybook_nextj-5100d7.iframe.bundle.js:61056:16)
```