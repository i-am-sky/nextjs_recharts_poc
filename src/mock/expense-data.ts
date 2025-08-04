export const expenseData = {
    incomes: [
        {title: "salary", amount: 50000},
        {title: "freelance", amount: 8000},
        {title: "YT revenue", amount: 2500},
    ],
    expneses: [
        {
            title: "Groceries",
            category: "food",
            limit: 6000,
            spent: 5000,
            updatedAt: new Date().toLocaleDateString(),
            note: "include monthly ration and veggies",
            showOnHome: true
        },
        {
            title: "Rent",
            category: "home",
            limit: 15000,
            spent: 15000,
            updatedAt: new Date().toLocaleDateString(),
            note: "Paid on 1st of every month",
            showOnHome: true
        },
        {
            title: "Bills",
            category: "home",
            limit: 6000,
            spent: 5000,
            updatedAt: new Date().toLocaleDateString(),
            note: "include nexflix, elextricity and wifi",
            showOnHome: false
        },
        {
            title: "Fuel",
            category: "transport",
            limit: 3000,
            spent: 4000,
            updatedAt: new Date().toLocaleDateString(),
            note: "for bike",
            showOnHome: false
        },
        {
            title: "Medics",
            category: "health",
            limit: 2000,
            spent: 1000,
            updatedAt: new Date().toLocaleDateString(),
            note: "protein and vitamins",
            showOnHome: false
        },
    ]
}