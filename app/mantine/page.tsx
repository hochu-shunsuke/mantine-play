import {
  Popover,
  PopoverDropdown,
  PopoverTarget,
  Button,
} from '@mantine/core';

export default function Page() {
  return (
    <Popover>
      <PopoverTarget>
        <Button>Open Popover</Button>
      </PopoverTarget>
      <PopoverDropdown>Dropdown</PopoverDropdown>
    </Popover>
  );
}