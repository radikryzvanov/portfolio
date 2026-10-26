import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE, SERVICES, WORKS, STEPS, FAQ, Work } from '../data/site.data';

@Component({
  selector: 'app-services',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<section class="services" id="uslugi"><div class="wrap">
  <div class="section-head"><h2 class="title">Что я делаю</h2><p class="lead">Цены ориентировочные, точную стоимость называю после обсуждения задачи.</p></div>
  <div class="bento">
    @for (s of services; track s.title) {
      <article class="card reveal service" [class.main-service]="s.main">
        @if (s.main) { <div class="badge">Главное</div> }
        <h3>{{ s.title }}</h3>
        <p>{{ s.text }}</p>
        @if (s.bullets) { <ul class="checklist">@for (b of s.bullets; track b) { <li>{{ b }}</li> }</ul> }
        <div class="price">{{ s.price }}</div>
      </article>
    }
  </div></div></section>`,
})
export class Services {
  protected readonly site = SITE;
  protected readonly services = SERVICES;
  protected readonly works: Work[] = WORKS;
  protected readonly steps = STEPS;
  protected readonly faq = FAQ;
}
