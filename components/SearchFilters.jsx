import { useEffect, useState } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
  SelectRoot,
} from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
// import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";

import { filterData, getFilterValues } from "../utils/filterdata";

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);

  const searchProperties = (filterValues) => {};

  return (
    <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <SelectRoot
            collection={filter.queryName}
            placeholder={filter.placeholder}
            w="fit-content"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            <SelectContent></SelectContent>
          </SelectRoot>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
