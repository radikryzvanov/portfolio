import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE, SERVICES, WORKS, STEPS, FAQ, Work } from '../data/site.data';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<section class="hero"><div class="wrap">
  <div class="hero-copy">
    <div class="eyebrow">Веб-разработка</div>
    <h1>Сайты и Telegram-боты для малого бизнеса</h1>
    <p class="hero-text">Делаю понятные сайты и ботов, которые сами записывают клиентов и напоминают им о визите. Салоны, кафе, услуги: меньше звонков, больше заявок.</p>
    <div class="hero-actions">
      <a class="btn btn-cta btn-lg" [href]="site.telegramUrl">Написать в Telegram</a>
      <a class="btn btn-ghost btn-lg" href="#raboty">Смотреть работы</a>
    </div>
    <div class="stack">Стек: Angular 22 · TypeScript · Telegram Bot API · работаю с ИИ-инструментами</div>
  </div>
  <div class="hero-photo"><figure>
    <img src="assets/radik.webp" alt="Радик Рызванов" width="840" height="840" fetchpriority="high">
    <figcaption><strong>Радик Рызванов</strong><span>Веб-разработчик</span></figcaption>
  </figure></div>
</div></section>`,
})
export class Hero {
  protected readonly site = SITE;
  protected readonly services = SERVICES;
  protected readonly works: Work[] = WORKS;
  protected readonly steps = STEPS;
  protected readonly faq = FAQ;
}
