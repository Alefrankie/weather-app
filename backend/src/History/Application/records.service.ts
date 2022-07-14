import { ConflictException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from 'src/User/Domain/user.schema'
import { Record, RecordDocument } from '../Domain/record.schema'

@Injectable()
export class RecordsService {
	constructor(
		@InjectModel(Record.name) private recordModel: Model<RecordDocument>,
		@InjectModel(User.name) private userModel: Model<UserDocument>
	) {}

	async findAllByUser(userId: string): Promise<Record[]> {
		const isExist = await this.userModel.findById(userId)

		if (!isExist) {
			throw new ConflictException(`User already not registered!`)
		}

		const data = await this.recordModel.find({ userId }).sort({
			createdAt: -1
		})

		return data
	}

	async save({ text, userId }: Record): Promise<Record> {
		if (!text || !userId) {
			throw new ConflictException('Invalid Record!')
		}

		const isExist = await this.userModel.findById(userId)

		if (!isExist) {
			throw new ConflictException(`User already not registered!`)
		}

		const dataToCreate = await this.recordModel.create({
			text,
			userId
		})

		return await dataToCreate.save()
	}

	async clear({ userId }: { userId: string }): Promise<Record[]> {
		if (!userId) {
			throw new ConflictException('Invalid userId!')
		}

		const isExist = await this.userModel.findById(userId)

		if (!isExist) {
			throw new ConflictException(`User already not registered!`)
		}

		await this.recordModel.deleteMany({
			userId
		})

		return await this.recordModel.find({ userId })
	}
}
