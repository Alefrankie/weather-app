import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common'
import { UserService } from '../Application/user.service'
import { User } from '../Domain/user.schema'

@Controller('/users')
export class UserController {
	constructor(private userService: UserService) {}

	@Post('sign-in')
	async signIn(@Body() body: User) {
		return await this.userService.signIn(body)
	}

	@Post('sign-up')
	async signUp(@Body() body: User) {
		return await this.userService.signUp(body)
	}

	@Patch('recover-password')
	async recover(@Body() body: User) {
		return await this.userService.recoverPassword(body)
	}

	@Get('sign-out')
	signOut() {
		return {
			data: 'authenticated'
		}
	}

	@Put(':id')
	async update(@Param() { id }: { id: string }, @Body() body: User) {
		return await this.userService.update(id, body)
	}

	@Get(':username')
	async getByUsername(@Param() { username }: User) {
		return await this.userService.findOne(username)
	}
}
