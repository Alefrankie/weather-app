import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'
import { User } from 'src/User/Domain/user.schema'

@Schema({ timestamps: true })
export class History {
	@Prop()
	text: string

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
	userId: User[]
}

export type HistoryDocument = History & Document

export const HistorySchema = SchemaFactory.createForClass(History)
