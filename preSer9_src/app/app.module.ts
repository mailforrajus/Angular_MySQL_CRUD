import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { fetchService } from "./services/fetch.service";
import { insertService } from "./services/insert.service";
import { updateService } from "./services/update.service";
import { deleteService } from "./services/delete.service";
import { mysqlComponent } from "./components/mysql.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,mysqlComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [fetchService,insertService,updateService,deleteService],
  bootstrap: [mysqlComponent]
})
export class AppModule { }
