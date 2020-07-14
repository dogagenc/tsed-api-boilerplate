import { Default, Enum, Format, Required } from '@tsed/common';
import { ObjectID, Model } from '@tsed/mongoose';

export enum EventTypes {
  VISIT = 'visit',
  ENTRY = 'entry',
}

@Model()
export class EventModel {
  @ObjectID('id')
  _id: string;

  @Required()
  @Enum(EventTypes)
  type: EventTypes;

  value: string;

  @Format('date-time')
  @Default(Date.now)
  createdAt: Date = new Date();
}
