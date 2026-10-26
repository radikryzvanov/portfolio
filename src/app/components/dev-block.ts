import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE, SERVICES, WORKS, STEPS, FAQ, Work } from '../data/site.data';

@Component({
  selector: 'app-dev-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<section class="dev"><div class="wrap"><div class="dev-box">
  <div><h2>Для разработчиков</h2><p>Код проектов открыт, стек и подход можно посмотреть на GitHub.</p></div>
  <div class="dev-links"><span class="chip">Angular 22</span><span class="chip">TypeScript</span><span class="chip">JavaScript</span>
    <a class="btn btn-ghost btn-small" [href]="site.githubUrl" target="_blank" rel="noopener">GitHub: radikryzvanov</a></div>
</div></div></section>`,
})
export class DevBlock {
  protected readonly site = SITE;
  protected readonly services = SERVICES;
  protected readonly works: Work[] = WORKS;
  protected readonly steps = STEPS;
  protected readonly faq = FAQ;
}
