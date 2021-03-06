import React from 'react';
import {Cont, InputButton, InputP} from "./componentsStyle";

export default props => {
        const {add, sub, value} = props;
        return <Cont>
                    <InputButton onClick={sub}> - </InputButton>
                    <InputP> {value} </InputP>
                    <InputButton onClick={add}> + </InputButton>
                </Cont>
}