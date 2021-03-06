import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'
import { User } from 'src/User/Domain/user.schema'

@Schema({ timestamps: true })
export class Favorite {
	@Prop()
	name: string

	@Prop()
	region: string

	@Prop()
	country: string

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
	userId: User
}

export type FavoriteDocument = Favorite & Document

export const FavoriteSchema = SchemaFactory.createForClass(Favorite)
