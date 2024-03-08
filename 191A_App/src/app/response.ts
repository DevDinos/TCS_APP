export interface Response {
    id: number;
    postId: number;
    username: string,
    content: string;
    likeButtonState: boolean;
    responses: Response[];
}
