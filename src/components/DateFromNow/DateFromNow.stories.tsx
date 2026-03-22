import moment from 'moment';

import { DateFromNow as DateFromNowComponent } from './DateFromNow';

import type { StoryObj, Meta } from '@storybook/react';

export default {
  title: 'DateFromNow',
  component: DateFromNowComponent,
} as Meta<typeof DateFromNowComponent>;

type DateFromNowStory = StoryObj<typeof DateFromNowComponent>;

export const DateFromNow: DateFromNowStory = {
  args: {
    date: moment().format(),
  },
};
