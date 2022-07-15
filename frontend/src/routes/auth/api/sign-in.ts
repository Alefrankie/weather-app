import { http } from '$lib/hooks/useFetch'
import type { RequestHandler } from '@sveltejs/kit'
import cookie from 'cookie'

export const post: RequestHandler = async ({ request }) => {
	// await dbConnect()

	const body = await request.json()
	const { _id = 1, username, password } = body
	// const user = await User.findOne({ username })
	// if (!user) return { status: 404, body: { message: 'User not found!' } }
	// if (user.status) return { status: 402, body: { message: 'El usuario ya se encuentra online' } }
	// if (user.locked) return { status: 402, body: { message: 'El usuario se encuentra bloqueado' } }

	// if (!bcrypt.compareSync(password, user.password)) {
	// 	return {
	// 		status: 402,
	// 		body: {
	// 			message: 'Contraseña Incorrecta!'
	// 		}
	// 	}
	// }

	const user = await http.Post({
		url: '/api/users/sign-in',
		body
	})

	// await User.findByIdAndUpdate(user._id, { status: true })

	console.log(user)

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
}
