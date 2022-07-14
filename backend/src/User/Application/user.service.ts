import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from '../Domain/user.schema'

interface CreateUserDto {
	email: string

	password: string

	roles: any[]

	isEnabled?: boolean
}

@Injectable()
export class UserService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async create(createCatDto: CreateUserDto): Promise<User> {
		const createdCat = new this.userModel(createCatDto)
		return await createdCat.save()
	}

	async findOne(username: string, password: string): Promise<User> {
		const data = await this.userModel.findOne({ username })

		if (!data) {
			throw new NotFoundException(`User ${username}not found`)
		}
		return data
	}
}
