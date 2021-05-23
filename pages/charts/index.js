import React, { useState, useEffect } from "react";
import Wrapper from "../../components/shared/Wrapper/Wrapper";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
// import LineGraph from "../../components/map/LineGraph/LineGraph";
// import { sortData, prettyPrintStat } from "./../../helpers/util";

// import { LineChart, Line } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

export default function SimpleTabs() {
  const [allData, setData] = useState();
  const [country, setCountry] = useState();
  const toPercent = (decimal, fixed = 0) =>{
    // console.log(decimal);
    return `${(decimal * 100).toFixed(fixed)}%`};
  const getPercent = (value, total) => {
    const  ratio= total > 0 ? value / total : 0;
    console.log(ratio);
    return toPercent(ratio, 2);
  };
  const renderTooltipContent = (o) => {
    const { payload, label } = o;
    // const total = payload.reduce((result, entry) =>{console.log(result, entry); return (result + entry.value)}, 0);
    let total;
    // console.log(payload);
    // if(payload.name == 'cases'){
    //   total = payload.value
    // }
    console.log(0);
    if (payload.length) {
      total = payload[2].value;
      console.log(total);
    }

    return (
      <div className="customized-tooltip-content">
        <p className="total">{`${label} (Total: ${total})`}</p>
        <ul className="list">
          {payload.map((entry, index) => (
            <li key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}(${getPercent(
                entry.value,
                total
              )})`}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // const cases = data.cases
          let res = { cases: [], deaths: [], recovered: [] };
          for (let element in data) {
            for (let casesItem in data[element]) {
              // if(res.length<10){
              res[element].push({
                name: casesItem,
                [element]: data[element][casesItem],
              });
              // }
            }
          }
          let res2 = [];
          for (let i = 0; i < res.cases.length; i++) {
            res2[i] = {
              name: res.cases[i].name,
              cases: res.cases[i].cases,
              deaths: res.deaths[i].deaths,
              recovered: res.recovered[i].recovered,
            };
          }
          console.log(res);
          // data.cases
          setData(res2);
        });

        fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          // let sortedData = sortData(data);
          // setTableData(sortedData);
        });
    };

    getCountriesData();
  }, []);

  const clickHandler = (a) => {
    // console.log(allData.find(b=> b ));
  };



  return (
    <div>
      <Wrapper> 
        <div style={{ margin: 50 }}>
          <h2>Графік захворюваності по світу Covid-19</h2>
          <ResponsiveContainer width={1200} height={400}>
            <LineChart width={1200} height={400} data={allData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="cases"
                stroke="#CC1034"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="recovered"
                stroke="#7dd71d"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="deaths"
                stroke="#000"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div style={{ margin: 50 }}>
        <h2>Графік захворюваності по світу Covid-19</h2>
          <AreaChart
            width={1200}
            height={400}
            data={allData}
            stackOffset="expand"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
     
            <Tooltip content={renderTooltipContent} />
            <Area
              type="monotone"
              dataKey="deaths"
          
              stroke="#000"
              fill="#000"
            />
            <Area
              type="monotone"
              dataKey="recovered"

              stroke="#7dd71d"
              fill="#7dd71d"
            />
            <Area
              type="monotone"
              dataKey="cases"
         
              stroke="#CC1034"
              fill="#CC1034"
            />
          </AreaChart>

        </div>
        
        {/* <Card className="app__right">
        <CardContent>
          <div className="app__information">
            <h3>Worldwide new {casesType}</h3>
            <LineGraph casesType={casesType} />
          </div>
        </CardContent>
      </Card> */}
        
    
        )


      </Wrapper>
    </div>
  );
}
