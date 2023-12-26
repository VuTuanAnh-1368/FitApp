export type Category = {
  title: string;
  content: string[];
  contentNested: NestedItem[];
  type: string;
};

export type NestedItem = {
  title: string;
  content: string[];
};

export type Data = Category[];

const data: Data = [
  {
    title: 'What is ADHFIT',
    content: ['ADFIT is a personal heart rate measurement and sports activity tracking application. Its main function is to measure and monitor the user\'s heart rate while they perform physical activity.'],
    contentNested: [],
    type: 'regular',
  },
  {
    title: 'How to install and start using ADFIT?',
    content: ['Users can download and install ADFIT from their mobile app store. They can then create an account, connect to their heart rate monitor, and start recording their sports activities.'],
    contentNested: [],
    type: 'regular',
  },
  {
    title: 'Does ADFIT have a built-in distance and mileage measurement feature?',
    content: ['Yes, ADFIT has a feature that measures distance and distance traveled based on data from built-in sensors. Users can view total distance traveled and details about each activity.'],
    contentNested: [],
    type: 'regular',
  },
  {
    title: 'What languages ​​does ADFIT support?',
    content: [
      'Currently, ADFIT only supports 2 languages: English and Vietnamese. In the future, we will develop a variety of languages.',
    ],
    contentNested: [],
    type: 'regular',
  },
  {
    title: 'Personal question',
    content: [
      'Question about individual rights in ADHFIT',
    ],
    contentNested: [
      {
        title: 'How to view, track personal progress in ADFIT?',
        content: ['Users can view and track their personal progress through an intuitive user interface within the app.'],
      },
      {
        title: 'Does ADHFIT secure data?',
        content: ['Yes, you can safely delete ADFIT without worrying about data theft. ADHFIT is committed to using your data in accordance with the law and professional ethics.'],
      },
    ],
    type: 'nested',
  },
];

export default data;