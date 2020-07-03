import {Controller, Get} from '@tsed/common';

type Status = {
  hello: 'world';
};

@Controller('/')
export class HelloWorldController {
  @Get('/')
  get(): Status {
    return {
      hello: 'world',
    };
  }
}
