import * as C from "@chakra-ui/react"

const FormProjeto = () => {
    return(
        <C.VStack>
            <C.Input type="text" placeholder="Projeto"/>
            <C.Input type="text" placeholder="Área"/>
            <C.Input type="text" placeholder="Coordenador/Professor"/>
        </C.VStack>
    )

}

export default FormProjeto

