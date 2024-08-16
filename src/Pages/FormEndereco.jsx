import * as C from "@chakra-ui/react"

const FormEndereco = () => {
    return(
        <C.VStack>
            <C.Input type="text" placeholder="Cep"/>
            <C.Input type="text" placeholder="Bairro"/>
            <C.Input type="text" placeholder="Cidade"/>
            <C.Input type="text" placeholder="UF"/>
        </C.VStack>
    )

}


export default FormEndereco