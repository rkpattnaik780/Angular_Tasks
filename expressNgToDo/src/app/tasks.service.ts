import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
/*
The @Injectable() decorator tells TypeScript to emit metadata 
about the service. The metadata specifies that Angular may need to 
inject other dependencies into this service.
*/
export class TasksService {
    constructor (
    private http: Http
       ) {}
    getTasks() {
      return this.http.get("/showtasks").map(res => res.json());
    }
    postWork(work){
      return this.http.post("/postTasks",{"work" : work}).map(res => res.json());
    }
    deleteWork(id){
      return this.http.delete("/deletetask/" + id);
    }
}