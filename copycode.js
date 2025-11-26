    document.querySelectorAll('pre > code').forEach((codeblock) => {
        const container = codeblock.parentNode.parentNode;
		const hasSource = codeblock.parentNode.dataset.name != undefined;

        const copybutton = document.createElement('button');
        copybutton.classList.add('copy-code');

		if(!hasSource) {
			copybutton.innerText = 'Copy';
			function copyingDone() {
				copybutton.innerText = 'Done';
				setTimeout(() => {
					copybutton.innerText = 'Copy';
				}, 2000);
			}
		} else {
			function copyingDone() {
				copybutton.innerText = 'Done';
				setTimeout(() => {
					copybutton.innerText = '';
				}, 2000);
			}
		}

        copybutton.addEventListener('click', (cb) => {
            if ('clipboard' in navigator) {
                var content = codeblock.textContent;
                if(codeblock.firstChild.tagName == 'TABLE') {
                    content = Array(...codeblock.firstChild.getElementsByTagName('span')).map((span) => { return span.textContent; }).join('');
                }
                navigator.clipboard.writeText(content);
                copyingDone();
                return;
            }

            const range = document.createRange();
            range.selectNodeContents(codeblock);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            try {
                document.execCommand('copy');
                copyingDone();
            } catch (e) { };
            selection.removeRange(range);
        });

		const wrapper = document.createElement('div');
		wrapper.classList.add("buttons-outer");
		if(codeblock.parentNode.dataset.name != undefined) {
			const openbutton = document.createElement('a');
			openbutton.classList.add('open-code');
			openbutton.href = codeblock.parentNode.dataset.name;
			openbutton.target = "_blank";
			wrapper.prepend(openbutton);
		}
		wrapper.prepend(copybutton);

        if (container.classList.contains("highlight")) {
            container.appendChild(wrapper);
        } else if (container.parentNode.firstChild == container) {
            // td containing LineNos
        } else if (codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName == "TABLE") {
            // table containing LineNos and code
            codeblock.parentNode.parentNode.parentNode.parentNode.parentNode.appendChild(wrapper);
        } else {
            // code blocks not having highlight as parent class
            codeblock.parentNode.prepend(wrapper);
        }


    });

//fetch_all_repos(["codeberg:blog-theme", "github:blog"])

async function fetch_all_repos(appendTo, repos) {
    var res = []
    for(const r in repos) {
	var [key,repo] = repos[r].split(":");

	if(key == "codeberg") {
	    const response = await fetch(`https://codeberg.org/api/v1/repos/losch/${repo}/commits`);
	    const commits = await response.json();

	    for(const commit of commits) {
		if(commit.commit.message === undefined || commit.commit.message == "")
		    continue;

		res.push({
		    date: new Date(commit.created),
		    message: commit.commit.message,
		    sha: commit.sha,
		    url: commit.html_url,
		    platform: "Codeberg"
		})
	    }
	}
	if(key == "github") {
	    const response = await fetch(`https://api.github.com/repos/bytesnake/${repo}/commits`);
	    const commits = await response.json();

	    for(const commit of commits) {
		res.push({
		    date: new Date(commit.commit.author.date),
		    message: commit.commit.message,
		    sha: commit.sha,
		    url: commit.html_url,
		    platform: "GitHub"
		})
	    }
	}
    }

    res.sort((a, b) => b.date - a.date);
    // Generate table rows
    const rows = res.slice(0,10).map(commit => {
        const dateStr = commit.date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        return `
        <tr>
            <td class="date">${dateStr}</td>
            <td>${commit.message.split('\n')[0]}</td>
            <td class="link"><a href="${commit.url}">${commit.sha.substring(0, 7)}</a></td>
        </tr>
        `;
    }).join('');

    var table = document.createElement("table");
	table.classList.add("changelog");
    table.innerHTML = rows;

	document.querySelector(".activities")
		.appendChild(table);
}
