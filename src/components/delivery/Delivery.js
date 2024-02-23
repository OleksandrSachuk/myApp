import {useStyles} from "./styles";
import {Button} from "@material-ui/core";
import {Typography} from "@mui/material";
export const Delivery = ({date}) =>  {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Button variant="contained">In Stock</Button>
            <div>
                <Typography>
                    {`FREE Delivery ${date}`}
                </Typography>
            </div>
        </div>
    );
}