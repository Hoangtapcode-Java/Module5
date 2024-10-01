import {Component, OnInit} from '@angular/core';
import {StudentService} from "../service/student.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../model/student";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  student: Student;

  reactiveForm : FormGroup;

  constructor(private studentService: StudentService,
              private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      this.studentService.findById(parseInt(id)).subscribe(next => {
        this.student = next;
        this.reactiveForm = new FormGroup({
          id: new FormControl(this.student.id, [Validators.required]),
          name: new FormControl(this.student.name,[Validators.required]),
          nameGroup: new FormControl(this.student.nameGroup,[Validators.required]),
          nameSubject: new FormControl(this.student.nameSubject,[Validators.required]),
          email: new FormControl(this.student.email,[Validators.required,Validators.pattern("^[a-zA-Z0-9]+@gmail.com$")]),
          phoneNumber: new FormControl(this.student.phoneNumber,[Validators.required,Validators.pattern("^([\\d]{10}|[\\d]{11}|[\\d]{12})")]),
          teacher: new FormControl(this.student.teacher,[Validators.required]),
        })
      })
    })
  }

  ngOnInit(): void {
  }

  update() {
    if(this.reactiveForm.valid){
      this.studentService.update(this.reactiveForm.value, this.reactiveForm.value.id).subscribe(next => {
        this.router.navigateByUrl("student");
      })
    }
  }
}
