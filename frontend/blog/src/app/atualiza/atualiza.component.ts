import { PostService } from './../service/post.service';
import { PostModel } from './../atualiza/atualiza.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-atualiza',
  templateUrl: './atualiza.component.html',
  styleUrls: ['./atualiza.component.css']
})
export class AtualizaComponent implements OnInit {

  formValue!: FormGroup;
  documentModelObj: PostModel = new PostModel();
  documentData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private formBuilder: FormBuilder, private postModel: PostService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      nome: [''],
      documento: [''],
      local: ['']
    })
    this.getDocuments();
  }

  clickAddDocument(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postDocumentDetails(){
    this.documentModelObj.nome = this.formValue.value.nome;
    this.documentModelObj.documento = this.formValue.value.documento;
    this.documentModelObj.local = this.formValue.value.local;

    this.postModel.postDocument(this.documentModelObj)
    .subscribe(res => {
      console.log(res);
      let id = res.id;
      alert('Documento Nº: ' + id + ' cadastrado com sucesso!')
      location.assign('/atualiza')
    },
    err => {
      alert("Ocorreu um erro")
    })
  }

  getDocuments(){
    this.postModel.getDocument()
    .subscribe(res => {
      this.documentData = res;
    })
  }

  deleteDocument(list: any){
    this.postModel.delDocument(list.id)
    .subscribe(res => {
      alert('Registro Nº: '+ list.id + ' excluído com sucesso!')
      location.assign('/atualiza')
    })
  }

  editDocument(list: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.documentModelObj.id = list.id;
    this.formValue.controls['nome'].setValue(list.nome);
    this.formValue.controls['documento'].setValue(list.documento);
    this.formValue.controls['local'].setValue(list.local);
  }

  updateDocumentDetails(){
    this.documentModelObj.nome = this.formValue.value.nome;
    this.documentModelObj.documento = this.formValue.value.documento;
    this.documentModelObj.local = this.formValue.value.local;

    this.postModel.updateDocument(this.documentModelObj, this.documentModelObj.id)
    .subscribe(res => {
      alert('Registro Nº: '+ this.documentModelObj.id + ' atualizado com sucesso!');
      location.assign('/atualiza');
    })
  }
}
