import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import apis from '../api/index'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tagList = [
  'GBM',
  'Leetcode Days',
  'Technical Development',
  'Professional Development',
  'Workshop',
  'Misc',
];

export default function MultipleSelectCheckmarks(props) {
  const [tags, setTags] = React.useState([]);

  const handleChange = (event) => {
    props.chipSelect.setState({isLoading: true})
    const {
      target: { value },
    } = event;
    // variable "value" is an array of selected tags -> query the database
    if (value.length === 0) {
      apis.getVideosbyBlacklist().then((videos) => {
        props.chipSelect.setState({videos: videos.data.data, isLoading: false})
      });
    }
    else {
      apis.getVideosbyTag(value).then((videos) => {
        props.chipSelect.setState({videos: videos.data.data, isLoading: false})
      });
    }
    setTags(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel color="warning" id="demo-multiple-checkbox-label"><b>Tags</b></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={tags}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {tagList.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={tags.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
