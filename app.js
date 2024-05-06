const getActualSleepHours = () => 6 + 7 + 8 + 8 + 8 + 8 + 8;

const getIdealSleepHours = (idealHours) => idealHours * 7;
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    return "the user got the perfect amount of sleep.";
  } else if (actualSleepHours > idealSleepHours) {
    return `You got ${
      actualSleepHours - idealSleepHours
    } hours more sleep than you needed this week.`;
  } else
    return `The user should sleep more ${
      idealSleepHours - actualSleepHours
    } hours to take some rest.`;
};
calculateSleepDebt();
console.log(calculateSleepDebt());
