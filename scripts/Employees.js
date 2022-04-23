import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

// when employee name is clicked, alert should say "EMPLOYEE NAME sold N products"
// Where to get N products sold from? 
// - an array containing all products sold by that employee.
// - use array.length to obtain number
// Does that array already exist in the code? NO
// make a function that iterates through employees and if the employeeId of the order matches the id of the employee, push that order object into a new array.  
// return that array
// what do we do with that array?
// create a function to count the length of that array and return the length...OR save that first function to a variable and use that variable.length inside the click event to get the value of N.

document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target
    if (itemClicked.id.startsWith("employee")) {
        const [, employeeId] = itemClicked.id.split("--")

        for (const employee of employees) {
            const itemsSold = orders.filter(order => order.employeeId === employee.id)

            if (employee.id === parseInt(employeeId)) {
                if (itemsSold.length === 1) {
                    window.alert(`${employee.name} sold ${itemsSold.length} product`)
                } else {
                    window.alert(`${employee.name} sold ${itemsSold.length} products`)
                }
            }
        }
    }
})


