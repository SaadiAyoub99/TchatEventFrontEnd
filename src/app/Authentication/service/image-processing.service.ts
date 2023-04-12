import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Event } from '../models/event';
import { FileHandle } from '../models/FileHandle';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingService {
 
  constructor( private sanitizer: DomSanitizer ) { }

  public createImages(event: Event){
    const eventImage: any[] = event.eventImage;

    const imageToFileHandle: FileHandle[] = [];

    for (let i = 0; i < eventImage.length; i++){
      const imageFileData =  eventImage[i];

      const imageBlob =  this.dataURItoBlob( imageFileData.picByte, imageFileData.type);

      const imageFile =  new File([imageBlob], imageFileData.name ,{ type: imageFileData.type });

      const finalFileHandle :FileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      imageToFileHandle.push(finalFileHandle);
    }
     event.eventImage = imageToFileHandle;
     return event;

  }

  public dataURItoBlob(picBytes: any, imageType: any){
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for(let i = 0; i < byteString.length; i++){
      int8Array[i] = byteString.charCodeAt(i);
    }

    const blob =  new Blob([int8Array], { type: imageType});
    return blob;
  }


}
