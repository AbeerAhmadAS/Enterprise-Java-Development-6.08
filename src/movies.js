console.log("hi");
//create deep copy of the array
const deepCopyMovies = JSON.parse(JSON.stringify(movies));
console.log(deepCopyMovies);
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    console.log("get All Directors" ,directors);
}
getAllDirectors(deepCopyMovies);
function getAllDirectorsWithoutRepetition(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    const uniqueDirectors = [...new Set(directors)];
    console.log("get All Directors Without Repetition" ,uniqueDirectors);
  }
  getAllDirectorsWithoutRepetition(deepCopyMovies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
    
      console.log("howManyMovies", moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length);
}
howManyMovies(deepCopyMovies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (movies.length === 0) {
        return 0;
      }
    
      const totalScores = moviesArray.reduce((sum, movie) => sum + movie.score, 0);
      const averageScore = totalScores / moviesArray.length;
    
      console.log("scores Average",  averageScore.toFixed(2));
}
scoresAverage(deepCopyMovies);
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));

  if (dramaMovies.length === 0) {
    return 0;
  }

  const totalScores = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
  const averageScore = totalScores / dramaMovies.length;

  console.log("drama Movies Score" ,averageScore.toFixed(2));
}
dramaMoviesScore(deepCopyMovies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = [...moviesArray];

  sortedMovies.sort((a, b) => {
    if (a.year === b.year) {
      // If two movies have the same year, sort them in alphabetical order by their title
      return a.title.localeCompare(b.title);
    } else {
      // Sort movies by their release year
      return a.year - b.year;
    }
  });

  console.log("Ordering by year" , sortedMovies);
}
orderByYear(deepCopyMovies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = [...moviesArray];

  sortedMovies.sort((a, b) => a.title.localeCompare(b.title));

  const titles = sortedMovies.slice(0, 20).map(movie => movie.title);

  console.log("order Alphabetic" , titles);
}
orderAlphabetically( deepCopyMovies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const updatedMovies = [...moviesArray];

  for (let i = 0; i < updatedMovies.length; i++) {
    const duration = updatedMovies[i].duration;

    // Extract the hours and minutes from the duration string
    const hours = parseInt(duration.split('h')[0]);
    const minutes = parseInt(duration.split('min')[0].split(' ')[1]);

    // Calculate the total duration in minutes
    const totalMinutes = hours * 60 + minutes;

    // Update the duration of the movie in minutes
    updatedMovies[i].duration = totalMinutes;
  }

  console.log("Change Time Format", updatedMovies);
}
turnHoursToMinutes(deepCopyMovies);
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return "There are no movies in the list.";
      }
    
      const yearlyScores = moviesArray.reduce((scores, movie) => {
        const year = movie.year;
        const score = movie.score;
    
        if (!scores[year]) {
          scores[year] = {
            totalScore: score,
            movieCount: 1
          };
        } else {
          scores[year].totalScore += score;
          scores[year].movieCount++;
        }
    
        return scores;
      }, {});
    
      let bestYear = "";
      let bestAverage = 0;
    
      for (const year in yearlyScores) {
        const average = yearlyScores[year].totalScore / yearlyScores[year].movieCount;
    
        if (average > bestAverage) {
          bestAverage = average;
          bestYear = year;
        }
      }
    
      console.log(`The best year was ${bestYear} with an average score of ${bestAverage.toFixed(2)}`);
    
}
bestYearAvg(deepCopyMovies);