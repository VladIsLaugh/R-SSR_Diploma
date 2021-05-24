import { DataGrid } from "@material-ui/data-grid";
import { useDemoData } from "@material-ui/x-grid-data-generator";
import React, { useState, useEffect } from "react";
import MultiSelect from "react-multi-select-component";

export default function BasicSortingGrid() {
  const [allData, setData] = useState();
  const [selected, setSelected] = useState([]);
  const [dataGlobal, setgGlobalData] = useState();

  const [headers, setheaders] = useState([]);

  // generateTable()

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data1) => {
          //   console.log(data1);
          setgGlobalData(data1);
          let temphead = Object.keys(data1[0]).map((item) => {
            console.log(item);
            return { label: item, value: item };
          });

          let teph = [
            { label: "Активних хворих", value: "active" },
            {
              label: "Активних хворих на мільйон",
              value: "activePerOneMillion",
            },
            { label: "Хворих", value: "cases" },
            { label: "Хворих на мільйон", value: "casesPerOneMillion" },
            { label: "Континент", value: "continent" },
            { label: "Критично хворих", value: "critical" },
            {
              label: "Критично хворих на мільйон",
              value: "criticalPerOneMillion",
            },
            { label: "Смертей", value: "deaths" },
            { label: "Смертей на мільйон", value: "deathsPerOneMillion" },
            { label: "Людей на 1 хворого", value: "oneCasePerPeople" },
            { label: "Смертей на 1 хворого", value: "oneDeathPerPeople" },
            { label: "Тестувань на 1 хворого", value: "oneTestPerPeople" },
            { label: "Кількість людей", value: "population" },
            { label: "Вилікуваних", value: "recovered" },
            {
              label: "Вилікуваних на мільйон",
              value: "recoveredPerOneMillion",
            },
            { label: "Тестувань", value: "tests" },
            { label: "Тестувань на мільйон", value: "testsPerOneMillion" },
            { label: "Сьогодні хворих", value: "todayCases" },
            { label: "Сьогодні померлих", value: "todayDeaths" },
            { label: "Сьогодні вилікуваних", value: "todayRecovered" },
          ];

          setheaders(teph);
          setSelected(teph.slice(0, 3));

          onChangeHandler(teph.slice(0, 3));
          // generateTable();
        });
    };

    getCountriesData();
  }, []);

  const onChangeHandler = (param) => {
    console.log(param);
    const columns = geterateColumns(param);

    const rows = geterateRows(dataGlobal);
    console.log(rows);
    setSelected(param);
    setData({ columns, rows });
  };

  const geterateColumns = (param) => {
    let a = param.map((item) => {
      return {
        field: item.value,
        headerName: item.label,
        width: 210,
      };
    });
    a.unshift({
      field: "commodity",
      headerName: "country",
      width: 180,
    });
    return a;
  };

  const geterateRows = (param) => {
    console.log(param);
    return param.map((a) => {
      return {
        id: `${Date.now()}-${a.country}-${a.cases}`,
        commodity: a.country,
        active: a.active,
        activePerOneMillion: a.activePerOneMillion,
        cases: a.cases,
        casesPerOneMillion: a.casesPerOneMillion,
        continent: a.continent,
        critical: a.critical,
        criticalPerOneMillion: a.criticalPerOneMillion,
        deaths: a.deaths,
        deathsPerOneMillion: a.deathsPerOneMillion,
        oneCasePerPeople: a.oneCasePerPeople,
        oneDeathPerPeople: a.oneDeathPerPeople,
        oneTestPerPeople: a.oneTestPerPeople,
        population: a.population,
        recovered: a.recovered,
        recoveredPerOneMillion: a.recoveredPerOneMillion,
        tests: a.tests,
        testsPerOneMillion: a.testsPerOneMillion,
        todayCases: a.todayCases,
        todayDeaths: a.todayDeaths,
        todayRecovered: a.todayRecovered,
        updated: a.updated,
      };
    });
  };

  return (
    <div style={{ height: 600, width: "100%" }}>
      <div>
        <h1>Select Fruits</h1>
        {headers && headers.length && (
          <MultiSelect
            options={headers}
            value={selected}
            onChange={onChangeHandler}
            labelledBy="Select"
            hasSelectAll={false}
          />
        )}
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
