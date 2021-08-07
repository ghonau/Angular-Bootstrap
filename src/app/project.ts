export class Project 
{
    projectID:number; 
    projectName:string; 
    dateOfStart:Date | null;
    teamSize:number; 

    constructor(){
        this.projectID = 0 ;
        this.projectName = ""; 
        this.teamSize = 0 ; 
        this.dateOfStart = null;
    }
}


