import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { PostService } from './../service/post.service';
import { PostModel } from './../model/Post';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formValue!: FormGroup;
  documentModelObj: PostModel = new PostModel();
  documentData!: any;
  showAdd!: boolean;
  showUpdate!: boolean;
  inputName = ""; //Change to Upper Case
  textareaDocument = ""; //Change to Upper Case

  constructor(private postModel: PostService, private formBuilder: FormBuilder) { }

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
      location.assign('/cadastro')
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
      location.assign('/cadastro')
    })
  }

  editDocument(list: any) {
    this.showAdd = false; //Hide Adicionar button
    this.showUpdate = true; //Show update Button
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
      location.assign('/cadastro');
    })
  }
}
