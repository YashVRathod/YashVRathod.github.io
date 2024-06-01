import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Error(){
    const Wrapper = styled.section`
        padding:9rem;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background:red;

        .btn {
             font-size: 1.8rem;
             margin-top: 3rem;
  }
    `;
    return(
        <Wrapper>
            <img src="./images/error.jpg" alt="" />
            <NavLink to="/">
                <button className="btn">Go Back</button>
            </NavLink>
        </Wrapper>
    );

    
}

export default Error