import {useStyles} from "./styles";
export const Price = ({
                          regularPrice,
                          minPrice
}) =>  {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.leftSide}>
                Price
            </div>
            <div className={classes.rightSide}>
                <div>
                    {`${regularPrice} / box`}
                </div>
                <div>
                    {`${minPrice} (Minimum)`}
                </div>
            </div>
        </div>
    );
}