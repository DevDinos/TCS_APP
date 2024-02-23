import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post';
import { Response } from 'src/app/response';
import { PostModalComponent } from 'src/app/post-modal/post-modal.component';

@Component({
  selector: 'app-responses',
  templateUrl: './responses.page.html',
  styleUrls: ['./responses.page.scss'],
})
export class ResponsesPage implements OnInit {
  postId!: number;
  post!: Post;

  responses: Response[] = [];

  responseCount: number = 0;
  newUsername: string ='';
  newContent: string = '';
  constructor(private route: ActivatedRoute, private alertController: AlertController) { 
  }

  // initial page set-up
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const postIdParam = params.get('postId');
      if (postIdParam !== null) {
        this.postId = +postIdParam;
        this.loadPostAndResponsesFromLocalStorage(this.postId);
      } else {
        // Handle the case where postIdParam is null
      }
    });
  }

  // loads post and responses already from the post
  loadPostAndResponsesFromLocalStorage(postId: number) {
    // Retrieve posts from Local Storage
    const postsString = localStorage.getItem('posts');
    if (postsString !== null) {
      const posts = JSON.parse(postsString);
      // Find the post with the given ID
      this.post = posts.find((post:Post) => post.id === postId);
      // how do i load the comments?
      const responsesString = localStorage.getItem(`responses_${this.postId}`);
      if(responsesString !== null) {
        this.responses = JSON.parse(responsesString);
        this.responseCount = this.responses.length;
      }
    } else {
      // Handle the case where 'posts' key is not found in Local Storage
      this.responses = [];
    }
  }
  
    // Increment postCount method
  incrementResponseCount() {
    this.responseCount++;
    localStorage.setItem('responseCount', this.responseCount.toString());
  }

  // adds response to the list of the post
  submitResponse(newUsername:string, newResponse:string) {
    // Check if subject and comment are not empty before adding to posts array
    if (newUsername.trim() !== '' && newResponse.trim() !== '') {
      this.incrementResponseCount();
      // Add the new post to the array
      const newResponse: Response = {
        id: this.responseCount,
        postId: 0,
        username: this.newUsername,
        content: this.newContent,
        likeButtonState: false
        };
      this.responses.push(newResponse);
      this.saveResponses();
      // Clear the input fields
      this.newUsername = '';
      this.newContent = '';
    }
    else{
      // alert
      this.presentAlert();
    }
  }

  // saves added response to local storage
  saveResponses() {
    const key = `responses_${this.postId}`;
    localStorage.setItem(key, JSON.stringify(this.responses));
  }

  removeResponseFromLocalStorage(postId: number, responseId: number) {
    const key = `responses_${postId}`;
    
    // Retrieve responses from local storage
    const responsesString = localStorage.getItem(key);
  
    if (responsesString !== null) {
      // Parse the responses string to an array
      const responses: Response[] = JSON.parse(responsesString);
  
      // Find the index of the response with the given ID
      const index = responses.findIndex(response => response.id === responseId);
  
      if (index !== -1) {
        // Remove the response from the responses array
        responses.splice(index, 1);
  
        // Update the responses in local storage
        localStorage.setItem(key, JSON.stringify(responses));
        this.responses = this.responses.filter(response => response.id !== responseId);
      }
    }
  }

  // alert for empty input fields
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Missing username and/or comment.',
      subHeader: '',
      message: '',
      buttons: ['Try again'],
    });

    await alert.present();
  }

  toggleButtonState(response:Response) {
    response.likeButtonState = !response.likeButtonState;
    this.saveResponses();
  }

  // opens a field for replying
  openReply() {
    // not sure if i want to implement bc it requires another layer of responses
    // can the response interface have its own responses[]
  }

}
