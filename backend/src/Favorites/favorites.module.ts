import { FavoritesController } from './Infrastructure/favorites.controller'
import { Module } from '@nestjs/common'
import { FavoriteService } from './Application/favorite.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Favorite, FavoriteSchema } from './Domain/favorites.schema'

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Favorite.name, schema: FavoriteSchema }])
	],
	controllers: [FavoritesController],
	providers: [FavoriteService]
})
export class FavoritesModule {}
