// Code your solution in this file

function findMatching(drivers, str) {
  const matching = [];
  
  drivers.filter (function(driver) { 
    if (driver.toLowerCase() === str.toLowerCase()){
      matching.push(driver);
      }
  });
  return matching;
}

function fuzzyMatch(drivers, str) {
  return drivers.filter (function(driver) {return driver.startsWith(str) });
}

function matchName (drivers, str) {
  const matching_obj = [];
  drivers.filter (function(driver) {
    if (driver[name] === str) {
    matching_obj.push(driver);
    }
  });
  return matching_obj;
}
