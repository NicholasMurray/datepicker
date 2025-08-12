// DateInput.tsx
import React from 'react';

interface DateInputProps {
  id: string;
  label: string;
  hint: string;
  value: string;
  onChange: (value: string) => void;
  min?: string;
  max?: string;
}

export const DateInput: React.FC<DateInputProps> = ({ id, label, hint, value, onChange, min, max }) => {
  return (
    <div className="moj-datepicker" data-module="moj-date-picker">
      <div className="govuk-form-group">
        <label className="govuk-label" htmlFor={id}>{label}</label>
        <div id={`${id}-hint`} className="govuk-hint">{hint}</div>
        <input
          className="govuk-input"
          id={id}
          name={id}
          type="date"
          aria-describedby={`${id}-hint`}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={min}
          max={max}
        />
      </div>
    </div>
  );
};
