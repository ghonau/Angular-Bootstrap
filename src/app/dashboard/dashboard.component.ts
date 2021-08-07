import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService : DashboardService ){}
  Designation: string = ""; 
  Username: string = ""; 
  NoOfTeamMembers:number = 0; 
  TotalCostOfAllProjects: number = 0; 
  PendingTasks:number = 0 ; 
  UpComingProjects:number = 0; 
  ProjectCost:number = 0; 


  CurrentExpenditure : number = 0;
  AvailableFunds:number = 0;

  Clients:string[] = [];
  Projects : string[] = [];
  Years: number[] = []; 
  TeamMembersSummary: any[] = [];
  TeamMembers: any[] = []; 



  ngOnInit(): void {

    this.Designation = "Team Leader"; 
    this.Username = "John Smith"; 
    this.NoOfTeamMembers = 67; 
    this.TotalCostOfAllProjects = 6544;
    this.PendingTasks = 15;
    this.UpComingProjects = 2 ; 
    this.ProjectCost = 1234234;
    this.CurrentExpenditure = 2342;
    this.AvailableFunds = 234234 ;       

    this.Clients = ['ABC InfoTech Ltd', 'DEF Soaftware Solutions', 'GHI Industries']; 

    this.Projects = ["Project A", "Project B", "Project C", "Project D"]; 
    this.Years = [2019, 2018, 2017]; 
    this.TeamMembers = [
      {
        Region:"East", Members:[
        {ID:1, Name:"East", Status:"Available"},
        {ID:2, Name:"Ford", Status:"Available"},       
        {ID:3, Name:"Ford", Status:"Busy"},        
        {ID:4, Name:"Ford", Status:"Busy"},        
      ]},
      {
        Region:"West", Members:[
        {ID:1, Name:"West", Status:"Available"},
        {ID:2, Name:"Ford", Status:"Available"},       
        {ID:3, Name:"Ford", Status:"Busy"},        
        {ID:4, Name:"Ford", Status:"Busy"},        
      ]},
      {
        Region:"North", Members:[
        {ID:1, Name:"North", Status:"Available"},
        {ID:2, Name:"Ford", Status:"Available"},       
        {ID:3, Name:"Ford", Status:"Busy"},        
        {ID:4, Name:"Ford", Status:"Busy"},        
      ]},{
        Region:"South", Members:[
        {ID:1, Name:"South", Status:"Available"},
        {ID:2, Name:"Ford", Status:"Available"},       
        {ID:3, Name:"Ford", Status:"Busy"},        
        {ID:4, Name:"Ford", Status:"Busy"},        
      ]},
    ]


    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary() ; 
  }

  onProjectChange($event:any){    
    if($event.target.value.indexOf("Project A") !== -1){
      this.ProjectCost = 3234;
      this.CurrentExpenditure = 234;
      this.AvailableFunds = 2; 
    }
  }

}
