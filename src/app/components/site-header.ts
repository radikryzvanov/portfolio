import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE, SERVICES, WORKS, STEPS, FAQ, Work } from '../data/site.data';

@Component({
  selector: 'app-site-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<header class="header"><div class="wrap">
  <div class="logo">Радик<span class="logo-mark" aria-hidden="true"></span><span class="logo-surname">Рызванов</span></div>
  <nav class="nav" aria-label="Разделы">
    <a href="#uslugi">Услуги</a><a href="#raboty">Работы</a><a href="#process">Как работаю</a><a href="#faq">Вопросы</a><a href="#razrabotchikam">Разработчикам</a>
    <a class="btn btn-cta" [href]="site.telegramUrl">Написать</a>
  </nav></div></header>`,
})
export class SiteHeader {
  protected readonly site = SITE;
  protected readonly services = SERVICES;
  protected readonly works: Work[] = WORKS;
  protected readonly steps = STEPS;
  protected readonly faq = FAQ;
}
