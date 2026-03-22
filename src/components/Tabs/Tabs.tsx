import * as RadioGroup from '@radix-ui/react-radio-group';
import clsx from 'clsx';

import utility from '../../scss/utility.module.scss';

import scss from './Tabs.module.scss';

import type { ReactNode } from 'react';

export type TabItem<T = string> = {
  id: T;
  label: ReactNode;
};

export interface TabsProps<T extends string = string> extends RadioGroup.RadioGroupProps {
  /**
   * Tabs items
   */
  items: TabItem<T>[];
  /**
   * Callback on tab change
   */
  onValueChange: (value: T) => void;
  /**
   * Tabs size
   * @default 'small'
   */
  size?: 'small' | 'medium';
}

export const Tabs = <T extends string>({ items, className, onValueChange, size = 'small', ...props }: TabsProps<T>) => (
  <RadioGroup.Root
    defaultChecked
    defaultValue={items[0]?.id}
    onValueChange={onValueChange}
    loop={false}
    className={clsx(scss.tabsRoot, scss[size], className)}
    {...props}
  >
    {items.map((item) => (
      <RadioGroup.Item
        data-element="tab-element"
        key={item.id}
        className={clsx(utility.buttonReset, scss.tabsItem, scss[size])}
        value={item.id}
      >
        {item.label}
      </RadioGroup.Item>
    ))}
  </RadioGroup.Root>
);
