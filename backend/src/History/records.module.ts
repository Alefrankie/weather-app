import { RecordsController } from './Infrastructure/records.controller'
import { Module } from '@nestjs/common'
import { RecordsService } from './Application/records.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Record, RecordSchema } from './Domain/record.schema'
import { User, UserSchema } from 'src/User/Domain/user.schema'

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Record.name, schema: RecordSchema },
			{ name: User.name, schema: UserSchema }
		])
	],
	controllers: [RecordsController],
	providers: [RecordsService]
})
export class RecordsModule {}
