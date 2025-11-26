import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Createtask } from './component/createtask/createtask';
import { Createuser } from './component/createuser/createuser';
import { Home } from './component/home/home';
import { TaskList } from './component/task-list/task-list';
import { Taskcard } from './component/task-card/task-card';
import { Users } from './component/users/users';
import { FormsModule } from '@angular/forms';
import { TaskModule } from './modules/taskmodule/taskmodule';
import { UsermoduleModule } from './modules/usermodule/usermodule-module';
import { Login } from './auth/login/login';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // <-- Correct module
import { AuthService } from './services/auth/authservice';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TasksEffects } from './state/tasks/tasks.effects';
import { tasksReducer } from './state/tasks/tasks.reducer';
import { AuthInterceptor } from './auth/auth-interceptor';

export const reducers = {
  tasks: tasksReducer
};

@NgModule({
  declarations: [
    App,
    Home,
    Users,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TaskModule,
    UsermoduleModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),  // <-- This provides the Store
    EffectsModule.forRoot([TasksEffects]), // <-- Corrected
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    AuthService,
    
  ],
  bootstrap: [App]
})
export class AppModule { }
