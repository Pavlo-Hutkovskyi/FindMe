import {HelpType} from "./HelpType";

export interface IUserAdvert {
  id?: string,
  description: string,
  publicationDate: string,
  isAdvertAboutNeed: boolean,
  isUrgent: boolean,
  isMatched: boolean,
  userId: string,
  helpType: HelpType
}
