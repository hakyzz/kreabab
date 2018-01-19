import FladenBrot from '../assets/img/toppings/fladenbrot.png';
import FladenBrotThumbNail from '../assets/img/thumbnails/fladenbrot.png';

import BarbecueSauce from '../assets/img/toppings/joghurtsauce.png';
import BarbecueSauceThumbNail from '../assets/img/thumbnails/barbecue.png';

import CockTailSauce from '../assets/img/toppings/joghurtsauce.png';
import CockTailSauceThumbNail from '../assets/img/thumbnails/cocktail.png';

import JoghurtSauce from '../assets/img/toppings/joghurtsauce.png';
import JoghurtSauceThumbNail from '../assets/img/thumbnails/joghurtsauce.png';

import ScharfeSauce from '../assets/img/toppings/joghurtsauce.png';
import ScharfeSauceThumbNail from '../assets/img/thumbnails/scharfesauce.png';

import Taschenbrot from '../assets/img/toppings/taschenbrot.png';
import TaschenbrotThumbNail from '../assets/img/thumbnails/taschenbrot.png';

import Salat from '../assets/img/toppings/salat.png';
import SalatThumbNail from '../assets/img/thumbnails/salat.png';

import Zwiebeln from '../assets/img/toppings/zwiebeln.png';
import ZwiebelnThumbNail from '../assets/img/thumbnails/zwiebeln.png';

import Gurken from '../assets/img/toppings/gurken.png';
import GurkenThumbNail from '../assets/img/thumbnails/gurken.png';

import Tomaten from '../assets/img/toppings/tomaten.png';
import TomatenThumbNail from '../assets/img/thumbnails/tomaten.png';



export const CATEGORY_IDS = {'BREAD': 'bread', 'TOPPINGS': 'toppings', 'SAUCES': 'sauces'};

export const categories = [
    {
        id: CATEGORY_IDS.BREAD,
        listType: "radioList",
        title: "Brot wählen",
        items: [
            {
                image: FladenBrotThumbNail,
                topping: FladenBrot,
                name: "breadType",
                title: "Fladenbrot",
                text: "Lorem ipsum",
                price: 9

            },
            {
                image: TaschenbrotThumbNail,
                topping: Taschenbrot,
                name: "breadType",
                title: "Taschenbrot",
                text: "Lorem ipsum",
                price: 8

            }
        ]

    },
    {
        id: CATEGORY_IDS.TOPPINGS,
        listType: "symbolList",
        title: "Zutaten wählen",
        items: [
            {
                image: ZwiebelnThumbNail,
                topping: Zwiebeln,
                name: "toppingType",
                title: "Zwiebeln",
                text: "Lorem ipsum"
            },
            {
                image: SalatThumbNail,
                topping: Salat,
                name: "toppingType",
                title: "Salat",
                text: "Lorem ipsum"
            },
            {
                image: GurkenThumbNail,
                topping: Gurken,
                name: "toppingType",
                title: "Gurken",
                text: "Lorem ipsum"
            },
            {
                image: TomatenThumbNail,
                topping: Tomaten,
                name: "toppingType",
                title: "Tomaten",
                text: "Lorem ipsum"
            }
        ]

    },
    {
        id: CATEGORY_IDS.SAUCES,
        listType: "checkboxList",
        title: "Sauce wählen",
        items: [
            {
                image: CockTailSauceThumbNail,
                topping: CockTailSauce,
                name: "sauceType",
                title: "Cocktailsauce",
                text: "Lorem ipsum"
            },
            {
                image: JoghurtSauceThumbNail,
                topping: JoghurtSauce,
                name: "sauceType",
                title: "Joghurtsauce",
                text: "Lorem ipsum"
            },
            {
                image: BarbecueSauceThumbNail,
                topping: BarbecueSauce,
                name: "sauceType",
                title: "Barbecue",
                text: "Lorem ipsum"
            },
            {
                image: ScharfeSauceThumbNail,
                topping: ScharfeSauce,
                name: "sauceType",
                title: "Scharfe Sauce",
                text: "Lorem ipsum"
            }
        ]

    }
]