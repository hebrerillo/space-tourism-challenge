'use strict';

const tabContainer = document.querySelector('[data-tabContainer]');
const targetsContainers = document.querySelectorAll('[data-targets-container]');
const allTargets = document.querySelectorAll('.target-tab');

allTargets.forEach(target => 
{
    target.addEventListener('transitionend', function()
    {
        if (this.classList.contains('hiding-target-tab'))
        {
            this.classList.add('hidden-target-tab');
            const nextTarget = this.parentNode.querySelector('[data-source-target="' + this.dataset.targetRole + '"]');
            nextTarget.style.transition = 'none';
            nextTarget.classList.remove('hidden-target-tab');
            nextTarget.style.transition = '';
            nextTarget.offsetHeight;
            nextTarget.classList.remove('hiding-target-tab');
        }
    });
});

const handleClickedTab = function(event){
    const clickedTab = event.target.closest('[data-tab]');
    if (!clickedTab)
    {
        return;
    }

    tabContainer.querySelector('.selected-tab').classList.remove('selected-tab');
    clickedTab.classList.add('selected-tab');

    showTarget(clickedTab.dataset.tab);
    
};

const showTarget = function(targetElement) {
    targetsContainers.forEach(targetContainer => {
       targetContainer.querySelectorAll('[data-source-target]').forEach(source => {
           if(source.dataset.sourceTarget === targetElement)
           {
//               source.dataset.targetRole = 'next';
//               source.style.transition = 'none';
//               source.classList.remove('hidden-target-tab');
//               source.style.transition = '';
//               source.offsetHeight;
//               source.classList.remove('hiding-target-tab');
           }
           else if (!source.classList.contains('hiding-target-tab'))
           {
               source.dataset.targetRole = targetElement;
               source.classList.add('hiding-target-tab');
           }
       }); 
    });
};

if (tabContainer)
{
    tabContainer.addEventListener('click', handleClickedTab);
}
