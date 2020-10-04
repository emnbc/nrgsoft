import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Photo } from '../../../models/photo.model';

@Component({
  selector: 'nrg-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss']
})
export class ItemModalComponent implements OnInit {

  @Output() submitData = new EventEmitter<Photo>();
  itemFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Photo
  ) { }

  ngOnInit(): void {
    this.itemFormGroup = this.formBuilder.group({
      id: [{value: null, disabled: true}],
      albumId: [null, [Validators.required, Validators.min(1)]],
      title: [null, [Validators.required, Validators.minLength(3)]],
      url: [null, [Validators.required, Validators.minLength(3)]],
      thumbnailUrl: [null, [Validators.required, Validators.minLength(3)]]
    });
    if(this.data && this.data.id) {
      this.itemFormGroup.setValue(this.data);
    }
  }

  submitForm() {
    if(this.itemFormGroup.valid) {
      this.submitData.emit({...this.itemFormGroup.value, id: this.data.id});
      this.dialogRef.close();
    } else {
      this.itemFormGroup.markAllAsTouched();
    }
  }

}
