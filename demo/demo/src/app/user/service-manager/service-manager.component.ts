import {Component, OnInit} from '@angular/core';
import {Service} from '../../model/Service';
import {ServiceManagerService} from '../../furama-service/service-manager.service';
import {ActivatedRoute, Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-service-manager',
  templateUrl: './service-manager.component.html',
  styleUrls: ['./service-manager.component.css']
})
export class ServiceManagerComponent implements OnInit {
  services: Service[] = [];
  searchs: FormGroup;


  constructor(private serviceManagerService: ServiceManagerService, 
    private activatedRoute: ActivatedRoute, 
    private route: Router) {
    this.serviceManagerService.getAllService().subscribe(next => {
      this.services = next;
    });
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      this.serviceManagerService.delete(parseInt(id)).subscribe(next => {
        this.route.navigateByUrl('service-manager');
      });
    });
    this.searchs = new FormGroup({
      nameService: new FormControl()
    })
  }

  ngOnInit(): void {
    this.getWithName('')
  }

  getWithName(nameService) {
    this.serviceManagerService.getWithName(nameService).subscribe(data => {
      this.services = data;
    });
  }

  searchForm() {
    this.getWithName(this.searchs.value.nameService);
  }

  reset() {
    this.searchs.reset();
    this.ngOnInit();
  }

}
