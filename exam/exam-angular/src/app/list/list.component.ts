import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {StudentService} from '../service/student.service';
import {TeacherService} from '../service/teacher.service';
import {Student} from '../model/student';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
}

// tslint:disable-next-line:label-position
student : Student[] = [];
// tslint:disable-next-line:label-position
teacher : Teacher[] = [];

constructor(private studentService : StudentService, private teacherService : TeacherService,
              private router : Router, private activatedRoute : ActivatedRoute); {
    this.studentService.getAll().subscribe( next => {
      this.student = next;
      this.teacherService.getAll().subscribe(next => {
        this.teacher = next;
      });
    });
    // this.activatedRoute.paramMap.subscribe(next => {
    //   const id = next.get('id');
    //   if (id != null) {
    //     console.log(id);
    //     this.customerService.findById(parseInt(id)).subscribe(next => {
    //       this.custom = next;
    //       Swal.fire({
    //         title: 'Are you sure want to remove?' + this.custom.name,
    //         text: 'You will not be able to recover this product!',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonText: 'Yes, delete it!',
    //         cancelButtonText: 'No, keep it'
    //       }).then((result) => {
    //         if (result.value) {
    //           this.customerService.delete(parseInt(id)).subscribe(next => {
    //             Swal.fire(
    //               'Deleted!',
    //               'Your imaginary file has been deleted.',
    //               'success'
    //             );
    //             this.router.navigateByUrl('customer');
    //           });
    //         } else if (result.dismiss === Swal.DismissReason.cancel) {
    //           Swal.fire(
    //             'Cancelled',
    //             'Your imaginary file is safe :)',
    //             'error'
    //           );
    //           this.router.navigateByUrl('customer');
    //         }
    //       });
    //     });

      }

ngOnInit(); : void {
  };

}
