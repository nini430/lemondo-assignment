'use client';

import { Dispatch, SetStateAction } from 'react';

interface IRangeSliderProps {
  values: { min: number; max: number };
  setValues: Dispatch<SetStateAction<{ min: number; max: number }>>;
}

const RangeSlider = ({ values, setValues }: IRangeSliderProps) => {
  return (
    <div className="range_container">
      <div className="sliders_control">
        <input
          onChange={(e) =>
            setValues((prev) => ({ ...prev, min: +e.target.value }))
          }
          id="fromSlider"
          type="range"
          value={values.min}
          min={values.min}
          max={values.max}
        />
        <input
          onChange={(e) =>
            setValues((prev) => ({ ...prev, max: +e.target.value }))
          }
          id="toSlider"
          type="range"
          value={values.max}
          min={values.min}
          max={values.max}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
