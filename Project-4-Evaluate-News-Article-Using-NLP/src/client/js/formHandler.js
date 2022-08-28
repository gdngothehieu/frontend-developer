const handleSubmit = async (e) => {
  e.preventDefault();
  const inputUrl = document.querySelectorAll("input[name=test-url]");
  if (Client.urlValidator(JSON.parse(JSON.stringify(inputUrl[0].value)))) {
    const data = await fetch("http://localhost:3000/article", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: inputUrl[0].value }),
    });
    const responseData = await data.json();
    document.querySelector("section.url-results #polarity").innerHTML =
      responseData.polarity;
    document.querySelector("section.url-results #subjectivity").innerHTML =
      responseData.subjectivity;
    document.querySelector(
      "section.url-results #polarity_confidence"
    ).innerHTML = responseData.polarity_confidence;
    document.querySelector(
      "section.url-results #subjectivity_confidence"
    ).innerHTML = responseData.subjectivity_confidence;
    document.querySelector("section.url-results #excerpt").innerHTML =
      responseData.text;
  }
};

export { handleSubmit };
