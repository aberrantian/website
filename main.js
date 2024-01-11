const HEADER = document.createElement('div');
HEADER.id = "header"
HEADER.innerText = "aberrantian";

const CONTENT = document.createElement('div');
CONTENT.id = "content";

function createLinkBtn (name, url) {
	const link = document.createElement('a');
	link.innerText = name;
	link.href = url;
	link.target = "_blank";
	link.rel = "noopener";
	link.referrerPolicy = "no-referrer";
	link.classList.add("link");

	return link;
}

const PERSONAL_PROJECTS = document.createElement('p');
PERSONAL_PROJECTS.innerText = "Personal Projects";
PERSONAL_PROJECTS.classList.add("title");
const MMT = createLinkBtn("Mental Math Trainer", "https://aberrantian.github.io/mmt/");

const THE_ODIN_PROJECT = document.createElement('p');
THE_ODIN_PROJECT.innerText = "The Odin Project";
THE_ODIN_PROJECT.classList.add("title");

const RESTAURANT_PAGE = createLinkBtn("Restaurant Page", "https://aberrantian.github.io/odin-restaurant-page/");
const LIBRARY_PAGE = createLinkBtn("Library", "https://aberrantian.github.io/odin-library-project/");
const TIC_TAC_TOE = createLinkBtn("Tic Tac Toe", "https://aberrantian.github.io/odin-tic-tac-toe/");
const ADMIN_DASHBOARD = createLinkBtn("Admin Dashboard", "https://aberrantian.github.io/odin-admin-dashboard/");
const SIGN_UP_FORM = createLinkBtn("Sign-Up Form", "https://aberrantian.github.io/odin-sign-up-form/");
const CALCULATOR = createLinkBtn("Calculator", "https://aberrantian.github.io/odin-calculator/");
const ETCH_A_SKETCH = createLinkBtn("Etch-a-Sketch", "https://aberrantian.github.io/odin-etch-a-sketch/");
const LANDING_PAGE = createLinkBtn("Landing Page", "https://aberrantian.github.io/odin-landing-page/");
const ROSHAMBO = createLinkBtn("Roshambo", "https://aberrantian.github.io/odin-roshambo/");
const RECIPES = createLinkBtn("Recipes", "https://aberrantian.github.io/odin-recipes/");


CONTENT.append(
	PERSONAL_PROJECTS,
	MMT,
	THE_ODIN_PROJECT,
	RESTAURANT_PAGE,
	LIBRARY_PAGE,
	TIC_TAC_TOE,
	ADMIN_DASHBOARD,
	SIGN_UP_FORM,
	CALCULATOR,
	ETCH_A_SKETCH,
	LANDING_PAGE,
	ROSHAMBO,
	RECIPES
);


const FOOTER = document.createElement('div');
FOOTER.id = "footer";

const GITHUB = createLinkBtn("GitHub", "https://github.com/aberrantian");
const MASTODON = createLinkBtn("Mastodon", "https://mastodon.social/@aberrantian");
const YOUTUBE = createLinkBtn("YouTube", "https://www.youtube.com/channel/UCHveBZlTt_NCrAzC9i00Q5A");

FOOTER.append(GITHUB, MASTODON, YOUTUBE);

document.body.append(HEADER, CONTENT, FOOTER);
