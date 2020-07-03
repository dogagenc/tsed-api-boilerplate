import {Controller, Get} from '@tsed/common';
import {EventTypes} from '@src/models/EventModel';
import {EventService, EventResponse} from '@src/services/EventService';

@Controller('/event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('/visit')
  async visit(): Promise<EventResponse> {
    return this.eventService.create(EventTypes.VISIT);
  }

  @Get('/entry')
  async entry(): Promise<EventResponse> {
    return this.eventService.create(EventTypes.ENTRY);
  }

  @Get('/count')
  async count(): Promise<EventResponse[]> {
    return this.eventService.totalCount();
  }
}
