import {
	Body,
	Controller,
	Get,
	Param,
	Patch,
	Post,
	Put,
	Res
} from '@nestjs/common'
import { Response } from 'express'
import { UserService } from '../Application/user.service'
import { User } from '../Domain/user.schema'

@Controller('/users')
export class UserController {
	constructor(private userService: UserService) {}

	@Post('sign-in')
	async signIn(
		@Res({ passthrough: true }) response: Response,
		@Body() body: User
	) {
		const data = await this.userService.signIn(body)

		response.cookie('user', data, {
			maxAge: 1000 * 60 * 60 * 24 * 7,
			httpOnly: true,
			path: '/',
			sameSite: 'lax'
		})

		return data
	}

	@Post('sign-up')
	async signUp(
		@Body() body: User,
		@Res({ passthrough: true }) response: Response
	) {
		const data = await this.userService.signUp(body)

		response.cookie('user', data, {
			maxAge: 1000 * 60 * 60 * 24 * 7,
			httpOnly: true,
			path: '/'
		})

		return data
	}

	@Patch('recover-password')
	async recover(@Body() body: User) {
		const data = await this.userService.recoverPassword(body)

		return data
	}

	@Get('sign-out')
	signOut(@Res({ passthrough: true }) response: Response) {
		response.clearCookie('user')
		return {
			data: 'authenticated'
		}
	}

	@Put(':id')
	async update(
		@Param() { id }: { id: string },
		@Body() body: User,
		@Res({ passthrough: true }) response: Response
	) {
		const data = await this.userService.update(id, body)
		response.cookie('user', data, {
			maxAge: 1000 * 60 * 60 * 24 * 7,
			httpOnly: true,
			path: '/'
		})
	}

	@Get(':username')
	async getByUsername(@Param() { username }: User) {
		return await this.userService.findOne(username)
	}
}
