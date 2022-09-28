import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{

}
:root{
    --green: #56a5e1;;
    --teal: #E83F5B;
    --black: #0a0416;
    --darkgrey:#212529;
    --greycolor:#343B41;
    --grey: #212529;
    --lightgrey: #868E96;
    --white:#6fbb2d;
    --red:#E83F5B;
}
body{
    background: var(--black);
    font-family: 'Inter', sans-serif;
    background:  var(--black);
    color:var(--white);
}`;