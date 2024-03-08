import { Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonButton, PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
// post interface, routing comments
import { Post } from '../post';

@Component({
  selector: 'app-Forum',
  templateUrl: 'Forum.page.html',
  styleUrls: ['Forum.page.scss']
})
export class ForumPage {
  @ViewChild('dynamicContentContainer', { read: ElementRef, static: true })
 
  dynamicContentContainer!: ElementRef;

  posts: Post[] = [];

  postCount: number = 0;
  newSubject: string ='';
  newContent: string ='';

  isToastOpen = false;

  zoomFactor = 1;

  constructor(private router: Router, 
    private modalController: ModalController,
    private renderer: Renderer2,
    private alertController: AlertController
    ){
    }
  
    // initial page set-up
  ngOnInit() {
    if (!this.postCount) {
      // Initialize postCount if it hasn't been already
      this.loadPostCount();
    }
    // Only load posts
    this.loadPosts();
  }

// increaseFontSize() {
//   const elements = document.querySelectorAll('.resizeable');
//   (elements: any) => {
//     elements.forEach((element: HTMLElement) => {
//     let currentFontSize = parseFloat(window.getComputedStyle(elements).fontSize);
//     this.renderer.setStyle(elements, 'font-size', (currentFontSize + 10) + 'px');
//   });
// }
// }

zoomIn() {
  this.zoomFactor += 0.1; // Increase zoom factor by 0.1
  document.documentElement.style.setProperty('--zoom-factor', this.zoomFactor.toString()); // Update zoom factor in CSS
}

// Method to decrease font size
zoomOut() {
  this.zoomFactor -= 0.1; // Decrease zoom factor by 0.1
  document.documentElement.style.setProperty('--zoom-factor', this.zoomFactor.toString()); // Update zoom factor in CSS
}

// Load postCount from local storage method
loadPostCount() {
  const storedPostCount = localStorage.getItem('postCount');
  if (storedPostCount !== null) {
    this.postCount = +storedPostCount; // Convert to number
  }
  else {
    this.postCount = 0;
  } 
}

  // loads posts from local storage
  loadPosts() {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
      this.posts = JSON.parse(savedPosts);
    }
  }

  // for cancel button to close modal
  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  // Increment postCount method
incrementPostCount() {
  this.postCount++;
  localStorage.setItem('postCount', this.postCount.toString());
}

  // adds post to list of posts
  submitPost(newSubject: string, newContent: string) {
    // Check if subject and comment are not empty before adding to posts array
    if (newSubject.trim() !== '' && newContent.trim() !== '') {
      this.incrementPostCount();
      // Add the new post to the array
      const newPost: Post = {
      id: this.postCount,
      subject: newSubject,
      content: newContent,
      responses: [], // Initialize comments as an empty array
      likeButtonState: false
      };
      this.posts.unshift(newPost);
      // save post to local storage
      this.savePosts();
      // Clear the input fields
      this.newSubject = '';
      this.newContent = '';

      // Dismiss the modal
      this.modalController.dismiss(null, 'cancel');

      // opens post submission toast
      this.openToast();
    }
    else{
      // alert
      this.presentAlert();
    }
  }

  // saves added post to local storage
  savePosts() {
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  openToast() {
    this.isToastOpen = true;
  }

  removePostFromLocalStorage(postIdToRemove: number) {
    this.removePostResponses(postIdToRemove);
    this.removePost(postIdToRemove);
  }

  removePost(postIdToRemove: number) {
    const postsString = localStorage.getItem('posts');
    if (postsString !== null) {
      const posts = JSON.parse(postsString);
      // Find the index of the post with the given ID
      const index = posts.findIndex((post: Post) => post.id === postIdToRemove);
      if (index !== -1) {
        // Remove the post from the posts array
        posts.splice(index, 1);
        
        // Update the posts in local storage
        localStorage.setItem('posts', JSON.stringify(posts));
        // Update this.posts with the new posts array
        this.posts = posts;
      }
    }
  }

  removePostResponses(postIdToRemove:number) {
    const key = `responses_${postIdToRemove}`;
    // Retrieve responses from local storage
    const responsesString = localStorage.getItem(key);
  
    if (responsesString !== null) {
      // Parse the responses string to an array
      const responses: Response[] = [];
      // Update the responses in local storage
      localStorage.setItem(key, JSON.stringify(responses));
    }
  }
  
  // like button colorchange
  // changeColor() {
  //   this.isClicked = !this.isClicked;

  toggleButtonState(post:Post) {
    post.likeButtonState = !post.likeButtonState;
    this.savePosts();
  }

  // alert for empty input fields
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Missing subject and/or text.',
      subHeader: '',
      message: '',
      buttons: ['Try again'],
    });

    await alert.present();
  }
}