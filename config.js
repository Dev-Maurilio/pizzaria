const CONFIG = {
    store: {
        name: "Pizzaria Premium",
        logoIcon: "fa-solid fa-pizza-slice", // FontAwesome Class
        whatsappNumber: "558494203878",
        instagram: "#",
        address: {
            street: "Rua da Pizza, 123",
            neighborhood: "Centro",
            city: "São Paulo - SP"
        },
        operatingHours: {
            // Datas específicas de fechamento (AAAA-MM-DD)
            closedDates: [],
            // Configuração Semanal (0 = Domingo, 1 = Segunda, etc.)
            schedule: [
                { day: 0, openHour: 18, openMinute: 0, closeHour: 23, closeMinute: 59, closed: false }, // Domingo
                { day: 1, openHour: 18, openMinute: 0, closeHour: 23, closeMinute: 59, closed: false }, // Segunda
                { day: 2, openHour: 18, openMinute: 0, closeHour: 23, closeMinute: 59, closed: false }, // Terça
                { day: 3, openHour: 18, openMinute: 0, closeHour: 23, closeMinute: 59, closed: false }, // Quarta
                { day: 4, openHour: 18, openMinute: 0, closeHour: 23, closeMinute: 59, closed: false }, // Quinta
                { day: 5, openHour: 18, openMinute: 0, closeHour: 23, closeMinute: 59, closed: false }, // Sexta
                { day: 6, openHour: 18, openMinute: 0, closeHour: 23, closeMinute: 59, closed: false }  // Sábado
            ]
        }
    },
    business: {
        deliveryFee: 3.00,
        currencyLocale: 'pt-BR',
        currencyOptions: { style: 'currency', currency: 'BRL' }
    },
    categories: [
        { id: 'pizzas', name: 'Pizzas', icon: '🍕' },
        { id: 'sanduiches', name: 'Sanduíches', icon: '🍔' },
        { id: 'bebidas', name: 'Bebidas', icon: '🥤' }
    ],
    menu: [
        // PIZZAS
        {
            id: 'p1',
            name: "Calabresa",
            prices: { P: 30.00, M: 35.00, G: 40.00, GG: 55.00 },
            allowHalf: true,
            category: "pizzas",
            description: "Calabresa defumada, cebola roxa e azeitonas.",
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 'p3',
            name: "Frango c/ Catupiry",
            prices: { P: 32.00, M: 42.00, G: 50.00, GG: 65.00 },
            allowHalf: true,
            category: "pizzas",
            description: "Frango desfiado e Catupiry original gratinado.",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop"
        },
        // SANDUÍCHES
        {
            id: 's1',
            name: "X-Burguer",
            price: 22.00,
            category: "sanduiches",
            description: "Pão brioche, burger artesanal, queijo cheddar e molho especial.",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 's2',
            name: "X-Salada",
            price: 25.00,
            category: "sanduiches",
            description: "Burger artesanal, queijo prato, alface americana, tomate e maionese verde.",
            image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop"
        },
        // BEBIDAS
        {
            id: 'b1',
            name: "Coca-Cola",
            prices: { "1L": 6.00, "2L": 12.00 },
            category: "bebidas",
            description: "Refrigerante Coca-Cola.",
            image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 'b2',
            name: "Suco Natural",
            price: 8.00,
            category: "bebidas",
            description: "Suco de laranja natural, feito na hora (500ml).",
            image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800&auto=format&fit=crop"
        }
    ]
};
