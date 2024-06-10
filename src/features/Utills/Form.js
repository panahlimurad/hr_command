import { useId } from "react";




export const Form = {
    DEPARTAMENTS:{
        title:"Add Departaments",
        infoImg:"Upload your departament logo",
        description:"Add your description or necessary information",
        buttonTitle:"Create Departament",
        initialValues:{
            nane:" ",
            description:" ",
            logo:" ",
        },
        inputs:[{
            id:useId(),

        }]
    }
}