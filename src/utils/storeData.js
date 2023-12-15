export const setData = (key,value)=>localStorage.setItem(key,JSON.stringify(value))

export const getData = (key)=>JSON.parse(localStorage.getItem(key));

export const removeData = (keyToRemove)=>{
    if (localStorage.getItem(keyToRemove)) {
        localStorage.removeItem(keyToRemove);
      } else {
        console.log("Item not found in local storage");
      }
}