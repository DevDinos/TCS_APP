import { IonButton } from "@ionic/angular";
import { Response } from "./response";

export interface Post {
    id: number;
    subject: string;
    content: string;
    responses: Response[];
    likeButtonState: boolean;
}
//hello