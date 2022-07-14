import {
	ConflictException,
	Injectable,
	Logger,
	NotFoundException
} from '@nestjs/common'
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
	private defaultPassword = '123456'

	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async create(createCatDto: CreateUserDto): Promise<User> {
		const createdCat = new this.userModel(createCatDto)
		return await createdCat.save()
	}

	async findOne(username: string): Promise<User> {
		const data = await this.userModel.findOne({ username })

		if (!data) {
			throw new NotFoundException(`User not found`)
		}
		return data
	}

	async signIn({ username, password }: User): Promise<User> {
		if (!username || !password) {
			throw new ConflictException('Invalid user!')
		}

		const data = await this.userModel.findOne({ username })

		if (!data) {
			throw new NotFoundException(`User not registered`)
		}

		if (data.password !== password) {
			throw new ConflictException(`Incorrect password!`)
		}

		return data
	}

	async signUp({ username, password, fullName }: User): Promise<User> {
		if (!username || !password || !fullName) {
			throw new ConflictException('Invalid user!')
		}

		const isExist = await this.userModel.findOne({ username })

		if (isExist) {
			throw new ConflictException(`User already registered!`)
		}

		const userToCreate = await this.userModel.create({
			username,
			password,
			fullName
		})

		const userCreated = await userToCreate.save()

		return userCreated
	}

	async recoverPassword({ username }: User): Promise<string> {
		if (!username) {
			throw new ConflictException('Invalid user!')
		}

		const isExist = await this.userModel.findOne({ username })

		if (!isExist) {
			throw new ConflictException(`User already not registered!`)
		}

		isExist.password = this.defaultPassword

		await isExist.save()

		return this.defaultPassword
	}

	async update(
		id: string,
		{ username, password, fullName }: User
	): Promise<User> {
		Logger.log(id, 'UserService')
		Logger.log({ username, password, fullName }, id, 'UserService')
		if (!username || !password || !fullName) {
			throw new ConflictException('Invalid user!')
		}

		const userFound = await this.userModel.findById(id)

		if (!userFound) {
			throw new ConflictException(`User already not registered!`)
		}

		userFound.username = username
		userFound.password = password
		userFound.fullName = fullName

		return await userFound.save()
	}
}
