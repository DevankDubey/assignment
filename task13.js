    function convertTemp(temperature, conversionUnit){

        if(conversionUnit ==='K'){

            return temperature + 273

        }

        else if(conversionUnit === 'C'){

            return temperature - 273 

        } else {

            console.log('Invalid Conversion Unit')

            return -1;

        }

    }
    console.log(convertTemp(35,'K'));

