import fastify from "fastify";
import cors from "@fastify/cors";

// Criando o servidor. O 'fastify' é uma função onde posso colocar entre chaves todas as configurações que necessito fazer.
const server = fastify({logger: true});

//Configurações utilizando o Cors. //! Altamente importante a configuração da cors no seu projeto, para previnir possiveis erros de consumo pelo front.
server.register(cors, {
    // Para uma liberação pessoal é = //!origin: "www.nathanalencar.com"
    //liberação geral
    origin: "*",
    //Limitando os metodos que eu quero que consuma:
    methods: ["GET"],
});

const teams = [
    {id: 1, name: "McLaren", base: "Woking, United Kingdom"},
    {id: 2, name: "Mercedes", base: "Brakley, United Kingdom"},
    {id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom"},
];

const drivers = [
    {id: 1, name: "Max Verstappen", team: "Red Bull Racing"},
    {id: 2, name: "Lewis Hamilton", team: "Ferrari"},
    {id: 3, name: "Lando Norris", team: "McLaren"},
];

// Metodo get com fastify
server.get("/teams", async(request, response) =>{
    response.type("application/json").code(200);
    return {teams};
});

server.get("/drivers", async(request, response) => {
    response.type("application/json").code(200);
    return {drivers};
});

//Contrato(Interface). Para lidar com os RoutParams
interface DriverParams{
    id: string,
}

//Filtrando pilotos. Com o Fastify para declararmos variaveis ou "ROUTEPARAMS" na URL utilizamos ":'variavel'"
server.get<{Params: DriverParams}>("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);

    //Procurando valor dentro de um vetor
    const driver = drivers.find(d => d.id === id);

    if(!driver){
        //Não encontrou nenhum motorista
        response.type("application/json").code(404);
        return { message: "Driver Not Found"};
    }else{
        //Encontrou um motorista com o id.
        response.type("application/json").code(200);
        return {driver};
    }

});

// Função de callback sempre que o listen é chamado.
server.listen({port: 3333}, () =>{
    console.log("Server init");
});