/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChatBotService } from './chat-bot.service';

describe('Service: ChatBot', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatBotService]
    });
  });

  it('should ...', inject([ChatBotService], (service: ChatBotService) => {
    expect(service).toBeTruthy();
  }));
});
