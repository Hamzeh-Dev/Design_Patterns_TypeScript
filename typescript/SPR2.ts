
class Post {
    title: string;
    content: string;

    constructor(title: string, content: string){
        this.title = title;
        this.content = content;
    }

    createPost() {
        // Block of Code
    }

    updatePost() {
        // Block of Code
    }

    deletePost() {
        // Block of Code
    }

    // This Violate the SRP Principle
    // display() {
    //     return `<h1>${this.title}</h1> <p>${this.content}</p>`
    // }
}

class PostDisplay {
    constructor(public post: Post) {}

    display() {
        return `<h1>${this.post.title}</h1> <p>${this.post.content}</p>`
    }
}