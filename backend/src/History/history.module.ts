import { HistoryController } from './Infrastructure/history.controller'
import { Module } from '@nestjs/common'

@Module({
	imports: [],
	controllers: [HistoryController],
	providers: []
})
export class HistoryModule {}
