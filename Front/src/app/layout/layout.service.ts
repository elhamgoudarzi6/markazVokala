import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private http: HttpClient) {
  }

  getSliders(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getAllSlider');
  }
  getSlider(id: any): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getSlider/' + id);
  }
  // #region news
  getAllNews(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getAllNews');
  }

  getLatestNews(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getLatestNews');
  }

  getNews(id: any): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getNews/' + id);
  }

  getAllTagNews(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getAllTagNews');
  }
  // #endregion

    // #region article
    getAllArticle(): any {
      return this.http.get('https://api.markazvl.ir/api/v1/user/getAllArticle');
    }
  
    getLatestArticle(): any {
      return this.http.get('https://api.markazvl.ir/api/v1/user/getLatestArticle');
    }
  
    getArticle(id: any): any {
      return this.http.get('https://api.markazvl.ir/api/v1/user/getArticle/' + id);
    }
  
    // #endregion

  getLatestOccasion(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getLatestOccasion');
  }

//#region Notification
  getLatestNotification(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getLatestNotification');
  }

  getAllNotification(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getAllNotification');
  }

  getNotification(id: any): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getNotification/' + id);
  }

  getAllTagNotification(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getAllTagNotification');
  }
//#endregion

  addSmsSubscription(data: any): any {
    return this.http.post('https://api.markazvl.ir/api/v1/user/addSmsSubscription', data);
  }
  getAllVideo(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getAllVideo');
  }

  getAllFaq(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getAllFaq');
  }

  getAllCommission(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getAllCommission');
  }
  getAllMoazedat(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getAllMoazedat');
  }

  getAllMember(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getAllMember');
  }

  getAllEmployee(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/user/getAllEmployee');
  }
  postContactUs(data: any) {
    return this.http.post('https://api.markazvl.ir/api/v1/user/registerContactUs', data);
  }

  getTokenSms() {
    let data = {
      UserApiKey: 'f2a1c337366e0cd3ddffc337',
      SecretKey: 'it66)%#teBC!@*&'
    };
    return this.http.post('https://RestfulSms.com/api/Token', data);
  }

  sendSms(data: any, token: any) {
    const headers = {
      'content-type': 'application/json',
      'x-sms-ir-secure-token': token
    }
    return this.http.post('https://RestfulSms.com/api/UltraFastSend', data, {'headers': headers});
  }
}
