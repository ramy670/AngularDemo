import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/Forms'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { OuterTemplateComponent } from './components/outer-template/outer-template.component';
import { BankItemComponent } from './components/bank-item/bank-item.component';
import { BankListComponent } from './components/bank-list/bank-list.component';
import { HeaderComponent } from './components/header/header.component';
import { AddComponent } from './components/add/add.component';
import { TestComponent } from './components/test/test.component';
import { BicSearchComponent } from './components/bic-search/bic-search.component';
import { GeneralSearchComponent } from './components/general-search/general-search.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SmallFooterComponent } from './components/small-footer/small-footer.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'bic', component: BicSearchComponent },
  { path: 'add', component: AddComponent },
  { path: 'search', component: GeneralSearchComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    OuterTemplateComponent,
    BankItemComponent,
    BankListComponent,
    HeaderComponent,
    AddComponent,
    TestComponent,
    BicSearchComponent,
    GeneralSearchComponent,
    MainPageComponent,
    FooterComponent,
    SmallFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
