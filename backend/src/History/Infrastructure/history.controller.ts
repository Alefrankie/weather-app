import { Controller, Get, Param } from '@nestjs/common'
import { HistoryService } from '../Application/history.service'
import { History } from '../Domain/history.schema'

@Controller('/posts')
export class HistoryController {
	constructor(private historyService: HistoryService) {}

	@Get('/:userId')
	getAll(@Param() { userId }: { userId: string }): History[] {
		return this.historyService.findAllByUser(userId)
	}
}
