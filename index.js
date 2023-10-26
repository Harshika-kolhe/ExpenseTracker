
var addButton=document.querySelector('button');
//let name=document.getElementById('amountTxt').value;

//addButton.addEventListener('submit', addItem);

const input=document.querySelectorAll("input");
const choice=document.querySelector('select');
var itemList = document.getElementById('items');
itemList.addEventListener('click', removeItem);


console.log(itemList);

addButton.addEventListener('click', (e)=>{

    e.preventDefault();
    if(input[0].value==='' || input[1].value === ''){
        alert("Please enter all fields.");
    }
    else{
        
        let obj={
            name:input[0].value,
            Amount:input[1].value,
            Purpose:choice.value
        };

       //localStorage.setItem('MyObj',obj);

        let obj_serialize=JSON.stringify(obj);
        console.log(obj_serialize);
        localStorage.setItem(obj.name,obj_serialize);
      //create key label
        var key = document.createElement("LABEL");
        var keyText = document.createTextNode(input[0].value);
        key.setAttribute("for", "name");
        key.appendChild(keyText);

        //create val label
        var val1 = document.createElement("LABEL");
        var AmtText = document.createTextNode("-"+input[1].value);
        val1.setAttribute("for", "Amount");
        val1.appendChild(AmtText);
        

        //choice label
        var val2 = document.createElement("LABEL");
        var PText = document.createTextNode("-"+choice.value+"-");
        val2.setAttribute("for", "Purpose");
        val2.appendChild(PText);
        

         //create button delete

        var but=document.createElement("button");
        but.appendChild(document.createTextNode('X'));
        but.className="btn btn-danger btn-sm float-right delete";

         //create button edit

        var but1=document.createElement("button");
        but1.appendChild(document.createTextNode('Edit'));
        but1.className="btn btn-success btn-sm float-right edit";
        
        var list=document.createElement("li");
        list.className="list-group-item";
        list.appendChild(key);
        list.appendChild(val1);
        list.appendChild(val2);
        list.appendChild(but);
        list.appendChild(but1);

        console.log(list);

        itemList.appendChild(list);


        
        //document.getElementById("myForm").insertBefore(x,document.getElementById("male"));

        


    }
})

function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        console.log(li.firstElementChild.innerHTML);
        localStorage.removeItem(li.firstElementChild.innerHTML);
        itemList.removeChild(li);
      }
    }

    if(e.target.classList.contains('edit')){
        var li = e.target.parentElement;
        let Obj_deserialize=JSON.parse(localStorage.getItem(li.firstElementChild.innerHTML));
        console.log(Obj_deserialize.Email);
        input[0].value=Obj_deserialize.name;
        input[1].value=Obj_deserialize.Amount;
        choice.value=Obj_deserialize.Purpose;
        
        localStorage.removeItem(li.firstElementChild.innerHTML);
        itemList.removeChild(li);
    }
  }
