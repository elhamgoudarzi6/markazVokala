import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) { }

  login(data: any): any {
    return this.http.post(
      'https://api.markazvl.ir/api/v1/admin/loginAdmin',
      data
    );
  }
  changePassword(id: any, data: any): any {
    return this.http.put(
      'https://api.markazvl.ir/api/v1/admin/changePassword/' + id,
      data
    );
  }
  changeUsername(id: any, data: any): any {
    return this.http.put(
      'https://api.markazvl.ir/api/v1/admin/changeUsername/' + id,
      data
    );
  }
  resetPassword(data: any): any {
    return this.http.put(
      'https://api.markazvl.ir/api/v1/admin/resetPassword',
      data
    );
  }
  uploadFile(data: any): any {
    return this.http.post('https://api.markazvl.ir/api/v1/admin/upload', data);
  }

  uploadMultiFiles(data: any): any {
    return this.http.post(
      'https://api.markazvl.ir/api/v1/admin/multiUpload',
      data
    );
  }

  //#region Administrator
  getAllAdmininstrators(): any {
    return this.http.get(
      'https://api.markazvl.ir/api/v1/admin/getAllAdmin'
    );
  }
  addAdmin(data: any): any {
    return this.http.post(
      'https://api.markazvl.ir/api/v1/admin/registerAdmin',
      data
    );
  }
  editAdmin(id: any, data: any): any {
    return this.http.put(
      'https://api.markazvl.ir/api/v1/admin/updateAdmin/' + id,
      data
    );
  }
  deleteAdmin(id: any): any {
    return this.http.delete(
      'https://api.markazvl.ir/api/v1/admin/deleteAdmin/' + id
    );
  }
  //#endregion


   //#region Categories
   getAllCategories(): any {
    return this.http.get(
      'https://api.markazvl.ir/api/v1/admin/getAllCategory'
    );
  }

  addCategory(data: any): any {
    return this.http.post(
      'https://api.markazvl.ir/api/v1/admin/registerCategory',
      data
    );
  }
  editCategory(id: any, data: any): any {
    return this.http.put(
      'https://api.markazvl.ir/api/v1/admin/updateCategory/' + id,
      data
    );
  }
  deleteCategory(id: any): any {
    return this.http.delete(
      'https://api.markazvl.ir/api/v1/admin/deleteCategory/' + id
    );
  }

  //#endregion


  //#region News
  getAllNews(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/admin/getAllNews');
  }

  addNews(data: any): any {
    return this.http.post(
      'https://api.markazvl.ir/api/v1/admin/registerNews',
      data
    );
  }
  editNews(id: any, data: any): any {
    return this.http.put(
      'https://api.markazvl.ir/api/v1/admin/updateNews/' + id,
      data
    );
  }
  deleteNews(id: any): any {
    return this.http.delete(
      'https://api.markazvl.ir/api/v1/admin/deleteNews/' + id
    );
  }
  //#endregion

    //#region Employee & Member
    getAllEmployee(): any {
      return this.http.get('https://api.markazvl.ir/api/v1/admin/getAllEmployee');
    }
  
    addEmployee(data: any): any {
      return this.http.post(
        'https://api.markazvl.ir/api/v1/admin/registerEmployee',
        data
      );
    }
    deleteEmployee(id: any): any {
      return this.http.delete(
        'https://api.markazvl.ir/api/v1/admin/deleteEmployee/' + id
      );
    }

    getAllMember(): any {
      return this.http.get('https://api.markazvl.ir/api/v1/admin/getAllMember');
    }
  
    addMember(data: any): any {
      return this.http.post(
        'https://api.markazvl.ir/api/v1/admin/registerMember',
        data
      );
    }
    deleteMember(id: any): any {
      return this.http.delete(
        'https://api.markazvl.ir/api/v1/admin/deleteMember/' + id
      );
    }
    //#endregion

    
    //#region article
    getAllArticle(): any {
      return this.http.get('https://api.markazvl.ir/api/v1/admin/getAllArticle');
    }
  
    addArticle(data: any): any {
      return this.http.post(
        'https://api.markazvl.ir/api/v1/admin/registerArticle',
        data
      );
    }
    editArticle(id: any, data: any): any {
      return this.http.put(
        'https://api.markazvl.ir/api/v1/admin/updateArticle/' + id,
        data
      );
    }
    deleteArticle(id: any): any {
      return this.http.delete(
        'https://api.markazvl.ir/api/v1/admin/deleteArticle/' + id
      );
    }
    //#endregion

       
    
        //#region Moazedat
        getAllMoazedat(): any {
          return this.http.get('https://api.markazvl.ir/api/v1/admin/getAllMoazedat');
        }
      
        addMoazedat(data: any): any {
          return this.http.post(
            'https://api.markazvl.ir/api/v1/admin/registerMoazedat',
            data
          );
        }
        editMoazedat(id: any, data: any): any {
          return this.http.put(
            'https://api.markazvl.ir/api/v1/admin/updateMoazedat/' + id,
            data
          );
        }
        deleteMoazedat(id: any): any {
          return this.http.delete(
            'https://api.markazvl.ir/api/v1/admin/deleteMoazedat/' + id
          );
        }
        //#endregion
    
    
    //#region Commission
        getAllCommission(): any {
          return this.http.get('https://api.markazvl.ir/api/v1/admin/getAllCommission');
        }
      
        addCommission(data: any): any {
          return this.http.post(
            'https://api.markazvl.ir/api/v1/admin/registerCommission',
            data
          );
        }
        editCommission(id: any, data: any): any {
          return this.http.put(
            'https://api.markazvl.ir/api/v1/admin/updateCommission/' + id,
            data
          );
        }
        deleteCommission(id: any): any {
          return this.http.delete(
            'https://api.markazvl.ir/api/v1/admin/deleteCommission/' + id
          );
        }
        //#endregion

  //#region Notification
  getAllNotification(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/admin/getAllNotification');
  }

  addNotification(data: any): any {
    return this.http.post(
      'https://api.markazvl.ir/api/v1/admin/registerNotification',
      data
    );
  }
  editNotification(id: any, data: any): any {
    return this.http.put(
      'https://api.markazvl.ir/api/v1/admin/updateNotification/' + id,
      data
    );
  }
  deleteNotification(id: any): any {
    return this.http.delete(
      'https://api.markazvl.ir/api/v1/admin/deleteNotification/' + id
    );
  }
  //#endregion

  //#region Occasion
  getAllOccasion(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/admin/getAllOccasion');
  }

  addOccasion(data: any): any {
    return this.http.post(
      'https://api.markazvl.ir/api/v1/admin/registerOccasion',
      data
    );
  }
  editOccasion(id: any, data: any): any {
    return this.http.put(
      'https://api.markazvl.ir/api/v1/admin/updateOccasion/' + id,
      data
    );
  }
  deleteOccasion(id: any): any {
    return this.http.delete(
      'https://api.markazvl.ir/api/v1/admin/deleteOccasion/' + id
    );
  }
  //#endregion

  //#region video
  getAllVideo(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/admin/getAllVideo');
  }

  addVideo(data: any): any {
    return this.http.post(
      'https://api.markazvl.ir/api/v1/admin/registerVideo',
      data
    );
  }
  deleteVideo(id: any): any {
    return this.http.delete(
      'https://api.markazvl.ir/api/v1/admin/deleteVideo/' + id);
  }
  //#endregion

  //#region ContactFormMessages
  getAllContactFormMessages(): any {
    return this.http.get(
      'https://api.markazvl.ir/api/v1/admin/getAllContactUs'
    );
  }
  getContactFormMessage(id: any): any {
    return this.http.get(
      'https://api.markazvl.ir/api/v1/admin/getContactUs/' + id
    );
  }
  deleteContactFormMessage(id: any): any {
    return this.http.delete(
      'https://api.markazvl.ir/api/v1/admin/deleteContactUs/' + id
    );
  }
  //#endregion

  //#region Subscriptions
  getAllSmsSubscriptions(): any {
    return this.http.get(
      'https://api.markazvl.ir/api/v1/admin/getSmsSubscription'
    );
  }
  deleteSmsSubscription(id: any): any {
    return this.http.delete(
      'https://api.markazvl.ir/api/v1/admin/deleteSmsSubscription/' + id
    );
  }

  //#endregion

  //#region Faqs
  getAllFaqs(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/admin/getAllFaq');
  }
  addFaq(data: any): any {
    return this.http.post(
      'https://api.markazvl.ir/api/v1/admin/registerFaq',
      data
    );
  }
  deleteFaq(id: any): any {
    return this.http.delete(
      'https://api.markazvl.ir/api/v1/admin/deleteFaq/' + id
    );
  }
  //#endregion


  //#region Sliders-Apis
  getSliders(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/admin/getAllslider');
  }

  addSlider(data: any): any {
    return this.http.post('https://api.markazvl.ir/api/v1/admin/registerSlider', data);
  }

  editSlider(id: any, data: any): any {
    return this.http.put('https://api.markazvl.ir/api/v1/admin/updateSlider/' + id, data);
  }

  deleteSlider(id: any): any {
    return this.http.delete('https://api.markazvl.ir/api/v1/admin/deleteSlider/' + id);
  }

  //#endregion

  //#region SideBanners-Apis
  getBanners(): any {
    return this.http.get('https://api.markazvl.ir/api/v1/admin/getAllBanner');
  }

  addBanner(data: any): any {
    return this.http.post('https://api.markazvl.ir/api/v1/admin/registerBanner', data);
  }

  editBanner(id: any, data: any): any {
    return this.http.put('https://api.markazvl.ir/api/v1/admin/updateBanner/' + id, data);
  }

  deleteBanner(id: any): any {
    return this.http.delete('https://api.markazvl.ir/api/v1/admin/deleteBanner/' + id);
  }
  //#endregion

}
