//  IIFE function to invoke on DOM load
 ( () =>  
 {
    // Get list  items
    let list = document.getElementsByClassName('alphabetical-sort');
    let listItems = [];
    let listItemValue;
    //Loop through list item 
    for(let i = 0; i < list.length; i++){
        // Store each item in array
        listItemValue = list[i].innerHTML;
        // Push to new array
        listItems.push(listItemValue);
    }
    // Sort array alphabetically
    let sortedListItems = listItems.sort();

    for(let i = 0; i < sortedListItems.length ; i++){
        // Insert sorted list back to the DOM
        document.getElementsByClassName('alphabetical-sort')[i].innerHTML = listItems[i] ;
    }}
    )();
    