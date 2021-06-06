import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindClubComponent } from './find-club/find-club.component';
import { SelectTeamComponent } from './select-team/select-team.component';
import { AddPlayersComponent } from './add-players/add-players.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FindClubComponent,
    SelectTeamComponent,
    AddPlayersComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FindClubComponent,
    SelectTeamComponent,
    AddPlayersComponent
  ]
})
export class WidgetsModule { }
