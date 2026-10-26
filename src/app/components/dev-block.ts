import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE, SERVICES, WORKS, STEPS, FAQ, Work } from '../data/site.data';
import { WorkCard } from './work-card';

@Component({
  selector: 'app-dev-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WorkCard],
  template: `<section class="dev" id="razrabotchikam"><div class="wrap">
  <div class="section-head"><h2 class="title">Для разработчиков</h2><p class="lead">Личные проекты, код открыт. Стек и подход можно посмотреть на GitHub.</p></div>
  <div class="works-grid">
    @for (w of devWorks; track w.title) { <app-work-card [work]="w" /> }
  </div>
  <div class="dev-box">
    <div><h2>Стек</h2><p>То, с чем работаю чаще всего.</p></div>
    <div class="dev-links"><span class="chip">Angular 22</span><span class="chip">TypeScript</span><span class="chip">JavaScript</span>
      <a class="btn btn-ghost btn-small" [href]="site.githubUrl" target="_blank" rel="noopener">GitHub: radikryzvanov</a></div>
  </div>
</div></section>`,
})
export class DevBlock {
  protected readonly site = SITE;
  protected readonly devWorks: Work[] = WORKS.filter((w) => w.dev);
  protected readonly services = SERVICES;
  protected readonly works: Work[] = WORKS;
  protected readonly steps = STEPS;
  protected readonly faq = FAQ;
}
