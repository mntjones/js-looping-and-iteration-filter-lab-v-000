// Code your solution in this file
function findMatching(drivers, str) {
  drivers.filter (function(driver){return (driver === str || driver.toLowerCase() === str)});
}

function fuzzyMatch(drivers, str) {
  drivers.filter (function(driver) {return driver.startsWith(str) });
}

function matchName (drivers, str) {
  drivers.filter(function(driver) {return driver.name === str } );
}
