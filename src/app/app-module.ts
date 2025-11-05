import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './auth/login/login';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskList } from './components/task-list/task-list';
import { Users } from './components/users/users';
import { AuthInterceptor } from './auth/auth-interceptor';
import { Createuser } from './components/createuser/createuser';
import { Taskcard } from './components/taskcard/taskcard';
import { Home } from './components/home/home';
import { HoverHighlight } from './directives/hover-highlight';
import { Createtask } from './components/createtask/createtask';


@NgModule({
  declarations: [
    App,
    Login,
    TaskList,
    Users,
    Createuser,
    Taskcard,
    Home,
    HoverHighlight,
    Createtask,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
