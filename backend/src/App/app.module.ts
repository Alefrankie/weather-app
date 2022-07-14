import { HistoryModule } from '../History/history.module'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from 'src/User/user.module'
import { AppController } from './app.controller'
import { FavoritesModule } from 'src/Favorites/favorites.module'

@Module({
	imports: [
		HistoryModule,
		MongooseModule.forRoot(
			'mongodb+srv://Diwaii:Diwaii@cluster0.gwm77.mongodb.net/weather_app'
		),
		UserModule,
		FavoritesModule
	],
	controllers: [AppController],
	providers: []
})
export class AppModule {}
