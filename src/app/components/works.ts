import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE, SERVICES, WORKS, STEPS, FAQ, Work } from '../data/site.data';

@Component({
  selector: 'app-works',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<section class="works" id="raboty"><div class="wrap">
  <div class="section-head"><h2 class="title">Работы</h2><p class="lead">Пока это демо и личные проекты, и они так подписаны. Реальные клиентские работы появятся здесь после первых заказов.</p></div>
  <div class="works-grid">
    @for (w of works; track w.title) {
      <article class="card reveal work">
        @if (w.image) { <div class="work-shot"><img [src]="w.image" [alt]="w.alt" [style.object-position]="w.position" loading="lazy" width="1200" height="600"></div> }
        <div class="work-body">
          <div class="work-kind" [class.demo]="w.demo">{{ w.kind }}</div>
          <h3>{{ w.title }}</h3>
          <p class="work-text"><b>Задача.</b> {{ w.task }}</p>
          <p class="work-text"><b>Что умеет.</b> {{ w.features }}</p>
          <div class="work-tags">@for (t of w.tags; track t) { <span class="tag">{{ t }}</span> }</div>
          @if (w.links) { <div class="work-links">@for (l of w.links; track l.url) {
            <a class="btn btn-ghost btn-small" [href]="l.url" target="_blank" rel="noopener">{{ l.label }}</a> }</div> }
        </div>
      </article>
    }
  </div></div></section>`,
})
export class Works {
  protected readonly site = SITE;
  protected readonly services = SERVICES;
  protected readonly works: Work[] = WORKS;
  protected readonly steps = STEPS;
  protected readonly faq = FAQ;
}
