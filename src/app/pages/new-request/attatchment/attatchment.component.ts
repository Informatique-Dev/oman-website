import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-attatchment',
  templateUrl: './attatchment.component.html',
  styleUrls: ['./attatchment.component.scss']
})
export class AttatchmentComponent implements OnInit{
  @ViewChild('fileInput') inputElement!: ElementRef;
  @ViewChild('fileInputPrintCop') inputElementPrintCopy!: ElementRef;
  @ViewChild('fileInputPersonalImg') inputElementPersonalImg!: ElementRef;
  @ViewChild('fileInputNID') inputElementNID!: ElementRef;

  fileAttr: string = 'Choose File';
  pictureChanged: boolean = false;
  form!: FormGroup;
  picture!: FormControl;
  pictureCopy!: FormControl;
  personalImg!: FormControl;
  pictureNID!: FormControl;

  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      id: [''],
      picture: [''],
      pictureCopy: [''],
      personalImg: [''],
      pictureNID: [''],

    });

    this.picture = this.form.controls['picture']as FormControl;
    this.pictureCopy = this.form.controls['pictureCopy']as FormControl;
    this.personalImg = this.form.controls['personalImg']as FormControl;
    this.pictureNID = this.form.controls['pictureNID']as FormControl;

  }
  openFile(): void {
    this.inputElement.nativeElement.click();
  }

  openFilePrintCopy(): void {
    this.inputElementPrintCopy.nativeElement.click();
  }

  openFilePersonalImg(): void {
    this.inputElementPersonalImg.nativeElement.click();
  }

  openFilePictureNID(): void {
    this.inputElementNID.nativeElement.click();
  }


  removeImage(img: any) {
    img.value = '';
    this.picture.setValue('');
    this.pictureChanged = false;
  }

  uploadFileEvtPrintCopy(imgFile: any): void {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      this.fileAttr += imgFile.target.files[0].name;
      let reader = new FileReader();
      reader.onload = (e: any): void => {
        let image = new Image();
        image.src = e.target.result;
        this.pictureCopy.setValue(e.target.result);
        this.pictureChanged = true;
      };
      reader.readAsDataURL(imgFile.target.files[0]);
    } else {
      this.fileAttr = 'Choose File';
    }
  }

  uploadFileEvtPersonalImg(imgFile: any): void {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      this.fileAttr += imgFile.target.files[0].name;
      let reader = new FileReader();
      reader.onload = (e: any): void => {
        let image = new Image();
        image.src = e.target.result;
        this.personalImg.setValue(e.target.result);
        this.pictureChanged = true;
      };
      reader.readAsDataURL(imgFile.target.files[0]);
    } else {
      this.fileAttr = 'Choose File';
    }
  }

  uploadFileEvt(imgFile: any): void {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      this.fileAttr += imgFile.target.files[0].name;
      let reader = new FileReader();
      reader.onload = (e: any): void => {
        let image = new Image();
        image.src = e.target.result;
        this.picture.setValue(e.target.result);
        this.pictureChanged = true;
      };
      reader.readAsDataURL(imgFile.target.files[0]);
    } else {
      this.fileAttr = 'Choose File';
    }
  }

  uploadFileEvtPictureNID(imgFile: any): void {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      this.fileAttr += imgFile.target.files[0].name;
      let reader = new FileReader();
      reader.onload = (e: any): void => {
        let image = new Image();
        image.src = e.target.result;
        this.pictureNID.setValue(e.target.result);
        this.pictureChanged = true;
      };
      reader.readAsDataURL(imgFile.target.files[0]);
    } else {
      this.fileAttr = 'Choose File';
    }
  }
}
