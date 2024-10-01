import { Component, OnInit } from '@angular/core';
import {StudentService} from "../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../model/student";
import Swal from "sweetalert2/dist/sweetalert2.js";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  student: Student[] = [];

  students: Student;

  constructor(private studentService: StudentService,
              private router: Router, private activatedRoute: ActivatedRoute) {
    this.studentService.getAll().subscribe(next => {
      this.student = next;
    })
    this.activatedRoute.paramMap.subscribe(next =>{
      const id = next.get('id');
      if(id != null){
        console.log(id);
        this.studentService.findById(parseInt(id)).subscribe(next => {
          this.students = next;
          Swal.fire({
            title: 'Are you sure want to remove?' + this.students.name,
            text: 'You will not be able to recover this product!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          }).then((result) => {
            if (result.value) {
              this.studentService.delete(parseInt(id)).subscribe(next =>{
                Swal.fire(
                  'Deleted!',
                  'Your imaginary file has been deleted.',
                  'success'
                )
                this.router.navigateByUrl('student');
              });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              Swal.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
              this.router.navigateByUrl('student');
            }
          })
        });


      }
    },error => {

    },()=>{

    });


  }


  ngOnInit(): void {
  }

}

