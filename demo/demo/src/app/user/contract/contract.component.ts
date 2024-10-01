import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/Contract';
import {ContractService} from '../../furama-service/contract.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract[] = [];

  constructor(private contractService: ContractService, private activatedRoute: ActivatedRoute, private route: Router) {
    this.contractService.getAllContract().subscribe(next =>{
      this.contracts = next;
    });
    this.activatedRoute.paramMap.subscribe(next =>{
      const id = next.get('id');
      this.contractService.delete(parseInt(id)).subscribe(next => {
        this.route.navigateByUrl('contract-list');
      });
    });
  }

  ngOnInit(): void {
  }

}
