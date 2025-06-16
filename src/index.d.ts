export type LinkInfo = {
  displayText: string;
  linkURL: string;
};

export type ActivityTypes =
  | 'coreskill'
  | 'lecture'
  | 'teambuilding'
  | 'misc'
  | 'project'
  | 'survey'
  | 'officehours'
  | 'codealong';

export type Activity = {
  name: string;
  time: string;
  duration: string;
  actType: ActivityTypes;
  links: LinkInfo[];
};

export type Day = {
  daynum: string;
  title: string;
  activities: Activity[];
};

export type Schedule = Day[];
