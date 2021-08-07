import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMembersSummary():any[] {
    var TeamMembersSummary = 
    [
      { Region:'East' , TeamMemberCount: 20 , TemporarilyUnavailableMembers:4} , 
      { Region:'West' , TeamMemberCount: 15 , TemporarilyUnavailableMembers:4} , 
      { Region:'South' , TeamMemberCount: 27 , TemporarilyUnavailableMembers:4} , 
      { Region:'North' , TeamMemberCount: 15 , TemporarilyUnavailableMembers:6} , 
    ];
    return TeamMembersSummary; 

  }
  
}
