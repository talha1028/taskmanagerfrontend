import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class Taskservice {
  private baseUrl = 'http://localhost:3000/tasks';
  constructor (private http: HttpClient) {}
  
  getTasks(){
    return this.http.get<Task[]>(`${this.baseUrl}/me`,{})
  }
  
  createtask(task: Task){
    return this.http.post<Task>(`${this.baseUrl}/create`,task)
  }
}
