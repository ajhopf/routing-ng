import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { ListComponent } from './components/list/list.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
	declarations: [
		AppComponent,
		ActionButtonsComponent,
		ListComponent,
		AboutComponent,
		ContactComponent,
		HomeComponent,
		LoginComponent,
		HeaderComponent,
		FooterComponent,
		NotfoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
