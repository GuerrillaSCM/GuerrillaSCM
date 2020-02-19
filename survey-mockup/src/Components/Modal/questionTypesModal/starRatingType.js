import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

export default function StarRating() {

    const [stars, setStars] = React.useState(5);

    const classes = useStyles();

    const handleChange = val => {
        setStars(val);
      };

    return(<div>
        <InputLabel id="demo-customized-select-label" fullWidth>Choose number of stars: </InputLabel>
        <Select
          id="demo-customized-select"
          fullWidth
          defaultValue={5}
          onClick={e => handleChange(e.target.value)}
        >
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
    </div>);
}