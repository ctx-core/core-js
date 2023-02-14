import { core_js_version_ } from '../core_js_version_/index.js'
export function CORE_JS_SHIM_URL_() {
	return `https://cdnjs.cloudflare.com/ajax/libs/core-js/${core_js_version_()}/shim.min.js`
}
export { CORE_JS_SHIM_URL_ as _CORE_JS_SHIM_URL, }
