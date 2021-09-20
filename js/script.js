function Pizza(flavour, toppings, size, crust){
    const sizes = {
        large: 1000,
        medium: 750,
        small: 500,
    };

    const crusts = {
        gluttenFree: 200,
        Stuffed: 200,
        Crispy: 200,
    };

    this.flavour = flavour;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.totalPrice = (toppings.length * 100) + sizes[size] + crusts[crust];
}

$(document).ready(function(){
    $("#submit").click(function (e) {
        e.preventDefault();
        const pToppings = [];
        const pSize = $("#size option:selected").val();

        pToppings.push(3);

        
        const pizza = new Pizza('flav', pToppings, pSize, 'Crispy');
        console.log('pSize', pSize, 'Pizza class size', pizza.size, pizza.totalPrice);
        alert("We have received your order. We shall be in contact soon.Enjoy!")
    })
    

})
















   



