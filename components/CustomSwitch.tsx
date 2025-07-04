"use client";

import { Group, Switch } from '@mantine/core';
import classes from './CustomSwitch.module.css';

export function CustomSwitch() {
  return (
    <Group justify="center" p="md">
      <Switch label="Custom Switch" classNames={classes} withThumbIndicator={false} />
    </Group>
  );
}