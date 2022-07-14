import { HistoryController } from './Infrastructure/history.controller'
import { Module } from '@nestjs/common'
import { HistoryService } from './Application/history.service'
import { MongooseModule } from '@nestjs/mongoose'
import { History, HistorySchema } from './Domain/history.schema'

@Module({
	imports: [
		MongooseModule.forFeature([{ name: History.name, schema: HistorySchema }])
	],
	controllers: [HistoryController],
	providers: [HistoryService]
})
export class HistoryModule {}
