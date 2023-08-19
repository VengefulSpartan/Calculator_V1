 $('#equal').hide();
 var input1=0;
 var input2=0;
function add(){
    return (input1+input2);
};
function sub(){
    return (input1-input2);
};
function mul(){
    return (input1*input2);
};
function div(){
    return (input1/input2);
};
function root(){
    var kill=Math.sqrt(input1)    
    return kill;
};
function frac(){
    return (input1/100);
};
function inVal1(event){
    var aaa=$('#fun').text().length;
    if(aaa===0){
        var chill=event.toString();
        $('#num1').append($("#"+chill).text());    
        input1=Number($('#num1').text());
    }else{
        var chill=event.toString();
        $('#num2').append($("#"+chill).text());
        input2=Number($('#num2').text());
        implement();
    }
};
function callin(event){
    if(input1!=0){
        var chill=event.toString();
        
        if($("#"+chill).text()==='%'){
            input1=frac();
            $('#num1').text(input1);        
            //console.log("oo")
        }else if($("#"+chill).text()==="√"){
            input1=root();
            $('#num1').text(input1);
        }else{
            $('#fun').text($("#"+chill).text());
        }
    }else{
        alert("Enter amount first")
    }
};
function implement(){
    const funen=$("#fun").text();
    switch(funen){
        case'×':
            $('#equal').show();
            $('#ans').text(mul());
        break;
        case'÷':
            $('#equal').show();
            $('#ans').text(div());
        break;
        case'+':
        $('#equal').show();
            $('#ans').text(add());
        break;
        case'-':
        $('#equal').show();
            $('#ans').text(sub());
        break;
    };
};
