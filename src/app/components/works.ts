import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE, SERVICES, WORKS, STEPS, FAQ, Work } from '../data/site.data';
import { WorkCard } from './work-card';

@Component({
  selector: 'app-works',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WorkCard],
  template: `<section class="works" id="raboty"><div class="wrap">
  <div class="section-head"><h2 class="title">Работы</h2><p class="lead">Пока это демо и личные проекты, и они так подписаны. Реальные клиентские работы появятся здесь после первых заказов.</p></div>
  <div class="works-grid">
    @for (w of works; track w.title) { <app-work-card [work]="w" /> }
  </div></div></section>`,
})
export class Works {
  protected readonly site = SITE;
  protected readonly services = SERVICES;
  protected readonly works: Work[] = WORKS.filter((w) => !w.dev);
  protected readonly steps = STEPS;
  protected readonly faq = FAQ;
}
