import { http } from '$lib/hooks/useFetch'
import type { RequestHandler } from '@sveltejs/kit'
import cookie from 'cookie'

export const post: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json()

		const user = await http.Post({
			url: '/api/users/sign-up',
			body
		})

		const headers = {
			'Set-Cookie': cookie.serialize('user', JSON.stringify(user), {
				httpOnly: true,
				maxAge: 60 * 60 * 24 * 7,
				sameSite: 'lax',
				path: '/'
			})
		}

		return {
			headers,
			body: user
		}
	} catch (error: any) {
		return {
			status: 401,
			body: error
		}
	}
}
