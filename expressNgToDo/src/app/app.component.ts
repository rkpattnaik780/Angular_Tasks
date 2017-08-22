import { Component , OnInit , Input} from '@angular/core';
import { TasksService } from "./tasks.service" ;
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
   work : string;

   tasks : Array<any> = [] ;
   constructor (
    private tasksService: TasksService
       ) {} 
    
    ngOnInit() {
       this.reload();
  };
     reload(){
       this.tasksService.getTasks().subscribe(tasks => {
       this.tasks = tasks ;
       console.log(this.tasks);
    });

    };
      postTask(temp1) : any{
        //this.tasks.push({"work" : temp1});
        if(temp1){
        this.tasksService.postWork(temp1).subscribe(res => this.tasks.push(res));        
        this.work = "" ;}
      }

      deleteTask(id) : any {
        this.tasksService.deleteWork(id).subscribe((res) => this.reload());
      }


}
