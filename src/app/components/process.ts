import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE, SERVICES, WORKS, STEPS, FAQ, Work } from '../data/site.data';

@Component({
  selector: 'app-process',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<section class="process" id="process"><div class="wrap">
  <h2 class="title">Как я работаю</h2>
  <ol class="steps">@for (s of steps; track s.title; let i = $index) {
    <li class="step"><div class="step-num">0{{ i + 1 }}</div><h3>{{ s.title }}</h3><p>{{ s.text }}</p></li> }</ol>
</div></section>`,
})
export class Process {
  protected readonly site = SITE;
  protected readonly services = SERVICES;
  protected readonly works: Work[] = WORKS;
  protected readonly steps = STEPS;
  protected readonly faq = FAQ;
}
