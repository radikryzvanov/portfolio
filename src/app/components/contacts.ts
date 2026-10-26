import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE, SERVICES, WORKS, STEPS, FAQ, Work } from '../data/site.data';

@Component({
  selector: 'app-contacts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<section class="contacts" id="kontakty"><div class="wrap">
  <div class="contacts-info"><h2 class="title">Расскажите о задаче</h2>
    <div class="contacts-list">Telegram: <a [href]="site.telegramUrl">{{ site.telegramHandle }}</a><br>Телефон: <a [href]="site.phoneHref">{{ site.phoneText }}</a></div></div>
  <div class="contacts-action"><a class="btn btn-cta btn-lg" [href]="site.telegramUrl">Написать в Telegram</a></div>
</div></section>`,
})
export class Contacts {
  protected readonly site = SITE;
  protected readonly services = SERVICES;
  protected readonly works: Work[] = WORKS;
  protected readonly steps = STEPS;
  protected readonly faq = FAQ;
}
