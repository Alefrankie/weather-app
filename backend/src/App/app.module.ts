import { PostModule } from '../History/post.module'
import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from 'src/User/user.module'
import { AppController } from './app.controller'

@Module({
	imports: [
		PostModule,
		MongooseModule.forRoot('mongodb://localhost/voyer-club'),
		UserModule
	],
	controllers: [AppController],
	providers: []
})
export class AppModule {}
