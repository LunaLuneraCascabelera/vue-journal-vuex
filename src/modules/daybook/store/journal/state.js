//El state es una función REACTIVA, que cuando cambia vamos a notificar a todos los componentes o los lugares donde estén escuchando los cambios de nuestro state

export default ()  => ({
    // El objeto que definiremos dentro será reactivo
    isLoading: true,
    extries: [
        {
            id: new Date().getTime(),  //este valor suele venir de la base de datos
            date: new Date().toDateString(),
            text: "Esse dolore fugiat mollit sint fugiat esse Lorem proident do dolore sit proident velit sit. Voluptate ea duis mollit aliqua mollit exercitation nisi minim. Cupidatat enim consectetur cillum cupidatat Lorem nulla. Ex aliquip sint nostrud cupidatat incididunt dolore excepteur id ex commodo. Duis magna dolore irure voluptate eiusmod sint est nostrud exercitation aliquip ipsum laborum pariatur. Do do aliquip commodo voluptate sint dolore elit elit ad quis aliquip eiusmod tempor sint.",
            picture: null

        },
        {
            id: new Date().getTime() + 1000,  
            date: new Date().toDateString(),
            text: "Ea excepteur duis laboris veniam esse ut nisi laborum. Consectetur consequat dolore sint incididunt laborum ut Lorem aliquip eu labore veniam. Ullamco irure incididunt aute exercitation eu adipisicing. Cillum voluptate ullamco officia Lorem consequat velit duis ex laborum eu anim excepteur cupidatat. Sint ex fugiat adipisicing aliquip est elit. Consequat cupidatat amet proident eu nostrud deserunt officia sint nisi mollit amet laboris consectetur.",
            picture: null

        },
        {
            id: new Date().getTime() +2000,  
            date: new Date().toDateString(),
            text: "Et consequat amet proident Lorem qui. Dolore aliquip occaecat non nisi. Deserunt ipsum deserunt magna non id. Cupidatat eu exercitation nulla occaecat. Excepteur proident laborum minim id officia nulla dolor minim labore veniam Lorem ea minim minim.",
            picture: null

        }
    ]
})

