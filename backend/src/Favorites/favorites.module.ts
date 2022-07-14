import { FavoritesController } from './Infrastructure/favorites.controller'
import { Module } from '@nestjs/common'
import { FavoriteService } from './Application/favorite.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Favorite, FavoriteSchema } from './Domain/favorites.schema'
import { User, UserSchema } from 'src/User/Domain/user.schema'

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Favorite.name, schema: FavoriteSchema },
			{ name: User.name, schema: UserSchema }
		])
	],
	controllers: [FavoritesController],
	providers: [FavoriteService]
})
export class FavoritesModule {}
