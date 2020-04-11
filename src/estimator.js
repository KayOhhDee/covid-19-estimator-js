const covid19ImpactEstimator = (data) => {
  const { reportedCases, periodType, timeToElapse } = data;
  const estimator = {
    data, // the input data you got
    impact: {}, // your best case estimation
    severeImpact: {} // your severe case estimation
  };

  const { impact, severeImpact } = estimator;

  const convertToDays = (period, elapseTime) => {
    switch (period) {
      case 'weeks':
        return Math.trunc((elapseTime / 3) * 7);
      case 'months':
        return Math.trunc((elapseTime / 3) * 30);
      default:
        return Math.trunc(elapseTime / 3);
    }
  };

  // Challenge 1
  impact.currentlyInfected = reportedCases * 10;
  severeImpact.currentlyInfected = reportedCases * 50;

  impact.infectionsByRequestedTime = Math.trunc(
    impact.currentlyInfected * (2 ** convertToDays(periodType, timeToElapse))
  );
  severeImpact.infectionsByRequestedTime = Math.trunc(
    severeImpact.currentlyInfected * (2 ** convertToDays(periodType, timeToElapse))
  );

  return estimator;
};

export default covid19ImpactEstimator;
