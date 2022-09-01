import React from "react";
import styled from "styled-components";

const Filters = () => {
    //
    return (
        <FilterStyled>
            <h2>Ordenar</h2>
            <select name="" id="">
                <option value="">Precio(ascendente)</option>
                <option value="">Precio(descendente)</option>
                <option value="">Nombre</option>
            </select>
            <h2>Filtrar</h2>
            <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Hombres</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Mujeres</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Niños</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Buzos</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Pantalones</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Camisetas</label>
            </div>
        </FilterStyled>
    );
};

const FilterStyled = styled.div`
    background-color: white;
    position: sticky;
    top: 0;
    width: 200px;
    height: 300px;
    border: 1px solid gray;
    padding: 15px;
    box-shadow: 3px 3px 5px 0 #11111185;
`;

export default Filters;
