import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const userObj = {};
  try {
    userObj.photo = await uploadPhoto();
    userObj.user = await createUser();
  } catch (err) {
    userObj.photo = null;
    userObj.user = null;
  }
  return (userObj);
}
