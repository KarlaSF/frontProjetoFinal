import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { ListarprodutosComponent } from './components/produtos/listarprodutos/listarprodutos.component';
import { CadastrarprodutoComponent } from './components/produtos/cadastrarproduto/cadastrarproduto.component';
import { AtualizarprodutoComponent } from './components/produtos/atualizarproduto/atualizarproduto.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListarprodutosComponent,
    CadastrarprodutoComponent,
    AtualizarprodutoComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot()

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
