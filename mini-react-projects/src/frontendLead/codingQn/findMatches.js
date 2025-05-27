function findMatches(data, match) {
  const keys = Object.keys(match);
  if (keys.length === 0) {
    return data;
  }
  return data.reduce((acc, curr) => {
    const isMatch = keys.every((elem) => match[elem] === curr[elem]);
    if (isMatch) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

// Do not edit below this line
console.log(
  findMatches(
    [
      {
        name: "John",
        company: "Google",
        position: "Software Engineer",
        level: "Entry",
      },
      {
        name: "Ann",
        company: "Waymo",
        position: "Product Manager",
        level: "Entry",
      },
    ],
    {}
  )
);

