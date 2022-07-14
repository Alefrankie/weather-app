import type { Handle } from '@sveltejs/kit'
import cookie from 'cookie'
import { JSONCookies } from 'cookie-parser'

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = JSONCookies(
		cookie.parse(event.request.headers.get('cookie') || '')
	)

	event.locals.authenticated = false
	if (cookies.user) {
		event.locals.session = cookies.user
		event.locals.authenticated = true
	}

	return await resolve(event)
}
export const getSession = ({ locals }) => ({
	...locals.session,
	authenticated: Boolean(locals.authenticated)
})
