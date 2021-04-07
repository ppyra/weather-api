import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog',
  template: `<h1 mat-dialog-title>Api do not response</h1>
  <div mat-dialog-content>Please try again download data. Message: {{ data.error}}</div>
  <div mat-dialog-actions class="actions">
    <button mat-raised-button mat-dialog-close color="accent">Cancel</button>
  </div>`,
  styles: [
    `.actions {
      display:flex;
      justify-content: flex-end;
    }`
  ]
})
export class WeatherDialog {
  constructor(
    public dialogRef: MatDialogRef<WeatherDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
