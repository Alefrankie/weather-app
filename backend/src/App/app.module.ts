import { RecordsModule } from '../History/records.module'
import { Logger, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from 'src/User/user.module'
import { AppController } from './app.controller'
import { FavoritesModule } from 'src/Favorites/favorites.module'
import { ConfigModule } from '@nestjs/config'

@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forRoot(
			`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.gwm77.mongodb.net/${process.env.DATABASE_NAME}`
		),
		RecordsModule,
		UserModule,
		FavoritesModule
	],
	controllers: [AppController],
	providers: []
})
export class AppModule {
	constructor() {
		Logger.log(process.env.DATABASE_USER, 'DATABASE_USER')
		Logger.log(process.env.DATABASE_PASSWORD, 'DATABASE_PASSWORD')
	}
}
