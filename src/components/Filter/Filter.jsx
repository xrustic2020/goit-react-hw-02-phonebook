export default function Filter({ searchFilter, handler }) {
  return (
    <label>
      Filter{' '}
      <input
        type="text"
        name="filter"
        value={searchFilter}
        onChange={handler}
      />
    </label>
  );
}
