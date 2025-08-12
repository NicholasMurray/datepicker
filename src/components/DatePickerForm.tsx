// DatePickerForm.tsx
import React, { useState } from 'react';
import { DateInput } from './DateInput';

export const DatePickerForm: React.FC = () => {
  const [limits] = useState({ min: '2024-01-01', max: '2025-12-31' });

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [signedOffDate, setSignedOffDate] = useState('');

  return (
    <form>
      <DateInput
        id="start-date"
        label="Start Date"
        hint="For example, 17/5/2024."
        value={startDate}
        onChange={setStartDate}
        min={limits.min}
        max={limits.max}
      />

      <DateInput
        id="end-date"
        label="End Date"
        hint="Must be after start date."
        value={endDate}
        onChange={setEndDate}
        min={startDate || limits.min}
        max={limits.max}
      />

      <DateInput
        id="signed-off-date"
        label="Signed Off Date"
        hint="Must be after end date."
        value={signedOffDate}
        onChange={setSignedOffDate}
        min={endDate || startDate || limits.min}
        max={limits.max}
      />
    </form>
  );
};
