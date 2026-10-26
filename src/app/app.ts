import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE } from './data/site.data';
import { SiteHeader } from './components/site-header';
import { Hero } from './components/hero';
import { Services } from './components/services';
import { Works } from './components/works';
import { Process } from './components/process';
import { Faq } from './components/faq';
import { DevBlock } from './components/dev-block';
import { Contacts } from './components/contacts';
import { SiteFooter } from './components/site-footer';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SiteHeader, Hero, Services, Works, Process, Faq, DevBlock, Contacts, SiteFooter],
  template: `
    <app-site-header />
    <main>
      <app-hero />
      <app-services />
      <app-works />
      <app-process />
      <app-faq />
      <app-dev-block />
    </main>
    <app-contacts />
    <app-site-footer />
    <div class="tg-bar"><a class="btn btn-cta" [href]="site.telegramUrl">Написать в Telegram</a></div>
  `,
})
export class App {
  protected readonly site = SITE;
}
