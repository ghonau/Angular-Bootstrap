import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects:Project[] = []; 
  
  newProject : Project = new Project();
  constructor(private projectService: ProjectsService ) { }

  ngOnInit(): void {

    this.projectService.getAllProjects().subscribe(
      (response : Project[]) => {
        this.projects = response;
      }
      ) ; 
  }

  onSaveClick():void {

      this.projectService.insertProject(this.newProject).subscribe((response) => {
          this.projects.push(this.newProject); 
      }, (error) => {

        console.log(error.errorText); 
      })
  }

}
