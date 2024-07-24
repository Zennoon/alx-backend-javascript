import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const vals = await (Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]));
  const statusArray = [];
  vals.forEach(({ status, value, reason }) => {
    statusArray.push({
      status,
      value: value || `Error: ${reason.message}`,
    });
  });
  return statusArray;
}
