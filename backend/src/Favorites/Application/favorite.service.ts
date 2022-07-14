import {
	ConflictException,
	Injectable,
	Logger,
	NotFoundException
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from 'src/User/Domain/user.schema'
import { Favorite, FavoriteDocument } from '../Domain/favorites.schema'

@Injectable()
export class FavoriteService {
	constructor(
		@InjectModel(Favorite.name) private favoriteModel: Model<FavoriteDocument>,
		@InjectModel(User.name) private userModel: Model<UserDocument>
	) {}

	async findAllByUser(userId: string): Promise<Favorite[]> {
		const isExist = await this.userModel.findById(userId)

		if (!isExist) {
			throw new ConflictException(`User already not registered!`)
		}

		return await this.favoriteModel.find({ userId }).sort({
			createdAt: -1
		})
	}

	async save(favorite: Favorite): Promise<Favorite> {
		const { name, region, country, userId } = favorite

		Logger.log(`Saving favorite: ${favorite}`)
		if (!userId || !name || !region || !country) {
			throw new ConflictException('Invalid Favorite!')
		}

		const isExist = await this.userModel.findById(userId)

		if (!isExist) {
			throw new ConflictException(`User already not registered!`)
		}

		const dataToCreate = await this.favoriteModel.create(favorite)

		return await dataToCreate.save()
	}

	async removeOne({ favoriteId }: { favoriteId: string }) {
		await this.favoriteModel.findByIdAndDelete(favoriteId)
	}

	async clear({ userId }: { userId: string }): Promise<Favorite[]> {
		if (!userId) {
			throw new ConflictException('Invalid userId!')
		}

		const isExist = await this.userModel.findById(userId)

		if (!isExist) {
			throw new ConflictException(`User already not registered!`)
		}

		await this.favoriteModel.deleteMany({
			userId
		})

		return await this.favoriteModel.find({ userId })
	}
}
