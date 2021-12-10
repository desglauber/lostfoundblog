import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  formValue!: FormGroup;
  documentData!: any;

  constructor(private formBuilder: FormBuilder, private postModel: PostService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      nome: [''],
      documento: [''],
      local: ['']
    })
    this.getDocuments();
  }

  getDocuments(){
    this.postModel.getDocument()
    .subscribe(res => {
      this.documentData = res;
    })
  }
}
