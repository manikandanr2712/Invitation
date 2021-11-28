import { Component } from '@angular/core';

declare var anime: any;             
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QR';
  ngAfterViewInit(): void {
    // Wrap every letter in a span
const textWrapper:any = document.querySelector('.an-1');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '.an-1 .letter',
  scale: [4,1],
  opacity: [0,1],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 950,
  delay: (el:any, i:any) => 70*i
}).add({
  targets: '.an-1',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});


}
}

