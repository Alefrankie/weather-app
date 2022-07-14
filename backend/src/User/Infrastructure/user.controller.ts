import { Body, Controller, Get, Param, Res } from '@nestjs/common'
import { Response } from 'express'
import { UserService } from '../Application/user.service'
import { User } from '../Domain/user.schema'

@Controller('/users')
export class UserController {
	constructor(private userService: UserService) {}

	@Get('sign-in')
	signIn(@Res({ passthrough: true }) response: Response) {
		const data = {
			_id: '1',
			fullName: 'Martínez',
			username: 'Diwaii',
			password: 'Alefrank'
		}

		response.cookie('user', data, {
			maxAge: 1000 * 60 * 60 * 24 * 7,
			httpOnly: true,
			path: '/'
		})

		return data
	}

	@Get('sign-up')
	signUp(@Body() body: User) {
		return body
	}

	@Get('sign-out')
	signOut(@Res({ passthrough: true }) response: Response) {
		response.clearCookie('user')
		return {
			data: 'authenticated'
		}
	}

	@Get(':username')
	getByUsername(@Param() { username }: { username: string }) {
		return {
			_id: '1',
			fullName: 'Martínez',
			username: 'Diwaii',
			password: 'Alefrank'
		}
	}
}
