import {User} from '../models/User'
import {Sponsor} from '../models/Sponsor'
import {DateEvent} from '../models/DateEvent'
import {SubmissionDetail} from '../models/SubmissionDetail'

export class EventModel {
  id: number;
  title: String;
  acronym: String;
  description: String;
  venue: String;
  subtitle: String;
  published_at: String;
  created_at: String;
  updated_at: String;
  descriptionfile: String;
  banner: String;
  logo: String;
  organizers: User[];
  sponsors: Sponsor[];
  committees: User[];
  dates: DateEvent[];
  submission_detail: SubmissionDetail = new SubmissionDetail();

  constructor(){
    this.title = "";
    this.acronym = "";
    this.description = "";
    this.venue = "";
    this.subtitle = "";
    this.published_at = "";
    this.created_at = "";
    this.updated_at = "";
    this.descriptionfile = "";
    this.banner = "";
    this.logo = "";

    this.organizers = [];
    this.sponsors = [];
    this.committees = [];
    this.dates = [];
  }
}
