import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { DSAComponent } from '../dsa/dsa.component';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent implements AfterViewInit {
 @ViewChild('imgRef') imgRef!: ElementRef;
  private mouseDownAt: number = 0;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
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

      window.onmousedown = e => handleOnDown(e);
      window.ontouchstart = e => handleOnDown(e);
      window.onmouseup = () => handleOnUp();
      window.ontouchend = () => handleOnUp();
      window.onmousemove = e => handleOnMove(e);
      window.ontouchmove = e => handleOnMove(e);
    }
  }

  handleImageClick(route: string): void {
    console.log('Navigating to:', route);
    this.router.navigate([route]);
  }
}

