import { useState, useRef, useEffect } from "react";
type SearchFilterProps = {
  setSearch: (search: string) => void;
};

export const SearchFilter = ({ setSearch }: SearchFilterProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const searchFilter = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setInputValue(searchValue);
    setSearch(searchValue);
  };

  useEffect(() => {
    searchFilter.current?.focus();
  }, []);

  return (
    <input
      type="text"
      placeholder="Search..."
      name="search-filter"
      value={inputValue}
      onChange={handleChange}
      ref={searchFilter}
    />
  );
};
