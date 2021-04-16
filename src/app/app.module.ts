
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { FormsModule } from '@angular/forms';

// HTTP クライアントのための import ( 下記は Angular 5.0.0 で非推奨となった )
//import { HttpModule } from '@angular/http';

// HTTP クライアントのための import ( Angular 5.0.0 以降はこちらを使う )
import { HttpClientModule } from '@angular/common/http';

// HTTP クライアントとしてのコンポーネント
import { HttpClientComponent } from './http-client.component';

// バックエンドとの通信を実際に担当するサービス
import { HttpClientService } from './http-client.service';

/**
 * Module
 */
@NgModule({
  imports: [
    BrowserModule, ChartAllModule, StockChartAllModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ CategoryService, LineSeriesService]
})

@NgModule({
  eclarations: [
    AppComponent,
    HttpClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // モジュールを利用を宣言する
    // 下記は Angular 5.0.0 で非推奨となった
    //HttpModule
    // Angular 5.0.0 以降はこちらを使う
    HttpClientModule
  ],
  providers: [
    // 自作サービスをアプリ全体で DI するために登録する
    HttpClientService
  ],
  bootstrap: [AppComponent]
  }
)
export class AppModule { }
