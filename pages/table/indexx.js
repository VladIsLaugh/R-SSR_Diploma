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

import { LineChart, Line } from "recharts";

export default function SimpleTabs() {
  const [allData, setData] = useState();
  const [country, setCountry] = useState();
  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    };

    getCountriesData();
  }, []);

  const clickHandler = (a)=>{
    // console.log(allData.find(b=> b ));
    
  }

  return (
    <div>
      <Wrapper>
        {/* <TableContainer component={Paper}>
          <Table
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="right">country</TableCell>
                <TableCell align="right" onClick={()=>clickHandler('cases')}>cases</TableCell>
                <TableCell align="right">casesPerOneMillion</TableCell>
                <TableCell align="right">active</TableCell>
                <TableCell align="right">activePerOneMillion</TableCell>
                <TableCell align="right">critical</TableCell>
                <TableCell align="right">criticalPerOneMillion</TableCell>
                <TableCell align="right">deaths</TableCell>
                <TableCell align="right">deathsPerOneMillion</TableCell>
                <TableCell align="right">oneCasePerPeople</TableCell>
                <TableCell align="right">oneDeathPerPeople</TableCell>
                <TableCell align="right">oneTestPerPeople</TableCell>
                <TableCell align="right">recovered</TableCell>
                <TableCell align="right">recoveredPerOneMillion</TableCell>
                <TableCell align="right">tests</TableCell>
                <TableCell align="right">testsPerOneMillion</TableCell>
                <TableCell align="right">todayCases</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {allData&& allData.length!=0 && allData.map((row) => (
                <TableRow key={row.name}>
                <TableCell align="right">{row.country}</TableCell>
                <TableCell align="right">{row.cases}</TableCell>
                <TableCell align="right">{row.casesPerOneMillion}</TableCell>
                <TableCell align="right">{row.active}</TableCell>
                <TableCell align="right">{row.activePerOneMillion}</TableCell>
                <TableCell align="right">{row.critical}</TableCell>
                <TableCell align="right">{row.criticalPerOneMillion}</TableCell>
                <TableCell align="right">{row.deaths}</TableCell>
                <TableCell align="right">{row.deathsPerOneMillion}</TableCell>
                <TableCell align="right">{row.oneCasePerPeople}</TableCell>
                <TableCell align="right">{row.oneDeathPerPeople}</TableCell>
                <TableCell align="right">{row.oneTestPerPeople}</TableCell>
                <TableCell align="right">{row.recovered}</TableCell>
                <TableCell align="right">{row.recoveredPerOneMillion}</TableCell>
                <TableCell align="right">{row.tests}</TableCell>
                <TableCell align="right">{row.testsPerOneMillion}</TableCell>
                <TableCell align="right">{row.todayCases}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
        )
      </Wrapper>
    </div>
  );
}
