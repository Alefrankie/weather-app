import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'
import { User } from 'src/User/Domain/user.schema'

@Schema({ timestamps: true })
export class Record {
	@Prop()
	text: string

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
	userId: User
}

export type RecordDocument = Record & Document

export const RecordSchema = SchemaFactory.createForClass(Record)
