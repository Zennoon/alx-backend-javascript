import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return (Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((arr) => {
      const statusArr = [];

      arr.forEach(({ status, value, reason }) => {
        statusArr.push({
          status,
          value: value || reason.message,
        });
      });
      return (statusArr);
    })
  );
}
