import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import {
  AlternateEmail,
  Cached,
  Close,
  EditOutlined,
  ExpandMore,
  HelpOutline,
  ListAlt,
  MoreVert,
  Visibility,
  VisibilityOff,
} from '.';

export default { title: 'Illustrations/Icons' } as Meta;

export const alternateEmail = () => <AlternateEmail />;
export const cached = () => <Cached />;
export const close = () => <Close />;
export const editOutlined = () => <EditOutlined />;
export const expandMore = () => <ExpandMore />;
export const helpOutline = () => <HelpOutline />;
export const listAlt = () => <ListAlt />;
export const moreVert = () => <MoreVert />;
export const visibility = () => <Visibility />;
export const visibilityOff = () => <VisibilityOff />;
