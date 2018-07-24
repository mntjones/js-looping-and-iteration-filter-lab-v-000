// Code your solution in this file

function findMatching(drivers, str) {
  const matching = [];
  
  drivers.filter (function(driver) { 
    if (driver === str || driver.toLowerCase() === str){
      matching.push(driver);
      }
  });
  return matching;
}

function fuzzyMatch(drivers, str) {
  return drivers.filter (function(driver) {return driver.startsWith(str) });
}

function matchName (drivers, str) {
  return drivers.filter(function(driver) {return driver[name] === str } );
}
