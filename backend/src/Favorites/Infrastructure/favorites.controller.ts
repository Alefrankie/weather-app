import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { FavoriteService } from '../Application/favorite.service'
import { Favorite } from '../Domain/favorites.schema'

@Controller('/favorites')
export class FavoritesController {
	constructor(private favoritesService: FavoriteService) {}

	@Get('/:userId')
	getAll(@Param() { userId }: { userId: string }): Promise<Favorite[]> {
		return this.favoritesService.findAllByUser(userId)
	}

	@Post('/')
	save(@Body() body: Favorite) {
		return this.favoritesService.save(body)
	}

	@Delete('/:favoriteId')
	async removeOne(@Param() { favoriteId }: { favoriteId: string }) {
		await this.favoritesService.removeOne({ favoriteId })
		return { message: 'Favorite removed!' }
	}

	@Delete('/clear/:userId')
	async clear(@Param() { userId }: { userId: string }): Promise<Favorite[]> {
		return await this.favoritesService.clear({ userId })
	}
}
