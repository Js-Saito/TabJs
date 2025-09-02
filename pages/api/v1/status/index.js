function status(request, response) {
  response.status(200).json({ texto: "Hello World" });
}

export default status;
