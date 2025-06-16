'use client';

import { Checkbox, SimpleGrid, Text, UnstyledButton, Box } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import classes from './ImageCheckboxes.module.css';

interface ImageCheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  title: string;
  description: string;
  color: string;
}

export function ImageCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  className,
  color,
  ...others
}: ImageCheckboxProps & Omit<React.ComponentPropsWithoutRef<'button'>, keyof ImageCheckboxProps>) {
  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  return (
    <UnstyledButton
      {...others}
      onClick={() => handleChange(!value)}
      data-checked={value || undefined}
      className={classes.button}
    >
      <Box 
        w={40} 
        h={40} 
        style={{ 
          backgroundColor: color,
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />

      <div className={classes.body}>
        <Text c="dimmed" size="xs" lh={1} mb={5}>
          {description}
        </Text>
        <Text fw={500} size="sm" lh={1}>
          {title}
        </Text>
      </div>

      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        styles={{ input: { cursor: 'pointer' } }}
      />
    </UnstyledButton>
  );
}

const mockdata = [
  { description: 'Sun and sea', title: 'Beach vacation', color: '#22b8cf' },
  { description: 'Sightseeing', title: 'City trips', color: '#868e96' },
  { description: 'Mountains', title: 'Hiking vacation', color: '#51cf66' },
  { description: 'Snow and ice', title: 'Winter vacation', color: '#339af0' },
];

export function ImageCheckboxes() {
  const items = mockdata.map((item) => <ImageCheckbox {...item} key={item.title} />);
  return <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">{items}</SimpleGrid>;
}