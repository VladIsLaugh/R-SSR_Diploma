import { DataGrid } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";
import React, { useState, useEffect } from "react";
import MultiSelect from "react-multi-select-component";


export default function BasicSortingGrid() {
  const [allData, setData] = useState();
  const [selected, setSelected] = useState([]);
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 10,
    maxColumns: 6,
  });
  console.log(data);
  const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
    { label: "Watermelon 🍉", value: "watermelon" },
    { label: "Pear 🍐", value: "pear" },
    { label: "Apple 🍎", value: "apple" },
    { label: "Tangerine 🍊", value: "tangerine" },
    { label: "Pineapple 🍍", value: "pineapple" },
    { label: "Peach 🍑", value: "peach" },
  ];
  const [headers, setheaders] = useState([]);
//   let headers = []

 const generateTable = (options) =>{
    let temp = options.map(item=>{
        return   {
            field: item.value,
            // generateData: () => "D-" + Mi.integer({ min: 0, max: 1e4 }),
            headerName: item.label,
            width: 210,
          }
    })

    
 }

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data1) => {
        //   console.log(data1);
          let temp = {
            columns: [
              {
                field: "commodity",
                // generateData: () => "D-" + Mi.integer({ min: 0, max: 1e4 }),
                headerName: "country",
                width: 180,
              },
              {
                field: "active",
                // generateData: () => "D-" + Mi.integer({ min: 0, max: 1e4 }),
                headerName: "active",
                width: 210,
              },
              {
                field: "activePerOneMillion",
                // generateData: () => "D-" + Mi.integer({ min: 0, max: 1e5 }),
                headerName: "activePerOneMillion",
                width: 210,
              },
              {
                field: "cases",
                // generateData: () => "D-" + Mi.integer({ min: 0, max: 1e6 }),
                headerName: "cases",
                width: 210,
              },
              {
                field: "casesPerOneMillion",
                // generateData: () => "D-" + Mi.integer({ min: 0, max: 1e7 }),
                headerName: "casesPerOneMillion",
                width: 210,
              },
            ],
            rows: data1.map((a) => {
              return {
                id: `${Date.now()}-${a.country}-${a.cases}`,
                commodity: a.country,
                active: a.active,
                activePerOneMillion: a.activePerOneMillion,
                cases: a.cases,
                casesPerOneMillion: a.casesPerOneMillion,
              };
            }),
          };
          let temphead = []
           data1.forEach(element => {
            temphead.push({label:element.country, value:element.country})
           });
           setheaders(temphead)
        //    console.log(object);
          console.log(headers);
          console.log(temp);
          setData(temp);
        });
    };

    getCountriesData();
  }, []);

  return (
    <div style={{ height: 600, width: "100%" }}>
           <div>
        <h1>Select Fruits</h1>
        <pre>{JSON.stringify(selected)}</pre>
        {headers.length &&
        <MultiSelect
          options={headers}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
        />
}
      </div>
      {allData && (
        <DataGrid
          {...allData}
          sortModel={[
            {
              field: "commodity",
              sort: "asc",
            },
          ]}
        />
      )}
    </div>
  );
}
