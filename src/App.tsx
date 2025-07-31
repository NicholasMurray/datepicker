import './App.css';
import './styles/styles.css';
import { CalendarIcon } from './components/CalendarIcon';

function App() {
  return (
    <>
      <h1>Date Picker</h1>

      <h2>Native</h2>
      <div className="moj-datepicker" data-module="moj-date-picker">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="date">
            Date
          </label>
          <div id="date-hint" className="govuk-hint">
            For example, 17/5/2024.
          </div>
          <input
            className="govuk-input"
            id="date"
            name="date"
            type="date"
            aria-describedby="date-hint"
            autoComplete="off"
          />
        </div>
      </div>

      <h2>Custom</h2>
      <div className="moj-datepicker" data-module="moj-date-picker">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="date">
            Date
          </label>
          <div id="date-hint" className="govuk-hint">
            For example, 17/5/2024.
          </div>
          <div className="moj-datepicker__mapps">
            <input
              className="govuk-input moj-js-datepicker-input"
              id="date"
              name="date"
              type="date"
              aria-describedby="date-hint"
              autoComplete="off"
            />
            <CalendarIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
