import {
  INFORM_COMPANY,
  INFORM_EMAIL,
  INFORM_PASSWORD_CHECK_PLACEHOLDER,
  INFORM_PASSWORD_PLACEHOLDER,
  INFORM_TEAM,
  INFORM_USERNAME,
} from './constants';

export const inputFields = [
  {
    id: 'email',
    type: 'email',
    name: 'Email',
    placeholder: INFORM_EMAIL,
  },
  {
    id: 'password',
    type: 'password',
    name: 'Password',
    placeholder: INFORM_PASSWORD_PLACEHOLDER,
  },
  {
    id: 'passwordCheck',
    type: 'password',
    name: 'Password Check',
    placeholder: INFORM_PASSWORD_CHECK_PLACEHOLDER,
  },
  {
    id: 'userName',
    type: 'text',
    name: 'Name',
    placeholder: INFORM_USERNAME,
  },
  {
    id: 'company',
    type: 'select',
    name: 'Company',
    placeholder: INFORM_COMPANY,
  },
  {
    id: 'team',
    type: 'search',
    name: 'Team',
    placeholder: INFORM_TEAM,
  },
];
