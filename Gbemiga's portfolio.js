/*Light/Dark mode toggle*/
class CssPropControl {
    constructor(element) {
      this.element = element
    }
    get(varName) {
      return getComputedStyle(this.element).getPropertyValue(varName)
    }
    set(varName, val) {
      return this.element.style.setProperty(varName, val)
    }
  }
  
  const bodyCssProps = new CssPropControl(document.body)
  

  
  
  let toggle = document.querySelector('#dark-mode-toggle')
  toggle.addEventListener('click', updateMode);
  
  function updateMode() {
    let mode = toggle.checked ? 'dark' : 'light'
    bodyCssProps.set('--background', bodyCssProps.get(`--${mode}-background`))
   	bodyCssProps.set('--primary', bodyCssProps.get(`--${mode}-primary`))
    bodyCssProps.set('--link', bodyCssProps.get(`--${mode}-link`))

    bodyCssProps.set('--projectboxes', bodyCssProps.get(`--${mode}-projectboxes`))
    bodyCssProps.set('--projectboxestwo', bodyCssProps.get(`--${mode}-projectboxestwo`))
    bodyCssProps.set('--featuresboxes', bodyCssProps.get(`--${mode}-featuresboxes`))
    bodyCssProps.set('--featuresboxestwo', bodyCssProps.get(`--${mode}-featuresboxestwo`))
    bodyCssProps.set('--mobilemenu', bodyCssProps.get(`--${mode}-mobilemenu`))

	/*To make the dark mode work on multiple pages even if it wasn't set on it*/
	if(localStorage.getItem('bodyCssProps')) {
		body.classList.add('bodyCssProps');
   }
   /* END OF To make the dark mode work on multiple pages even if it wasn't set on it*/
  }
  
/*Save dark mode in local storage*/
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  darkModeToggle.checked ? document.body.classList.add("bodyCssProps"):document.body.classList.remove("bodyCssProps");
  localStorage.setItem('darkModeStatus', darkModeToggle.checked);
  document.cookie = "darkModeStatus=" + darkModeToggle.checked + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT;"
  document.cookie.includes("darkModeStatus=true")
});

window.addEventListener('load', (event) => {
  if (localStorage.getItem('darkModeStatus')=="true"){
    document.body.classList.add("bodyCssProps"); 
    document.getElementById('dark-mode-toggle').checked = true;
    
    document.body.classList.add("bodyCssProps");
    console.log('dark mode', document.body.className);
    
  }
  else {
    
    
		console.log('light mode', document.body.className);

  }
  
  updateMode();
  
}); 

// add class for projects/features bg color
const full_project = document.querySelectorAll('.index-full-projects-section a');
for (let i = 0; i < full_project.length; i++) {
	full_project[i].classList.add('specificss')
	if (i % 8 < 4) {
		full_project[i].classList.add('green');
	  } else {
		full_project[i].classList.add('red');
	}
}

const specifics = document.querySelectorAll('.index-specific-features-div a');
/*specifics.classList.add('specificss');*/
for (let i = 0; i < specifics.length; i++) {
	specifics[i].classList.add('specificss')
	if (i % 10 < 5) {
		specifics[i].classList.add('green2');
	  } else {
		specifics[i].classList.add('red2');
	}
}


const msg = "Welcome";
document.getElementById("alarmmsg").innerHTML = msg;

setTimeout(function(){
    document.getElementById("alarmmsg").innerHTML = '';
    document.getElementById("alarmmsg").classList.remove("Javascript-Message-disappears-1");
}, 4000);