import { package_version_ } from '@ctx-core/package'
export async function core_js_version_():Promise<string> {
	return package_version_('core-js')
}
export {
	core_js_version_ as _core_js_version,
}
