const covid19ImpactEstimator = (data) => {
  const {
    reportedCases, periodType, timeToElapse, totalHospitalBeds, region
  } = data;
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

  const convertToNumOfDays = (period, elapseTime) => {
    switch (period) {
      case 'weeks':
        return Math.trunc(elapseTime * 7);
      case 'months':
        return Math.trunc(elapseTime * 30);
      default:
        return Math.trunc(elapseTime);
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

  // Challenge 2
  impact.severeCasesByRequestedTime = (15 / 100) * impact.infectionsByRequestedTime;
  severeImpact.severeCasesByRequestedTime = (15 / 100) * severeImpact.infectionsByRequestedTime;

  impact.hospitalBedsByRequestedTime = Math.trunc(
    ((35 / 100) * totalHospitalBeds) - impact.severeCasesByRequestedTime
  );
  severeImpact.hospitalBedsByRequestedTime = Math.trunc(
    ((35 / 100) * totalHospitalBeds) - severeImpact.severeCasesByRequestedTime
  );

  // Challenge 3
  impact.casesForICUByRequestedTime = Math.trunc((5 / 100) * impact.infectionsByRequestedTime);
  severeImpact.casesForICUByRequestedTime = Math.trunc(
    (5 / 100) * severeImpact.infectionsByRequestedTime
  );

  impact
    .casesForVentilatorsByRequestedTime = Math.trunc((2 / 100) * impact.infectionsByRequestedTime);
  severeImpact
    .casesForVentilatorsByRequestedTime = Math.trunc(
      (2 / 100) * severeImpact.infectionsByRequestedTime
    );

  impact.dollarsInFlight = Math.trunc(
    (impact.infectionsByRequestedTime
    * region.avgDailyIncomePopulation
    * region.avgDailyIncomeInUSD)
    / convertToNumOfDays(periodType, timeToElapse)
  );
  severeImpact.dollarsInFlight = Math.trunc(
    (severeImpact.infectionsByRequestedTime
    * region.avgDailyIncomePopulation
    * region.avgDailyIncomeInUSD)
    / convertToNumOfDays(periodType, timeToElapse)
  );

  return estimator;
};

export default covid19ImpactEstimator;
