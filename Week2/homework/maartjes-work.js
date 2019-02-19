'use strict';

/* 1.2 Underneath you see a very interesting small insight in Maartje's work:

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];
Note: the durations are specified in minutes.

Write a program that computes how much Maartje has earned by completing these tasks, using map and filter. For the 'summing part' you can try your luck with reduce; alternatively, you may use forEach or a for loop.

Follow these steps. Each step should build on the result of the previous step.

1. (map) Map the tasks to durations in hours.
2. (filter) Filter out everything that took less than two hours (i.e., remove from the collection)
3. (reduce) Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
4. Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
5. Choose variable and parameters names that most accurately describe their contents or purpose. When naming an array, use a plural form, e.g. durations. For a single item, use a singular form, e.g. duration. For details, see Naming Conventions.
6. Don't forget to use =>.

*/

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;
// console.log(maartjesTasks[1]);

function computeEarnings(tasks, hourlyRate) {
  // Replace this comment and the next line with your code
  // console.log(tasks, hourlyRate);
  // (map) Map the tasks to durations in hours.
  return (
    tasks
      .map(task => task.duration / 60)
      // (filter) Filter out everything that took less than two hours (i.e., remove from the collection)
      .filter(duration => duration >= 2)
      // (reduce) Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
      .map(duration => duration * hourlyRate)
      .reduce((sum, total) => sum + total, 0)
  );
}
// console.log(computeEarnings(maartjesTasks, maartjesHourlyRate));
// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)

console.log(`Maartje has earned €${earnings.toFixed(2)}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings
};
