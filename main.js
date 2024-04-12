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

const COMING_SOON = document.createElement("p");
COMING_SOON.innerText = "More Coming Soon";
COMING_SOON.id = "coming-soon";

CONTENT.append(
	PERSONAL_PROJECTS,
	MMT,
	COMING_SOON
);

const FOOTER = document.createElement('div');
FOOTER.id = "footer";

const GITHUB = createLinkBtn("GitHub", "https://github.com/aberrantian");

FOOTER.append(GITHUB);

document.body.append(HEADER, CONTENT, FOOTER);
