import data from '../../data/data.json';
import { categoriesData, domeneZones } from '@/utils/constants';
import RangeSlider from '../range-slider/range-slider';
import { useEffect, useState } from 'react';
import useDebounceFilter from '@/hooks/use-filter';
import useDataStore from '@/hooks/use-data-store';
import useSidebarStore from '@/hooks/use-sidebar-store';

const Filters = () => {
  const [value, setValue] = useState('');
  const [priceValues,setPriceValues]=useState({
    min:50,
    max:50000
  })
  const [symbolValues,setSymbolValues]=useState({
    min:0,
    max:26
  })
  const { filterValue, onChange } = useDebounceFilter(value);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedZones, setSelectedZones] = useState<string[]>([]);
  const { setItems, data: items } = useDataStore();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(filterValue);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [filterValue]);
  useEffect(() => {
    if (!categories.length && !selectedZones.length) {
      setItems(data);
    }
    if (categories.length && selectedZones.length) {
      setItems(
        data.filter(
          (item) =>
            item.name.includes(value) && (categories.includes(item.category) && selectedZones.includes(item.zone))
        )
      );
    }else if(categories.length) {
      setItems(
        data.filter(
          (item) =>
            item.name.includes(value) && (categories.includes(item.category))
        )
      );
    }else if(selectedZones.length) {
      setItems(
        data.filter(
          (item) =>
            item.name.includes(value) && (selectedZones.includes(item.zone))
        ))
    }
  }, [value, categories, items.length, setItems,selectedZones]);
  return (
    <div className="filters">
      <input
        placeholder="სახელით ძიება"
        className="filter-search"
        type="text"
        value={filterValue || ''}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="pt-1 attributes">
        <div className="attribute">
          <h4 className="text-dark">ფასი</h4>
          <div className="input-row">
            <div className="price-input">
              <input value={priceValues.min} type="number" />
              <p className="ml-auto">ლ</p>
            </div>
            <div className="price-input">
              <input value={priceValues.max} type="number" />
              <p className="ml-auto">ლ</p>
            </div>
          </div>
          <RangeSlider values={priceValues} setValues={setPriceValues} />
        </div>
        <div className="attribute">
          <h4 className="text-dark">სიმბოლოების რაოდენობა</h4>
          <div className="input-row">
            <div className="price-input">
              <input value={symbolValues.min} type="number" />
            </div>
            <div className="price-input">
              <input value={symbolValues.max} type="number" />
            </div>
          </div>
          <RangeSlider values={symbolValues} setValues={setSymbolValues} />
        </div>
      </div>
      <div className="categories">
        <h4 className="text-dark">კატეგორიები</h4>
        <div className="category-row">
          {categoriesData.map((category) => (
            <div className="category" key={category}>
              <input
                type="checkbox"
                value={category}
                name="categories"
                checked={categories.includes(category)}
                onChange={() =>
                  setCategories((prev) =>
                    prev.includes(category)
                      ? prev.filter((cat) => cat !== category)
                      : [...prev, category]
                  )
                }
                id={category}
              />
              <label htmlFor={category}></label>
              <p className="text-dark">{category}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="categories">
        <h4 className="text-dark">დომენის ზონა</h4>
        <div className="category-row">
          {domeneZones.map((zone) => (
            <div className="category" key={zone}>
              <input
                checked={selectedZones.includes(zone)}
                onChange={() =>
                  setSelectedZones((prev) =>
                    prev.includes(zone)
                      ? prev.filter((z) => z !== zone)
                      : [...prev, zone]
                  )
                }
                type="checkbox"
                value={zone}
                name="zones"
                id={zone}
              />
              <label htmlFor={zone}></label>
              <p className="text-dark">{zone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
