import FladenBrot from '../assets/img/fladenbrot.png';
import BarbecueSauce from '../assets/img/barbecue-thumbnail@2x.png';
import CockTailSauce from '../assets/img/cocktailsauce-thumbnail@2x.png';
import JoghurtSauce from '../assets/img/joghurtsauce-thumbnail@2x.png';
import ScharfeSauce from '../assets/img/scharfesauce-thumbnail@2x.png';
import Taschenbrot from '../assets/img/taschenbrot-thumbnail@2x.png';
import Salat from '../assets/img/salat-thumbnail@2x.png';
import Zwiebeln from '../assets/img/zwiebeln-thumbnail@2x.png';
import Gurken from '../assets/img/gurken-thumbnail@2x.png';
import Tomaten from '../assets/img/tomaten-thumbnail@2x.png';


export const CATEGORY_IDS = {'BREAD': 'bread', 'TOPPINGS': 'toppings', 'SAUCES': 'sauces'}

export const categories = [
    {
        id: CATEGORY_IDS.BREAD,
        listType: "radioList",
        title: "Brot wählen",
        items: [
            {
                image: FladenBrot,
                name: "breadType",
                title: "Fladenbrot",
                text: "Lorem ipsum",
                price: 9

            },
            {
                image: Taschenbrot,
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
                image: Zwiebeln,
                name: "toppingType",
                title: "Zwiebeln",
                text: "Lorem ipsum"
            },
            {
                image: Salat,
                name: "toppingType",
                title: "Salat",
                text: "Lorem ipsum"
            },
            {
                image: Gurken,
                name: "toppingType",
                title: "Gurken",
                text: "Lorem ipsum"
            },
            {
                image: Tomaten,
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
                image: CockTailSauce,
                name: "sauceType",
                title: "Cocktailsauce",
                text: "Lorem ipsum"
            },
            {
                image: JoghurtSauce,
                name: "sauceType",
                title: "Joghurtsauce",
                text: "Lorem ipsum"
            },
            {
                image: BarbecueSauce,
                name: "sauceType",
                title: "Barbecue",
                text: "Lorem ipsum"
            },
            {
                image: ScharfeSauce,
                name: "sauceType",
                title: "Scharfe Sauce",
                text: "Lorem ipsum"
            }
        ]

    }
]