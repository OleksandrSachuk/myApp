
import {useStyles} from "./styles";
import {Compare} from "../compare/Compare";
import img from "../../assets/img/img.png"
import {Typography} from "@mui/material";
import {Price} from "../price/Price";
import {Delivery} from "../delivery/Delivery";
import {Selection} from "../selection/Selection";
import {useCallback, useState} from "react";
import {Button} from "@material-ui/core";

export const Cart = () =>  {
    const classes = useStyles()
    const units = ['BX','CS', 'Clove'];
    const quantities = [
        '1 ($2.25)',
        '2 ($4.50)',
        '3 ($22.50)',
        '40 ($22.50)',
        '50 ($22.50)',
        '60 ($22.50)',
        '70 ($22.50)',
        '80 ($22.50)',
        '90 ($22.50)',
        '100 +',
    ];

    const [selectedUnit, setSelectedUnit] = useState();
    const [selectedQuantity, setSelectedQuantity] = useState();

    const  onUnitSelect = useCallback((event) => {
        setSelectedUnit(event.target.value);
    }, []);

    const  onQuantitySelect = useCallback((event) => {
        setSelectedQuantity(event.target.value);
    }, []);

    const  onAddToCartClick = useCallback(() => {
        console.log('selectedUnit', selectedUnit);
        console.log('selectedQuantity', selectedQuantity);
    }, [
        selectedUnit,
        selectedQuantity
    ]);


    return (
        <div className={classes.root}>
           <Compare/>
            <img src={img} alt='img'/>
            <Typography>
                Exam Glove McKesson Confiderm® 3.5C Medium...
                Box of 100 gloves
            </Typography>
            <a href={'/'}>Diamond Gloves</a>
            <Price
                regularPrice={2.25}
                minPrice={2.25}
            />
            <Delivery date={'Mon, May 8'}/>
            <Selection
                units={units}
                selectedUnit={selectedUnit}
                onUnitSelect={onUnitSelect}
                quantities={quantities}
                selectedQuantity={selectedQuantity}
                onQuantitySelect={onQuantitySelect}
            />
            <div>
                <Button
                    variant="contained"
                    onClick={onAddToCartClick}
                >ADD TO CART
                </Button>
            </div>
        </div>
    );
}