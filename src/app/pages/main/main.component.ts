import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReplaySubject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppService } from '../../services/app.service';
import { ShowItemModalComponent } from './show-item-modal/show-item-modal.component';
import { ItemModalComponent } from './item-modal/item-modal.component';
import { Photo } from '../../models/photo.model';
import { Store, select } from '@ngrx/store';
import { add, load, remove, update } from '../../stores/items/item.actions';
import { selectList } from '../../stores/items/item.selector';

@Component({
  selector: 'nrg-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  isMobile: boolean;
  items: Observable<Photo[]> = this.store.pipe(select(selectList));

  constructor(
    private app: AppService,
    private dialog: MatDialog,
    private store: Store<{ items: Photo[] }>
  ) {
    this.app.isMobile
      .pipe(takeUntil(this.destroyed$))
      .subscribe(isMobile => this.isMobile = isMobile);
  }

  ngOnInit(): void {
    this.store.dispatch(load());
  }

  showItemModal(photo: Photo) {

    const dialogRef = this.dialog.open(ShowItemModalComponent, {
      width: '90%',
      maxWidth: '600px',
      data: photo
    } as MatDialogConfig<Photo>);

    const dialogSubscriptionDelete = dialogRef.componentInstance.submitDelete.subscribe((id: number) => {
      if(id) {
        this.deletePhoto(id);
      }
      dialogSubscriptionDelete.unsubscribe();
    });

    const dialogEditSubscription = dialogRef.componentInstance.submitData.subscribe((item: Photo) => {
      if(item) {
        this.editPhoto(item);
      }
      dialogEditSubscription.unsubscribe();
    });

  }

  itemModal() {

    const dialogRef = this.dialog.open(ItemModalComponent, {
      width: '90%',
      maxWidth: '600px',
      data: {}
    } as MatDialogConfig<Photo>);

    const dialogSubscription = dialogRef.componentInstance.submitData.subscribe((item: Photo) => {
      this.addPhoto(item);
      dialogSubscription.unsubscribe();
    });

  }

  addPhoto(item: Photo) {
    this.store.dispatch(add({item: item}));
  }

  editPhoto(item: Photo) {
    this.store.dispatch(update({item: item}));
  }

  deletePhoto(id: number) {
    this.store.dispatch(remove({id: id}));
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
