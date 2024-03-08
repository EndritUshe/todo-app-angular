import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './app.component';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseRequestUrl = 'https://65a3aec6a54d8e805ed3dfc6.mockapi.io/todo'
  constructor(private httpClient: HttpClient) {

  }

  getAll(){
    const request = this.httpClient.get(this.baseRequestUrl)
    return request;
  }
  getById(id : string){
    const getByIdUrl = this.baseRequestUrl+'/'+id;
    const request = this.httpClient.get(getByIdUrl);
    return request;
  }
  create(todo : Todo){
    const request = this.httpClient.post(this.baseRequestUrl, todo);
    return request;
  }
  update(todo : Todo){
    const putByIdUrl = this.baseRequestUrl + '/' + todo.id;
    delete todo.id;
    const request = this.httpClient.put(putByIdUrl,todo);
    return request;
  }
  delete(id: string){
    const deleteByIdUrl = this.baseRequestUrl+'/'+id;
    const request = this.httpClient.delete(deleteByIdUrl);
    return request;
  }
}
