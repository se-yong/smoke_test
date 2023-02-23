import * as crypto from 'crypto';
import * as _ from 'lodash';

export const generateRandomId = (...suffix: string[]): string => {
  let uuid = '';
  suffix.map((str) => {
    uuid = uuid + '-' + str;
  });

  return uuid.substring(1);
};

export const verifyDuplicateArray = (arr: any[]): boolean => {
  return _.uniq(arr).length !== arr.length;
};

export const getSuffix = (uuid: string, start = 0, end = 8): string => {
  return uuid.slice(start, end);
};

export const getRandomString = (size: number): string => {
  return crypto.randomBytes(size / 2 || 5).toString('hex');
};

export const getToday = (time?: Date): string => {
  const date = time || getLocalTime();
  const year = date.getFullYear().toString();
  const month = ('0' + (1 + date.getMonth())).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return year.substring(2, 4) + month + day;
};

export const getLocalTime = (): Date => {
  const now = new Date();
  return new Date(
    now.getTime() + now.getTimezoneOffset() * 60 * 1000 + 9 * 60 * 60 * 1000,
  );
};

export const isDate = (date: string): boolean => {
  return !isNaN(Date.parse(date));
};

export const isIdExp = (id: string): boolean => {
  const idExp = /^[a-z]{1}[a-z0-9]{5,15}$/g;

  return idExp.test(id);
};

export const isPwExp = (pw: string): boolean => {
  const pwExp =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{10,16}$/g;
  return pwExp.test(pw);
};