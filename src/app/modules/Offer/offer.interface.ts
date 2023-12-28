 export interface IOffer extends Document {
  offer_type: string;
  offer_date: string;
  video_link: string;
  description: string;
  // You can add more fields as needed
}