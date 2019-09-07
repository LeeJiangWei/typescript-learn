import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manWins++;
  }
}

console.log(`Man United won ${manWins} games`);
