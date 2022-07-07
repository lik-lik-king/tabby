// For the javascript I am taking the following steps:
// 1. I am creating a variable that holds the access to the dom using querySelector and the class of the dom element.
// 2. I then create another variable that holds Array.from that converts the node list into an array and then I access the first element in the array by using the class name.
// 3. Lastly I use Array.from again that converts the node list of the tabby element into an array and then I access the first element in the array by using the class name again.
const tabby = document.querySelector('.tabby')
const tabs = Array.from(tabby.querySelectorAll('.tab'))
const tabContents = Array.from(tabby.querySelectorAll('.tab-content'))

// This function of tabs.forEach will loop through the array and will call the function for each element in the array.
// We then add an event listener to each element in the array and when the event is triggered using the "click" it will call the function.

tabs.forEach(tab => {
  tab.addEventListener('click', event => {
    // Here I set two variables that will be used in the function. The first variable named target holds the tab that was clicked and the second variable named tabContent holds the tab content that was clicked. It uses the .dataset which is a property that is used to store data on the element. Then I use .theme to access the data that was stored on the element.
    // The next is the tabContent which holds the tabby element along with adding the .querySelector to access. 
    // I am using the # to access the id of the tab content and then a plus sign and then target to access the id of the tab.
    const target = tab.dataset.theme
    const tabContent = tabby.querySelector('#' + target)

    // This function will loop through the array of tabs. I create a variable t.classList which is a property that is used to access the class list of the element. Then the .remove method is used to remove the class of the element of is-selected.
    // Then I use the .add method to add the class of is-selected to the element 
    tabs.forEach(t => t.classList.remove('is-selected'))
    tab.classList.add('is-selected')

    // And lastly this piece will loop through tabContents and remove the class of is-selected from each element.
    // Then I use the .add method to add the class of is-selected to the element.
    tabContents.forEach(c => c.classList.remove('is-selected'))
    tabContent.classList.add('is-selected')
  })
})
