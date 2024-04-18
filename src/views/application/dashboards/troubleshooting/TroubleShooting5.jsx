import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Multiselect from "multiselect-react-dropdown";
import {
  advancedcallSearch1,
  searchByCalledNumber,
  searchByCallingNumber,
  searchByDestinationDeviceName,
  searchBySourceDeviceName,
} from "../services/troubleshooting1";
import { troubleShooting5columns } from "../utility/troubleShootingColumnsData";
import Spinner from "../shared/Spinner";
import { Button, Grid } from "@mui/material";

export const Troubleshooting5 = () => {
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tablelLoading, setTableLoading] = useState(false);

  const [searchByCalledFilters, setSearchByCalledFilters] = useState({
    searchByCalledNumbers: [],
    filterByCallingNumber: [],
    isFilterCallingNumber: false,
  });

  const [searchByCallingFilters, setSearchByCallingFilters] = useState({
    searchByCalledNumbers: [],
    filterByCallingNumber: [],
    isFilterSearchByCalledNumber: false,
  });

  const [searchBySourceDevicesFilters, setSearchBySourceDevicesFilters] =
    useState({
      sourceDeviceNames: [],
      destinationDevice: [],
      isFilterDestination: false,
    });

  const [
    searchByDestinationDevicesFilters,
    setSearchByDestinationDevicesFilters,
  ] = useState({
    sourceDeviceNames: [],
    destinationDevice: [],
    isFilterSourceDevice: false,
  });

  const [filtersBody, setFiltersBody] = useState({
    current: new Date(),
    date: localStorage.getItem("time"),
    searchByCalledNumbers: [],
    filterByCallingNumber: [],
    sourceDeviceNames: [],
    destinationDevice: [],
  });

  const [optionsSearchByCalledNumber, setSearchByCalledNumbers] = useState([]);
  const [optionsSearchByCallingNumber, setSearchByCallingNumbers] = useState(
    []
  );
  const [optionsSearchBySourceDevicesNames, setSearchBySourceDevicesNames] =
    useState([]);
  const [optionsSearchByDestinationNames, setSearchByDestinationDeviceNames] =
    useState([]);

  const [filtersByCallingNumber, setFiltersByCallingNumber] = useState([]);
  const [filtersByCalledNumber, setFiltersByCalledNumber] = useState([]);
  const [filtersByDestinationDevice, setFiltersByDestinationDevice] = useState(
    []
  );
  const [filtersBySourceDevice, setFiltersBySourceDevice] = useState([]);

  useEffect(() => {
    async function advancedCallSearch() {
      setTableLoading(true);
      const res1 = await advancedcallSearch1(searchByCalledFilters);
      setDataToTables(res1);
      // setTableLoading(false)
    }
    advancedCallSearch();
    async function filterByCallingNumber() {
      setTableLoading(true);
      const res1 = await searchByCallingNumber(searchByCalledFilters);
      let filtersByCallingNumber = res1.data.aggregations.termsAgg.buckets.map(
        (el) => {
          return el.key;
        }
      );
      setFiltersByCallingNumber(filtersByCallingNumber);
      // setTableLoading(false)
    }
    if (searchByCalledFilters.searchByCalledNumbers.length > 0) {
      filterByCallingNumber();

      setSearchByCallingFilters({
        searchByCalledNumbers: [],
        filterByCallingNumber: [],
        isFilterCallingNumber: false,
      });
    }
  }, [searchByCalledFilters]);

  useEffect(() => {
    async function advancedCallSearch() {
      setTableLoading(true);
      const res1 = await advancedcallSearch1(searchByCallingFilters);
      setDataToTables(res1);
      // setTableLoading(false)
    }
    advancedCallSearch();
    async function filterByCalledNumber() {
      setTableLoading(true);
      const res1 = await searchByCalledNumber(searchByCallingFilters);
      let filtersByCalledNumber = res1.data.aggregations.termsAgg.buckets.map(
        (el) => {
          return el.key;
        }
      );
      setFiltersByCalledNumber(filtersByCalledNumber);
      // setTableLoading(false)
    }
    if (searchByCallingFilters.filterByCallingNumber > 0) {
      filterByCalledNumber();
      setSearchByCalledFilters({
        searchByCalledNumbers: [],
        filterByCallingNumber: [],
        isFilterCallingNumber: false,
      });
    }
  }, [searchByCallingFilters]);

  useEffect(() => { }, [searchByCallingFilters.filterByCallingNumber]);

  async function applyChanges1() {
    if (searchByDestinationDevicesFilters.destinationDevice.length > 0) {
      setSearchByDestinationDevicesFilters({
        sourceDeviceNames: [],
        destinationDevice: [],
        isFilterSourceDevice: false,
      });
    }
    setTableLoading(true);
    const res1 = await advancedcallSearch1(searchBySourceDevicesFilters);
    setDataToTables(res1);
    // setTableLoading(false)
  }

  function clearForm1() {
    setSearchBySourceDevicesFilters({
      sourceDeviceNames: [],
      destinationDevice: [],
      isFilterSourceDevice: false,
    });
  }

  useEffect(() => {
    async function filterByDestinationDevice() {
      setTableLoading(true);
      const res1 = await searchByDestinationDeviceName(
        searchBySourceDevicesFilters
      );

      let filterByDestinationDevice =
        res1.data.aggregations.termsAgg.buckets.map((el) => {
          return el.key;
        });

      setFiltersByDestinationDevice(filterByDestinationDevice);
      // setTableLoading(false)
    }

    filterByDestinationDevice();
  }, [searchBySourceDevicesFilters]);

  async function applyChanges2() {
    setSearchBySourceDevicesFilters({
      sourceDeviceNames: [],
      destinationDevice: [],
      isFilterSourceDevice: false,
    });
    setTableLoading(true);
    const res1 = await advancedcallSearch1(searchByDestinationDevicesFilters);
    setDataToTables(res1);
    // setTableLoading(false)
  }

  function clearForm2() {
    setSearchByDestinationDevicesFilters({
      sourceDeviceNames: [],
      destinationDevice: [],
      isFilterSourceDevice: false,
    });
  }

  useEffect(() => {
    async function filterBySourceDevice() {
      const res1 = await searchBySourceDeviceName(
        searchByDestinationDevicesFilters
      );
      let filterBySourceDevice = res1.data.aggregations.termsAgg.buckets.map(
        (el) => {
          return el.key;
        }
      );
      setFiltersBySourceDevice(filterBySourceDevice);
    }
    filterBySourceDevice();
  }, [searchByDestinationDevicesFilters]);

  const getData = async () => {
    setLoading(true);
    const res1 = await advancedcallSearch1(filtersBody);
    const res2 = await searchByCalledNumber(filtersBody);
    const res3 = await searchByCallingNumber(filtersBody);
    const res4 = await searchBySourceDeviceName(filtersBody);
    const res5 = await searchByDestinationDeviceName(filtersBody);
    let arraySearchByCalledNumbers =
      res2.data.aggregations.termsAgg.buckets.map((el) => {
        return el.key;
      });
    let arraySearchByCallingNumbers =
      res3.data.aggregations.termsAgg.buckets.map((el) => {
        return el.key;
      });
    let arraySearchBySourceDeviceNames =
      res4.data.aggregations.termsAgg.buckets.map((el) => {
        return el.key;
      });
    let arraySearchByDestinationDeviceNames =
      res5.data.aggregations.termsAgg.buckets.map((el) => {
        return el.key;
      });
    setDataToTables(res1);
    setSearchByCalledNumbers(arraySearchByCalledNumbers);
    setSearchByCallingNumbers(arraySearchByCallingNumbers);
    setSearchBySourceDevicesNames(arraySearchBySourceDeviceNames);
    setSearchByDestinationDeviceNames(arraySearchByDestinationDeviceNames);
    setLoading(false);
  };

  const setDataToTables = (res1) => {
    const myColumns = [];
    const myData = [];
    if (
      res1.data &&
      res1.data.hits.hits &&
      res1.data.hits.hits[0] &&
      res1.data.hits.hits[0]._source
    ) {
      troubleShooting5columns.forEach((col) => {
        myColumns.push({
          name: col,
          selector: (row) => row[col],
          sortable: true,
        });
      });
    }
    if (res1.data && res1.data.hits && res1.data.hits.hits) {
      res1.data.hits.hits.forEach((row, i) => {
        let dataObj = {};
        dataObj.id = i;
        Object.keys(row._source).forEach((kval) => {
          if (typeof row._source[kval] !== "object") {
            dataObj[kval] = row._source[kval];
          }
        });
        myData.push(dataObj);
      });
    }
    setTableLoading(false);
    setColumns(myColumns);
    setData(myData);
  };

  // Search By Called
  const onSelectSearchByCalledNumbers = async (selectedList, selectedItem) => {
    setSearchByCalledFilters((filter) => ({
      ...filter,
      searchByCalledNumbers: selectedList,
      isFilterCallingNumber: true,
    }));
  };

  const removeSearchByCalledNumber = async (selectedList, selectedItem) => {
    setSearchByCalledFilters((filter) => ({
      ...filter,
      filterByCallingNumber: selectedList,
    }));
  };

  const onSelectfilterByCallingNumbers = async (selectedList, selectedItem) => {
    setSearchByCalledFilters((filter) => ({
      ...filter,
      filterByCallingNumber: selectedList,
    }));
  };

  const removeFilterByCallingNumber = async (selectedList, selectedItem) => {
    setSearchByCalledFilters((filter) => ({
      ...filter,
      filterByCallingNumber: selectedList,
    }));
  };

  // // Search by Calling

  const onSelectSearchByCallingNumbers = async (selectedList, selectedItem) => {
    setSearchByCallingFilters((filter) => ({
      ...filter,
      filterByCallingNumber: selectedList,
      isFilterSearchByCalledNumber: true,
    }));
  };

  const removeSearchByCallingNumber = async (selectedList, selectedItem) => {
    setSearchByCallingFilters((filter) => ({
      ...filter,
      filterByCallingNumber: selectedList,
    }));
  };

  const onSelectFilterByCalledNumber = async (selectedList, selectedItem) => {
    setSearchByCallingFilters((filter) => ({
      ...filter,
      searchByCalledNumbers: selectedList,
    }));
  };

  const onRemoveFilterByCalledNumber = async (selectedList, selectedItem) => {
    setSearchByCallingFilters((filter) => ({
      ...filter,
      searchByCalledNumbers: selectedList,
    }));
  };

  // Search by Source Devices

  const onSelectSearchBySourceDevice = async (selectedList, selectedItem) => {
    setSearchBySourceDevicesFilters((filter) => ({
      ...filter,
      sourceDeviceNames: selectedList,
      isFilterDestination: true,
    }));
  };

  const removeSearchBySourceDevice = async (selectedList, selectedItem) => {
    setSearchBySourceDevicesFilters((filter) => ({
      ...filter,
      sourceDeviceNames: selectedList,
    }));
  };

  const onSelectFilterByDestinationDevice = async (
    selectedList,
    selectedItem
  ) => {
    setSearchBySourceDevicesFilters((filter) => ({
      ...filter,
      destinationDevice: selectedList,
    }));
  };

  const onRemoveFilterByDestinationDevice = async (
    selectedList,
    selectedItem
  ) => {
    setSearchBySourceDevicesFilters((filter) => ({
      ...filter,
      destinationDevice: selectedList,
    }));
  };

  // Search by Destination Device Names

  const onSelectSearchByDestinationDevice = async (
    selectedList,
    selectedItem
  ) => {
    setSearchByDestinationDevicesFilters((filter) => ({
      ...filter,
      destinationDevice: selectedList,
      isFilterSourceDevice: true,
    }));
  };

  const removeSearchByDestinationDevice = async (
    selectedList,
    selectedItem
  ) => {
    setSearchByDestinationDevicesFilters((filter) => ({
      ...filter,
      destinationDevice: selectedList,
    }));
  };

  const onSelectFilterBySourceDevice = async (selectedList, selectedItem) => {
    setSearchByDestinationDevicesFilters((filter) => ({
      ...filter,
      sourceDeviceNames: selectedList,
    }));
  };

  const onRemoveFilterBySourceDevice = async (selectedList, selectedItem) => {
    setSearchByDestinationDevicesFilters((filter) => ({
      ...filter,
      sourceDeviceNames: selectedList,
    }));
  };
  const styles = {
    optionContainer: {
      // To change css for option container
      border: "2px solid white",
      background: "black",
    },
    inputField: {
      // To change input field position or margin
      color: "white",
    },
  };

  // if (loading) return <Spinner />;

  return (
    <>

      <div>
        <h2>Troubleshooting Call Search (View 5)</h2>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <h5>Search by Calling Number</h5>
            <div>
              <p>Search by Calling Number</p>
              {/* Multiselect component here */}
              <Multiselect
                options={optionsSearchByCallingNumber} // Options to display in the dropdown
                onRemove={removeSearchByCallingNumber}
                onSelect={onSelectSearchByCallingNumbers}
                selectedValues={searchByCallingFilters.filterByCallingNumber}
                isObject={false}
                style={styles}
              />
            </div>
            <div>
              <p>Filter by Called Number</p>
              {/* Multiselect component here */}
              <Multiselect
                options={filtersByCalledNumber} // Options to display in the dropdown
                onSelect={onSelectFilterByCalledNumber}
                onRemove={onRemoveFilterByCalledNumber}
                selectedValues={searchByCallingFilters.searchByCalledNumbers}
                isObject={false}
                style={styles}
                disable={
                  !(searchByCallingFilters.filterByCallingNumber.length > 0)
                }
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h5>Search by Called Number</h5>
            <div>
              <p>Search by Called Number</p>
              {/* Multiselect component here */}
              <Multiselect
                options={optionsSearchByCalledNumber} // Options to display in the dropdown
                onRemove={removeSearchByCalledNumber}
                onSelect={onSelectSearchByCalledNumbers}
                selectedValues={searchByCalledFilters.searchByCalledNumbers}
                isObject={false}
                style={styles}
              />
            </div>
            <div>
              <p>Filter by Calling Number</p>
              {/* Multiselect component here */}
              <Multiselect
                options={filtersByCallingNumber} // Options to display in the dropdown
                disable={
                  !(searchByCalledFilters.searchByCalledNumbers.length > 0)
                }
                onSelect={onSelectfilterByCallingNumbers}
                onRemove={removeFilterByCallingNumber}
                selectedValues={searchByCalledFilters.filterByCallingNumber}
                isObject={false}
                style={styles}
              />
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <h5>Search by Source Device Name</h5>
            <div>
              <p>Search by Source Device Name</p>
              {/* Multiselect component here */}
              <Multiselect
                options={optionsSearchBySourceDevicesNames} // Options to display in the dropdown
                onSelect={onSelectSearchBySourceDevice}
                onRemove={removeSearchBySourceDevice}
                selectedValues={searchBySourceDevicesFilters.sourceDeviceNames}
                isObject={false}
                style={styles}
              />
            </div>
            <div>
              <p>Filter by Destination Device Name</p>
              {/* Multiselect component here */}
              <Multiselect
                options={filtersByDestinationDevice} // Options to display in the dropdown
                onSelect={onSelectFilterByDestinationDevice}
                onRemove={onRemoveFilterByDestinationDevice}
                selectedValues={searchBySourceDevicesFilters.destinationDevice}
                disable={
                  !(searchBySourceDevicesFilters.sourceDeviceNames.length > 0)
                }
                isObject={false}
                style={styles}
              />
            </div>
            <div>
              <Button onClick={applyChanges1} variant="contained">
                Apply Changes
              </Button>
              <Button onClick={clearForm1} variant="contained">
                Clear form
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h5>Search by Destination Device Name</h5>
            <div>
              <p>Search by Destination Device Name</p>
              {/* Multiselect component here */}
              <Multiselect
                options={optionsSearchByDestinationNames} // Options to display in the dropdown
                // selectedValues={!isSearchByDestinationActive ? [] : selectedDestinationDeviceNames}
                onSelect={onSelectSearchByDestinationDevice}
                selectedValues={
                  searchByDestinationDevicesFilters.destinationDevice
                }
                onRemove={removeSearchByDestinationDevice}
                isObject={false}
                style={styles}
              />
            </div>
            <div>
              <p>Filter by Source Device Name</p>
              {/* Multiselect component here */}
              <Multiselect
                options={filtersBySourceDevice} // Options to display in the dropdown
                disable={
                  !(
                    searchByDestinationDevicesFilters.destinationDevice.length >
                    0
                  )
                }
                onSelect={onSelectFilterBySourceDevice}
                selectedValues={
                  searchByDestinationDevicesFilters.sourceDeviceNames
                }
                onRemove={onRemoveFilterBySourceDevice}
                // selectedValues={(!isFilterSourceDevice || !isSearchByDestinationActive) && []}
                isObject={false}
                style={styles}
              />
            </div>
            <div>
              <Button onClick={applyChanges2} variant="contained" >
                Apply Changes
              </Button>
              <Button onClick={clearForm2} variant="contained" >
                Clear form
              </Button>
            </div>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <DataTable
              title="Advanced Call Search 5"
              columns={columns}
              data={data}
              theme="solarized"
              progressPending={tablelLoading}
              progressComponent={
                <div className="loader-demo-box">
                  <div className="dot-opacity-loader">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
              defaultSortField="title"
              pagination
            />
          </Grid>
        </Grid>
      </div>
{/* 
      <div>
        <h2 className="py-2">Troubleshooting Call Search (View 5)</h2>
        <div className="row">
          <div className="col-sm-6 grid-margin">
            <h5 className="h5">Search by Calling Number</h5>
            <div className="row flex-column">
              <div className="col-md-12">
                <p className="mb-2">Search by Calling Number</p>
                <Multiselect
                  options={optionsSearchByCallingNumber} // Options to display in the dropdown
                  onRemove={removeSearchByCallingNumber}
                  onSelect={onSelectSearchByCallingNumbers}
                  selectedValues={searchByCallingFilters.filterByCallingNumber}
                  isObject={false}
                  style={styles}
                />
              </div>
              <div className="col-md-12">
                <p className="mb-2 mt-3">Filter by Called Number</p>
                <Multiselect
                  options={filtersByCalledNumber} // Options to display in the dropdown
                  onSelect={onSelectFilterByCalledNumber}
                  onRemove={onRemoveFilterByCalledNumber}
                  selectedValues={searchByCallingFilters.searchByCalledNumbers}
                  isObject={false}
                  style={styles}
                  disable={
                    !(searchByCallingFilters.filterByCallingNumber.length > 0)
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6 grid-margin">
            <h5 className="h5">Search by Called Number</h5>
            <div className="row flex-column">
              <div className="col-md-12">
                <p className="mb-2">Search by Called Number</p>
                <Multiselect
                  options={optionsSearchByCalledNumber} // Options to display in the dropdown
                  onRemove={removeSearchByCalledNumber}
                  onSelect={onSelectSearchByCalledNumbers}
                  selectedValues={searchByCalledFilters.searchByCalledNumbers}
                  isObject={false}
                  style={styles}
                />
              </div>
              <div className="col-md-12">
                <p className="mb-2 mt-3">Filter by Calling Number</p>
                <Multiselect
                  options={filtersByCallingNumber} // Options to display in the dropdown
                  disable={
                    !(searchByCalledFilters.searchByCalledNumbers.length > 0)
                  }
                  onSelect={onSelectfilterByCallingNumbers}
                  onRemove={removeFilterByCallingNumber}
                  selectedValues={searchByCalledFilters.filterByCallingNumber}
                  isObject={false}
                  style={styles}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 grid-margin">
            <h5 className="h5">Search by Source Device Name</h5>
            <div className="row flex-column">
              <div className="col-md-12">
                <p className="mb-2">Search by Source Device Name</p>
                <Multiselect
                  options={optionsSearchBySourceDevicesNames} // Options to display in the dropdown
                  onSelect={onSelectSearchBySourceDevice}
                  onRemove={removeSearchBySourceDevice}
                  selectedValues={searchBySourceDevicesFilters.sourceDeviceNames}
                  isObject={false}
                  style={styles}
                />
              </div>
              <div className="col-md-12">
                <p className="mb-2 mt-3">Filter by Destination Device Name</p>
                <Multiselect
                  options={filtersByDestinationDevice} // Options to display in the dropdown
                  onSelect={onSelectFilterByDestinationDevice}
                  onRemove={onRemoveFilterByDestinationDevice}
                  selectedValues={searchBySourceDevicesFilters.destinationDevice}
                  disable={
                    !(searchBySourceDevicesFilters.sourceDeviceNames.length > 0)
                  }
                  isObject={false}
                  style={styles}
                />
              </div>
              <div className="form-buttons d-flex justify-content-around mt-4">
                <button
                  onClick={applyChanges1}
                  type="button"
                  class="btn btn-info"
                >
                  Apply Changes
                </button>
                <button onClick={clearForm1} type="button" class="btn btn-light">
                  Clear form
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6 grid-margin">
            <h5 className="h5">Search by Destination Device Name</h5>
            <div className="row flex-column">
              <div className="col-md-12">
                <p className="mb-2">Search by Destination Device Name</p>
                <Multiselect
                  options={optionsSearchByDestinationNames} // Options to display in the dropdown
                  // selectedValues={!isSearchByDestinationActive ? [] : selectedDestinationDeviceNames}
                  onSelect={onSelectSearchByDestinationDevice}
                  selectedValues={
                    searchByDestinationDevicesFilters.destinationDevice
                  }
                  onRemove={removeSearchByDestinationDevice}
                  isObject={false}
                  style={styles}
                />
              </div>
              <div className="col-md-12">
                <p className="mb-2 mt-3">Filter by Source Device Name</p>
                <Multiselect
                  options={filtersBySourceDevice} // Options to display in the dropdown
                  disable={
                    !(
                      searchByDestinationDevicesFilters.destinationDevice.length >
                      0
                    )
                  }
                  onSelect={onSelectFilterBySourceDevice}
                  selectedValues={
                    searchByDestinationDevicesFilters.sourceDeviceNames
                  }
                  onRemove={onRemoveFilterBySourceDevice}
                  // selectedValues={(!isFilterSourceDevice || !isSearchByDestinationActive) && []}
                  isObject={false}
                  style={styles}
                />
              </div>
              <div className="form-buttons d-flex justify-content-around mt-4">
                <button
                  onClick={applyChanges2}
                  type="button"
                  class="btn btn-info"
                >
                  Apply Changes
                </button>
                <button onClick={clearForm2} type="button" class="btn btn-light">
                  Clear form
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <DataTable
              title="Advanced Call Search 5"
              columns={columns}
              data={data}
              theme="solarized"
              progressPending={tablelLoading}
              progressComponent={
                <div className="loader-demo-box">
                  <div className="dot-opacity-loader">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
              defaultSortField="title"
              // sortIcon={<SortIcon />}
              pagination
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Troubleshooting5;
