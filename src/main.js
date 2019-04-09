import './scss/main.scss';
import { toggleClassIf, toggleClassOfElements } from './helpers';
import projectData from './data/projects';

const navbar = document.getElementById('navbar');
const technologyList = document.querySelectorAll('[data-technology]');
const technologySublist = document.querySelectorAll('[data-technology-list]');
const projects = document.querySelectorAll('[data-project]');
const selectedProjectTitle = document.getElementById('selected-project-title');
const selectedProjectSummary = document.getElementById('selected-project-summary');

function selectTechnology(e) {
  const { technology } = e.target.dataset;

  if (!technology) {
    return;
  }

  const className = 'active';

  toggleClassOfElements(
    technologyList,
    ({ dataset }) => dataset.technology === technology,
    className
  );

  toggleClassOfElements(
    technologySublist,
    ({ dataset }) => dataset.technologyList === technology,
    className
  );
}

function onScroll() {
  const scrolledToTop = document.documentElement.scrollTop === 0;
  const className = 'nav--active';
  toggleClassIf(navbar, scrolledToTop, className);
}

function selectProject({ target }) {
  const { project } = target.dataset;
  const { content } = projectData[project];

  toggleClassOfElements(
    projects,
    ({ dataset }) => dataset.project === project,
    'active'
  );

  selectedProjectTitle.textContent = project;
  selectedProjectSummary.textContent = content;
}

technologyList.forEach(technology => technology.addEventListener('click', selectTechnology));
projects.forEach(project => project.addEventListener('click', selectProject));

window.addEventListener('scroll', onScroll);
window.addEventListener('DOMContentLoaded', () => {
  const { project } = projects[0].dataset;
  const { content } = projectData[project];
  selectedProjectTitle.textContent = project;
  selectedProjectSummary.textContent = content;
  onScroll();
});
