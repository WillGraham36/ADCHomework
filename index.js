const skillsList = document.querySelector('.skills-list');

const skills = {
    'Python': 30,
    'Javascript': 65,
    'HTML / CSS': 40,
    'Git': 20,
    'Node.js': 21,
    'React': 31,
    'Java': 60,
    'C': 20,
};
// sort skills
var sortedSkills = Object.keys(skills).sort((a, b) => skills[b] - skills[a]);

// create list of skills
sortedSkills.forEach(skill => {
    // intermediate, beginner, etc.
    const skillLevel = getSkillLevel(skills[skill]); 
    const skillLevelSpan = document.createElement('span');
    skillLevelSpan.classList.add('skill-level');
    skillLevelSpan.innerHTML = skillLevel;

    // Adding the bar to the skill level
    const skillBar = document.createElement('div');
    skillBar.className = 'skill-bar';
    // skillBar.style.width = `${skills[skill]}%`;
    skillBar.style.width = '0%';

    // Bar behind the skill level bar
    const levelbar = document.createElement('div');
    levelbar.className = 'level-bar';


    // Outer div for skill
    const skillItem = document.createElement('div');
    skillItem.classList.add('skill-item');

    // Title of skill (name of language)
    const skillTitle = skillItem.innerHTML = `<h3>${skill}</h3>`;
    skillTitle.textContent = skill;

    skillsList.appendChild(skillItem);
    skillItem.appendChild(skillLevelSpan);
    skillItem.appendChild(levelbar);
    levelbar.appendChild(skillBar);
});
function getSkillLevel(skill) {
    if (skill >= 80) {
        return 'Expert';
    } else if (skill >= 70) {
        return 'Advanced';
    } else if (skill >= 40) {
        return 'Intermediate';
    } else if (skill >= 20) {
        return 'Beginner';
    } else {
        return 'Novice';
    }
}

function animateSkillbars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    let currentWidth = [];
    for (let i = 0; i < skillBars.length; i++) {
        currentWidth.push(0);
    }

    for(let frame = 1; frame <= 100; frame++) {
        let i = 0;
        setTimeout(function() {
            skillBars.forEach(skillBar => {
                let step = (skills[sortedSkills[i]] / 100);
                skillBar.style.width = `${currentWidth[i] + step}%`;
                currentWidth[i] += step;
                i++;
            });
        }, 5 * frame); //in ms 
    }

}
animateSkillbars();