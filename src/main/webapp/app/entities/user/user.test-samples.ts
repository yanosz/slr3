import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 12385,
  login: 'EAXjy',
};

export const sampleWithPartialData: IUser = {
  id: 18604,
  login: 'Uc',
};

export const sampleWithFullData: IUser = {
  id: 8906,
  login: 'lXNL@EfPzS\\#-l9\\4R\\>FRIO\\wz8',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
