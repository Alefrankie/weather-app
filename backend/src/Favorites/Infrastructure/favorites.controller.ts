import { Controller, Get, Param } from '@nestjs/common'
import { FavoriteService } from '../Application/favorite.service'
import { Favorite } from '../Domain/favorites.schema'

@Controller('/posts')
export class FavoritesController {
	constructor(private favoritesService: FavoriteService) {}

	@Get('/:userId')
	getAll(@Param() { userId }: { userId: string }): Promise<Favorite[]> {
		return this.favoritesService.findAllByUser(userId)
	}
}
