import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component' ;
import { InstructionsComponent } from './instructions/instructions.component' ;

var routes: Routes = [
   { path: '', redirectTo: '/bill', pathMatch: 'full' },
  { path: 'instructions',  component: InstructionsComponent },
  { path: 'bill', component: BillComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}