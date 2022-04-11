import { Component, OnInit } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  /**
   * バックエンドから返却されたレスポンスをセットするプロパティ
   *
   * 型は any ではなく class で型を定義した方が良いが
   * ここでは簡便さから any としておく
   *
   * @private
   * @type {string}
   * @memberof HttpClientComponent
   */
  public param: any = {};

  /**
   * バックエンドから返却されたたメッセージをセットするプロパティ
   *
   * @type {*}
   * @memberof HttpClientComponent
   */
  public messageInfo: any = {
    id: null,
    message: null
  };

  /**
   * バックエンドから返却されたたメッセージを保持するリストプロパティ
   *
   * @type {*}
   * @memberof HttpClientComponent
   */
  public messageInfoList: any = [this.messageInfo];

  /**
   * メッセージ登録回数
   *
   * @private
   * @type {number}
   * @memberof HttpClientComponent
   */
  public messageId: number = 1;

  /**
   * 入力メッセージ
   *
   * @type {string}
   * @memberof HttpClientComponent
   */
  public message: string = '';

  /**
   * コンストラクタ. HttpClientComponent のインスタンスを生成する
   * 自作した HttpClientService を DI する
   *
   * @param {HttpClientService} httpClientService HTTP通信を担当するサービス
   * @memberof HttpClientComponent
   */
  constructor(private httpClientService: HttpClientService) { }

  /**
   * ライフサイクルメソッド｡コンポーネントの初期化で使用する
   * 今回はコンポーネントの初期化時にバックエンドから情報を取得してビューに表示する
   *
   * @memberof HttpClientComponent
   */
  ngOnInit() {
    // ------
    // toPromise.then((res) =>{}) を利用する場合のコード
    // ------
    this.httpClientService.get()
      .then(
        (response) => {
          this.param = response;
          this.messageInfoList = this.param.messages;
        }
      )
      .catch(
        (error) => console.log(error)
      );
  }
}
