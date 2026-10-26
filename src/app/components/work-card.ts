import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Work } from '../data/site.data';

@Component({
  selector: 'app-work-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let w = work();
    <article class="card reveal work">
      @if (w.image) {
        <div class="work-shot"><img [src]="w.image" [alt]="w.alt" [style.object-position]="w.position" loading="lazy" width="1200" height="600"></div>
      }
      <div class="work-body">
        <div class="work-kind" [class.demo]="w.demo">{{ w.kind }}</div>
        <h3>{{ w.title }}</h3>
        <p class="work-text"><b>Задача.</b> {{ w.task }}</p>
        <p class="work-text"><b>Что умеет.</b> {{ w.features }}</p>
        <div class="work-tags">@for (t of w.tags; track t) { <span class="tag">{{ t }}</span> }</div>
        @if (w.links) {
          <div class="work-links">@for (l of w.links; track l.url) {
            <a class="btn btn-ghost btn-small" [href]="l.url" target="_blank" rel="noopener">{{ l.label }}</a> }</div>
        }
      </div>
    </article>
  `,
})
export class WorkCard {
  readonly work = input.required<Work>();
}
