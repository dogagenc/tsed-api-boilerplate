import { Inject, Service } from '@tsed/common';
import { MongooseModel } from '@tsed/mongoose';
import { EventModel, EventTypes } from '@src/models/EventModel';

export interface EventResponse {
  total: number;
  type: EventTypes;
}

@Service()
export class EventService {
  @Inject(EventModel)
  private Model: MongooseModel<EventModel>;

  async create(type: EventTypes): Promise<EventResponse> {
    const model = new this.Model({ type });
    await model.save();

    return this.response(type);
  }

  async response(type: EventTypes): Promise<EventResponse> {
    const total = await this.count(type);

    return { total, type };
  }

  async count(type: EventTypes): Promise<number> {
    return await this.Model.count({ type });
  }

  async totalCount(): Promise<EventResponse[]> {
    const counts = Promise.all(Object.values(EventTypes).map((type) => this.response(type)));

    return counts;
  }
}
