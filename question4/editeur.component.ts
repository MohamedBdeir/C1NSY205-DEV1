import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editeur',
  templateUrl: './editeur.component.html',
  styleUrls: ['./editeur.component.css']
})
export class EditeurComponent implements OnInit {
 
  value:string = "hello world"
  constructor() { }

  ngOnInit(): void {
  }

}
