import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppComponent,
    ProductListComponent
  ],
  providers: []
})
export class AppModule {
  ngDoBootstrap(): void {
    import('zone.js').then((Zone) => {
      (Zone as any).current.run(() => {
        platformBrowserDynamic().bootstrapModule(AppModule)
          .catch(err => console.error(err));
      });
    });
  }
}
