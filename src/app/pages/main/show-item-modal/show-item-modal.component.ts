import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Photo } from '../../../models/photo.model';
import { ItemModalComponent } from '../item-modal/item-modal.component';

@Component({
  selector: 'nrg-show-item-modal',
  templateUrl: './show-item-modal.component.html',
  styleUrls: ['./show-item-modal.component.scss']
})
export class ShowItemModalComponent {

  @Output() submitDelete = new EventEmitter<number>();
  @Output() submitData = new EventEmitter<Photo>();

  constructor(
    public dialogRef: MatDialogRef<ShowItemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Photo,
    private dialog: MatDialog
  ) { }

  delete(id: number) {
    this.submitDelete.emit(id);
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onEdit(item: Photo) {

    const dialogRef = this.dialog.open(ItemModalComponent, {
      width: '90%',
      maxWidth: '500px',
      data: item
    } as MatDialogConfig<Photo>);

    const dialogSubscription = dialogRef.componentInstance.submitData.subscribe((item: Photo) => {
      this.data = item;
      this.submitData.emit(item);
      dialogSubscription.unsubscribe();
    });
  }

}
