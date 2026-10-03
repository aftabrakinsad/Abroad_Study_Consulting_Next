// Choices offered on the application form
export const DESTINATIONS = ['Canada', 'United States', 'United Kingdom', 'Australia', 'Germany', 'Japan', 'Malaysia', 'Finland'];
export const STUDY_LEVELS = ['Diploma', "Bachelor's", "Master's", 'PhD'];

export function upcomingIntakes(count = 6) {
  const year = new Date().getFullYear();
  const intakes = [];
  for (let y = year; intakes.length < count; y++) {
    intakes.push(`Spring ${y}`, `Fall ${y}`);
  }
  return intakes.slice(0, count);
}
