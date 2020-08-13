import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dc-comics',
  templateUrl: './dc-comics.component.html',
  styleUrls: ['./dc-comics.component.css']
})
export class DcComicsComponent implements OnInit {

  public selectedID;
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]


  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedID = id;
    });
  }

  onSelect(department){
    this.router.navigate(['/comics', department.id]);
  }

  //this function activates a selected link
  isSelected(department){
    return department.id === this.selectedID;
  }

}
