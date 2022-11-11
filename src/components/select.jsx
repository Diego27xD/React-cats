import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {ImageListItem} from "@mui/material";

export default function BasicSelect({categories, handleChange, category, image}) {

    return (
        <Box sx={{minWidth: 120, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}} >
            <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Category"
                    onChange={handleChange}
                >
                    {categories.length > 0 &&
                        categories.map(({id, name}) => (
                            <MenuItem value={id}>{name}</MenuItem>
                        ))}
                </Select>
            </FormControl>
            {image.map((item) => (
                <ImageListItem key={item.id} sx={{width: 500, height: 450}}>
                    <img
                        src={`${item.url}?w=100&fit=crop&auto=format`}
                        srcSet={`${item.url}?w=100&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />

                </ImageListItem>
            ))}
        </Box>
    );
}