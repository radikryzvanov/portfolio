import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE, SERVICES, WORKS, STEPS, FAQ, Work } from '../data/site.data';

@Component({
  selector: 'app-faq',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<section class="faq" id="faq"><div class="wrap">
  <h2 class="title">Частые вопросы</h2>
  <div class="faq-list">@for (f of faq; track f.q) { <details><summary>{{ f.q }}</summary><p>{{ f.a }}</p></details> }</div>
</div></section>`,
})
export class Faq {
  protected readonly site = SITE;
  protected readonly services = SERVICES;
  protected readonly works: Work[] = WORKS;
  protected readonly steps = STEPS;
  protected readonly faq = FAQ;
}
