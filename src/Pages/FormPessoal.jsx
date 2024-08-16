import * as C from "@chakra-ui/react"

const FormPessoal = () => {
    return(
        <C.VStack>
            <C.Input type="text" placeholder="Nome"/>
            <C.Input type="text" placeholder="CPF"/>
            <C.Input type="email" placeholder="Email"/>
        </C.VStack>
    )

}

export default FormPessoal