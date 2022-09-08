import { bool } from "prop-types";

export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "array",
            of: [{ type: "image" }],
            options: { hotspot: true },
        },
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 90,
            },
        },
        {
            name: "price",
            title: "Price",
            type: "number",
        },
        {
            name: "details",
            title: "Details",
            type: "string",
        },
        {
            name: "type",
            title: "Type",
            type: "string",
            options: {
                list: [
                    { title: "Ropa", value: "ropa" },
                    { title: "Cosplay", value: "cosplay" },
                    { title: "Otros", value: "otros" },
                ],
            },
        },
        {
            name: "sale",
            title: "Sale",
            type: "boolean",
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "grid",
                list: [
                    { title: "Hombre", value: "hombre" },
                    { title: "Mujer", value: "mujer" },
                    { title: "Niños", value: "ninos" },
                    { title: "Verano", value: "verano" },
                    { title: "Invierno", value: "invierno" },
                    { title: "RopaInterior", value: "ropa-interior" },
                    { title: "Playa", value: "playa" },
                    { title: "Camiseta", value: "camiseta" },
                    { title: "Pantalon", value: "pantalon" },
                    { title: "Buzo", value: "buzo" },
                    { title: "Vestido", value: "vestido" },
                ],
            },
        },
        {
            name: "search",
            title: "Search",
            type: "array",
            of: [{ type: "string" }],
            options: {
                layout: "tags",
            },
        },
    ],
};
