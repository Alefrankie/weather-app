import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './App/app.module'
import * as cookieParser from 'cookie-parser'

const PORT = 3001
async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.use(cookieParser())
	app.setGlobalPrefix('api')
	app.enableCors({
		credentials: true,
		origin: 'http://localhost:3000',
		allowedHeaders: 'Content-Type, Accept, Origin'
	})

	await app.listen(process.env.PORT || PORT)
	Logger.log(`Application is running on: ${process.env.PORT || PORT}`)
}
bootstrap()
