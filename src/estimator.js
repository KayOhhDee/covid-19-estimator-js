const covid19ImpactEstimator = (data) => {
  const { reportedCases } = data;
  const estimator = {
    data, // the input data you got
    impact: {}, // your best case estimation
    severeImpact: {} // your severe case estimation
  };

  const { impact, severeImpact } = estimator;

  // Challenge 1
  impact.currentlyInfected = reportedCases * 10;
  severeImpact.currentlyInfected = reportedCases * 50;

  impact.infectionsByRequestedTime = Math.trunc(impact.currentlyInfected * 512);
  severeImpact.infectionsByRequestedTime = Math.trunc(severeImpact.currentlyInfected * 512);

  return estimator;
};

export default covid19ImpactEstimator;
