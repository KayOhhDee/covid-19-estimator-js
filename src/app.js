const initialState = {
  regionName: '',
  regionPopulation: '',
  averageAge: '',
  averageDailyIncome: '',
  averagePopulationIncome: '',
  reportedCases: '',
  hospitalBeds: '',
  timeToElapse: '',
  periodType: ''
};

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value
  };
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const onChange = e => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    const data = {
      region: {
        name: regionName,
        avgAge: +averageAge,
        avgDailyIncomeInUSD: +averageDailyIncome,
        avgDailyIncomePopulation: +averagePopulationIncome
      },
      periodType: periodType,
      timeToElapse: +timeToElapse,
      reportedCases: +reportedCases,
      population: +regionPopulation,
      totalHospitalBeds: +hospitalBeds
    }

  }

  const {
    regionName,
    regionPopulation,
    averageAge,
    averageDailyIncome,
    averagePopulationIncome,
    reportedCases,
    hospitalBeds,
    timeToElapse,
    periodType
  } = state;

  return (
    <main>
      <h1>Novelty COVID-19 Estimator</h1>
      <div id="container">
        <p id="description">Know your COVID- 19 impact estimate</p>
        <form onSubmit={onSubmit}>
          <div>
            <div className="labels">
              <label htmlFor="name">*Region Name:</label>
            </div>
            <div className="fills">
              <input
                className="inputclass"
                id="name"
                value={regionName}
                placeholder="Enter region name"
                name="regionName"
                onChange={onChange}
                data-region-name
                required
              />
            </div>
          </div>
          <div>
            <div className="labels">
              <label htmlFor="population">*Population of region:</label>
            </div>
            <div className="fills">
              <input
                type="number"
                className="inputclass"
                id="populaton"
                value={regionPopulation}
                placeholder="Enter region's population"
                name="regionPopulation"
                onChange={onChange}
                data-population
                required
              />
            </div>
          </div>
          <div>
            <div className="labels">
              <label htmlFor="avgAge">*Average age:</label>
            </div>
            <div className="fills">
              <input
                type="number"
                className="inputclass"
                id="avgAge"
                value={averageAge}
                step="0.01"
                placeholder="Enter average age"
                name="averageAge"
                onChange={onChange}
                data-avg-age
                required
              />
            </div>
          </div>
          <div>
            <div className="labels">
              <label htmlFor="avgDailyIncomeInUSD">
                *Average daily income (in USD):
              </label>
            </div>
            <div className="fills">
              <input
                type="number"
                className="inputclass"
                id="avgDailyIncomeInUSD"
                value={averageDailyIncome}
                step="0.01"
                placeholder="Enter average daily income"
                name="averageDailyIncome"
                onChange={onChange}
                data-avg-daily-income
                required
              />
            </div>
          </div>
          <div>
            <div className="labels">
              <label htmlFor="avgDailyIncomePopulation">
                *Average daily income population:
              </label>
            </div>
            <div className="fills">
              <input
                type="number"
                className="inputclass"
                id="avgDailyIncomePopulation"
                value={averagePopulationIncome}
                step="0.01"
                placeholder="Enter population's average daily income"
                name="averagePopulationIncome"
                onChange={onChange}
                data-avg-daily-income-population
                required
              />
            </div>
          </div>
          <div>
            <div className="labels">
              <label htmlFor="reportedCases">*Reported cases:</label>
            </div>
            <div className="fills">
              <input
                type="number"
                className="inputclass"
                id="reportedCases"
                value={reportedCases}
                placeholder="Enter number of reported case"
                name="reportedCases"
                onChange={onChange}
                data-reported-cases
                required
              />
            </div>
          </div>
          <div>
            <div className="labels">
              <label htmlFor="totalHospitalBeds">*Total hospital beds:</label>
            </div>
            <div className="fills">
              <input
                type="number"
                className="inputclass"
                id="totalHospitalBeds"
                value={hospitalBeds}
                placeholder="Enter total number of hospital beds"
                name="hospitalBeds"
                onChange={onChange}
                data-total-hospital-beds
                required
              />
            </div>
          </div>
          <div>
            <div className="labels">
              <label htmlFor="timeToElapse">*Time to elapse:</label>
            </div>
            <div className="fills">
              <input
                type="number"
                className="inputclass"
                id="timeToElapse"
                value={timeToElapse}
                placeholder="Enter time to elapse"
                name="timeToElapse"
                onChange={onChange}
                data-time-to-elapse
                required
              />
            </div>
          </div>
          <div>
            <div className="labels">
              <label htmlFor="period">*Period type:</label>
            </div>
            <div className="fills">
              <select className="drpdwn" id="period" value={periodType} name="periodType" onChange={onChange}>
                <option value="" disabled defaultValue>
                  Select an option
                </option>
                <option value="days">days</option>
                <option value="weeks">weeks</option>
                <option value="months">months</option>
              </select>
            </div>
          </div>
          <button data-go-estimate>Submit</button>
        </form>
      </div>
    </main>
  );
};

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
