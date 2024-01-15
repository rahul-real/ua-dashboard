import { AfterViewInit, Component, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Your client-side code that uses the document object
      const track = document.getElementById("image-track") as HTMLElement & { dataset: any };
      const handleOnDown = (e: MouseEvent | TouchEvent) => {
        const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
        track.dataset.mouseDownAt = clientX.toString();
      };

      const handleOnUp = () => {
        track.dataset.mouseDownAt = "0";
        track.dataset.prevPercentage = track.dataset.percentage;
      };

      const handleOnMove = (e: MouseEvent | TouchEvent) => {
        if (track.dataset.mouseDownAt === "0") return;

        const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
        const mouseDelta = parseFloat(track.dataset.mouseDownAt) - clientX;
        const maxDelta = window.innerWidth / 2;

        const percentage = (mouseDelta / maxDelta) * -100;
        const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        track.dataset.percentage = nextPercentage;

        (track as HTMLElement).animate(
          [
            {
              transform: `translate(${nextPercentage}%, -50%)`
            }
          ],
          { duration: 1200, fill: "forwards" }
        );

        const imageArray = Array.from(track.getElementsByClassName("image") as HTMLCollectionOf<HTMLElement>);

        for (const image of imageArray) {
          image.animate(
            [
              {
                objectPosition: `${100 + nextPercentage}% center`
              }
            ],
            { duration: 1200, fill: "forwards" }
          );
        }
      };

      /* -- Had to add extra lines for touch events -- */

      window.onmousedown = e => handleOnDown(e);

      window.ontouchstart = e => handleOnDown(e);

      window.onmouseup = () => handleOnUp();

      window.ontouchend = () => handleOnUp();

      window.onmousemove = e => handleOnMove(e);

      window.ontouchmove = e => handleOnMove(e);
    }
  }
}
