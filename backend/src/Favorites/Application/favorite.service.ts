import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Favorite, FavoriteDocument } from '../Domain/favorites.schema'

@Injectable()
export class FavoriteService {
	constructor(
		@InjectModel(Favorite.name) private userModel: Model<FavoriteDocument>
	) {}

	async findAllByUser(userId: string): Promise<Favorite[]> {
		const data = await this.userModel.find({ userId })

		if (!data) {
			throw new NotFoundException(`Favorite for ${userId} not found`)
		}

		return data
	}
}
