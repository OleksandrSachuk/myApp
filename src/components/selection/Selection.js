import {useStyles} from "./styles";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
export const Selection = ({
                              units,
                              selectedUnit,
                              onUnitSelect,
                              quantities,
                              selectedQuantity,
                              onQuantitySelect
                          }) =>  {
    const classes = useStyles()

    const getUnits = () => {
        return units.map((item)=> <MenuItem value={item}>{item}</MenuItem>)
    }

    const getQuantities = () => {
        return quantities.map((item)=> <MenuItem value={item}>{item}</MenuItem>)
    }

    return (
        <div className={classes.root}>
            <div className={classes.leftSide}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">UNIT OF MEASURE</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectedUnit}
                        label="UNIT OF MEASURE"
                        onChange={onUnitSelect}
                    >
                        {getUnits()}
                    </Select>
                </FormControl>
            </div>
            <div className={classes.rightSide}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">QUANTITY</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={selectedQuantity}
                        label="QUANTITY"
                        onChange={onQuantitySelect}
                    >
                        {getQuantities()}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}