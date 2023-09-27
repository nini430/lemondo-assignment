import { categories, domeneZones } from '@/utils/constants';

const Filters = () => {
  return (
    <div className="filters">
      <input
        placeholder="სახელით ძიება"
        className="filter-search"
        type="text"
      />
      <div className="pt-1 attributes">
        <div className="attribute">
          <h4 className="text-dark">ფასი</h4>
          <div className="input-row">
            <input type="text" />
            <input type="text" />
          </div>
        </div>
        <div className="attribute">
          <h4 className="text-dark">სიმბოლოების რაოდენობა</h4>
          <div className="input-row">
            <input type="text" />
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="categories">
        <h4 className="text-dark">კატეგორიები</h4>
        <div className="category-row">
          {categories.map((category) => (
            <div className="category" key={category}>
              <input
                type="checkbox"
                value={category}
                name="genres"
                id={category}
              />
              <label htmlFor={category}></label>
              <p className="text-dark">{category}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='categories'>
      <h4 className="text-dark">დომენის ზონა</h4>
      <div className="category-row">
          {domeneZones.map((zone) => (
            <div className="category" key={zone}>
              <input
                type="checkbox"
                value={zone}
                name="genres"
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
