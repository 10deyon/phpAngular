import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.css']
})
export class ComicDetailsComponent implements OnInit {

  public departmentID;

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentID = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentID = id;
    });
  }
  
  goPrevious(){
    let previousID = this.departmentID - 1;
    this.router.navigate(['/comics', previousID]);
  }

  goNext(){
    let nextID = this.departmentID + 1;
    this.router.navigate(['/comics', nextID]);
  }

  gotoDepartment(){
    let selectedID = this.departmentID ? this.departmentID:null;
    this.router.navigate(['/comics', {id: selectedID}]);
  }
}
