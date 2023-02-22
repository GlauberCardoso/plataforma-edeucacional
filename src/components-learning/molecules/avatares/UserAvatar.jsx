import { Stack, Avatar } from '@mui/material';
import React from 'react'

export default function UserAvatar() {
  return (
    <Stack>
        <Avatar
        src='https://randomuser.me/api/portraits/women/65.jpg'
        alt='Jane'
        />
    </Stack>
  )
}
