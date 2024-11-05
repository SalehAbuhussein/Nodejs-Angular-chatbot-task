import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotChatBoxComponent } from './bot-chat-box.component';

describe('BotChatBoxComponent', () => {
  let component: BotChatBoxComponent;
  let fixture: ComponentFixture<BotChatBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotChatBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotChatBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
