import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE, SERVICES, WORKS, STEPS, FAQ, Work } from '../data/site.data';

@Component({
  selector: 'app-site-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<footer class="footer"><div class="wrap" style="display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between"><span>© Радик Рызванов</span><span>Временная версия для просмотра</span></div></footer>`,
})
export class SiteFooter {
  protected readonly site = SITE;
  protected readonly services = SERVICES;
  protected readonly works: Work[] = WORKS;
  protected readonly steps = STEPS;
  protected readonly faq = FAQ;
}
