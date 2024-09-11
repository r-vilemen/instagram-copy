import { v4 as randomUUID } from "uuid";
import { faker } from "@faker-js/faker/locale/pt_BR";

class Post {
  private _id: string;
  private _userName: string;
  private _avatarUrl: string;
  private _imageUrl: string;
  private _description: string;
  private _isLiked: boolean = false;
  private _numLikes: number;
  private _comments: string[] = [];
  private _createdAt: Date = new Date();
  private _updatedAt: Date = new Date();

  constructor(
    userName: string,
    avatarUrl: string,
    imageUrl: string,
    description: string
  ) {
    this._id = randomUUID();
    this._userName = userName;
    this._avatarUrl = avatarUrl;
    this._imageUrl = imageUrl;
    this._description = description;
    this._numLikes = 0;
  }

  like() {
    this._isLiked = !this._isLiked;
    this._numLikes = this._isLiked ? this._numLikes + 1 : this._numLikes - 1;
  }

  get postInfo() {
    return {
      id: this._id,
      userName: this._userName,
      avatarUrl: this._avatarUrl,
      imageUrl: this._imageUrl,
      description: this._description,
      isLiked: this._isLiked,
      numLikes: this._numLikes,
      comments: this._comments,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
    };
  }

  render() {
    const postElement = document.createElement("div");
    postElement.className = "post-container";
    postElement.innerHTML = `
      <div class="post-header">
        <div class="left">
          <div>
            <img src="${this._avatarUrl}" alt="${this._userName}" />
          </div>
          <span>${this._userName}</span>
        </div>
        <div class="right">follow ...</div>
      </div>

      <div class="post-image">
        <img title="Post image" src="${this._imageUrl}" />
      </div>

      <div class="post-icons">
        <div class="btn btn-like" data-post-id="${this._id}">
          <i class="fa fa-heart-o"></i>
        </div>
        <div class="btn">
          <i class="fa fa-comment-o"></i>
        </div>
        <div class="btn">
          <i class="fa fa-paper-plane-o"></i>
        </div>
      </div>

      <div class="post-likes">${this._numLikes} curtida${
      this._numLikes !== 1 ? "s" : ""
    }</div>
      <div class="post-description">${this._description}</div>
    `;
    const postsContainer = document.getElementById("posts-container");

    if (postsContainer) {
      postsContainer.appendChild(postElement);

      const likeButton = postElement.querySelector(".btn-like") as HTMLElement;
      likeButton.addEventListener("click", () => {
        this.like();

        const icon = likeButton.querySelector("i") as HTMLElement;
        const likesCount = postElement.querySelector(
          ".post-likes"
        ) as HTMLElement;
        likesCount.textContent = `${this._numLikes} curtida${
          this._numLikes !== 1 ? "s" : ""
        }`;

        icon.classList.toggle("fa-heart");
        icon.classList.toggle("fa-heart-o");
        likeButton.classList.toggle("liked");

        // Adiciona a animação de pulso
        icon.classList.add("pulse");
        setTimeout(() => {
          icon.classList.remove("pulse");
        }, 300);
      });
    }
  }
}

const posts: Post[] = [];

for (let index = 0; index < 15; index++) {
  const post = new Post(
    faker.person.firstName(),
    faker.image.avatarGitHub(),
    faker.image.urlPicsumPhotos(),
    faker.lorem.paragraph()
  );
  posts.push(post);
  post.render();
}
