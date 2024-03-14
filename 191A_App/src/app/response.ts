export interface Response {
    id: number;
    responseId: number;
    username: string,
    content: string;
    likeButtonState: boolean;
    replies: Response[];
}
