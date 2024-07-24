import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const allPromises = Promise.all([uploadPhoto(), createUser()]);

  try {
    allPromises.then((arr) => {
      console.log(`${arr[0].body} ${arr[1].firstName} ${arr[1].lastName}`);
    }).catch(() => {
      console.log('Signup system offline');
    });
  } catch (e) {
    console.log('Signup system offline');
  }
  return (allPromises);
}
