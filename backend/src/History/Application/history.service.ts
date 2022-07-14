import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { History, HistoryDocument } from '../Domain/history.schema'

@Injectable()
export class HistoryService {
	constructor(
		@InjectModel(History.name) private userModel: Model<HistoryDocument>
	) {}

	async findAllByUser(userId: string): Promise<History[]> {
		const data = await this.userModel.find({ userId })

		if (!data) {
			throw new NotFoundException(`History for ${userId} not found`)
		}

		return data
	}
}
