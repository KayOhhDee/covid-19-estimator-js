const covid19ImpactEstimator = (data) => {
  const { reportedCases } = data;
  const estimator = {
    data, // the input data you got
    impact: {}, // your best case estimation
    severeImpact: {} // your severe case estimation
  };

  const { impact, severeImpact } = estimator;
  const factor = Math.floor(data.timeToElapse / 3);

  // Challenge 1
  impact.currentlyInfected = reportedCases * 10;
  severeImpact.currentlyInfected = reportedCases * 50;

  impact.infectionsByRequestedTime = Math.trunc(
    impact.currentlyInfected * 2 ** factor
  );
  severeImpact.infectionsByRequestedTime = Math.trunc(
    severeImpact.currentlyInfected * 2 ** factor
  );

  return estimator;
};

export default covid19ImpactEstimator;
