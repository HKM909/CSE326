let availablekeywords =[
    'Butter chicken.',
    'Oats idli.',
    'Gulab jamun.',
    'Chole bhature.',
    'Matar kulcha.',
    'Mango lassi.',
    'Pakora and chai.',
    'Palak dal.',
    'Dosa.',
    'Chicken curry.',
    'Panner butter masala.',
    'Quiona.',
    'Roganjosh.',
    'Saag paneer.',
    'Salad.',
    'Samosa.',
    'Sarso and maake ki roti.',
    'Sweet and snack.',
    'Tea.',
    'Vegetable raita.',
];

const resultbox = document.querySelector(".result-box");
const inputbox = document.getElementById("input-box");

inputbox.onkeyup = function(){
    let result = [];
    let input = inputbox.value;
    if(input.length){
        result = availablekeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsbox.innerHTML ='';
    }
    
}

function display(result){
    const content = result.map((list)=>{
        return "<ul onclick=selectInput(this)>" + list + "</ul>";
    });

    resultbox.innerHTML= "<ul>"  + content.join('')+ "</ul>";
}

function selectInput(list){
    inputbox.value = list.innerHTML;
    resultsbox.innerHTML ='';
}
function display(result) {
    const content = result.map((list) => {
        return "<ul onclick='selectInput(this)'>" + list + "</ul>";
    });

    resultbox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
    const selectedKeyword = list.innerHTML;
    inputbox.value = selectedKeyword;
    resultbox.innerHTML = '';

    // Redirecting to a search results page or performing a custom redirect
    // For example, we'll redirect to a search page passing the selected keyword in the URL
    window.location.href = "search_results.html?query=" + encodeURIComponent(selectedKeyword); 
}