'use client';

import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import { Group, Menu, UnstyledButton, Text } from '@mantine/core';
import classes from './LanguagePicker.module.css';

const data = [
  { label: 'English', emoji: '🇺🇸' },
  { label: 'German', emoji: '🇩🇪' },
  { label: 'Italian', emoji: '🇮🇹' },
  { label: 'French', emoji: '🇫🇷' },
  { label: 'Polish', emoji: '🇵🇱' },
];

export function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      leftSection={<Text size="md" style={{ fontSize: '18px' }}>{item.emoji}</Text>}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={classes.control} data-expanded={opened || undefined}>
          <Group gap="xs">
            <Text size="lg" style={{ fontSize: '22px' }}>{selected.emoji}</Text>
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}