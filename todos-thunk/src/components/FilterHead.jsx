import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import React from "react";
import FilterButton from "./FilterButton";
import { FILTER_TYPES } from "./constants";

const PaperContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FilterHead = () => {
  const currentFilter = FILTER_TYPES.ALL;
  const handleChangeFilter = (filter) => {
    console.log(filter);
  };

  return (
    <PaperContainer spacing={2}>
      <FilterButton
        changeFilter={handleChangeFilter}
        currentFilter={currentFilter}
        filterName={FILTER_TYPES.ALL}
      >
        All
      </FilterButton>
      <FilterButton
        changeFilter={handleChangeFilter}
        currentFilter={currentFilter}
        filterName={FILTER_TYPES.DONE}
      >
        DONE
      </FilterButton>
      <FilterButton
        changeFilter={handleChangeFilter}
        currentFilter={currentFilter}
        filterName={FILTER_TYPES.TODO}
      >
        TODO
      </FilterButton>
    </PaperContainer>
  );
};

export default FilterHead;
