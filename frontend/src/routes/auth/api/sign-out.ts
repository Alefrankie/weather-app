import type { RequestHandler } from '@sveltejs/kit'
import cookie from 'cookie'
// import jwt from 'jwt-simple'

export const get: RequestHandler = () => {
	const headers = {
		'Set-Cookie': cookie.serialize('user', '', {
			path: '/',
			expires: new Date(0)
		})
	}

	return {
		headers,
		body: {
			message: 'User out successfully'
		}
	}
}
