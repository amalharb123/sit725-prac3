console.log('hello world')

$(document).ready(function(){
    console.log('Document ready')

     $('#calculateBtn').click(function(){
        var number1=$('#number1').val()
        var number2=$('#number2').val()
        var numbers={
            num1:number1,
            num2:number2
        }
        
        $.get("http://localhost:4000/adder",numbers,function( data ){
            console.log('Data has returned:'+ data)
            $('#result').val(data);
    });
})
})