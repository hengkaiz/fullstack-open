const Filter = ({ searchValue, onChange }) => {
  return (
    <div>
      find countries <input value={searchValue} onChange={onChange} />
    </div>
  );
};

export default Filter;
