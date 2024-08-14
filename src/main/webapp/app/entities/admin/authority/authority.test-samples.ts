import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '9e91ca12-3a81-4b24-b0e7-a7320f8a50e7',
};

export const sampleWithPartialData: IAuthority = {
  name: 'b0d3e888-2c48-4f4c-b10b-f15abb1c1504',
};

export const sampleWithFullData: IAuthority = {
  name: 'eb8b15b1-fac5-4fc2-93fa-0b43ff28968f',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
