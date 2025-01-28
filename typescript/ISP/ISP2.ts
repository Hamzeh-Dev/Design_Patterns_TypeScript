
interface Post {
    title: string;
    content: string;
}

interface Comment {
    title: string;
    content: string;
}

interface PostCreator {
    createPost(post: Post): void;
}

interface CommentCreator {
    createComment(comment: Comment): void;
}

interface PostSharer {
    sharePost(post: Post): void;
}

class Admin implements PostCreator, CommentCreator, PostSharer {
    createPost(post: Post): void {
        console.log("Admin is Creating Post");
    }
    createComment(comment: Comment): void {
        console.log("Admin is Creating Comment");
    }
    sharePost(post: Post): void {
        console.log("Admin is Sharing a Post");
    }
}

class RegularUser implements CommentCreator, PostSharer {
    createComment(comment: Comment): void {
        console.log("Regular User is Creating Comment");
    }
    sharePost(post: Post): void {
        console.log("Regular User is Sharing a Post");
    }
}