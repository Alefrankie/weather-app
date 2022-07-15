import type { Handle } from '@sveltejs/kit'
import cookie from 'cookie'

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '')

	event.locals.authenticated = false
	if (cookies.user) {
		event.locals.session = JSON.parse(cookies.user)
		event.locals.authenticated = true
	}

	return await resolve(event)
}
export const getSession = ({ locals }) => ({
	...locals.session,
	authenticated: Boolean(locals.authenticated)
})
