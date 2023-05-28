
function projectNavItems() {
    let projectNavItems = document.querySelectorAll('.pn-item');
    let projects = document.querySelector('.projects').querySelectorAll('div');
    let allProj = document.querySelector('ul li:nth-child(1)');
    let webDevNav = document.querySelector('ul li:nth-child(2)');
    let pythonNav = document.querySelector('ul li:nth-child(3)');
    let pythonProjects = document.querySelectorAll('.python');
    let webDevProjects = document.querySelectorAll('.webDev');

    // console.log(projects)
    // console.log(e.target)
    

    projectNavItems.forEach(link => {
        link.addEventListener("click", e => {
            projectNavItems.forEach(link => {
                link.classList.remove('proj-active');
            });
            e.preventDefault();
            link.classList.add('proj-active'); 

            if (allProj.classList.contains("proj-active")) {
                // make the class with portfolio > python disapear; vice versa with portfolio > web for ul li:nth-child(3)
                projects?.forEach(p => {
                    p.classList.add('appear')
                    p.classList.remove('disappear')
                    // p.removeAttribute('closing')
                })
                // console.log('true')
            }

            if (webDevNav.classList.contains("proj-active")) {
                // make the class with portfolio > python disapear; 
                pythonProjects.forEach(p => {
                    p.classList.add('disappear');
                    p.classList.remove('appear');
                    // p.addEventListener('animationend', () => {
                    //     p.setAttribute('closing', "");
                    // }, {once: true});
                });
                webDevProjects.forEach(p => {
                    p.classList.add('appear');
                    p.classList.remove('disappear');
                    // p.removeAttribute('closing');
                });
                // console.log('true')
            }

            
            if (pythonNav.classList.contains("proj-active")) {
                // vice versa with portfolio > web for ul li:nth-child(3)
                webDevProjects.forEach(p => {
                    p.classList.add('disappear');
                    p.classList.remove('appear');
                    // p.addEventListener('animationend', () => {
                    //     p.setAttribute('closing', "");
                    // }, {once: true});
                })
                pythonProjects.forEach(p => {
                    p.classList.add('appear');
                    p.classList.remove('disappear');
                    // p.removeAttribute('closing');
                })
                // console.log('true')
            }
            
        });
    });
        
}

export default projectNavItems;
