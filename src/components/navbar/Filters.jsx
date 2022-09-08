import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTag, removeTag } from "../../redux/tagsSlice";
import { changeSort } from "../../redux/sortSlice";

const Filters = () => {
    const dispatch = useDispatch();

    const setRemoveTag = (event) => {
        if (event.target.checked) dispatch(addTag(event.target.value));
        else dispatch(removeTag(event.target.value));
    };

    return (
        <FilterStyled>
            <h2>Ordenar</h2>
            <select
                onChange={(event) => dispatch(changeSort(event.target.value))}
                name="order"
                id="order"
            >
                <option value="priceAsc">Precio(ascendente)</option>
                <option value="priceDesc">Precio(descendente)</option>
                <option value="name">Nombre</option>
            </select>
            <h2>Filtrar</h2>

            <div>
                <input
                    onChange={(event) => setRemoveTag(event)}
                    type="checkbox"
                    name="hombres"
                    value="hombre"
                    id="hombres"
                />
                <label htmlFor="hombres">Hombres</label>
            </div>

            <div>
                <input
                    onChange={(event) => setRemoveTag(event)}
                    type="checkbox"
                    name="mujeres"
                    value="mujer"
                    id="mujeres"
                />
                <label htmlFor="mujeres">Mujeres</label>
            </div>

            <div>
                <input
                    onChange={(event) => setRemoveTag(event)}
                    type="checkbox"
                    name="ninos"
                    value="ninos"
                    id="ninos"
                />
                <label htmlFor="ninos">Niños</label>
            </div>

            <div>
                <input
                    onChange={(event) => setRemoveTag(event)}
                    type="checkbox"
                    name="buzos"
                    value="buzo"
                    id="buzos"
                />
                <label htmlFor="buzos">Buzos</label>
            </div>

            <div>
                <input
                    onChange={(event) => setRemoveTag(event)}
                    type="checkbox"
                    name="pantalones"
                    value="pantalon"
                    id="pantalones"
                />
                <label htmlFor="pantalones">Pantalones</label>
            </div>

            <div>
                <input
                    onChange={(event) => setRemoveTag(event)}
                    type="checkbox"
                    name="camisetas"
                    value="camiseta"
                    id="camisetas"
                />
                <label htmlFor="camisetas">Camisetas</label>
            </div>
            <div>
                <input
                    onChange={(event) => setRemoveTag(event)}
                    type="checkbox"
                    name="vestido"
                    value="vestido"
                    id="vestido"
                />
                <label htmlFor="vestido">Vestidos</label>
            </div>
            <div>
                <input
                    onChange={(event) => setRemoveTag(event)}
                    type="checkbox"
                    name="ropa-interior"
                    value="ropa-interior"
                    id="ropa-interior"
                />
                <label htmlFor="ropa-interior">Ropa interior</label>
            </div>

            <div>
                <input
                    onChange={(event) => setRemoveTag(event)}
                    type="checkbox"
                    name="traje-bano"
                    value="playa"
                    id="traje-bano"
                />
                <label htmlFor="traje-bano">Trajes de Baño</label>
            </div>

            <div>
                <input
                    onChange={(event) => setRemoveTag(event)}
                    type="checkbox"
                    name="ropa-interior"
                    value="ropa-interior"
                    id="ropa-interior"
                />
                <label htmlFor="ropa-interior">Ropa interior</label>
            </div>

            <div>
                <input
                    onChange={(event) => setRemoveTag(event)}
                    type="checkbox"
                    name="verano"
                    value="verano"
                    id="verano"
                />
                <label htmlFor="verano">Ropa de Verano</label>
            </div>

            <div>
                <input
                    onChange={(event) => setRemoveTag(event)}
                    type="checkbox"
                    name="invierno"
                    value="invierno"
                    id="invierno"
                />
                <label htmlFor="invierno">Ropa de Invierno</label>
            </div>
        </FilterStyled>
    );
};

const FilterStyled = styled.div`
    position: absolute;
    background-color: white;
    top: 50px;
    right: 20px;
    width: 200px;
    border: 1px solid gray;
    padding: 15px;
    box-shadow: 3px 3px 5px 0 #11111185;
`;

export default Filters;
