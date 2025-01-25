
const FilterDropdown = ({ departments, selected, onSelect }) => (
  <select value={selected} onChange={(e) => onSelect(e.target.value)} className="filter-dropdown">
    <option value="">All Departments</option>
    {departments.map((dep, idx) => (
      <option key={idx} value={dep}>{dep}</option>
    ))}
  </select>
);

export default FilterDropdown;
