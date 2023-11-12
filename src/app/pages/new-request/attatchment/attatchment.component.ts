import {Component, ElementRef, OnInit, SecurityContext, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {DomSanitizer} from "@angular/platform-browser";

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
  pdf: FormControl = new FormControl<any>('');
  picture!: FormControl;
  pictureCopy!: FormControl;
  personalImg!: FormControl;
  pictureNID!: FormControl;

  constructor(private formBuilder: FormBuilder, private sanitizer: DomSanitizer){}
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

  uploadFileEvtPrintCopy(imgFile: any): void {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      this.fileAttr += imgFile.target.files[0].name;
      const isPdf = imgFile.target.files[0].type?.includes('application/pdf');
      let reader = new FileReader();
      reader.onload = (e: any): void => {
        this.pictureCopy.setValue(this.sanitizer.bypassSecurityTrustResourceUrl(e.target.result));
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
      this.fileAttr += imgFile.target.files[0].name

      const isPdf = imgFile.target.files[0].type?.includes('application/pdf');

      let reader = new FileReader();
      reader.onload = (e: any): void => {
        this.personalImg.setValue(this.sanitizer.bypassSecurityTrustResourceUrl(e.target.result));
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

      const isPdf = imgFile.target.files[0].type?.includes('application/pdf');

      let reader = new FileReader();
      reader.onload = (e: any): void => {
        this.pdf.reset();
        this.picture.reset();
        isPdf ? this.pdf.setValue(e.target.result) : this.picture.setValue(e.target.result);
        this.pictureChanged = true;
      };
      isPdf ? reader.readAsArrayBuffer(imgFile.target.files[0]) : reader.readAsDataURL(imgFile.target.files[0]);
    } else {
      this.fileAttr = 'Choose File';
    }
  }

  uploadFileEvtPictureNID(imgFile: any): void {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      this.fileAttr += imgFile.target.files[0].name;

      const isPdf = imgFile.target.files[0].type?.includes('application/pdf');

      let reader = new FileReader();
      reader.onload = (e: any): void => {
        this.pictureNID.setValue(isPdf ? this.base64ToBlob(e.target.result): e.target.result);
        this.pictureChanged = true;
      };
      reader.readAsDataURL(imgFile.target.files[0]);
    } else {
      this.fileAttr = 'Choose File';
    }
  }

  base64ToBlob( base64: string, type = "application/pdf" ) {
    const data = base64.split(',');
    const binStr = atob(data[1]);
    const len = binStr.length;
    const arr = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      arr[ i ] = binStr.charCodeAt( i );
    }
    const blob = new Blob( [ arr ], { type: type } );
    const url = URL.createObjectURL( blob );
    return url
  }

  base64ToArrayBuffer(base64: string) {
    const data = base64.split(',');
    var binaryString = atob(data[1]);
    var bytes = new Uint8Array(binaryString.length);
    for (var i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }
}
