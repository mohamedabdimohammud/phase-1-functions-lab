// Calculate distance from the headquarters in blocks
function distanceFromHqInBlocks(destination) {
    if (destination > 42) {
      return destination - 42;
    } else {
      return 42 - destination;
    }
  }
  
  // Calculate distance from the headquarters in feet
  function distanceFromHqInFeet(destination) {
    return distanceFromHqInBlocks(destination) * 264;
  }
  
  // Calculate distance travelled in feet
  function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
      return (start - destination) * 264;
    } else {
      return (destination - start) * 264;
    }
  }
  
  // Calculate fare price based on distance travelled
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel more than 2500 feet';
    }
  }
  
// distanceFromHqInBlocks function
function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
      return blocks - 42;
    } else {
      return 42 - blocks;
    }
  }
  
  // distanceFromHqInFeet function
  function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
  }
  
  // distanceTravelledInFeet function
  function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
  }
  
  // calculatesFarePrice function
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
    

  // Test cases
  console.log(distanceFromHqInBlocks(50)); // Should output 8
  console.log(distanceFromHqInBlocks(34)); // Should output 8
  console.log(distanceFromHqInBlocks(42)); // Should output 0
  
  console.log(distanceFromHqInFeet(50)); // Should output 2112
  console.log(distanceFromHqInFeet(34)); // Should output 1584
  console.log(distanceFromHqInFeet(42)); // Should output 0
  
  console.log(distanceTravelledInFeet(34, 50)); // Should output 2112
  console.log(distanceTravelledInFeet(50, 34)); // Should output 2112
  console.log(distanceTravelledInFeet(42, 27)); // Should output 2772
  
  console.log(calculatesFarePrice(34, 50)); // Should output 2.56
  console.log(calculatesFarePrice(50, 34)); // Should output 2.56
  console.log(calculatesFarePrice(34, 32)); // Should output 0
  console.log(calculatesFarePrice(50, 58)); // Should output 25
  console.log(calculatesFarePrice(34, 60)); // Should output "cannot travel more than 2500 feet"