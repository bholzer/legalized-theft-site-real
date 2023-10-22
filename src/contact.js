const form = document.getElementById("contact-form");
form.addEventListener("submit", submitForm);

// Handles non-OK responses from the server
function handleError(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return response;
}

// Handles happy response from server
function handleSuccess(response) {
  console.log(response)
  return response;
}

function submitForm(event) {
  event.preventDefault(); // Disable default submission behavior

  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  const apiUrl = "https://tq078rvj1h.execute-api.us-east-1.amazonaws.com"

  fetch(`${apiUrl}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formProps)
  }).then(handleError)
    .then(handleSuccess)
    .catch((error) => {
      console.log(error)
    })
  console.log(formProps)
}
