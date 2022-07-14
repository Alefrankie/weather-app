import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { RecordsService } from '../Application/records.service'
import { Record } from '../Domain/record.schema'

@Controller('/records')
export class RecordsController {
	constructor(private recordsService: RecordsService) {}

	@Get('/:userId')
	getAll(@Param() { userId }: { userId: string }): Promise<Record[]> {
		return this.recordsService.findAllByUser(userId)
	}

	@Post('/')
	save(@Body() body: Record): Promise<Record> {
		return this.recordsService.save(body)
	}

	@Delete('/clear/:userId')
	async clear(@Param() { userId }: { userId: string }): Promise<Record[]> {
		return await this.recordsService.clear({ userId })
	}
}
