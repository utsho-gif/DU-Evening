import Select from 'react-select';

interface IFProps {
  name?: any;
  options: any[];
  value: any;
  onChange: any;
  onBlur?: any;
  isMulti?: any;
  max?: any;
  style?: any;
  isDisabled?: boolean;
  ref?: any;
}

function CustomSelect({
  name,
  isDisabled,
  isMulti,
  max,
  options,
  onBlur,
  onChange,
  style,
  value,
  ref,
}: IFProps) {
  const handleChange = (data: any) => {
    if (max) {
      if (data?.length <= max) {
        onChange(name, data);
      }
    } else {
      onChange(name, data);
    }
  };

  const handleBlur = () => {
    onBlur(name, true);
  };
  return (
    <div style={style}>
      <Select
        id="color"
        options={options}
        isMulti={isMulti}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        isClearable
        isDisabled={isDisabled}
        ref={ref}
      />
    </div>
  );
}

export default CustomSelect;

CustomSelect.defaultProps = {
  isMulti: false,
  style: {},
  isDisabled: false,
  max: 0,
};
