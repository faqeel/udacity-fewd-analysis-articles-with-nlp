function handleSubmit(event) {
	event.preventDefault();

	Client.resetForm();

	const url = document.getElementById('url');

	if (!Client.isUrl(url.value)) {
		Client.showAlert(document.getElementById('form'), 'alert__error', 'Please enter valid URL 👀.');
		url.classList.add('invalid');
		return;
	}

	// Show loader
	const submitButton = document.getElementById('submit-btn');
	const span = document.createElement('span');
	span.className = 'loading';
	submitButton.innerHTML = '';
	submitButton.appendChild(span);

	// Send a request to the server to start the analysis
	fetch('http://localhost:8081/analysis', {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ url: url.value }),
	})
		.then((res) => res.json())
		.then((res) => {
			// Check the status of response
			if (res.status.code !== '0') {
				throw new Error();
			}
			// Updadte UI
			document.getElementById('agreement').innerHTML = res.agreement;
			document.getElementById('subjectivity').innerHTML = res.subjectivity;
			document.getElementById('confidence').innerHTML = res.confidence;
			submitButton.innerHTML = 'Analysis';
		})
		.catch(() => {
			Client.showAlert(
				document.getElementById('form'),
				'alert__error',
				'Uh oh. Something wierd happened. Keep calm and try again 🏃‍♂️.'
			);
			submitButton.innerHTML = 'Analysis';
		});
}

function resetForm() {
	document.querySelectorAll('#form > .alert').forEach((alert) => alert.remove());
	document.getElementById('url').classList.remove('invalid');
}

function showAlert(elm, stauts, msg) {
	const div = document.createElement('div');
	div.className = 'alert ' + stauts;
	div.innerHTML = msg;
	elm.insertBefore(div, elm.childNodes[0]);
}

export { handleSubmit, resetForm, showAlert };
