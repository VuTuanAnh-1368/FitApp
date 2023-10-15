import {AnimationObject} from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../../../assets/animations/aboutus.json'),
    text: 'Hello, we are here to help you become healthier every day',
    textColor: '#005b4f',
    backgroundColor: '#ffa3ce',
  },
  {
    id: 2,
    animation: require('../../../assets/animations/checkingplan.json'),
    text: 'Set up your plan',
    textColor: '#1e2169',
    backgroundColor: '#bae4fd',
  },
  {
    id: 3,
    animation: require('../../../assets/animations/running.json'),
    text: 'Practice every day',
    textColor: '#F15937',
    backgroundColor: '#47f86e',
  },
  {
    id: 4,
    animation: require('../../../assets/animations/xedap'),
    text: 'Relax with a healthy body',
    textColor: '#F15937',
    backgroundColor: '#faeb8a',
  },
];

export default data;