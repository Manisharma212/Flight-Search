import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SocialLoginModule,AuthServiceConfig } from 'angular4-social-login';
import { GoogleLoginProvider } from 'angular4-social-login';
import { FacebookLoginProvider } from 'angular4-social-login';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home-login/home.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InitBannerComponent } from './init-banner/init-banner.component';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { HeaderComponent } from './header/header.component';
import { PopupComponent } from './popup/popup.component';
import { BodyComponent } from './body/body.component';

const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("499597605286-dhs9l9fbd1p35v37o9bubb74ecdq3igu.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("125844121460503")
  }
]);

export function provideConfig() {
  return CONFIG;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    WelcomeComponent,
    InitBannerComponent,
    HomeRegisterComponent,
    HeaderComponent,
    PopupComponent,
    BodyComponent
  ],
  imports: [
    SocialLoginModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
      path: 'login',
      component : HomeComponent
    },
    {
      path : 'register',
      component : HomeRegisterComponent
    },
    {
      path : '',
      component : HomeComponent
    },
    {
      path : 'welcome',
      component : WelcomeComponent
    }
    ])
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
