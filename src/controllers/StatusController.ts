import { Controller, Get } from '@tsed/common';

type Status = {
  hello: 'world';
};

@Controller('/')
export class StatusController {
  @Get('/')
  getStatus(): Status {
    return {
      hello: 'world',
    };
  }
}
