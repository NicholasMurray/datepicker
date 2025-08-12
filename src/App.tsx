import './App.css';
import './styles/styles.css';
import { CalendarIcon } from './components/CalendarIcon';
import { DatePickerForm } from './components/DatePickerForm';

function App() {
  return (
    <>
      <h1>Date Picker</h1>

      <h2>Native date</h2>
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
      <br />

      <h2>Native datetime</h2>
      <div className="moj-datepicker" data-module="moj-date-picker">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="date">
            Datetime
          </label>
          <div id="meeting-time-hint" className="govuk-hint">
            For example, 17/5/2024 17:30.
          </div>
          <input
            className="govuk-input"
            id="meeting-time"
            name="meeting-time"
            type="datetime-local"
            aria-describedby="meeting-time-hint"
            value="2018-06-12T19:30"
            min="2018-06-07T00:00"
            max="2018-06-14T00:00" 
            autoComplete="off"
          />
        </div>
      </div>
      <br />

      <h2>Styled icon</h2>
      <div className="moj-datepicker" data-module="moj-date-picker">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="date">
            Date
          </label>
          <div id="styled-date-hint" className="govuk-hint">
            For example, 17/5/2024.
          </div>
          <div className="moj-datepicker__mapps">
            <input
              className="govuk-input moj-js-datepicker-input"
              id="styled-date"
              name="styled-date"
              type="date"
              aria-describedby="styled-date-hint"
              autoComplete="off"
            />
            <CalendarIcon />
          </div>
        </div>
      </div>
      <br />

      <h2>DatePicker form</h2>
      <DatePickerForm />
    </>
  );
}

export default App;
