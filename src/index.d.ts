declare global {
  type LinkInfo = {
    displayText: string;
    linkURL: string;
  };
  type ActivityTypes =
    | 'coreskill'
    | 'lecture'
    | 'teambuilding'
    | 'misc'
    | 'project'
    | 'survey'
    | 'officehours'
    | 'codealong';
  type Activity = {
    name: string;
    time: string;
    duration: string;
    actType: ActivityTypes;
    links: LinkInfo[];
  };
  type Day = {
    daynum: string;
    title: string;
    activities: Activity[];
  };
  type Schedule = Day[];
}

export {};
