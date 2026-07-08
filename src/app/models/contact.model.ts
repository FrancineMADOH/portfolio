export interface ContactDto {
  email: string;
  message: string;
}

export interface ContactResponse {
  message: string; // ex: "Message envoyé" (adapter à ta réponse API si besoin)
}
